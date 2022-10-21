import styled from 'styled-components'
import { BsFillMoonFill, BsSunFill } from 'react-icons/bs'
import { useSelector, useDispatch } from '../../redux/store'
import { changeMode } from '../../redux/slices/darkmode'

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

  & .icon {
    position: absolute;
    width: 20px;
    top: 7px;
    z-index: 100;
    left: 44px;
    transition: 0.3s;
  }

  & .moon {
    left: 5px;
    transition: 0.3s;
  }

  & .sun {
    left: 44px;
    transition: 0.3s;
  }
`

const ToggleDarkMode = ({ closeMenu }: { closeMenu: () => void }) => {
  const darkmode = useSelector(state => state.darkmode.darkmode)
  const dispatch = useDispatch()
  return (
    <>
      <Input
        type="checkbox"
        checked={darkmode}
        onChange={() => {
          closeMenu()
          dispatch(changeMode())
        }}
        id="darkmode-toggle"
      />
      <Label htmlFor="darkmode-toggle">
        {darkmode ? (
          <BsFillMoonFill color="yellow" className="icon moon" />
        ) : (
          <BsSunFill color="black" className="icon sun" />
        )}
      </Label>
    </>
  )
}

export default ToggleDarkMode
