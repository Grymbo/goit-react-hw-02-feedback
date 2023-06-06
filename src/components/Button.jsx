import React, { Component } from "react";

class Button extends Component {

    render() {

        const { buttonTitle, onclickHandler } = this.props;

        return (
            <>
                <button className={ StyleSheet.button } onClick={ onclickHandler }>
                    { buttonTitle }
                </button>
            </>
        )
    }
} 

export default Button;