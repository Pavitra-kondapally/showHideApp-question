// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {isFirstNameHidden: true, isLastNameHidden: true}

  clickingFirstNameButton = () => {
    this.setState(prevState => ({
      isFirstNameHidden: !prevState.isFirstNameHidden,
    }))
  }

  clickingLastNameButton = () => {
    this.setState(prevState => ({
      isLastNameHidden: !prevState.isLastNameHidden,
    }))
  }

  render() {
    const {isFirstNameHidden, isLastNameHidden} = this.state
    const firstNameClassName = isFirstNameHidden
      ? 'firstName-container'
      : 'firstName-hidden-container'
    const lastNameClassName = isLastNameHidden
      ? 'lastName-container'
      : 'lastName-hidden-container'

    return (
      <div className="container">
        <h1 className="heading-style">Show/Hide</h1>
        <div className="buttons-container">
          <div>
            <button
              type="button"
              className="button-styling"
              onClick={this.clickingFirstNameButton}
            >
              Show/Hide Firstname
            </button>
            <div className={firstNameClassName}>
              <p>Joe</p>
            </div>
          </div>
          <div>
            <button
              type="button"
              className="button-styling"
              onClick={this.clickingLastNameButton}
            >
              Show/Hide Lastname
            </button>
            <div className={lastNameClassName}>
              <p>Jonas</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
