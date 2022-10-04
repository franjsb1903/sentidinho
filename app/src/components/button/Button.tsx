import styled from 'styled-components'

interface ButtonProps {
  bgcolor: string
  width: string
  height: string
  bradius: string
}

const Button = styled.button`
  padding: 0.8rem;
  border: none;
  border-radius: ${({ bradius }: ButtonProps) => bradius};
  background-color: ${({ bgcolor }: ButtonProps) => bgcolor};
  color: white;
  cursor: pointer;
  width: ${({ width }: ButtonProps) => width};
  height: ${({ height }: ButtonProps) => height};
  opacity: 0.8;
  transition: 0.3s;

  &:hover {
    opacity: 1;
  }
`
export default Button
