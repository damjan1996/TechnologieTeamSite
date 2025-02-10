import { useState } from 'react';

interface ImageLoaderProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ImageLoader({ src, alt, className = '' }: ImageLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}`}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
}