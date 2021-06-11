import { motion } from 'framer-motion'
import { darken } from 'polished'
import styled, { css } from 'styled-components'

import theme from 'styles/theme'
import { ButtonVariant, ButtonSize } from './index'

interface StyledButtonProps {
  variant: ButtonVariant
  size: ButtonSize
}

export const StyledButton = styled(motion.button)<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  position: relative;
  white-space: nowrap;
  outline: transparent solid 2px;
  outline-offset: 2px;
  line-height: 1.2;
  border-radius: 6px;
  border: 1px solid ${theme.colors.primary};
  cursor: pointer;

  transition: 0.2s ease-in-out background;

  // Variants
  ${(props) =>
    props.variant === ButtonVariant.solid
      ? css`
          background: ${theme.colors.primary};
          color: ${theme.colors.white};

          &:hover {
            background: ${darken(0.05, theme.colors.primary)};
          }

          &:active {
            background: ${darken(0.1, theme.colors.primary)};
          }
        `
      : props.variant === ButtonVariant.outline
      ? css`
          background: ${theme.colors.white};
          color: ${theme.colors.primary};
          border: 1px solid currentcolor;

          &:hover {
            background: ${darken(0.05, theme.colors.white)};
          }

          &:active {
            background: ${darken(0.1, theme.colors.white)};
          }
        `
      : css`
          color: ${theme.colors.primary};
          background: transparent;

          &:hover {
            background: ${darken(0.05, theme.colors.primary)};
          }

          &:active {
            background: ${darken(0.1, theme.colors.primary)};
          }
        `}

  // Sizes 
  ${(props) =>
    props.size === ButtonSize.xs
      ? css`
          height: 24px;
          font-size: 12px;

          svg {
            transform: scale(0.6);
          }
        `
      : props.size === ButtonSize.sm
      ? css`
          height: 32px;
          font-size: 14px;

          svg {
            transform: scale(0.683);
          }
        `
      : props.size === ButtonSize.md
      ? css`
          height: 40px;
          font-size: 16px;

          svg {
            transform: scale(0.766);
          }
        `
      : css`
          height: 48px;
          font-size: 18px;

          svg {
            transform: scale(0.85);
          }
        `}
`

const ButtonIcon = styled.span`
  display: flex;
  align-items: center;
`

export const ButtonLeftIcon = styled(ButtonIcon)`
  margin-right: 4px;
`
export const ButtonRightIcon = styled(ButtonIcon)`
  margin-left: 4px;
`
