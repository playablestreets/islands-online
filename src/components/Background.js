import React from "react"
import styled from "styled-components"
import { IslandBox } from "./Island"

const Sea = styled.div`
  @keyframes seaLevel {
    0% {
      transform: translateY(0px);
    }

    50% {
      transform: translateY(15px);
    }

    100% {
      transform: translateY(0px);
    }
  }
  position: absolute;
  width: 100%;
  height: calc(64% + 15px);
  animation-duration: 5s;
  animation-name: seaLevel;
  animation-iteration-count: infinite;
  bottom: 0;
  left: 0;
  background: linear-gradient(
    180deg,
    rgba(31, 90, 254, 1) 0%,
    rgba(8, 31, 118, 1) 100%
  );
`

const SeaOverlay = styled.div`
  position: absolute;
  z-index: 99;
  width: 100%;
  height: calc(64% + 15px);
  bottom: 0;
  left: 0;

  ${IslandBox} {
    :nth-of-type(1) {
      display: block;

      @media (max-width: 1023px) {
        width: 60%;
        left: 20%;
        top: -150px;
      }

      @media (max-width: 768px) {
        width: 70%;
        left: 15%;
      }

      @media (max-width: 375px) {
        width: 80%;
        left: 10%;
      }

      @media (max-height: 400px) {
        width: 46%;
        left: 28%;
        top: -165px;
      }
    }

    :nth-of-type(2) {
      @media (min-width: 1024px) {
        display: block;
      }
    }

    :nth-of-type(3) {
      @media (min-width: 1366px) {
        display: block;
      }
    }
  }
`

const Sky = styled.div`
  position: absolute;
  width: 100%;
  height: 36%;
  top: 0;
  left: 0;
  background: linear-gradient(
    180deg,
    rgba(254, 187, 174, 1) 0%,
    rgba(149, 189, 250, 1) 100%
  );
`

const Background = ({ children }) => {
  return (
    <>
      <Sky />
      <Sea />
      <SeaOverlay>{children}</SeaOverlay>
    </>
  )
}

export default Background
