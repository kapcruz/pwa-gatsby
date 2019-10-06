import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Profile = () => {
    const {
        site: {
            siteMetadata: {description, title}
        },
    } = useStaticQuery(graphql`
    query MyQuery {
        site {
          siteMetadata {
            description
            title
          }
        }
      }      
    `) 
    return (
        <div className="Profile-wrapper">
            <h1>{title}</h1>
            <h2>Desenvolvedora</h2>
            <p>{description}</p>
        </div>
    )
}

export default Profile