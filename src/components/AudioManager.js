import React, { useEffect, useRef } from "react"
import ReactHowler from "react-howler"

const AudioManager = ({ setPlayTrackFn, animationDuration }) => {
  const trackRefs = useRef([])
  const playTracks = useRef(false)

  const noOfTracks = 9
  const trackVolume = 0.5
  const volumeZero = 0
  const beginFadeoutTime = animationDuration - 1000
  const fadeTime = 1000

  const playTrack = trackNo => {
    const selectedTrack = trackRefs.current[trackNo - 1]?.howler

    if (!playTracks.current) {
      playTracks.current = true
      trackRefs.current.forEach(track => track.seek(0))
    }

    console.log("Track sync logs")
    trackRefs.current.forEach((track, i) =>
      console.log(
        `Track-${i + 1} playback position: ${track.seek().toFixed(3)}sec at ${(
          performance.now() / 1000
        ).toFixed(3)}sec`
      )
    )

    selectedTrack.fade(volumeZero, trackVolume, fadeTime)

    setTimeout(() => {
      selectedTrack.fade(trackVolume, volumeZero, fadeTime)
    }, beginFadeoutTime)
  }

  useEffect(() => {
    if (trackRefs.current.length > 0) {
      setPlayTrackFn(() => playTrack)
    }
  }, [trackRefs])

  return (
    <>
      {Array.from(Array(noOfTracks)).map((_, i) => (
        <ReactHowler
          src={`../../music/Islands-Web-${i + 1}.mp3`}
          preload={true}
          playing={true}
          ref={ref =>
            trackRefs.current.length < 9 && trackRefs.current.push(ref)
          }
          key={i}
          volume={0}
          loop={true}
        />
      ))}
    </>
  )
}

export default AudioManager
