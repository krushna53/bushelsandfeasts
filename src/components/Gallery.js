import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const Gallery = () => {
  const data = useStaticQuery(graphql`
    query {
      getImages: allFile(filter: { relativeDirectory: { eq: "cookbook" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  const images = data.getImages.edges
  return (
    <GalleryWrapper>
      {images.map(({ node }, index) => {
        return (
          <div key={index} className={`item`}>
            <Img fluid={node.childImageSharp.fluid} />
          </div>
        )
      })}
    </GalleryWrapper>
  )
}

const GalleryWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  .item {
    width: 20%;
  }
  @media (max-width: 768px) {
    .item {
      width: 50%;
    }
  }
`

export default Gallery
