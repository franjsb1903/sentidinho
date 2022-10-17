import styled from 'styled-components'
import sun from '../../../public/assets/sun.svg'
import Moon from './Moon'
import Sun from './Sun'

const Input = styled.input`
  width: 0;
  height: 0;
  visibility: hidden;

  &:checked + label {
    background: #242424;
  }

  &:checked + label:after {
    left: 65px;
    transform: translateX(-100%);
    background: linear-gradient(180deg, #777, #3a3a3a);
  }

  &:checked + label svg.sun {
    fill: #eee;
  }

  &:checked + label svg.moon {
    fill: #fff;
  }
`

const Label = styled.label`
  width: 70px;
  height: 30px;
  position: relative;
  display: block;
  background: #ebebeb;
  border-radius: 200px;
  box-shadow: inset 0px 5px 15px rgba(0, 0, 0, 0.4),
    inset 0px -5px 15px rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: 0.3s;

  &:after {
    content: '';
    width: 25px;
    height: 25px;
    position: absolute;
    top: 3px;
    left: 3px;
    background: linear-gradient(180deg, #ffcc89, #d8860b);
    border-radius: 25px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    transition: 0.3s;
  }

  &:active:after {
    width: 40px;
  }

  & svg {
    position: absolute;
    width: 20px;
    top: 5px;
    z-index: 100;
  }

  & svg.sun {
    left: 5px;
    fill: #202020;
    transition: 0.3s;
  }

  & svg.moon {
    left: 44px;
    fill: #7e7e7e;
    transition: 0.3s;
  }
`

const ToggleDarkMode = ({
  darkmode,
  setDarkmode,
}: {
  darkmode: boolean
  setDarkmode: (value: boolean) => void
}) => (
  <>
    <Input
      type="checkbox"
      checked={darkmode}
      onClick={() => setDarkmode(!darkmode)}
      id="darkmode-toggle"
    />
    <Label htmlFor="darkmode-toggle">
      <Sun />
      <Moon />
    </Label>
  </>
)

export default ToggleDarkMode
