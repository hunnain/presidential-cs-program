import React, { Component } from "react";
import logo from "../../assets/piaic-logo.svg"

class Cover extends Component {
    render() {
        return (
            <div class="container-fluid my-container">
                <div class="container">
                    <div class="main">
                        <img src={logo} class="piaic-logo" alt="logo" />
                        <p>Presidential Initiative for<br />
                            Artificial Intelligence and Computing (PIAIC)</p>
                        <a href="https://www.piaic.org" class="launch">Launch</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cover;