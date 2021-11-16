import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import ReactHowler from 'react-howler'

const Wrapper = styled.div`
    position: absolute;
    left: ${props => `calc(${props.position.x} - ${props.dimensions.width / 2 }px)`};
    top: ${props => `calc(${props.position.y} - ${props.dimensions.height / 2 }px)`};
    display: ${props => props.show ? "block" : "none"};
`

const Image = styled.img``


const Creature = ({ data, islands, index }) => {
    const { data: d, position } = data
    const { creature_image } = d
    const { url, dimensions} = creature_image
    const show = islands[index]?.show

    const [playSound, setPlaySound] = useState(false)
    const [soundPlayer, setSoundPlayer] = useState(null)

    useEffect(() => {
        if (playSound) {

            soundPlayer.howler.fade(1, 0, 1000);
            soundPlayer.howler.play()
        }
    }, [playSound])
    
    return (
        <Wrapper dimensions={dimensions} onClick={() => setPlaySound(true)} position={position} show={show}>
            <Image src={url} />
            <ReactHowler src="/sample.wav" preload={true} playing={false} ref={(ref) => setSoundPlayer(ref)}/>
        </Wrapper>
    )
}

export default Creature
