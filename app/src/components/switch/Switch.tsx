import styled from 'styled-components'
import './styles.css'

const SwitchContainer = styled.div`
  position: relative;
  top: 50%;
  width: 74px;
  height: 36px;
  margin: -20px auto 0 auto;
  overflow: hidden;
  border-radius: 100px;
`

const Layer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 100px;
  width: 100%;
  background-color: #ebf7fc;
  transition: 0.3s ease all;
  z-index: 1;
`

const Checkbox = styled.input`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  opacity: 0;
  cursor: pointer;
  z-index: 3;
`

const Content = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
`

const Switch = () => {
  return (
    <SwitchContainer id="switch">
      <Checkbox type={'checkbox'} className="checkbox" />
      <Content className="content" />
      <Layer />
    </SwitchContainer>
  )
}

export default Switch
