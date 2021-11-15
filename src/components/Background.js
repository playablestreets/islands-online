import React from 'react'
import styled from "styled-components"

const Sea = styled.div`
    position: absolute;
    width: 100%;
    height: 64%;
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
