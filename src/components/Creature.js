import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import ReactHowler from 'react-howler'

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

    const [playSound, setPlaySound] = useState(false)
    const [soundPlayer, setSoundPlayer] = useState(null)

    useEffect(() => {
        if (playSound) {

            soundPlayer.howler.fade(1, 0, 1000);
            soundPlayer.howler.play()
        }
    }, [playSound])
    
    return (
        <Wrapper dimensions={dimensions} onClick={() => setPlaySound(true)}>
            <Image src={url} />
            <ReactHowler src="/sample.wav" preload={true} playing={false} ref={(ref) => setSoundPlayer(ref)}/>
        </Wrapper>
    )
}

export default Creature
