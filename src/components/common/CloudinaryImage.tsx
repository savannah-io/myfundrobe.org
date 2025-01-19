import React from 'react';
import { AdvancedImage, lazyload, responsive, placeholder } from '@cloudinary/react';
import { cloudinary } from '../../lib/cloudinary';

interface CloudinaryImageProps {
  publicId: string;
  alt: string;
  className?: string;
  width?: number;
}

export function CloudinaryImage({ publicId, alt, className, width }: CloudinaryImageProps) {
  const cldImage = cloudinary.image(publicId);

  if (width) {
    cldImage.resize(`w_${width}`);
  }

  return (
    <AdvancedImage 
      cldImg={cldImage} 
      alt={alt}
      className={className}
      plugins={[
        lazyload(),
        responsive({ steps: [800, 1000, 1400] }),
        placeholder({ mode: 'blur' })
      ]}
    />
  );
}