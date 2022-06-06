import styled from "styled-components";
// import bgimg1 from "./Background/Sun_background.png";
//import bg from "../images/bg.png"
import { Link } from "react-router-dom";
import bgimg4 from "../Background/colors.jpg";



export const OutermostContainer = styled.div`
  padding: 70px 0 30px 0;
  background-image: linear-gradient(
      90deg,
      rgba(199, 109, 78, 0.8) 0%,
      rgba(220, 236, 79, 0.7) 50%,
      rgba(199, 197, 78, 1) 100%
    ),
    url(${bgimg4});
  background-repeat: repeat, repeat;
  /* background-image: url(${bgimg4}); */
  background-size: cover;

  /* background-size: 350px , 100%; */
  margin: 0;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    padding-top: 100px;
  }
`;

export const ContentContainer = styled.div`
    margin-top: 15px;
    margin-bottom: 15px;
    padding-top: 30px;
    padding-bottom: 30px;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    width: auto;
    width: 80%;
    background: rgba(255,255,255,0.5);
    /* background: 'linear-gradient(rgb(255, 38, 142) 0%, rgb(255, 105, 79) 100%)'; */
    border-radius: 10px;
    
    @media screen and (max-width: 960px) {
        width: 95%;   
    }
`;

export const ContentText = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    width: auto;
    width: 90%;
    font-size: 22px;
    text-align: justify;
    color: black;
    line-height: 30px;

    @media screen and (max-width: 960px) {
        width: 90%;  
        font-size: 18px; 
        line-height: 25px;
    }
`;

export const ContentVideo = styled.video`
    width: 80%;
    height: auto;
    position: relative;
    object-fit: cover;
    z-index: 999;
    padding-top: 10px;
    padding-bottom: 10px;
    
    @media screen and (max-width: 960px) {
        width: 90%;   
    }
`;

export const ContentImage = styled.img`
    padding-top: 15px;
    padding-bottom: 15px;
    width: 45%;
    height: auto;
    @media screen and (max-width: 960px) {
        width: 45%;   
    }
`;

export const ContentTitle = styled.button`
    border-radius: 50px;
    background: #FF8008;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #FFC837, #FF8008);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #FFC837, #FF8008); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */  
    padding: 12px 20px;
    font-weight: bold;
    color: #fff;
    font-size: 24px;
    outline: none;
    border: none;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    @media screen and (max-width: 960px) {
        width: 70%;
        font-size: 20px;
}
`;

export const ContentTakeaway = styled.button`
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    width: 90%;
    background: 'linear-gradient(rgb(255, 38, 142) 0%, rgb(255, 105, 79) 100%)';
    border-radius: 10px;
    border: none;
    font-weight: bold;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;

    @media screen and (max-width: 960px) {
        width: 90%;   
    }
`;

export const ContentSlider = styled.div`
    padding-top: 15px;
    padding-bottom: 15px;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    width: 50%;
    @media screen and (max-width: 960px) {
        width: 70%;   
    }
`;

export const InstructionButton = styled.button`
    padding-top: 15px;
    padding-bottom: 15px;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    width: 90%;
    background: 'linear-gradient(rgb(255, 38, 142) 0%, rgb(255, 105, 79) 100%)';
    border-radius: 10px;
    border: none;
    font-weight: bold;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;

    @media screen and (max-width: 960px) {
        width: 90%;   
    }
`;

export const PopupOrSkip = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 960px) {
        width: 100%;
    }
`;

export const PopupButton = styled.button`
    background: black;
    border: none;
    padding: 0.9rem 1.1rem;
    color: white;
    border-radius: 1rem;
    box-shadow: 0px 13px 24px -7px black;
    transition: all 0.3s ease-in-out;
    margin: 2rem;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    cursor: pointer;

    &:hover {
      box-shadow: 0px 17px 16px -11px black;
      transform: translateY(-5px);
    }
`;

export const PopupSkip = styled.button`
    padding: 14px 16px;
    margin-left: 10px;
    border-radius: 10px;
    border: 2px solid black ;  
    background: transparent;
    color: black;
    font-size: 24px;
    cursor: pointer;
    font-size: 24px;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 960px) {
        font-size: 20px;
}
`;

export const PopupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Learning9 = styled.div`
    background-color: #1d4e89;
    font-family: Soleil, Arial, sans-serif;
    padding: 1em;
    border-radius: 5px;
    color: white;
    font-weight: 400;
    width: 50%;
    @media screen and (max-width: 960px) {
        width: 90%;   
    }
`;

