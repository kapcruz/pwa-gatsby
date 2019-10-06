import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const Profile = () => (
    <StaticQuery 
        query={graphql`
        query MyQuery {
            site {
              siteMetadata {
                author
                description
                title
              }
            }
          }      
        `}
        render={({
            site:{ 
                    siteMetadata: {title, description},
                }
            }) => (
                <div className="Profile-wrapper">
                    <h1>{title}</h1>
                    <h2>Desenvolvedora</h2>
                    <p>{description}</p>
                </div>
            )
        }
    />
)

export default Profile