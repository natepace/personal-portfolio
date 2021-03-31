import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = () => {
    return (
        <StyledNav>
            <Link to='/'>
                <p>home</p>
            </Link>
            <Link to='/projects'>
                <p>projects</p>
            </Link>
            <Link to='/about'>
                <p>about</p>
            </Link>

        </StyledNav>
    )
}

export default NavBar
const StyledNav = styled.header`
  padding: 20px;
  background: #233445;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.15);
display: flex;
justify-content:space-evenly;

a{
    text-decoration:none;
    color:white;
}



`;