export const Learning6 = styled.div`
    /* background: #f1e9ed; */
    padding: 1em;
    border-radius: 5px;
    border-style: solid;
    border-color: #601a35;
    font-weight: 400;
    color: black;
    width: 50%;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 960px) {
        width: 90%;   
    }
`;

export const Learning5 = styled.div`
    background:#98c4ec;
		padding: 5px;
		border-radius: 5px;
	  text-align: center;
    width: 25%;
    margin: 15px;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 960px) {
        width: 90%;   
    }
`;

export const Head4 = styled.h4`
    text-align: center;
    color: white;
    font-family: Soleil, Arial, sans-serif;
    font-size: 24px;
    padding-bottom: 10px;
`;

export const Head6 = styled.h4`
    text-align: center;
    color: black;
    font-family: Soleil, Arial, sans-serif;
    font-size: 24px;
    padding-bottom: 10px;
`;

export const Para = styled.p`
		font-size: 1.2em;
    font-family: Soleil, Arial, sans-serif;
    /* color: white; */
    align-items: center;
`;

export const Button2 = styled.button`
    border-radius: 10px;
    background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
    /* white-space: nowrap; */
    padding: 12px 64px;
    font-weight: bold;
    font-family: Soleil, Arial, sans-serif;
    color: #fff;
    font-size: 24px;
    outline: none;
    border: none;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 960px) {
        width: 90%;
  }
`;

export const Button1 = styled.button`
    border-radius: 50px;
    background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
    /* white-space: nowrap; */
    padding: 12px 64px;
    font-weight: bold;
    font-family: Soleil, Arial, sans-serif;
    color: #fff;
    font-size: 24px;
    outline: none;
    border: none;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 960px) {
        width: 90%;
  }
`;

export const HeroColumn = styled.div`
 align-items: center;
 justify-content: center;
`;

export const Row1 = styled.div`
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Row2 = styled.div`
    align-items: center;
    justify-content: center;
`;

export const Row3 = styled.div`
    align-items: center;
    justify-content: center;
    width: 50%;
    @media screen and (max-width: 960px) {
        width: 90%;
  }
`;



export const ContentButton = styled.div`
  width:205px;
  padding: 80px 0px;
  margin: 30px auto;
  border-radius: 50%;
  text-align: center;
  font-size: 20px;
  font-weight: 300;
  font-family: "Soleil",Arial,sans-serif;
  position: relative;
  color:black;
  border: 2px solid #000000;
  background: white;
`;

export const VizImg = styled.img`
    width: 80%;
    height: auto;
    /* height: 75%; */
`;

export const Sixbuttons = styled.button`
    border-radius: 50px;
    background-color: green;
    padding: 6px 64px;
    font-weight: bold;
    font-family: Soleil, Arial, sans-serif;
    color: #fff;
    outline: none;
    border: none;
    align-items: center;
    justify-content: center;
    margin: 10px;
    cursor: pointer;
    @media screen and (max-width: 960px) {
      padding: 6px 40px;
      margin: 5px;
  }
`;

export const Hint = styled.div`
  /* padding: 80px 0px; */
  /* margin: 3px auto; */
  border-radius: 15px;
  padding: 5px;
  text-align: center;
  font-size: 15px;
  font-weight: 300;
  font-family: "Soleil",Arial,sans-serif;
  position: relative;
  /* color: white; */
  font-size: 24px;
  /* background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%); */
  color: transparent;
  text-shadow: 0 0 8px #000;
  @media screen and (max-width: 960px) {
      
  }
  :hover {
  color: white;
  text-shadow: none;
}
`;

export const Button3 = styled.button`
    border-radius: 5px;
    background-color: #2bb7fc;
    /* padding-top: 6px 500px; */
    width: 40%;
    font-weight: bold;
    font-family: Soleil, Arial, sans-serif;
    color: #fff;
    outline: none;
    border: none;
    align-items: left;
    justify-content: left;
    margin: 10px;
    font-size: 24px;
    cursor: pointer;
    @media screen and (max-width: 960px) {
      /* padding: 6px 40px; */
      width: 90%;
      margin: 5px;
  }
`;


export const Rowp5 = styled.div`
    //padding-top: 10px;
    //padding-bottom: 10px;
    margin: auto;
    //margin-left: 300px;
    align-items: center;
    position: relative;
    //width: 100%;
    justify-content: center;
    //justify-content: center;
    @media screen and (max-width: 960px) {
       // width: 65%;
       margin: auto;
        //max-width: 80%;
  }
