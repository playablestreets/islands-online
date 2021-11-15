import React from 'react'
import Creature from "../components/Creature"
import Background from '../components/Background'
import styled from "styled-components"

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`

export const GameScreen = ({ data }) => {
    const sampleCreature = data[Math.floor(Math.random() * data.length)]
    return (
        <Wrapper>
            <Background />
            <Creature data={sampleCreature} />
        </Wrapper>
    )
}
