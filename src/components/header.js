import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'orange',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <span>Vì Thiên Chúa yêu thương thế gian...!</span>
    </div>
  </div>
)

export default Header
