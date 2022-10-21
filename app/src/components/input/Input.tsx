import styled from 'styled-components'

export const TextInput = styled.input`
  padding: 0.5rem;
  border-radius: 0px;
  width: 100%;
  font-size: 1.2rem;
  border-top: none;
  border-right: none;
  border-bottom: 1px solid black;
  border-left: none;
  transition: 0.1s;
  font-family: monospace;
  color: #585959;

  &:focus {
    outline: none;
    border-bottom: 1.5px solid red;
  }
`

export const TextArea = styled.textarea`
  padding: 0.5rem;
  border-radius: 0px;
  width: 100%;
  font-size: 1.2rem;
  border-top: none;
  border-right: none;
  border-bottom: 1px solid black;
  border-left: none;
  transition: 0.1s;
  resize: none;
  color: #585959;

  &:focus {
    outline: none;
    border-bottom: 1.5px solid red;
  }
`

export const Label = styled.label`
  font-size: 1.2rem;
  color: black;
  width: 100%;
`
