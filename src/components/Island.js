import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Creature from "../components/Creature"

const IslandBox = styled.div`
  background-color: #e54891;
  position: absolute;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  border-radius: 40%;
  top: ${props => props.position.y};
  left: ${props => props.position.x};
  user-select: none;
`

const Island = ({
  dimensions = { width: 600, height: 500 },
  position,
  creatures,
}) => {
  const { width, height } = dimensions
  const [nextUp, setNextUp] = useState(1)
  const [islands, updateIslands] = useState({
    0: {
      show: false,
      nextUp: true,
    },
    1: {
      show: false,
      nextUp: false,
    },
    2: {
      show: false,
      nextUp: false,
    },
  })

  const hideIsland = (islands, index) => {
    updateIslands({
        ...islands,
        [index]: {
            hideIsland: true,
            nextUp: false,
        }
    })
  }

  const updateIslandState = (islands, updateIslands) => {
    const updatedIslands = Object.fromEntries(
      Object.entries(islands).map(([key, val], index) => {
        if (val.nextUp) {
          setTimeout(() => {
              hideIsland(islands, index)
          }, 5000)
          return [
            key,
            {
              show: true,
              nextUp: false,
            },
          ]
        } else {
          return [
            key,
            {
              show: val.show,
              nextUp: index === nextUp % 3,
            },
          ]
        }
      })
    )
    updateIslands(updatedIslands)
    setNextUp(nextUp + 1)
  }

  useEffect(() => {
    console.log("islandState", islands)
  }, [islands])

  return (
    <IslandBox
      width={width}
      height={height}
      position={position}
      onClick={() => updateIslandState(islands, updateIslands)}
    >
      {creatures.map((creature, index) => {
        return (
          <Creature
            data={creature}
            islands={islands}
            key={index}
            index={index}
          />
        )
      })}
    </IslandBox>
  )
}

export default Island
