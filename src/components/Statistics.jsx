import React, {Component} from 'react'
import styles from "../styles/statistics.module.css"

class Statistics extends Component  {
    render() {
        const { good, neutral, bad } = this.props;

        return (
            <>
                <h1>Statistics</h1>
                <div className={styles.statistics__container}>
                    <p>Good: { good }</p>
                    <p>Neutral: { neutral }</p>
                    <p>Bad: { bad }</p>
                    <p>total : { good + bad + neutral }</p>
                    <p>Positive Feedback: {((good / (good + bad + neutral)) * 100).toFixed(0)}%</p>
                </div>
            </>
        )
    }
}

export default Statistics