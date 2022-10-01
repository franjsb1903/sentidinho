import styled from 'styled-components'
import './styles.css'

const Container = styled.header`
  color: #ffffff;
`

const Nav = styled.nav`
  margin: 0 auto;
  width: 90%;
  max-width: 1200px;
  overflow: hidden;

  padding: 40px 0;
  display: grid;
  justify-content: space-between;
  align-items: center;
  grid-template-columns: repeat(2, max-content);
`

const Logo = styled.h2`
  font-size: 2.5rem;
  z-index: 1;
  font-family: 'Dancing';
  margin-left: 3px;
`

const NavIconContainer = styled.a`
  cursor: pointer;
  grid-column: -2/-1;
  grid-row: 1/2;
  transition: 0.4s transform;
`

const NavIcon = styled.img`
  width: 40px;
`

const Item = styled.li`
  list-style: none;
`

const Link = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  letter-spacing: 2px;
`

const Header = () => {
  return (
    <Container>
      <Nav className="nav" id="nav">
        <Logo>Sentidiño</Logo>

        <ul className="nav__links">
          <Item>
            <Link href="#" className="nav__link">
              Todas
            </Link>
          </Item>
          <Item>
            <Link href="#" className="nav__link">
              No importantes
            </Link>
          </Item>
          <Item>
            <Link href="#" className="nav__link">
              Importantes
            </Link>
          </Item>
          <Item>
            <Link href="#" className="nav__link">
              Borradas
            </Link>
          </Item>
        </ul>

        <NavIconContainer href="#nav" className="nav__hamburguer">
          <NavIcon src="./assets/menu.svg" />
        </NavIconContainer>
        <NavIconContainer href="#" className="nav__close">
          <NavIcon src="./assets/close.svg" />
        </NavIconContainer>
      </Nav>
    </Container>
  )
}

export default Header
