import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary'
type ButtonSize = 'sm' | 'md' | 'lg' | 'splg'

type BaseProps = {
  variant?: ButtonVariant
  size?: ButtonSize
  children: ReactNode
  className?: string
}

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined
  }

type ButtonAsLink = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string
  }

type ButtonProps = ButtonAsButton | ButtonAsLink

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    ' border-[1.5px]  font-roboto-500 font-medium text-[17px] hover:opacity-80',
  secondary:
    'text-white font-roboto-500 border-[1.5px] border-white/90 hover:opacity-80',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-6 py-2 text-xs w-[125px]',
  md: 'px-8 py-3 text-sm w-[200px]',
  lg: 'px-10 py-3 text-base w-[270px]',
  splg: 'px-20 py-3 text-base w-[300px]',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-2xl tracking-wider transition-all duration-300 cursor-pointer'

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

  if ('href' in props && props.href) {
    return (
      <a
        className={classes}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      className={classes}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  )
}
