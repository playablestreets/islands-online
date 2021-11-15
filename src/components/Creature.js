import React from 'react'
import styled from "styled-components"

const Wrapper = styled.div`
    position: absolute;
    left: ${props => `calc(50% - ${props.dimensions.width / 2 }px)`};
    top: ${props => `calc(50% - ${props.dimensions.height / 2 }px)`};
`

const Image = styled.img``

const Creature = ({ data }) => {
    const { data: d } = data
    const { creature_image } = d
    const { url, dimensions} = creature_image
    
    return (
        <Wrapper dimensions={dimensions}>
            <Image src={url} />
        </Wrapper>
    )
}

export default Creature
