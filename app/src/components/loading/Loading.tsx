import styled from 'styled-components'
import './styles.css'

type SizeT = 'large' | 'medium' | 'small'

interface ILoading {
  size: SizeT
  color: string
}

const getSizeBorder = (size: SizeT) => {
  switch (size) {
    case 'large':
      return '16px'
    case 'medium':
      return '12px'
    case 'small':
      return '5px'
  }
}

const getSize = (size: SizeT) => {
  switch (size) {
    case 'large':
      return '120px'
    case 'medium':
      return '80px'
    case 'small':
      return '20px'
  }
}

const Loading = styled.div`
  border: ${({ size, color }: ILoading) =>
    `${getSizeBorder(size)} solid ${color}`};
  border-top: ${({ size }: ILoading) =>
    `${getSizeBorder(size)} solid transparent`};
  border-radius: 50%;
  width: ${({ size }: ILoading) => getSize(size)};
  height: ${({ size }: ILoading) => getSize(size)};
`

const Progress = ({ size, color }: ILoading) => {
  return (
    <>
      <Loading className="loader" color={color} size={size} />
    </>
  )
}

export default Progress
