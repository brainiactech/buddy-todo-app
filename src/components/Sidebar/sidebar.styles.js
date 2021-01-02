import styled from "styled-components";

export const SidebarWrapper = styled.div`
    .sidebar {
        height: 100%; 
        width: 260px;
        position: fixed;
        z-index: 10;
        top: 0;
        left: 0;
        background-color: #1a1f24;
        box-shadow: 0px 1px 2px 1px #f2f2f2;
        overflow-x: hidden;

        a {
            text-decoration: none;
        }

        .title {
            height:60px;
            display:flex;
            align-items: center;
            font-size: 1.6em;
            padding: 15px 35px;
            font-weight: 600;
            clear: both;
            color: #fff;
        }
        .content {
            justify-content:center;
            .avatar {
                vertical-align: middle;
                width: 130px;
                height: 130px;
                border-radius: 50%;
                margin-top: 40px;
            }
            h2 {
                text-align: center;
                margin: 0;
                color: #11bcce;
                margin-top: 15px;
            }
            p {
                text-align: center;
                color: #fff;
            }
            .nav-pills-list {
                .nav-pills {
                    height: 50px;
                    // background: #393351;
                    color: #fff;
                    padding: 15px 20px;
                    margin: 15px;
                    border-radius: 6px;
                    span {
                        margin-left: 10px;
                    }
                }
                .nav-pills.active {
                    background: #000;
                    color: #11bcce;
                }
            }
        }
    }
`