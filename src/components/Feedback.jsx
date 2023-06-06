import React, {Component} from 'react'
import Button from './button'
import styles from "../styles/feedback.module.css"
import Statistics from './Statistics'

class Feedback extends Component {
    // Initial State
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    // Changin the state when the user perfoms a +1
    counterGood = () => {
        this.setState({
            good: this.state.good + 1,
        })
    }
    counterNeutral = () => {
        this.setState({
            neutral: this.state.neutral + 1,
        })
    }
    counterBad = () => {
        this.setState({
            bad: this.state.bad + 1,
        })
    }
    
    render() {
        return (
            
                <div>
                    <h1>Please Leave Feedback</h1>

                    <div className={styles.buttons__container}>
                        <Button buttonTitle="Good" onclickHandler={this.counterGood}/>
                        <Button buttonTitle="Neutral" onclickHandler={this.counterNeutral}/>
                        <Button buttonTitle="Bad" onclickHandler={this.counterBad}/>
                    </div>

                    {
                        this.state.good != 0 ||
                        this.state.neutral != 0 ||
                        this.state.bad != 0 ? (
                            <Statistics
                                good={this.state.good}
                                neutral={this.state.neutral}
                                bad={this.state.bad}
                            />
                        ) : (
                            <h3> No Feedback given</h3>
                        )
                    }
                </div>
            
        )
    }
}

export default Feedback