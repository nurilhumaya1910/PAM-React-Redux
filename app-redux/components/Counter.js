import React, { Component, Fragment } from 'react';
import Display from './Display';
import ButtonCount from './ButtonCount';

class Counter extends Component {
    render() {
        return (
            <Fragment>
                <Display />
                <ButtonCount />
            </Fragment>
        )
    }
}

export default Counter;
