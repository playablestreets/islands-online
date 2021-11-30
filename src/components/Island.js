import React from "react"
import styled from "styled-components"

export const IslandBox = styled.div`
  display: none;
  position: absolute;
  width: ${props => props.width}px;
  border-radius: 50%;
  top: ${props => props.position.y};
  left: ${props => props.position.x};
  user-select: none;
`

const IslandImage = styled.img``

const Island = ({
  dimensions = { width: 600, height: 500 },
  position,
  index
}) => {
  const { width } = dimensions

  return (
    <IslandBox
      position={position}
      width={width}
    >
      <IslandImage src={`../../images/island${index + 1}.png`} width="100%" height="100%" />
    </IslandBox>
  )
}

export default Island
