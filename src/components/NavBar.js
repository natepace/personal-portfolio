import { Link } from 'react-router-dom';
import styled from 'styled-components';
import mainmepic from '../images/placeholder1.jpg';

const NavBar = () => {
    return (
        <StyledNav>
            <div className="mepic">
                <Link to='/'>
                    <img src={mainmepic} alt="motorcycle" />
                </Link>

            </div>
            <div className="navs">
                <Link to='/' className="link link--animation-from-right">
                    <p>home</p>

                </Link>
                <Link to='/about'>
                    <p>about</p>
                </Link>
                <Link to='/resume'>
                    <p>resume</p>
                </Link>
                <Link to='/projects'>
                    <p>projects</p>
                </Link>
                <Link to='/contact' className="btn btn--animation-from-right" >

                    <p>contact</p>

                </Link>

            </div>


        </StyledNav>
    )
}

export default NavBar
const StyledNav = styled.header`
border: 1px solid #00545d;
  padding: 20px;
//   background: #233445;
// background: linear-gradient(#000729,#00545d);
background: linear-gradient(#000729,#002c30);
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.15);
  flex-direction:column;
display: flex;
// justify-content:space-between;
opacity:1;
transition: .3s;
:hover{
    opacity:1;
  }
.navs a{
   border-radius:2px;
   
    // text-decoration:none;
    // color:#fafbfc;
    // border:1px solid blue;
    // transition: .5s;
    display: block;
  margin: auto;
  margin-bottom:2px;
//   padding: 1rem 1.25rem;
//   font-family: sans-serif;
//   font-size: 1.5rem;
  text-decoration: none;
  color: white;
  position: relative;
  transition: all .2s cubic-bezier(.2, 0, 0, 1);
  z-index: 1;
  width:210px;
  &:after {
    content: '';
    display: block;
    height: 2px;
    position: absolute;
    bottom: 0;
    // right: 1.25rem;
    // left: 1.25rem;
    // background: rgba(0, 156, 229, 0.5);
    background: linear-gradient(90deg, rgba(0,7,41,.2) 35%, rgba(0,84,93,0.2) 100%);
    
    transition: all .2s cubic-bezier(.2, 0, 0, 1);
    transform-origin: bottom center;
    z-index: -1;
  }
  &:hover {
    // color: #2D2D2D;
    color: #fafbfc;
    
    &:after {
      right: 0;
      left: 0;
      height: 100%;
    }
  }
  
    :focus{
        // background-color:#00545d;
        background: linear-gradient(90deg, rgba(0,7,41,.6) 35%, rgba(0,84,93,0.6) 100%);
        color:white;
        
    }
}
.navs p{
    text-align:center;
}



img {
    width: 200px;
    border-radius: 50%;
    border: 5px solid rgb(37, 41, 64);
    cursor:pointer;
}

.mepic{
   
}
.navs{
    display:flex;
    
    flex-direction:column;
    
}





`;
