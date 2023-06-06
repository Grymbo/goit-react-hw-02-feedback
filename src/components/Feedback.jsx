import React, {Component} from 'react'

class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }
    
    render() {
        return (
            <>
                <div>
                    <h1>Please Leave Feedback</h1>
                    <button type='button'>Good</button>
                    <button type='button'>Neutral</button>
                    <button type='button'>Bad</button>
                </div>
            </>
        )
    }
}

export default Feedback