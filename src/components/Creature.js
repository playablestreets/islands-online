import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { useSpring, animated } from "react-spring"

const Image = styled(animated.img)`
  transform: scale(0.5);
`

const ImageWrapper = styled(animated.div)`
  position: absolute;
`

const Creature = ({ data, setCreatures, playTrackFn, index, animationDuration }) => {
  const { data: d, show } = data
  const { creature_image } = d
  const creatureNo = index + 1
  const { url } = creature_image

  const animateFrom = {
    opacity: 0,
    // ...(rotate ? { transform: "rotate(-90deg)" } : {}),
    // ...(direction ? { transform: directionAtlas[direction] } : {}),
  }

  const animateTo = [
    {
      opacity: 1,
      // ...(rotate ? { transform: "rotate(0deg)" } : {}),
      // ...(direction ? { transform: "translate3d(0px, 0px, 0px)" } : {}),
    },
    { ...animateFrom, delay: animationDuration },
  ]

  const [props, set] = useSpring(() => animateFrom)

  useEffect(() => {
    console.log('creature', creatureNo, show)
    if (show) {
      set({
        to: animateTo,
        from: animateFrom,
      })
      // playTrackFn(creatureNo)

      setTimeout(() => {
        setCreatures(prev => {
          return prev.map((creature, i) => {
            if (i === index) {
              return {
                ...creature,
                show: false
              }
            }
            return creature
          })
        })
      }, animationDuration)
    }
  }, [show])

  return (
      <ImageWrapper style={props}>
        <Image src={url} />
      </ImageWrapper>
  )
}

export default Creature
