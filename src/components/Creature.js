import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { useSpring, animated } from "react-spring"

const Image = styled(animated.img)`
  transform: scale(0.5);
`

const ImageWrapper = styled(animated.div)`
  position: absolute;
  opacity: 1;
  bottom: 0;
  left: 0;
`

const Creature = ({ data, setCreatures, playTrackFn, index, animationDuration, animationFade, animationOnScreen, randomPosX }) => {
  const { data: d, show } = data
  const { creature_image } = d
  const creatureNo = index + 1
  const { url, dimensions } = creature_image
  const [windowSize, setWindowSize] = useState({})

  const SCREEN_WIDTH = windowSize.width;
  const SCREEN_HEIGHT = windowSize.height;
  const SEA_HEIGHT = SCREEN_HEIGHT * 0.65 - 120;
  const MOVEMENT_MAGNITUDE = 200
  const CREATURE_OFFSET = SCREEN_WIDTH / 9
  const animationFrameTime =  animationOnScreen / 4;
  
  const initYMove = (Math.random() * (SEA_HEIGHT * 0.7)) + (SEA_HEIGHT * 0.3)

  const randomiserX = () => {
    const r = CREATURE_OFFSET * randomPosX - 20 + (Math.floor(Math.random() * MOVEMENT_MAGNITUDE))
    return Math.min(SCREEN_WIDTH - 240, r)
  }
  

  const randomiserY = () => {
    const r = initYMove + (Math.floor(Math.random() * MOVEMENT_MAGNITUDE))
    return Math.min(SEA_HEIGHT, r)
  }

  const animateFrom = {
    opacity: 0,
    transform: `translate(${CREATURE_OFFSET * randomPosX - 20}px, ${-100}px)`,
  }

  const animateTo = [
    {
      opacity: 1,
      transform: `translate(${randomiserX()}px, ${-initYMove}px)`,
      config: { duration: animationFade }
    },
    {
      opacity: 1,
      transform: `translate(${randomiserX()}px, ${-(randomiserY())}px)`,
      config: { duration: animationFrameTime }
    },
    {
      opacity: 1,
      transform: `translate(${randomiserX()}px, ${-(randomiserY())}px)`,
      config: { duration: animationFrameTime }
    },
    {
      opacity: 1,
      transform: `translate(${randomiserX()}px, ${-(randomiserY())}px)`,
      config: { duration: animationFrameTime }
    },
    {
      opacity: 1,
      transform: `translate(${randomiserX()}px, ${-(randomiserY())}px)`,
      config: { duration: animationFrameTime }
    },
    { ...animateFrom, config: { duration: animationFade } },
  ]

  const [props, set] = useSpring(() => animateFrom)

  useEffect(() => {
    if (show) {
      set({
        to: animateTo,
        from: animateFrom,
      })
      playTrackFn(creatureNo)

      setTimeout(() => {
        setCreatures(prev => {
          const { list, lastShown } = prev

          const newList = list.map((creature, i) => {
            if (i === index) {
              return {
                ...creature,
                show: false
              }
            }
            return creature
          })

          return {
            list: newList,
            lastShown
          }
        })
      }, animationDuration)
    }
  }, [show])

  useEffect(() => {
    setWindowSize({
      height: window.innerHeight,
      width: window.innerWidth
    })

    let resizeTimer;

    window.addEventListener('resize', function (e) {

      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        setWindowSize({
          height: window.innerHeight,
          width: window.innerWidth
        })
      }, 250);

    });
  }, [])

  return (
    <ImageWrapper style={props}>
      <Image src={url} />
    </ImageWrapper>
  )
}

export default Creature
