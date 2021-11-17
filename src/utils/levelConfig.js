export default creatures => ({
  islandOne: {
    islandNo: 1,
    creatures: [
      {
        ...creatures[0],
        position: {
          x: "20%",
          y: "70%",
        },
        offset: {
          x: 0,
          y: "200px",
        },
        animation: {
          direction: null,
          rotate: false,
        },
      },
      {
        ...creatures[1],
        position: {
          x: "40%",
          y: "10%",
        },
        offset: {
          x: 0,
          y: 0,
        },
        animation: {
          direction: null,
          rotate: true,
        },
      },
      {
        ...creatures[2],
        position: {
          x: "70%",
          y: "60%",
        },
        offset: {
          x: 0,
          y: 0,
        },
        animation: {
          direction: "east",
          rotate: false,
        },
      },
    ],
  },

  islandTwo: {
    islandNo: 2,
    creatures: [
      {
        ...creatures[3],
        position: {
          x: "20%",
          y: "70%",
        },
        offset: {
          x: 0,
          y: 0,
        },
        animation: {
          direction: "northeast",
          rotate: false,
        },
      },
      {
        ...creatures[4],
        position: {
          x: "40%",
          y: "10%",
        },
        offset: {
          x: 0,
          y: 0,
        },
        animation: {
          direction: null,
          rotate: true,
        },
      },
      {
        ...creatures[5],
        position: {
          x: "70%",
          y: "60%",
        },
        offset: {
          x: 0,
          y: 0,
        },
        animation: {
          direction: "west",
          rotate: false,
        },
      },
    ],
  },

  islandThree: {
    islandNo: 3,
    creatures: [
      {
        ...creatures[6],
        position: {
          x: "20%",
          y: "70%",
        },
        offset: {
          x: 0,
          y: 0,
        },
        animation: {
          direction: "northwest",
          rotate: false,
        },
      },
      {
        ...creatures[7],
        position: {
          x: "40%",
          y: "10%",
        },
        offset: {
          x: 0,
          y: 0,
        },
        animation: {
          direction: null,
          rotate: true,
        },
      },
      {
        ...creatures[8],
        position: {
          x: "70%",
          y: "60%",
        },
        offset: {
          x: 0,
          y: -100,
        },
        animation: {
          direction: "southwest",
          rotate: false,
        },
      },
    ],
  },
})
