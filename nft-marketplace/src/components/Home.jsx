import React from 'react'
import Navbar from './Navbar'
import styled from "styled-components";

function Home() {
  return (
    <Section>
      <Navbar />
    </Section>
  )
}

const Section = styled.section`
 margin: 0.5rem; 
 background-color: #232835; 
 border-radius: 1rem; 
 height: 100vh; 
`; 

export default Home