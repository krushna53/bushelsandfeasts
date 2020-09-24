import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const Gallery = () => {
  const data = useStaticQuery(graphql`
    query {
      img1: file(relativePath: { eq: "cookbook/Bouillabaisse.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img2: file(relativePath: { eq: "cookbook/Chicken-with-Mustard.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img3: file(
        relativePath: { eq: "cookbook/Eggplant-and-Ricotta-Tart.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img4: file(relativePath: { eq: "cookbook/Figs-with-Prosciutto.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img5: file(relativePath: { eq: "cookbook/Grilled-Halibut-Fillet.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img6: file(relativePath: { eq: "cookbook/Grilled-Steak-and-Lamb.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img7: file(relativePath: { eq: "cookbook/Heirloom-Tomato-Salad.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img8: file(relativePath: { eq: "cookbook/Honey-Butter-Nectarines.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img9: file(relativePath: { eq: "cookbook/Lamb-Meatballs.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img10: file(relativePath: { eq: "cookbook/Mussels-Cooked.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img11: file(
        relativePath: { eq: "cookbook/Potatoes-with-Reblochon.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img12: file(relativePath: { eq: "cookbook/Pots-de-Creme.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img13: file(
        relativePath: {
          eq: "cookbook/Roasted Chicken and Tarragon CreamTR.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img14: file(
        relativePath: { eq: "cookbook/Roasted-Beet-and-Orange.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img15: file(relativePath: { eq: "cookbook/Steak-au-Poivre.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img16: file(
        relativePath: { eq: "cookbook/Summer-Fruit-PapillotesML.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img17: file(relativePath: { eq: "cookbook/Tomatoes-Stuffed-Nuts.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img18: file(
        relativePath: { eq: "cookbook/Triple-Cream-Brie-Cheesecake.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img19: file(relativePath: { eq: "cookbook/Whipped-Feta-Spread.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img20: file(relativePath: { eq: "cookbook/Zucchini-Fritters.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <GalleryWrapper>
      <div className="item item-1">
        <Img fluid={data.img1.childImageSharp.fluid} />
        <p className="info">
          Bouillabaisse: A Classic Seafood Stew from Provence
        </p>
      </div>
      <div className="item item-2">
        <Img fluid={data.img2.childImageSharp.fluid} />
        <p className="info">Chicken with Mustard</p>
      </div>
      <div className="item item-3">
        <Img fluid={data.img3.childImageSharp.fluid} />
        <p className="info">
          Eggplant and Ricotta Tart with Fresh Herbs and Tomatoes
        </p>
      </div>
      <div className="item item-4">
        <Img fluid={data.img4.childImageSharp.fluid} />
        <p className="info">
          Fresh Figs with Prosciutto, Melon, and Mint Cream
        </p>
      </div>
      <div className="item item-5">
        <Img fluid={data.img5.childImageSharp.fluid} />
        <p className="info">
          Grilled Halibut Fillet with Lemon-Horseradish Cream
        </p>
      </div>
      <div className="item item-6">
        <Img fluid={data.img6.childImageSharp.fluid} />
        <p className="info">
          Grilled Steak and Lamb with Fresh Herbs, Feta, and Pomegranate
        </p>
      </div>
      <div className="item item-7">
        <Img fluid={data.img7.childImageSharp.fluid} />
        <p className="info">
          Heirloom Tomato Salad with Niçoise Olives, Burrata, and Basil
        </p>
      </div>
      <div className="item item-8">
        <Img fluid={data.img8.childImageSharp.fluid} />
        <p className="info">
          Grilled Honey-Butter Nectarines with Cinnamon Ice Cream
        </p>
      </div>
      <div className="item item-9">
        <Img fluid={data.img9.childImageSharp.fluid} />
        <p className="info">
          Lamb Meatballs with Minted Yogurt and Pomegranate Molasses
        </p>
      </div>
      <div className="item item-10">
        <Img fluid={data.img10.childImageSharp.fluid} />
        <p className="info">Mussels Cooked in Wine, Cream, and Tarragon</p>
      </div>
      <div className="item item-11">
        <Img fluid={data.img11.childImageSharp.fluid} />
        <p className="info">Potatoes with Reblochon, Bacon, and Onions</p>
      </div>
      <div className="item item-12">
        <Img fluid={data.img12.childImageSharp.fluid} />
        <p className="info">
          Chocolate-Coconut Pots de Crème with Passion Fruit Caramel
        </p>
      </div>
      <div className="item item-13">
        <Img fluid={data.img13.childImageSharp.fluid} />
        <p className="info">Roasted Chicken and Tarragon Cream</p>
      </div>
      <div className="item item-14">
        <Img fluid={data.img14.childImageSharp.fluid} />
        <p className="info">
          Roasted Beet and Orange Salad with Feta and Almonds
        </p>
      </div>
      <div className="item item-15">
        <Img fluid={data.img15.childImageSharp.fluid} />
        <p className="info">Steak Au Poivre</p>
      </div>
      <div className="item item-16">
        <Img fluid={data.img16.childImageSharp.fluid} />
        <p className="info">Summer Fruit Papillotes</p>
      </div>
      <div className="item item-17">
        <Img fluid={data.img17.childImageSharp.fluid} />
        <p className="info">
          Tomatoes Stuffed with Almonds, Herbs, Cheese, and Garlic
        </p>
      </div>
      <div className="item item-18">
        <Img fluid={data.img18.childImageSharp.fluid} />
        <p className="info">
          Triple Cream Brie Cheesecake with Mango and Passion Fruit
        </p>
      </div>
      <div className="item item-19">
        <Img fluid={data.img19.childImageSharp.fluid} />
        <p className="info">Whipped Feta Spread with Mint and Pomegranate</p>
      </div>
      <div className="item item-20">
        <Img fluid={data.img20.childImageSharp.fluid} />
        <p className="info">Zucchini Fritters with Basil-Crème Fraîche</p>
      </div>
    </GalleryWrapper>
  )
}

const GalleryWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  margin: 0rem auto;
  .item {
    position: relative;
    width: 25%;
  }
  .info {
    text-transform: uppercase;
    font-size: 0.8rem;
    line-height: 1rem;
    position: absolute;
    top: 0;
    left: 0;
    padding: 1rem;
    color: var(--white);
    font-weight: bold;
    text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
  }
  @media (max-width: 768px) {
    .item {
      width: 100%;
    }
  }
`

export default Gallery
