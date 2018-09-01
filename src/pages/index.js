import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi everyone!</h1>
    <p>My name is Roger and I'm a boot camp student.</p>
    <p>I'm looking forward to practicing what I've been learning, and to learn a ton from the people I meet at the hackathon.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
