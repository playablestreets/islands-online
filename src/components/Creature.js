import React, { useState, useEffect } from "react"
import styled from "styled-components"
import ReactHowler from "react-howler"

const Wrapper = styled.div`
  position: absolute;
  left: ${props =>
    `calc(${props.position.x} - ${50 / 2}px)`};
  top: ${props =>
    `calc(${props.position.y} - ${50 / 2}px)`};
`

const Image = styled.img`
  display: ${props => (props.show ? "block" : "none")};
  position: absolute;
  left: ${props =>
    `-${props.dimensions.width / 2}px`};
  top: ${props =>
    `-${props.dimensions.height / 2}px`};
`

const Mound = styled.div`
  background-color: #ed8fb5;
  border-color: 5px solid #e41052;
  height: 50px;
  width: 50px;
`

const Creature = ({ data }) => {
  const { data: d, position } = data
  const { creature_image } = d
  const { url, dimensions } = creature_image

  const [playSound, setPlaySound] = useState(false)
  const [soundPlayer, setSoundPlayer] = useState(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (playSound) {
      soundPlayer.howler.fade(1, 0, 1000)
      soundPlayer.howler.play()
    }
  }, [playSound])

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        setShow(false)
      }, 5000)
    }
  }, [show])

  return (
    <Wrapper dimensions={dimensions} position={position}>
      <Mound
        onClick={() => {
          if (show) return
          setPlaySound(true)
          setShow(true)
        }}
      />
      <Image src={url} show={show} dimensions={dimensions} position={position} />
      <ReactHowler
        src="/sample.wav"
        preload={true}
        playing={false}
        ref={ref => setSoundPlayer(ref)}
      />
    </Wrapper>
  )
}

export default Creature
