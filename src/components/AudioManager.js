import React, { useEffect, useRef, useState } from "react"
import ReactHowler from "react-howler"

const AudioManager = ({ setPlayTrackFn }) => {
  // useEffect(() => {
  //     if (playSound) {
  //       soundPlayer.howler.fade(1, 0, 1000)
  //       soundPlayer.howler.play()
  //     }
  //   }, [playSound])
  const noOfTracks = 9

  const trackRefs = useRef([])

  const [playTracks, setPlayTracks] = useState(false)

  const playTrack = trackNo => {
    //   console.log('from fn trackRefs', trackRefs)
    //     trackRefs.current[trackNo]?.howler.play()
    const selectedTrack = trackRefs.current[trackNo - 1]?.howler
    // selectedTrack.play()
    // selectedTrack.fade(0, 1, 20000)

    if (!playTracks) {
      setPlayTracks(true)
      trackRefs.current.forEach(track => track.play())
    }

    console.log(selectedTrack)
      selectedTrack.fade(0, 1, 1000)
      const start = performance.now()
      setTimeout(() => {
        selectedTrack.fade(1, 0, 1000)
        const end = performance.now()
        console.log("performance:", end - start)
      }, 4000)
  }

  useEffect(() => {
    console.log("trackRefs", trackRefs)
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
            playing={false}
            ref={ref =>
              trackRefs.current.length < 9 && trackRefs.current.push(ref)
            }
            key={i}
            volume={0}
            loop={true}
          />
          <button
            style={{
              position: "absolute",
              zIndex: 999,
              top: 0,
              left: `${(i + 1) * 60}px`,
            }}
            onClick={() => trackRefs.current[i].howler.play()}
          >
            play {i}
          </button>
        </>
      ))}
    </>
  )
}

export default AudioManager
