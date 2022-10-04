import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import './styles.css'

const Container = styled.header`
  color: ${({ theme }) => theme.text};
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
  font-family: 'Dancing';
  margin-left: 3px;
  z-index: 2;
`

const NavIconContainer = styled.a`
  cursor: pointer;
  grid-column: -2/-1;
  grid-row: 1/2;
  transition: 0.4s transform;
  z-index: 1;
`

const NavIcon = styled.img`
  width: 40px;
`

const Item = styled.li`
  list-style: none;
`

const LinkHeader = styled(Link)`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-size: 1.2rem;
  letter-spacing: 2px;
`

const Header = () => {
  const location = useLocation()
  return (
    <Container>
      <Nav className="nav" id="nav">
        <Logo>Sentidiño</Logo>

        <ul className="nav__links">
          <Item>
            <LinkHeader
              to="/"
              className={`nav__link ${
                location.pathname === '/' ? 'active' : ''
              }`}
            >
              Todas
            </LinkHeader>
          </Item>
          <Item>
            <LinkHeader
              to="/no-important"
              className={`nav__link ${
                location.pathname === '/no-important' ? 'active' : ''
              }`}
            >
              No importantes
            </LinkHeader>
          </Item>
          <Item>
            <LinkHeader
              to="/important"
              className={`nav__link ${
                location.pathname === '/important' ? 'active' : ''
              }`}
            >
              Importantes
            </LinkHeader>
          </Item>
          <Item>
            <LinkHeader
              to="/deleted"
              className={`nav__link ${
                location.pathname === '/deleted' ? 'active' : ''
              }`}
            >
              Borradas
            </LinkHeader>
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
