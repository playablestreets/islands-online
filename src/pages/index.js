import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
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

const parseQueryString = string => string.substring(1).split("&")[0]

export default function Index({ location }) {
  const [creatures, setCreatures] = useState(null)

  useEffect(() => {
    const creature = parseQueryString(location?.search)
    fetchCreatures(setCreatures, creature)
  }, [])

  console.log("Creatures from API:", creatures)

  return (
    <>
      <GlobalStyle />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Islands Online</title>
      </Helmet>
      {creatures ? <GameScreen data={creatures} /> : <LoadingScreen />}
    </>
  )
}
