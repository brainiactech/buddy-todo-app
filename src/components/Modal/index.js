import React, { PureComponent } from "react";
import { ModalWrapper } from "./modal.styles";
import { Icon } from 'antd';

class Modal extends PureComponent {
    listenKeyboard = (event) => {
        if (event.key === 'Escape' || event.keyCode === 27) {
            this.props.onClose();
        }
    }

    componentDidMount() {
        if (this.props.onClose) {
            window.addEventListener('keydown', this.listenKeyboard, true);
        }
    }

    componentWillUnmount() {
        if (this.props.onClose) {
            window.removeEventListener('keydown', this.listenKeyboard, true);
        }
    }

    closeModal = () => {
        this.props.onClose();
    }

    onDialogClick(event) {
        event.stopPropagation();
    }

    render() {
        return this.props.open ?
            (
                <ModalWrapper className="row">
                    <div>
                        <div className="modal-overlay-div" />
                        <div className="modal-content-div" onClick={this.closeModal}>
                            <div className="modal-dialog-div" onClick={this.onDialogClick}>
                                <Icon className="close-modal-icon" type="close" theme="outlined" onClick={this.closeModal} />
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                </ModalWrapper>
            ) : ''
    }
}

export default Modal;
