import React from 'react'
import Creature from "./Creature"

const Creatures = ({ animationDuration, creatures, playTrackFn }) => {
    return (
        <div>
            {creatures?.map((creature, index) => {
                return (
                    <Creature
                        data={creature}
                        key={index}
                        index={index}
                        playTrackFn={playTrackFn}
                        animationDuration={animationDuration}
                    />
                )
            })}
        </div>
    )
}

export default Creatures