`;
export const ContentAudio = styled.video`
    /* border: 0; */
    /* padding-top: 50px; */
    /* padding-bottom: 50px; */
    width: 30%;
    height: auto;
    //position: relative;
    object-fit: cover;
    z-index: 999;
    margin-top: -100px;
    
    @media screen and (max-width: 960px) {
        width: 30%;   
        margin-top: -70px
    }
`;

export const CharacterImage = styled.img`
    padding-top: 15px;
    
    width: 20%;
    height: auto;
    @media screen and (max-width: 960px) {
        width: 20%;   
    }
`;

export const CharacterImage2 = styled.img`
    width: 15%;
    height: auto;
    @media screen and (max-width: 960px) {
        width: 10%;   
    }
`;

export const ButtonExample = styled.button`
    background: #F69552;
    border: none;
    padding: 0.9rem 1.1rem;
    color: #fff;
    border-radius: 1rem;
    box-shadow: 0px 13px 24px -7px #F69552;
    transition: all 0.3s ease-in-out;
    margin: 2rem;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    cursor: pointer;

    &:hover {
      box-shadow: 0px 17px 16px -11px #F69552;
      transform: translateY(-5px);
    }

    @media screen and (max-width: 960px) {
        margin: 0.5rem;
    }

`

export const ContentText2 = styled.div`
    padding: 28px;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    width: auto;
    width: 90%;
    font-size: 22px;
    text-align: justify;
    color: white;
    line-height: 30px;
    background: #FF8008;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #FFC837, #FF8008);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #FFC837, #FF8008); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    border-radius: 8px;
    margin-bottom: 20px;

    @media screen and (max-width: 960px) {
        width: 90%;  
        font-size: 18px; 
        line-height: 25px;
    }

    &:hover {
        cursor: pointer;
        transform: scale(1.2);  
  }
`;

export const ContentImage2 = styled.img`
    padding-top: 15px;
    padding-bottom: 15px;
    width: 30%;
    height: auto;
    @media screen and (max-width: 960px) {
        width: 90%;   
    }
`;


export const RowNav = styled.div`
    //position:relative;
    padding: 5px;
    display: flex;
    justify-content: space-between;
    margin: 10px;

`;

export const NavLinkButton2 = styled(Link)`
    padding: 16px 16px;
    border-radius: 8px;
    border: 1.2px solid black;
    text-decoration: none;
    margin: 10px;
    @media screen and (max-width: 960px) {
        font-size: 20px;
}
&:hover {
    cursor: pointer;
    transform: scale(1.2);  
  }
`;


export const ContentImage3 = styled.img`
    padding-top: 15px;
    padding-bottom: 15px;
    width: 100%;
    height: auto;
    margin: 10px;
    @media screen and (max-width: 960px) {
        width: 90%;   
    }
`;


export const ContentImage5 = styled.img`
    padding-top: 15px;
    padding-bottom: 15px;
    width: 15%;
    height: auto;
    margin: 10px;
    @media screen and (max-width: 960px) {
        width: 20%;   
    }
`;

export const ContentText3 = styled.div`
    padding: 28px;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    width: auto;
    width: 90%;
    font-size: 22px;
    text-align: justify;
    color: black;
    line-height: 30px;
    background: none;
    border: 1.2px solid #F69552;
    border-radius: 5px;
    margin-bottom: 20px;

    @media screen and (max-width: 960px) {
        width: 90%;  
        font-size: 16px; 
        line-height: 25px;
    }

    &:hover {
        cursor: pointer;
        transform: scale(1.05);  
  }
`;

export const HomeLink = styled(Link)`
align-items: center ;
`;

export const MobileLink = styled(Link)`
    
`;

export const FloatingB = styled.button`
  background: #FF8008;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #FFC837, #FF8008);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #FFC837, #FF8008);

  width: ${(props) => (props.width ? props.width : `10px`)};
  height: ${(props) => (props.width ? props.width : `10px`)};
  border: none;
  position: fixed;
  border-radius: 50%;
  bottom: 10px;
  right: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  z-index: 999999;
  cursor: pointer;
`;

//Floating div associated with floating button
export const FloatingBDiv = styled.div`
  background: rgb(236, 232, 230);
  background: radial-gradient(
    circle,
    rgba(236, 232, 230, 1) 0%,
    rgba(227, 216, 232, 1) 100%
  );

  /* opacity: 0.95; */
  width: 50%;
  /* height: 80%; */
  /* padding-top: 15px; */
  padding-bottom: 15px;
  border-radius: 10px;
  position: fixed;
  bottom: 5%;
  right: 5%;
  align-items: center;
  justify-content: center;
  justify-items: center;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  z-index: 999998;
  @media screen and (max-width: 960px) {
    width: 90%;
  }
