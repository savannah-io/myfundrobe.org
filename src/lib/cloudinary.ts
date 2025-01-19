import { Cloudinary } from '@cloudinary/url-gen';

// Create a Cloudinary instance
export const cloudinary = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
  },
  url: {
    secure: true
  }
});

// Helper function to generate optimized image URLs
export const getImageUrl = (publicId: string) => {
  return cloudinary
    .image(publicId)
    .format('auto')
    .quality('auto')
    .delivery('q_auto,f_auto')
    .toURL();
};

// Helper for responsive images
export const getResponsiveUrl = (publicId: string, width: number) => {
  return cloudinary
    .image(publicId)
    .format('auto')
    .quality('auto')
    .delivery('q_auto,f_auto')
    .resize(`w_${width}`)
    .toURL();
};