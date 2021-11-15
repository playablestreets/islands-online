import React from 'react'
import Creature from "../components/Creature"
import Background from '../components/Background'
import Island from "../components/Island"
import styled from "styled-components"

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`

export const GameScreen = ({ data }) => {
    const sampleCreature = data[0]
    return (
        <Wrapper>
            <Background />
            <Island dimensions={{width: 600, height: 550}} position={{x: "5%", y: "40%"}} />
            <Island dimensions={{width: 400, height: 330}} position={{x: "40%", y: "15%"}} />
            <Island dimensions={{width: 550, height: 475}} position={{x: "70%", y: "25%"}} />
            <Creature data={sampleCreature} />
        </Wrapper>
    )
}
