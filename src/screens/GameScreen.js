import React, { useState } from "react"
import AudioManager from "../components/AudioManager"
import Background from "../components/Background"
import Creatures from "../components/Creatures"
import Island from "../components/Island"
import styled from "styled-components"

// defined in milliseconds
const ANIMATION_FADE_TIME = 2000 
const ANIMATION_ON_SCREEN = 6000
const ANIMATION_DURATION = (ANIMATION_FADE_TIME * 2) + ANIMATION_ON_SCREEN

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  user-select: none;
`

const IslandWrapper = styled.div`
  position: relative;
  height: 100%;
  max-width: 1510px;
  margin: 0 auto;
`

export const GameScreen = ({ data }) => {
  const [playTrackFn, setPlayTrackFn] = useState(null)
  const [creatures, setCreatures] = useState(data)

  const islands = [
    {
      dimensions: { width: 660, height: 290 },
      position: { x: "15px", y: "50px" },
    },
    {
      dimensions: { width: 410, height: 160 },
      position: { x: "575px", y: "-60px" },
    },
    {
      dimensions: { width: 490, height: 200 },
      position: { x: "1000px", y: "10px" },
    }
  ]

  return (
    <>
      <AudioManager setPlayTrackFn={setPlayTrackFn} animationDuration={ANIMATION_DURATION} animationFade={ANIMATION_FADE_TIME} />
      <Wrapper onClick={() => {
        setCreatures(prev => {
          if (!prev) return data
          let showNext = true
          return prev.map(creature => {
            if (showNext && !creature.show) {
              showNext = false
              return { ...creature, show: true }
            }

            return creature
          })
        })
      }}>
        <Background>
          <IslandWrapper>
            {islands.map((islandObj, index) => (
              <Island {...islandObj} playTrackFn={playTrackFn} key={index} />
            ))}
          </IslandWrapper>
          <Creatures creatures={creatures} setCreatures={setCreatures} animationDuration={ANIMATION_DURATION} animationFade={ANIMATION_FADE_TIME} animationOnScreen={ANIMATION_ON_SCREEN} playTrackFn={playTrackFn} />
        </Background>
      </Wrapper>
    </>
  )
}
