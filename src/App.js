import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
function App() {
  return (
    <StyledContainer>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/projects' component={Projects} />
          <Route path='/about' component={About} />
        </Switch>
      </Router>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
min-height: 100vh;
  min-width: 100vw;
  background-color:#30475e
  
  
`
export default App;
