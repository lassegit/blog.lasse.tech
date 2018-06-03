import React, { Component } from 'react'
import Link from 'gatsby-link'
import Biography from '../Biography'

export default class Header extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to={'/'}>
            lasse.tech
          </Link>
          <span>Menu…</span>
        </div>
        <Biography />
      </div>
    );
  }
}
