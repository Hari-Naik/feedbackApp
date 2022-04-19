import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isClicked: false}

  updateState = () => {
    this.setState({isClicked: true})
  }

  sendFeedback = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="feedback-container">
        <h3 className="heading">
          How satisfied are you with our customer support performance
        </h3>
        <ul className="emojis-container">
          {emojis.map(each => (
            <li key={each.id} className="emoji-container">
              <button
                type="button"
                className="button"
                onClick={this.updateState}
              >
                <img src={each.imageUrl} alt={each.name} className="img" />
                <p className="emoji-name">{each.name}</p>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  feedbackResponse = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="thankyou-container">
        <img src={loveEmojiUrl} alt="love emoji" className="love-img" />
        <h3 className="thankyou-msg">Thank You</h3>
        <p className="response-msg">
          We will use your feedback to improve our customer support performance
        </p>
      </div>
    )
  }

  render() {
    const {isClicked} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          {isClicked ? this.feedbackResponse() : this.sendFeedback()}
        </div>
      </div>
    )
  }
}

export default Feedback
