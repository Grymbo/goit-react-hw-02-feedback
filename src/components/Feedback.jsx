import React, {Component} from 'react'
import Button from './button'
import styles from "../styles/feedback.module.css"

class Feedback extends Component {
    // Initial State
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    // Changin the state when the user perfoms a +1
    counterGood = () => {
        this.state({
            good: this.state.good + 1
        })
    }
    counterNeutral = () => {
        this.state({
            neutral: this.state.neutral + 1
        })
    }
    counterBad = () => {
        this.state({
            bad: this.state.bad + 1
        })
    }
    
    render() {
        return (
            <>
                <div>
                    <h1>Please Leave Feedback</h1>

                    <div className={styles.buttons__container}>
                        <Button buttonTitle="God" inclickHandler={this.counterGood}/>
                        <Button buttonTitle="Neutral" inclickHandler={this.counterNeutral}/>
                        <Button buttonTitle="Bad" inclickHandler={this.counterBad}/>
                    </div>
                    
                </div>
            </>
        )
    }
}

export default Feedback