import React from 'react'
import styled from 'styled-components'

const IslandBox = styled.div`
    background-color: #E54891;
    position: absolute;
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    border-radius: 40%;
    top: ${props => props.position.y};
    left: ${props => props.position.x};
`

const Island = ({dimensions = { width: 600, height: 500}, position}) => {
    const { width, height } = dimensions
    return (
        <IslandBox width={width} height={height} position={position} />
    )
}

export default Island
