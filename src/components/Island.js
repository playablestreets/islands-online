import React from "react"
import styled from "styled-components"

export const IslandBox = styled.div`
  display: none;
  background-color: #e54891;
  position: absolute;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  border-radius: 50%;
  top: ${props => props.position.y};
  left: ${props => props.position.x};
  user-select: none;
`

const Island = ({
  dimensions = { width: 600, height: 500 },
  position,
}) => {
  const { width, height } = dimensions

  return (
    <IslandBox
      width={width}
      height={height}
      position={position}
    />
  )
}

export default Island
