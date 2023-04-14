import Image from 'next/image';

interface LogoProps {
  className?: string;
  size?: number;
  dark?: boolean
}

export const Logo = ({ className, size, dark }: LogoProps) => (
  dark ? (
    <Image
      priority
      className={className}
      src="/images/logo-dark.svg"
      height={size}
      width={size}
      alt="Tisain logo"
    />
  ) : (
    <Image
      priority
      className={className}
      src="/images/logo-light.svg"
      height={size}
      width={size}
      alt="Tisain logo"
    />
  )
);