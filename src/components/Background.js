import React from 'react'
import styled from "styled-components"

const Sea = styled.div`
    @keyframes seaLevel {
        0% {
            transform: translateY(0px)
        }

        50% {
            transform: translateY(15px)
        }

        100% {
            transform: translateY(0px)
        }
    }
    position: absolute;
    width: 100%;
    height: calc(64% + 15px);
    animation-duration: 3s;
    animation-name: seaLevel;
    animation-iteration-count: infinite;
    bottom: 0;
    left: 0;
    background: linear-gradient(180deg, rgba(31,90,254,1) 0%, rgba(8,31,118,1) 100%);
`

const Sky = styled.div`
    position: absolute;
    width: 100%;
    height: 36%;
    top: 0;
    left: 0;
    background: linear-gradient(180deg, rgba(254,187,174,1) 0%, rgba(149,189,250,1) 100%);
`

const Background = () => {
    return (
        <>
            <Sky />
            <Sea />
        </>
    )
}

export default Background
