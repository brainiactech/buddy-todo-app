import React, { PureComponent } from "react";

import { DrawerWrapper } from "./drawer.styles";



class Drawer extends PureComponent {
    listenKeyboard(event) {
        if (event.key === 'Escape' || event.keyCode === 27) {
            this.props.onClose();
        }
    }

    componentDidMount() {
        if (this.props.onClose) {
            window.addEventListener('keydown', this.listenKeyboard.bind(this), true);
        }
    }

    componentWillUnmount() {
        if (this.props.onClose) {
            window.removeEventListener('keydown', this.listenKeyboard.bind(this), true);
        }
    }

    onOverlayClick() {
        this.props.onClose();
    }

    onDialogClick(event) {
        event.stopPropagation();
    }
    render() {
        return this.props.open ? (
            <DrawerWrapper className="row">
                <div>
                    <div className="modal-overlay-div" onClick={this.onOverlayClick.bind(this)} />
                    <div className="modal-content-div" onClick={this.onOverlayClick.bind(this)}>
                        <div className="modal-dialog-div" onClick={this.onDialogClick}>
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </DrawerWrapper>
        ) : <div></div>;
    }
}

export default Drawer;
