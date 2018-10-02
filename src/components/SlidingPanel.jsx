import React, { Component } from 'react';
import Modal from 'react-modal';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';

class SlidingPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPaneOpen: false,
        };
    }

    componentDidMount() {
        Modal.setAppElement(this.el);
    }

    closePanel = () => {
        this.props.close();
    }

    render() {
        const { isOpen, content } = this.props;
        return (
            <div ref={ref => this.el = ref}>
            <SlidingPane
                className='some-custom-class'
                overlayClassName='some-custom-overlay-class'
                isOpen={ isOpen }
                title='REDA Details'
                subtitle='Info based on click'

                onRequestClose={ () => {
                    // triggered on "<" on left top click or on outside click
                    this.closePanel();
                } }>
                <div>{content}</div>
                <br />
                <img src='img.png' />
            </SlidingPane>
            </div>
        );
    }
}

export default SlidingPanel;