`;

export const TreeDiv = styled.div`

position: fixed;
  bottom: 5px;
  left: 10px;
width: 80px;
height: 80px;


`

export const ContentSummaryContainer = styled.div`
    margin-top: 15px;
    margin-bottom: 15px;
    padding-top: 30px;
    padding-bottom: 30px;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    width: auto;
    width: 80%;
    background: rgba(255,255,255,0.5);
    border: 1px solid black;
    /* background: 'linear-gradient(rgb(255, 38, 142) 0%, rgb(255, 105, 79) 100%)'; */
    border-radius: 10px;
    
    @media screen and (max-width: 960px) {
        width: 90%;   
    }
`;

export const FloatingBDivClose = styled.button`
  background-image: linear-gradient(
    to right,
    #ffb347 0%,
    #ffcc33 51%,
    #ffb347 100%
  );
  width: ${(props) => (props.width ? props.width : `10px`)};
  height: ${(props) => (props.width ? props.width : `10px`)};
  border: none;
  position: relative;
  border-radius: 50%;
  margin-left: 80%;
  background: none;
  cursor: pointer;
  padding-top: 15px;
`;

//Next page div
export const NextPageDiv = styled.div`
  background: rgb(236, 232, 230);
  background: radial-gradient(
    circle,
    rgba(236, 232, 230, 1) 0%,
    rgba(227, 216, 232, 1) 100%
  );
  /* opacity: 0.95; */
  width: 50%;
  /* height: 80%; */
  /* padding-top: 15px; */
  padding-bottom: 15px;
  border-radius: 10px;
  position: fixed;
  bottom: 5%;
  //right: 25%;
  align-items: center;
  justify-content: center;
  justify-items: center;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  z-index: 999998;
  @media screen and (max-width: 960px) {
    width: 90%;
    right: 5%;
  }
`;

export const ContentVideo2 = styled.video`
    width: 65%;
    height: auto;
    position: relative;
    object-fit: cover;
    z-index: 999;
    padding-top: 10px;
    padding-bottom: 10px;
    
    @media screen and (max-width: 960px) {
        width: 90%;   
    }
`;

export const ContentTitleV4 = styled.button`
  background: none;
  border: none;
  padding-top: 10px;
  padding-bottom: 10px;
  font-weight: bold;
  /* font-family: -apple-system, BlinkMacSystemFont, sans-serif; */
  color: black;
  font-size: 28px;
  outline: none;
  border: none;
  align-items: center;
  justify-content: center;
  width: 90%;
  @media screen and (max-width: 960px) {
    width: 90%;
    font-size: 32px;
  }
`;

export const RatingStars = styled.div`
  background: none;
  /* display: flex;
  flex-direction: column; */
  width: 90%;
  z-index: 9999999;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-items: center;
  justify-content: center;
`;

export const SubmitButtonV2 = styled.button`
  border-radius: 50px;
  background: ${(props) =>
    props.bgColor
      ? props.bgColor
      : `linear-gradient(to right,
    #fe8c00 0%,
    #f83600 51%,
    #fe8c00 100%
  )`};

  padding: 12px 20px;
  font-weight: bold;
  /* font-family: -apple-system, BlinkMacSystemFont, sans-serif; */
  color: #fff;
  font-size: 24px;
  outline: none;
  border: none;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  cursor: pointer;

  @media screen and (max-width: 960px) {
    width: auto;
    font-size: 30px;
  }
`;

export const NextPageDiv2 = styled.div`
background: rgb(159,152,232);
background: linear-gradient(90deg, rgba(159,152,232,1) 0%, rgba(175,246,207,1) 100%);
  height: 85vh;
  overflow-y: auto;
  /* opacity: 0.95; */
  width: 70%;
  /* height: 80%; */
  /* padding-top: 15px; */
  padding-bottom: 15px;
  border-radius: 10px;
  position: fixed;
  bottom: 5%;
  
  @media screen and (max-width: 960px) {
    width: 90%;
    right: 5%;
  }
`;

export const FloatingBDivClose2 = styled.button`
  background-image: linear-gradient(
    to right,
    #ffb347 0%,
    #ffcc33 51%,
    #ffb347 100%
  );
  width: ${(props) => (props.width ? props.width : `10px`)};
  height: ${(props) => (props.width ? props.width : `10px`)};
  border: none;
  position: absolute;
  border-radius: 50%;
  margin-left: 90%;
  background: none;
  cursor: pointer;
  margin-top: 5px;
`;