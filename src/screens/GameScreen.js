import React from "react"
import Background from "../components/Background"
import Island from "../components/Island"
import styled from "styled-components"

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
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
      <Background />
      <Island
        dimensions={{ width: 600, height: 550 }}
        position={{ x: "5%", y: "40%" }}
        creatures={creaturesOne}
      />
      <Island
        dimensions={{ width: 400, height: 330 }}
        position={{ x: "40%", y: "15%" }}
        creatures={creaturesTwo}
      />
      <Island
        dimensions={{ width: 550, height: 475 }}
        position={{ x: "70%", y: "25%" }}
        creatures={creaturesThree}
      />
    </Wrapper>
  )
}
