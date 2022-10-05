import styled from 'styled-components'

interface IRow {
  padding: string
}

interface IColumn {
  padding: string
  height: string
}

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  alignt-items: center;
  align-content: center;
  align-self: center;
  width: 100%;
  padding: ${({ padding }: IRow) => padding};
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: ${({ height }: IColumn) => height};
  padding: ${({ padding }: IColumn) => padding};
  gap: 20px;
`

export const Col6 = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: ${({ direction }: { direction?: string }) =>
    direction || 'row'};
`

export const Col12 = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: ${({ direction }: { direction?: string }) =>
    direction || 'row'};
`
