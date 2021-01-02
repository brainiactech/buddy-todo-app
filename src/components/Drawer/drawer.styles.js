import styled from "styled-components";

export const DrawerWrapper = styled.div`
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
    // left: 0;
    z-index: 10000;
    overflow: auto;
    // text-align: center;
    // padding: 4px;
    cursor: pointer;
}

.modal-content-div:after {
    vertical-align: middle;
    display: inline-block;
    height: 100%;
    // margin-left: -.05em;
    content: '';
}

.modal-dialog-div {
    padding: 20px;
    position: relative;
    outline: 0;
    width: auto;
    display: inline-block;
    vertical-align: middle;
    box-sizing: border-box;
    max-width: auto;
    cursor: default;
    background: #fff;
    width: 500px;
    max-width: 100%;
    min-height: 100vh;
    // max-height: 100vh;
    .drawer-nav {
        height: 60px;
        min-height: 60px;
        max-height: 60px;
        padding: 20px;
        background: #fff;
        width: 100%;
        .btn-edit-product {
            background-color: #4C4C4C;
            border-radius: 2px;
            color: #fff;
            padding: 5px 10px;
        }
    }
    .drawer-main {
        padding: 20px;
        padding-top: 30px;
        height: calc(100vh - 145px);
        min-height: calc(100vh - 145px);
        max-height: calc(100vh - 145px);
        overflow-y: scroll;
        .row.display-flex {
            display: flex;
            flex-wrap: wrap;
        }
        .row.display-flex > [class*='col-'] > .grid-card {
            display: flex;
            flex-direction: column;
        }
        .grid-card {
            background-color: #FFFFFF;
            box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.05);
            padding: 15px;
            h6 {
                font-size: 15px;
                font-weight: 500;
                line-height: 18px;
                margin: 0;
            }
            p {
                font-size: 14px;
                font-weight: 400;
                line-height: 17px;
                // margin:0;
            }
            span {
                font-size: 13px;
                font-weight: 400;
                line-height: 16px;
            }
        }
        .form-pane {
            width: 100%;
            label {
                font-size: 14px;
            }
            input, select {
                background-color: #FFFFFF;
                border: 1px solid #DEDEDE;
                width: 100%;
                padding: 15px;
                height: 50px;
            }
            option {
                height: 50px;
            }
            option:hover {
                background: #E4E4E4;
            }
            textarea {
                background-color: #FFFFFF;
                border: 1px solid #DEDEDE;
                width: 100%;
                padding: 15px;
                height: 120px;
            }
        }
        .account-card {
            background-color: #423D3A;
            border-radius: 4px;
            box-shadow: 0 2px 8px 0 rgba(189, 189, 189, 0.5);
            width: 460px;
            height: 250px;
        }
    }
    .drawer-footer {
        padding: 20px;
        height: 80px;
        min-height: 80px;
        max-height: 80px;
        button {
            height: 50px;
            border: none;
            background: #EF783C;
            color: #fff;
        }
        button.delete {
            background: #FF2842;
        }
    }
    .content {
        height: 100vh;
        .green-alert-pane {
            width: 100%;
            background: #2EB85C;
            padding: 20px;
            color: #fff;
            h5 {
                color: #fff;
            }
            p {
                font-weight: lighter;
            }
        }
        .white-alert-pane {
            width: 100%;
            text-align: center;
            background: #fff;
            padding: 20px;
            color: #000;
            h5 {
                color: #000;
            }
            p {
                font-weight: lighter;
            }
            .input-field {
                height: 45px;
                padding: 10px;
                border: 1px solid #f2f2f2;
                width: 100%;
            }
        }
    }
    .orange-alert-pane {
        background-color: #F3E9E5;
        padding: 10px;
        width: 100%;
        text-align: center;
    }
}
`;
