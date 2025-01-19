import { env } from '../config/env';

// Define our theme
const defaultTheme = {
  colors: {
    primary: '#5de0e6',
    secondary: '#4bc5cb',
    accent: '#fcd34d',
  },
  fonts: {
    sans: 'Poppins, sans-serif',
    display: 'Varela Round, serif',
  },
};

// Function to fetch styles from main Fundrobe site
export async function fetchMainSiteStyles() {
  return defaultTheme;
}

// Function to apply shared styles
export function applySharedStyles(styles: typeof defaultTheme) {
  // Apply styles to CSS variables
  const root = document.documentElement;
  Object.entries(styles.colors).forEach(([key, value]) => {
    root.style.setProperty(`--color-${key}`, value);
  });
  
  // Apply fonts
  const style = document.createElement('style');
  style.textContent = `
    :root {
      --font-sans: ${styles.fonts.sans};
      --font-display: ${styles.fonts.display};
    }
    
    body {
      font-family: var(--font-sans);
    }
    
    h1, h2, h3, h4, h5, h6 {
      font-family: var(--font-display);
    }
  `;
  document.head.appendChild(style);
}