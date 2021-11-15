import React, { useState, useEffect } from "react"
import { createGlobalStyle } from "styled-components"
import { LoadingScreen, GameScreen } from "../screens"
import fetchCreatures from "../utils/fetchCreatures"


const GlobalStyle = createGlobalStyle`
  html, body, #___gatsby, #gatsby-focus-wrapper {
    height: 100vh;
    overflow: hidden;
    margin: 0;
  }
`

export default function Index() {
  const [creatures, setCreatures] = useState(null)

  useEffect(() => {
    fetchCreatures(setCreatures)
  }, [])

  console.log('creatures', creatures)

  return <>
    <GlobalStyle />
    {creatures ?
      <GameScreen data={creatures} /> :
      <LoadingScreen />

    }
  </>
}