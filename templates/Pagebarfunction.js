import React from "react";
import ReactTooltip from "react-tooltip";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
var uniqid = require('uniqid'); 

const Pagebarfunction = (props) => {

    const id = uniqid()
    const ActiveChapterId = ["8S8"];
    const unitProgress = ["33"];

    const showNext = (id_number) => {
        const Chapter1VizBookDetails = {
            ActiveChapterId: ActiveChapterId[0],
            divNo: id_number,
            unitProgress: unitProgress[0]
        };
      
        console.log(Chapter1VizBookDetails)
      
        axios
        .post('/user/updateVizBookProgress', Chapter1VizBookDetails)
        .then((res) => {
          console.log(res.data)
        })
        .catch((err) => console.log(err))
        
    }

    if (props.current=="true") {

        return (
        <>
        <ReactTooltip id={id} place="top" effect="solid">
        {props.text}
             </ReactTooltip>
        <ButtonNav current enabled data-tip data-for={id} to={props.link} >{props.number}</ButtonNav>
             </>
    )
    }

    else if (props.current!="true" && props.enabled=="true" && props.shownextId==0) {

        return (
        <>
        <ReactTooltip id={id} place="top" effect="solid">
        {props.text}
        </ReactTooltip>

        <ButtonNav enabled data-tip data-for = {id} to={props.link} >{props.number}</ButtonNav>
             </>
    )
    }

    else if (props.current != "true" && props.enabled && props.shownextId!==0) {
        return (
          <>
          <ReactTooltip id={id} place="top" effect="solid">
              {props.text}
            </ReactTooltip>
    
            <ButtonNav enabled data-tip data-for={id} to={props.link} onClick={() => {
            showNext(props.shownextId)  
        }} >
              {props.number}
            </ButtonNav>
            
          </>
        );
      }

    else {

        return (
        <>
        <ButtonNav  data-tip data-for={id} >{props.number}</ButtonNav>
       
        <ReactTooltip id={id} place="top" effect="solid">
        {props.text}
             </ReactTooltip>
             </>
    )
    }

}


const ButtonNav = styled(Link)`
    background: ${({ current }) => (current ? `linear-gradient(to right, #26a0da, #314755)` : 'none')};
    cursor: ${({ enabled }) => (enabled ? 'allowed' : ' not-allowed')};
    pointer-events: ${({ enabled }) => (enabled ? 'allowed' : ' not-allowed')};
    border: ${({ current }) => (current ? 'none' : '1px solid black')};
    text-align: center ;
    align-items: center;
    padding-top: 9px;
    color: ${({ current }) => (current ? '#fff' : ' #000')};
    border-radius: 50px;
    margin-left: 15px;
    margin-right: 15px;
    box-shadow: ${({ current }) => (current ? '0px 13px 24px -7px #314755' : ' none')};
    transition: all 0.3s ease-in-out;
    //margin: 1rem;
    //margin-bottom: 1.5rem;
    font-size: 1.5rem;
    text-decoration: none ;
    width: 50px;
    height: 50px;
    &:hover {
      box-shadow: ${({ current }) => (current ? '0px 17px 16px -11px #314755' : ' none')};

      transform: translateY(-5px);
  }

  @media screen and (max-width: 960px) {
    display: none ;
    }
  
`

export default Pagebarfunction