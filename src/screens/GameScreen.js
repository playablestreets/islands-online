import React, { useState, useEffect } from "react"
import levelConfig from "../utils/levelConfig"
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
  const level = levelConfig(data)
  const [audioRefs, setAudioRefs] = useState([])

  useEffect(() => {
    console.log('audio refs', audioRefs)
  }, [audioRefs])
  
  const islands = [
    {
      dimensions: { width: 660, height: 290 },
      position: { x: "15px", y: "50px" },
      island: level.islandOne
    },
    {
      dimensions: { width: 410, height: 160 },
      position: { x: "575px", y: "-60px" },
      island: level.islandTwo
    },
    {
      dimensions: { width: 490, height: 200 },
      position: { x: "1000px", y: "10px" },
      island: level.islandThree
    }
  ]

  return (
    <Wrapper>
      <Background>
        <IslandWrapper>
          {islands.map(island => (
            <Island {...island} audioRefs={audioRefs} setAudioRefs={setAudioRefs}/>
          ))}
        </IslandWrapper>
      </Background>
    </Wrapper>
  )
}
