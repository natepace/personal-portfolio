import React from 'react';
import styled from 'styled-components';
import bubble1 from '../images/bluecircle.png';
import './bubbles.css';
const Home = (props) => {
    return (
        <StyledContainer>
            <h1>hi, i'm Nate Pace</h1>

            <div className="bubbles">
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
            </div>


        </StyledContainer>
    );
}

export default Home;

const StyledContainer = styled.div`
color: #fbfcfd;
width:100%;
overflow: hidden;
h1{
    font-size:80px;
}
`
const Bubbles = styled.div`
img{
    width:7px;
    animation: bubble 7s linear infinite;
}
div{
  width: 100%;
display:flex;
align-items:center;
justify-content:space-around;  
position:absolute;
bottom:0;


}




@keyframes bubble {
    0%{
        transform: translateY(0)
        opacity:0;
    }
    50%{
        
        opacity:1;
    }
    70%{
        
        opacity:1;
    }
    100%{
        transform: translateY(-80vh)
        opacity:0;
    }
}

`