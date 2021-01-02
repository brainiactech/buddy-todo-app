import styled from "styled-components";

export const AllTodosWrapper = styled.div`
    p {
        margin: 0;
    }

    .content-container {
        height: 30px;
    }

    button {
        cursor: pointer;

        &:disabled {
            pointer-events: none;
            opacity: 0.5;
        }
    }

    @keyframes slideDown {
        0% {
            height: 10px;
        }

        100% {
            height: 500px;
        }
    }
    .hide {
        max-height: 0;
        overflow: hidden;
    }
    
    .holiday-form input {
        height: 40px;
    }
    
    .holiday-form select {
        border-radius: 20px;
        height: 40px;
        overflow: hidden;
        width: 100%;
        border: none;
        font-size: 14px;
        padding: 5px;
        display: block;
        color: #493e3e;
        background-color: #e8e6e6;
    }
`

export const Name = styled.div`
    color: #1E93FB;
    cursor: pointer;
`

export const BtnContainer = styled.div`
    margin-top: 40px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    .my-plans-approval-btns{
        margin-left: 10px;
    }
`
