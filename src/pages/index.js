import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi everyone!</h1>
    <p>My name is Roger and I'm a boot camp student at UC Davis. I am currently studying to be a full stack web developer.</p>
    <p>I'm looking forward to practicing what I've been learning, and to collaborate with everyone I meet at the hackathon. I want to take this opportunity to network and see what I am capable of outside of my boot camp.</p>
    <p>Check out my <a href="https://github.com/Rawgher" target="_blank">github</a>.</p>
    <Link to="/page-2/">Page 2</Link>
  </div>
)

export default IndexPage
