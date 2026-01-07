import Image, { ImageProps } from 'next/image';

interface OptimizedImageProps extends Omit<ImageProps, 'src'> {
  src: string;
  alt: string;
}

/**
 * Optimized Image Component
 * Provides consistent image optimization across the site
 * - Automatic lazy loading
 * - Responsive image sizes
 * - Proper aspect ratios
 * - WebP format support
 */
export function OptimizedImage({
  src,
  alt,
  className = '',
  sizes,
  priority = false,
  ...props
}: OptimizedImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      className={`w-full h-auto ${className}`}
      loading={priority ? 'eager' : 'lazy'}
      quality={85}
      sizes={
        sizes || '(max-width: 640px) 100vw, (max-width: 1024px) 75vw, (max-width: 1280px) 66vw, 50vw'
      }
      {...props}
    />
  );
}

/**
 * Hero Image Component
 * Optimized for hero sections
 */
export function HeroImage({
  src,
  alt,
  className = '',
  ...props
}: Omit<OptimizedImageProps, 'sizes'>) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      className={`rounded-2xl ${className}`}
      sizes="(max-width: 768px) 100vw, 50vw"
      priority
      {...props}
    />
  );
}

/**
 * Card Image Component
 * Optimized for card-based images
 */
export function CardImage({
  src,
  alt,
  className = '',
  ...props
}: Omit<OptimizedImageProps, 'sizes'>) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      className={`rounded-lg ${className}`}
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      {...props}
    />
  );
}

/**
 * Logo Image Component
 * Optimized for logo display
 */
export function LogoImage({
  src,
  alt,
  width = 40,
  height = 40,
  className = '',
  ...props
}: Omit<OptimizedImageProps, 'sizes'>) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority
      {...props}
    />
  );
}
