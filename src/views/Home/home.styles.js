import styled from "styled-components";

export const LoginWrapper = styled.div`
    /* background: #1a1f24; */
    position: absolute;
    height: 100%;
    width: 100%;
    text-align: center;

    .robot {
        font-size 150px;
        color: #11bcce;
        margin: 20px;
    }

    .team-background {
      
        background: #000;
        color: #fff;
        background-size: cover;
    }

    button {
        padding: 10px;
        background: #ea157b;
        border: none;
        border-radius: 60px;
        width: 250px;
        color: #fff;
        position: relative;
        font-size: 16px;
    }

    button:hover {
        cursor: pointer;
        background: #a70050;
    }

    button .google-login {
        position: absolute;
        left: 10px;
        top: 14px;
        font-size 20px;
    }
`;
