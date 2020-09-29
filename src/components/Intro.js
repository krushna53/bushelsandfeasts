import React from "react"
import styled from "styled-components"
import Section from "../components/globals/section/Section"
import SignUpForm from "../components/SignupForm"

const Intro = () => {
  return (
    <IntroWrapper>
      <Section style={{ alignItems: "center" }}>
        <div className="introBox">
          <ul>
            <li>LA</li>
            <li>DOLCE</li>
            <li>RINA</li>
          </ul>
          <p className="about-info">
            <strong>Hi! I’m Rina.</strong> I’m a wife, mom, cookbook author, and
            chef. Join me as I relive my most treasured experiences through the
            dishes I create.
          </p>
        </div>
        <div className="contactBox">
          <div className="signup-container">
            <SignUpForm />
          </div>
        </div>
      </Section>
    </IntroWrapper>
  )
}

const IntroWrapper = styled.div`
  margin: 2rem auto;
  justify-content: space-between;
  .introBox,
  .contactBox {
    flex-basis: 40%;
  }
  .contactBox {
    flex-basis: 50%;
    #message {
      height: 100px;
    }
  }
  .signup-container {
    background: #f1f1f1;
    padding: 2rem;
  }
  .introBox {
    ul {
      list-style-type: none;
      margin: 0rem;
      font-size: 6rem;
      font-family: Poppins;
      font-weight: bold;
      color: var(--mainColor);
      line-height: 5rem;
    }
  }
  .about-info {
    width: 90%;
    padding-left: 0.4rem;
    margin-top: 1rem;
  }
  @media (max-width: 768px) {
    .signup-container {
      margin-top: 2rem;
    }
    .introBox,
    .contactBox {
      flex-basis: 100%;
      margin: 0 auto;
      ul {
        font-size: 4rem;
        line-height: 2.5rem;
      }
    }
  }
`

export default Intro
