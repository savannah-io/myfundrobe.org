import { supabase } from './supabase';

interface VerificationResponse {
  success: boolean;
  message: string;
  session?: any;
}

export async function signUpWithVerification(email: string, password: string, userData: any): Promise<VerificationResponse> {
  try {
    // Sign up the user
    const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: userData
      }
    });

    if (signUpError) throw signUpError;

    // Generate verification code
    const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
    
    // Store verification code
    const { error: codeError } = await supabase
      .from('verification_codes')
      .insert([
        {
          user_id: signUpData.user?.id,
          code: verificationCode,
          expires_at: new Date(Date.now() + 15 * 60 * 1000).toISOString() // 15 minutes expiry
        }
      ]);

    if (codeError) throw codeError;

    // Send verification email with code
    const { error: emailError } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/verify`
    });

    if (emailError) throw emailError;

    return {
      success: true,
      message: 'Please check your email for the verification code.',
      session: signUpData.session
    };
  } catch (error) {
    console.error('Error during signup:', error);
    return {
      success: false,
      message: error.message || 'An error occurred during signup.'
    };
  }
}

export async function verifyCode(email: string, code: string): Promise<VerificationResponse> {
  try {
    // Get user ID from email
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return {
        success: false,
        message: 'User not found.'
      };
    }

    // Verify the code
    const { data: codes, error: codeError } = await supabase
      .from('verification_codes')
      .select('*')
      .eq('user_id', user.id)
      .eq('code', code)
      .gt('expires_at', new Date().toISOString())
      .eq('used', false)
      .single();

    if (codeError || !codes) {
      return {
        success: false,
        message: 'Invalid or expired verification code.'
      };
    }

    // Mark code as used
    await supabase
      .from('verification_codes')
      .update({ used: true })
      .eq('code', code);

    // Update user's email_confirmed status
    const { error: updateError } = await supabase.auth.updateUser({
      data: { email_confirmed: true }
    });

    if (updateError) throw updateError;

    return {
      success: true,
      message: 'Email verified successfully.'
    };
  } catch (error) {
    console.error('Error during verification:', error);
    return {
      success: false,
      message: error.message || 'An error occurred during verification.'
    };
  }
}

export async function resendVerificationCode(email: string): Promise<VerificationResponse> {
  try {
    // Get user ID from email
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return {
        success: false,
        message: 'User not found.'
      };
    }

    // Generate new verification code
    const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
    
    // Delete any existing unused codes
    await supabase
      .from('verification_codes')
      .delete()
      .eq('user_id', user.id)
      .eq('used', false);

    // Store new verification code
    const { error: codeError } = await supabase
      .from('verification_codes')
      .insert([
        {
          user_id: user.id,
          code: verificationCode,
          expires_at: new Date(Date.now() + 15 * 60 * 1000).toISOString()
        }
      ]);

    if (codeError) throw codeError;

    // Send new verification email
    const { error: emailError } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/verify`
    });

    if (emailError) throw emailError;

    return {
      success: true,
      message: 'New verification code sent.'
    };
  } catch (error) {
    console.error('Error resending code:', error);
    return {
      success: false,
      message: error.message || 'An error occurred while resending the code.'
    };
  }
}

export async function isEmailVerified(): Promise<boolean> {
  try {
    const { data: { user }, error } = await supabase.auth.getUser();
    
    if (error || !user) {
      return false;
    }

    return user.user_metadata?.email_confirmed === true;
  } catch (error) {
    console.error('Error checking email verification:', error);
    return false;
  }
}