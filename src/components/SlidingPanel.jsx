import React, { Component } from 'react';
import { render } from 'react-dom';
import Modal from 'react-modal';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPaneOpen: false,
        };
    }

    componentDidMount() {
        Modal.setAppElement(this.el);
    }

    componentWillReceiveProps() {
        debugger;
        this.setState({ isPaneOpen: !!this.props.prop.isDetailsPaneOpen })
    }

    closePane = () => {
        this.props.closeDetailsPane();
    }

    render() {
        return (
            <div ref={ref => this.el = ref}>
            <SlidingPane
                className='some-custom-class'
                overlayClassName='some-custom-overlay-class'
                isOpen={ this.state.isPaneOpen }
                title='REDA Details'
                subtitle='Info based on click'

                onRequestClose={ () => {
                    // triggered on "<" on left top click or on outside click
                    this.closePane();
                } }>
                <div>Some REDA details</div>
                <br />
                <img src='img.png' />
            </SlidingPane>
            </div>
        );
    }
}

export default SlidingPane;