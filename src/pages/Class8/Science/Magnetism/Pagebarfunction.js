import React from "react";
import ReactTooltip from "react-tooltip";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

var uniqid = require("uniqid");

const Pagebarfunction = (props) => {
  const id = uniqid();
  const ActiveChapterId = ["Millenium8S3"];
  const unitProgress = ["10"];

  const showNext = (id_number) => {
    const Chapter1VizBookDetails = {
      ActiveChapterId: ActiveChapterId[0],
      divNo: id_number,
      unitProgress: unitProgress[0],
    };

    console.log(Chapter1VizBookDetails);

    axios
      .post("/user/updateVizBookProgress", Chapter1VizBookDetails)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  if (props.current == "true") {
    return (
      <>
        <ButtonNav current enabled data-tip data-for={id} to={props.link}>
          {props.number}
        </ButtonNav>

        <ReactTooltip id={id} place="top" effect="solid">
          {props.text}
        </ReactTooltip>
      </>
    );
  } else if (
    props.current != "true" &&
    props.enabled &&
    props.shownextId == 0
  ) {
    return (
      <>
        <ReactTooltip id={id} place="top" effect="solid">
          {props.text}
        </ReactTooltip>

        <ButtonNav enabled data-tip data-for={id} to={props.link}>
          {props.number}
        </ButtonNav>
      </>
    );
  } else if (
    props.current != "true" &&
    props.enabled &&
    props.shownextId !== 0
  ) {
    return (
      <>
        <ReactTooltip id={id} place="top" effect="solid">
          {props.text}
        </ReactTooltip>

        <ButtonNav
          enabled
          data-tip
          data-for={id}
          to={props.link}
          onClick={() => {
            showNext(props.shownextId);
          }}
        >
          {props.number}
        </ButtonNav>
      </>
    );
  } else {
    return (
      <>
        <ButtonNav2 data-tip data-for={id}>
          {props.number}
        </ButtonNav2>
        <ReactTooltip id={id} place="top" effect="solid">
          {props.text}
        </ReactTooltip>
      </>
    );
  }
};

const ButtonNav = styled(Link)`
  background: ${({ enabled, current }) =>
    enabled && current
      ? `linear-gradient(
    to right,
    #ffb347 0%,
    #ffcc33 51%,
    #ffb347 100%
  );`
      : enabled && !current
      ? `linear-gradient(
    to right,
    #ffb347 0%,
    #ffcc33 51%,
    #ffb347 100%
  );`
      : "none"};
  cursor: ${({ enabled }) => (enabled ? "allowed" : " not-allowed")};
  pointer-events: ${({ enabled }) => (enabled ? "allowed" : " not-allowed")};
  border: ${({ enabled, current }) =>
    enabled && current
      ? "none"
      : enabled && !current
      ? "none"
      : "1px solid black"};
  text-align: center;
  align-items: center;
  padding-top: 9px;
  color: ${({ current }) => (current ? "#000" : " #000")};
  border-radius: 50px;
  margin-left: 15px;
  margin-right: 15px;
  box-shadow: ${({ current }) =>
    current ? "0px 13px 24px -7px #000" : " none"};
  transition: all 0.3s ease-in-out;
  font-size: 1.5rem;
  text-decoration: none;
  width: 50px;
  height: 50px;
  position: relative;

  &:hover {
    box-shadow: ${({ current }) =>
      current ? "0px 17px 16px -11px #000" : " none"};

    transform: translateY(-5px);
  }

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

const ButtonNav2 = styled.button`
  background: ${({ current }) => (current ? "#000" : "none")};
  cursor: ${({ enabled }) => (enabled ? "allowed" : " not-allowed")};
  pointer-events: ${({ enabled }) => (enabled ? "allowed" : " not-allowed")};
  border: ${({ current }) => (current ? "none" : "1px solid black")};
  text-align: center;
  align-items: center;
  justify-items: center;
  justify-content: center;
  color: ${({ current }) => (current ? "#FFF" : " #000")};
  border-radius: 50px;
  margin-left: 15px;
  margin-right: 15px;
  box-shadow: ${({ current }) =>
    current ? "0px 13px 24px -7px #000" : " none"};
  transition: all 0.3s ease-in-out;
  font-size: 1.5rem;
  text-decoration: none;
  width: 50px;
  height: 50px;
  position: relative;
  &:hover {
    box-shadow: ${({ current }) =>
      current ? "0px 17px 16px -11px #000" : " none"};

    transform: translateY(-5px);
  }

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export default Pagebarfunction;
