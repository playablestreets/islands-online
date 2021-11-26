import React from 'react'
import Creature from "./Creature"
import styled from "styled-components"

const Wrapper = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
`

const Creatures = ({ animationDuration, creatures, setCreatures, playTrackFn }) => {
    return (
        <Wrapper>
            {creatures?.map((creature, index) => {
                return (
                    <Creature
                        data={creature}
                        setCreatures={setCreatures}
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
