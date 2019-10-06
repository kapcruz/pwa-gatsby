import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Avatar from '../Avatar'
import * as S from './styled'

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
        <S.ProfileWrapper>
          <S.ProfileLink>
            <Avatar />
            <S.ProfileAuthor>
              {title}
              <S.ProfilePosition><h2>Desenvolvedora</h2></S.ProfilePosition>
            </S.ProfileAuthor>
          </S.ProfileLink>
            <S.ProfileDescription>{description}</S.ProfileDescription>
        </S.ProfileWrapper>
    )
}

export default Profile