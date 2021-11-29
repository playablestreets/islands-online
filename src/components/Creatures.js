import React, { useState, useEffect } from 'react'
import Creature from "./Creature"
import styled from "styled-components"

const Wrapper = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
`
const shuffle = (array) => array.sort(() => Math.random() - 0.5);
  
const Creatures = ({ animationDuration, creatures, setCreatures, playTrackFn }) => {
    const defaultOrder = Array.from(Array(9).keys())
    const [creatureOrder, setCreatureOrder] = useState(defaultOrder)

    useEffect(() => {
        setCreatureOrder(shuffle(defaultOrder))
    }, [])

    return (
        <Wrapper>
            {creatures?.map((creature, index) => {
                return (
                    <Creature
                        data={creature}
                        setCreatures={setCreatures}
                        randomPosX={creatureOrder[index]}
                        key={index}
                        index={index}
                        playTrackFn={playTrackFn}
                        animationDuration={animationDuration}
                    />
                )
            })}
        </Wrapper>
    )
}

export default Creatures
