import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import { createGlobalStyle } from "styled-components"
import { LoadingScreen, GameScreen } from "../screens"
import fetchCreatures from "../utils/fetchCreatures"

const GlobalStyle = createGlobalStyle`
  html, body, #___gatsby, #gatsby-focus-wrapper {
    cursor: pointer;
    height: 100vh;
    overflow: hidden;
    margin: 0;
  }

  .clickAnimation {
    position: fixed;
    box-sizing: border-box;
    border-style: solid;
    border-color: #00F2FF;
    border-radius: 50%;
    animation: clickAnimation 0.4s ease-out;
    z-index: 999;
  }

  @keyframes clickAnimation {
    0% {
      opacity: 1;
      width: 0.5em;
      height: 0.5em;
      margin: -0.25em;
      border-width: 0.5em;
   }

   100% {
      opacity: 0.2;
      width: 6em;
      height: 6em;
      margin: -3em;
      border-width: 0.03em;
    }
  }
`

const parseQueryString = string => string.substring(1).split("&")[0]

export default function Index({ location }) {
  const [creatures, setCreatures] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Array.from(Array(3)).forEach((_, i) => {
      const islandNo = i + 1
      const img = new Image()
      img.src = `../../images/island${islandNo}.png`
      console.log("img", islandNo, img)
    })

    const creature = parseQueryString(location?.search)
    fetchCreatures(setCreatures, creature)

    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  console.log("Creatures from API:", creatures)

  return (
    <>
      <GlobalStyle />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Islands Online</title>
      </Helmet>
      {creatures && !loading ? (
        <GameScreen data={creatures} />
      ) : (
        <LoadingScreen />
      )}
    </>
  )
}
