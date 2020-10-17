import React, { Component } from "react"

class EbookButton extends Component {
  componentDidMount() {
    this.stripe = window.Stripe(
      `pk_live_51HYN50KwzUaWz0rWRWUeLlrNz555eZn3hQIQ9yjWCvuSRgmIlEYAdlLTBrIVbI1GLBTbHT25FasIRrcdeWI3Nw4T00EYGlGgpC`
    )
  }

  render() {
    return (
      <form
        onSubmit={event => {
          event.preventDefault()
          this.stripe
            .redirectToCheckout({
              lineItems: this.props.lineItems,
              mode: "payment",

              // Note that it is not guaranteed your customers will be redirected to this
              // URL *100%* of the time, it's possible that they could e.g. close the
              // tab between form submission and the redirect.
              successUrl: `https://www.bushelsandfeasts.com/success`,
              cancelUrl: `https://www.bushelsandfeasts.com/cancel`,
            })
            .then(function (result) {
              if (result.error) {
                // If `redirectToCheckout` fails due to a browser or network
                // error, display the localized error message to your customer.
                var displayError = document.getElementById("error-message")
                displayError.textContent = result.error.message
              }
            })
        }}
      >
        <button type="submit">{this.props.label}</button>
      </form>
    )
  }
}

export default EbookButton
