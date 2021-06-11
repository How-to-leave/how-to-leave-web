import { PropsWithChildren, ReactNode } from 'react'

import { StyledButton, ButtonLeftIcon, ButtonRightIcon } from './styles'

export enum ButtonVariant {
  solid = 'solid',
  outline = 'outline',
  ghost = 'ghost',
}

export enum ButtonSize {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
}

interface ButtonProps {
  onClick?: () => void
  variant?: ButtonVariant
  size?: ButtonSize
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  isLoading?: boolean
  loadingText?: string
}

function ButtonComponent({
  children,
  onClick,
  variant = ButtonVariant.solid,
  size = ButtonSize.md,
  leftIcon,
  rightIcon,
  isLoading,
  loadingText,
}: PropsWithChildren<ButtonProps>) {
  return (
    <StyledButton onClick={onClick} variant={variant} size={size}>
      <ButtonLeftIcon>{leftIcon}</ButtonLeftIcon>
      <span>{isLoading ? loadingText : children}</span>
      <ButtonRightIcon>{rightIcon}</ButtonRightIcon>
    </StyledButton>
  )
}

ButtonComponent.variant = ButtonVariant
ButtonComponent.size = ButtonSize

export const Button = ButtonComponent
