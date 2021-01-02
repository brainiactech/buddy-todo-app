import styled from "styled-components";

export const ModalWrapper = styled.div`
  .modal-overlay-div {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1000;
    background-color: rgba(0, 0, 0, .65);
}

.modal-content-div {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10000;
    overflow: auto;
    text-align: center;
    padding: 4px;
    cursor: pointer;
}

.modal-content-div:after {
    vertical-align: middle;
    display: inline-block;
    height: 100%;
    margin-left: -.05em;
    content: '';
}

.modal-dialog-div {
    position: relative;
    outline: 0;
    width: auto;
    display: inline-block;
    vertical-align: middle;
    box-sizing: border-box;
    max-width: auto;
    cursor: default;
    border-radius: 4px;
    background: #fff;
    width: 500px;
    max-width: 100%;
    padding: 5px 20px;
    text-align: left;
    max-height: 400px;
    min-height: 150px;
    padding: 20px;
    overflow: auto;
}

.close-modal-icon {
    position: absolute;
    top: 0;
    right: 0;
    margin: 5px 10px;
    font-size: 16px;
    font-weight: 500;
    
    &:hover {
        background-color: darkgray;
    }
}

.close-modal-icon:hover {
    cursor: pointer;
}

.history-container {
    text-align: center;
}

.history-card {
    border: 1px solid;
    margin: 10px 0px;
    padding: 8px;
    border-radius: 4px;
    width: 100%;
}

.employee-avatar {
    height: 100px;
    border-radius: 50%;
    border: 1x solid;
    display: block;
    margin: auto;
}

.user-name, .user-title {
    display: inline;
}

.card-body {
    width: 100%;
}

.card-body p {
    margin: 0;
}

.karma-reason {
    font-size: 14px;
}

.karma-date {
    font-size: 11px;
    font-style: italic;
}
`;
