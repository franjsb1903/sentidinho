import styled from 'styled-components'

interface ButtonProps {
  bgcolor: string
  width?: string
  height?: string
  bradius?: string
  opacity?: number
}

export const IconButton = styled.button`
  padding: 0.8rem;
  border: none;
  background-color: transparent;
  cursor: pointer;
`

export const Button = styled.button`
  padding: 0.8rem;
  border: none;
  border-radius: ${({ bradius }: ButtonProps) => bradius || 0};
  background-color: ${({ bgcolor }: ButtonProps) => bgcolor};
  color: white;
  cursor: pointer;
  width: ${({ width }: ButtonProps) => width};
  height: ${({ height }: ButtonProps) => height};
  opacity: ${({ opacity }: ButtonProps) => opacity || 0.8};
  transition: 0.3s;

  &:hover {
    opacity: 1;
  }
`
