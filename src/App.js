// import logo from './logo.svg';
// import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import background from './images/darkbluegreenbackground.jpg'
import menu from './images/menu.png';
import fb from './images/fb.png';
import ig from './images/ig.png';
import tw from './images/tw.png';
import info from './images/info.png';
import share from './images/share.png';
import bubble1 from './images/bluecircle.png';
import './components/bubbles.css';
import Resume from './components/Resume';
import Contact from './components/Contact';
function App() {
  return (
    <StyledContainer>
      {/* <div className="bubbles">
        <img src={bubble1} alt='bubble' className="bubble1"></img>
        <img src={bubble1} alt='bubble' className="bubble1"></img>
        <img src={bubble1} alt='bubble' className="bubble1"></img>
        <img src={bubble1} alt='bubble' className="bubble1"></img>
        <img src={bubble1} alt='bubble' className="bubble1"></img>
        <img src={bubble1} alt='bubble' className="bubble1"></img>
        <img src={bubble1} alt='bubble' className="bubble1"></img>
        <img src={bubble1} alt='bubble' className="bubble1"></img>
        <img src={bubble1} alt='bubble' className="bubble1"></img>
        <img src={bubble1} alt='bubble' className="bubble1"></img>
        <img src={bubble1} alt='bubble' className="bubble1"></img>
        <img src={bubble1} alt='bubble' className="bubble1"></img>
        <img src={bubble1} alt='bubble' className="bubble1"></img>
        <img src={bubble1} alt='bubble' className="bubble1"></img>
        <img src={bubble1} alt='bubble' className="bubble1"></img>
        <img src={bubble1} alt='bubble' className="bubble1"></img>
        <img src={bubble1} alt='bubble' className="bubble1"></img>
        <img src={bubble1} alt='bubble' className="bubble1"></img>
        <img src={bubble1} alt='bubble' className="bubble1"></img>
        <img src={bubble1} alt='bubble' className="bubble1"></img>
        <img src={bubble1} alt='bubble' className="bubble1"></img>
        <img src={bubble1} alt='bubble' className="bubble1"></img>
        <img src={bubble1} alt='bubble' className="bubble1"></img>
        <img src={bubble1} alt='bubble' className="bubble1"></img>
        <img src={bubble1} alt='bubble' className="bubble1"></img>
        <img src={bubble1} alt='bubble' className="bubble1"></img>
        <img src={bubble1} alt='bubble' className="bubble1"></img>
        <img src={bubble1} alt='bubble' className="bubble1"></img>
      </div> */}
      <Router>
        <NavBar />

        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/projects' component={Projects} />
          <Route path='/about' component={About} />
          <Route path='/resume' component={Resume} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </Router>
      <StyledSide>
        <img src={menu} alt='menu' className="menu"></img>
        <div className="socials">
          <img src={ig} alt='instagram' className="ig"></img>
          <img src={fb} alt='facebook' className="fb"></img>
          <img src={tw} alt='twitter' className="tw"></img>
        </div>
        <div className="usefuls">
          <img src={info} alt='info' className="info"></img>
          <img src={share} alt='share' className="share"></img>

        </div>
      </StyledSide>

    </StyledContainer>
  );
}

const StyledContainer = styled.div`
height: 100%;
  width: 100%;
  background-color:#121826;
  // background-image: url(${background})
  display:flex;
 margin:0;
  overflow: hidden;
  
`
const StyledSide = styled.div`
width: 35px;
height: 100vh;
background: linear-gradient(#00545d,#000729);
right:0;
top:0;
opacity:.9;
transition: .3s;
:hover{
  opacity:1;
}

.menu {
  display:block;
  width:25px;
  margin: 40px auto 0;
  cursor: pointer;
}
.socials img, .usefuls img{
  width: 25px;
  margin: 5px auto;
  cursor: pointer;
  
}
.socials{

}
.usefuls{
 
}
`

export default App;
