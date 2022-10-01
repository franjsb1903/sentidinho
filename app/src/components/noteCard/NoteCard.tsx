import styled from 'styled-components'
import Switch from '../switch/Switch'
import { INote } from '../../types/INote'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.body};
  height: 300px;
  width: 400px;
  border-radius: 10%;
  overflow: hidden;
  padding: 2rem;
`

const Divider = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.textTrans};
`

const Title = styled.h2`
  color: ${({ theme }) => theme.text};
  padding: 0.3rem;
`

const ContentContainer = styled.div`
  padding: 1rem;
  max-height: 200px;
  overflow: auto;
`

const Content = styled.p`
  color: ${({ theme }) => theme.text};
`

const NoteCard = ({ note }: { note: INote }) => {
  return (
    <Container>
      <Title>{note.title}</Title>
      <Divider />
      <ContentContainer>
        <Content>{note.content}</Content>
      </ContentContainer>
      <Switch />
    </Container>
  )
}

export default NoteCard
