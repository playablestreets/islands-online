import React, { useEffect, useRef, useState } from "react"
import ReactHowler from "react-howler"

const AudioManager = ({ setPlayTrackFn }) => {
  const noOfTracks = 9
  const trackRefs = useRef([])
  const playTracks = useRef(false)

  const playTrack = trackNo => {
    const selectedTrack = trackRefs.current[trackNo - 1]?.howler

    if (!playTracks.current) {
      console.log("RUN ONCE", playTracks)
      playTracks.current = true
      trackRefs.current.forEach(track => track.seek(0))
    }

    trackRefs.current.forEach((track, i) =>
      console.log("track pos", i, track.seek())
    ) // logs tracks playback time

    selectedTrack.fade(0, 1, 1000)

    // fades out track after 4 seconds and ends at 5 seconds
    setTimeout(() => {
      selectedTrack.fade(1, 0, 1000)
    }, 4000)
  }

  useEffect(() => {
    if (trackRefs.current.length > 0) {
      setPlayTrackFn(() => playTrack)
    }
  }, [trackRefs])
  

  return (
    <>
      {Array.from(Array(noOfTracks)).map((_, i) => (
        <>
          <ReactHowler
            src={`/static/music/Islands_Web_${i + 1}.mp3`}
            preload={true}
            playing={true}
            ref={ref =>
              trackRefs.current.length < 9 && trackRefs.current.push(ref)
            }
            key={i}
            volume={0}
            loop={true}
          />
        </>
      ))}
    </>
  )
}

export default AudioManager
