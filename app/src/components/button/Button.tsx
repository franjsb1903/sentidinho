import styled from 'styled-components'

const Button = styled.button`
  padding: 0.8rem;
  border-radius: 20px;
  background-color: ${({ bgcolor }: { bgcolor: string }) => bgcolor};
  color: white;
  cursor: pointer;
  width: 130px;
  opacity: 0.6;
  transition: 0.3s;

  &:hover {
    opacity: 1;
  }
`
export default Button
