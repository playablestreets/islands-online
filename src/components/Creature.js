import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { useSpring, animated } from "react-spring"

const Wrapper = styled.div`
  position: absolute;
  /* left: ${props => `calc(${props.position.x} - ${50 / 2}px)`};
  top: ${props => `calc(${props.position.y} - ${50 / 2}px)`}; */
  top: 0;
  left: ${props => props.num * 20}px;
  display: ${props => props.show ? "block" : "none"};
`

const Image = styled(animated.img)`
  transform: scale(0.5);
  position: relative;
  left: ${props => props.position.x};
  top: ${props => props.position.y};
`

const ImageWrapper = styled(animated.div)`
  position: absolute;
  left: ${props => `-${(props.dimensions.width * 0.75) / 2}px`};
  top: ${props => `-${(props.dimensions.height * 0.75) / 2}px`};
`

const Creature = ({ data, playTrackFn, index, islandNo, animationDuration }) => {
  const { data: d, show } = data
  const { creature_image } = d
  const creatureNo = index + 1
  const { url, dimensions } = creature_image

  // const animateFrom = {
  //   opacity: 0,
  //   ...(rotate ? { transform: "rotate(-90deg)" } : {}),
  //   ...(direction ? { transform: directionAtlas[direction] } : {}),
  // }

  // const animateTo = [
  //   {
  //     opacity: 1,
  //     ...(rotate ? { transform: "rotate(0deg)" } : {}),
  //     ...(direction ? { transform: "translate3d(0px, 0px, 0px)" } : {}),
  //   },
  //   { ...animateFrom, delay: animationDuration },
  // ]

  // const [props, set] = useSpring(() => animateFrom)

  // useEffect(() => {
  //   if (show) {
  //     set({
  //       to: animateTo,
  //       from: animateFrom,
  //     })
  //     playTrackFn(creatureNo)

  //     setTimeout(() => {
  //       setShow(false)
  //     }, animationDuration)
  //   }
  // }, [show])

  return (
    <Wrapper dimensions={dimensions} num={index + 1} show={show}>
      {/* <ImageWrapper dimensions={dimensions} position={position} style={props}>
        <Image src={url} />
      </ImageWrapper> */}
      {index}
    </Wrapper>
  )
}

export default Creature
