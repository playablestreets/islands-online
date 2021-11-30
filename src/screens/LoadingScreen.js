import React from "react"
import styled from "styled-components"

const Text = styled.h2`
  text-transform: uppercase;
  font-size: 3em;
  font-weight: 500;
  color: magenta;
  width: 100%;
  text-align: center;
  font-family: sans-serif;
`

const Paragraph = styled.p`
  font-size: 1.5em;
  font-weight: 400;
  color: blue;
  width: 100%;
  text-align: center;
  font-family: sans-serif;
`

export const LoadingScreen = () => {
  return (
    <div style={{ marginTop: "40vh" }}>
      <Text>Loading...</Text>
      <Paragraph>
        Check your device sound 🔊 is off silent to have the best Islands
        experience 🏝️
      </Paragraph>
    </div>
  )
}
