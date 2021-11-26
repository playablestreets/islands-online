import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { useSpring, animated } from "react-spring"

const Wrapper = styled.div`
  position: absolute;
  left: ${props => `calc(${props.position.x} - ${50 / 2}px)`};
  top: ${props => `calc(${props.position.y} - ${50 / 2}px)`};
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

const Mound = styled.div`
  background-color: #ed8fb5;
  border-color: 5px solid #e41052;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  cursor: pointer;
  position: absolute;

  ::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    display: block;
    z-index: 999;
  }
`

const directionAtlas = {
  north: "translate3d(-0px, 60px, 0px)",
  northeast: "translate3d(-30px, 60px, 0px)",
  east: "translate3d(-60px, 0px, 0px)",
  southeast: "translate3d(-30px, -60px, 0px)",
  south: "translate3d(0px, -60px, 0px)",
  southwest: "translate3d(30px, -60px, 0px)",
  west: "translate3d(60px, 0px, 0px)",
  northwest: "translate3d(30px, 60px, 0px)",
}

const Creature = ({ data, playTrackFn, index, islandNo, animationDuration }) => {
  const { data: d, position, animation, offset } = data
  const { creature_image } = d
  const creatureNo = index + 1 + (islandNo - 1) * 3
  const { url, dimensions } = creature_image
  const { rotate, direction } = animation
  const [show, setShow] = useState(false)

  const animateFrom = {
    opacity: 0,
    ...(rotate ? { transform: "rotate(-90deg)" } : {}),
    ...(direction ? { transform: directionAtlas[direction] } : {}),
  }

  const animateTo = [
    {
      opacity: 1,
      ...(rotate ? { transform: "rotate(0deg)" } : {}),
      ...(direction ? { transform: "translate3d(0px, 0px, 0px)" } : {}),
    },
    { ...animateFrom, delay: animationDuration },
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
        setShow(false)
      }, animationDuration)
    }
  }, [show])

  return (
    <Wrapper dimensions={dimensions} position={position}>
      <Mound
        onClick={() => {
          if (show) return
          setShow(true)
        }}
      />
      <ImageWrapper dimensions={dimensions} position={position} style={props}>
        <Image src={url} position={offset} />
      </ImageWrapper>
    </Wrapper>
  )
}

export default Creature
