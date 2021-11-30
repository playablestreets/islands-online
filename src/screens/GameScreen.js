import React, { useState } from "react"
import AudioManager from "../components/AudioManager"
import Background from "../components/Background"
import Creatures from "../components/Creatures"
import Island from "../components/Island"
import styled from "styled-components"
import shuffle from '../utils/shuffle'

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
  max-width: 1436px;
  margin: 0 auto;
`

export const GameScreen = ({ data }) => {
  const [playTrackFn, setPlayTrackFn] = useState(null)
  const [creatures, setCreatures] = useState({list: data, lastShown: null})

  const islands = [
    {
      dimensions: { width: 660 },
      position: { x: "0px", y: "-280px" },
    },
    {
      dimensions: { width: 410 },
      position: { x: "575px", y: "-240px" },
    },
    {
      dimensions: { width: 490 },
      position: { x: "900px", y: "-220px" },
    }
  ]

  const onScreenTap = (event) => {
    // Extend with additional functionality here

    // Handles display of creatures
    setCreatures(prev => {
      if (!prev) return ({list: data, lastShown: null})
      const { list, lastShown } = prev
      let showNext = true
      let toShow = !(lastShown === null || lastShown === 8)
        ? lastShown + 1 
        : 0
      let newLastShown = lastShown
      
      const newList = list.map((creature, i) => {
        if (showNext && !creature.show && toShow === i) {
          showNext = false
          newLastShown = toShow
          return { ...creature, show: true }
        }

        return creature
      })

      return {
        list: newList,
        lastShown: newLastShown
      }
    })
  }

  return (
    <>
      <AudioManager setPlayTrackFn={setPlayTrackFn} animationDuration={ANIMATION_DURATION} animationFade={ANIMATION_FADE_TIME} />
      <Wrapper onClick={onScreenTap}> 
        <Background>
          <IslandWrapper>
            {islands.map((islandObj, index) => (
              <Island {...islandObj} playTrackFn={playTrackFn} key={index} index={index} />
            ))}
          </IslandWrapper>
          <Creatures creatures={creatures?.list} setCreatures={setCreatures} animationDuration={ANIMATION_DURATION} animationFade={ANIMATION_FADE_TIME} animationOnScreen={ANIMATION_ON_SCREEN} playTrackFn={playTrackFn} />
        </Background>
      </Wrapper>
    </>
  )
}
