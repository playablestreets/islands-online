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
  width: 80%;
  margin: 0 auto;
  text-align: center;
  font-family: sans-serif;
`

export const LoadingScreen = () => {
  return (
    <div style={{ marginTop: "40vh" }}>
      <Text>Loading...</Text>
      <Paragraph>
        Please turn your sound up and off silent 🔊
      </Paragraph>
    </div>
  )
}
