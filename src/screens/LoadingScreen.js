import React from 'react'
import styled from "styled-components"

const Text = styled.h2`
  text-transform: uppercase;
  font-size: 3em;
  font-weight: 500;
  color: magenta;
  width: 100%;
  text-align: center;
  margin-top: 40vh;
`

export const LoadingScreen = () => {
    return (
        <div>
          <Text>Loading...</Text>  
        </div>
    )
}
