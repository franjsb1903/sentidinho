import styled from 'styled-components'

interface IDialog {
  width: string
  height: string
}

export const Dialog = styled.dialog`
  position: absolute;
  margin: auto;
  width: ${({ width }: IDialog) => width};
  height: ${({ height }: IDialog) => height};
  border: none;
  border-radius: 10px;
  z-index: 1;
`

export const DialogTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const DialogContent = styled.div`
  padding: 2rem;
`

export const DialogActions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 1rem;
`
