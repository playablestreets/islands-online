import React from "react"
import Background from "../components/Background"
import Island from "../components/Island"
import styled from "styled-components"

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

const IslandWrapper = styled.div`
  position: relative;
  height: 100%;
  max-width: 1510px;
  margin: 0 auto;
`

export const GameScreen = ({ data }) => {
  const creaturesOne = [
    {
      ...data[0],
      position: {
        x: "20%",
        y: "70%",
      },
    },
    {
      ...data[1],
      position: {
        x: "40%",
        y: "10%",
      },
    },
    {
      ...data[2],
      position: {
        x: "70%",
        y: "60%",
      },
    },
  ]

  const creaturesTwo = [
    {
      ...data[3],
      position: {
        x: "20%",
        y: "70%",
      },
    },
    {
      ...data[4],
      position: {
        x: "40%",
        y: "10%",
      },
    },
    {
      ...data[5],
      position: {
        x: "70%",
        y: "60%",
      },
    },
  ]

  const creaturesThree = [
    {
      ...data[6],
      position: {
        x: "20%",
        y: "70%",
      },
    },
    {
      ...data[7],
      position: {
        x: "40%",
        y: "10%",
      },
    },
    {
      ...data[8],
      position: {
        x: "70%",
        y: "60%",
      },
    },
  ]

  return (
    <Wrapper>
      <Background>
        <IslandWrapper>
          <Island
            dimensions={{ width: 660, height: 290 }}
            position={{ x: "15px", y: "50px" }}
            creatures={creaturesOne}
          />
          <Island
            dimensions={{ width: 410, height: 160 }}
            position={{ x: "575px", y: "-60px" }}
            creatures={creaturesTwo}
          />
          <Island
            dimensions={{ width: 490, height: 200 }}
            position={{ x: "1000px", y: "10px" }}
            creatures={creaturesThree}
          />
        </IslandWrapper>
      </Background>
    </Wrapper>
  )
}
