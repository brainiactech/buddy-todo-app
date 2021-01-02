import styled from 'styled-components';

export const DashboardWrapper = styled.div`
  .container {
    width: 100%;
    margin-right: auto;
    margin-left: auto;
  }
  .main {
    padding-left: 260px;
    min-width: 100%;
    background: #f6f6f6;
    min-height: 100vh;

    .content {
      padding: 20px;
    }
  }
  .stats-item {
    display: block;
    background: #1a1f24;
    margin-bottom: 15px;
    padding: 20px;
    border-radius: 5px;
    color: #fff;
    .stats-icon {
      float: right;
      font-size: 3em;
      color: #fff;
      font-weight: 300;
    }
    h1 {
      margin: 0;
      color: #fff;
    }
    h4 {
      color: #11bcce;
      font-weight: 300;
    }
  }
  .float-right {
    float: right;
  }
  .main-color {
    color: #1a1f24;
  }
  .text-left {
    text-align: left;
  }
  .text-center {
    text-align: center;
  }
  .text-right {
    text-align: right;
  }
  .input-pane label {
    text-align: left;
  }
  .input-pane input, .input-pane textarea {
    width: 100%;
    border: 1px solid #f2f2f2;
    height: 45px;
    margin-top: 10px;
    padding: 10px;
  }
  .input-pane .field {
    margin-top: 15px;
  }
  .mt-2 {
    margin-top: 25px;
  }
  .btn-primary {
    background: #149c31;
    color: #fff;
    height: 45px;
    border-radius: 5px;
    border: none;
    padding: 5px 15px;
    width: 100%;
    font-size: 0.9em;
    font-weight: 300;
  }
  .btn-danger {
    background: #c3142b;
    color: #fff;
    height: 45px;
    border-radius: 5px;
    border: none;
    padding: 5px 15px;
    width: 100%;
    font-size: 0.9em;
    font-weight: 300;
  }
  .btn-cancel {
    background: #fff;
    color: #686868;
    height: 45px;
    border-radius: 5px;
    border: 1px solid #686868;
    padding: 5px 15px;
    width: 100%;
    font-size: 0.9em;
    font-weight: 500;
  }
  .btn-block {
    width: 100%;
  }
  .lighter {
    font-weight: 300;
  }
  .loading-pane {
    background: #fff;
    text-align: center;
    padding: 40px 10px;
  }
  .has-error {
    color: red;
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

  .avatar {
    height: 40px;
    border-radius: 50%;
    border: 1px solid #ea157b;
    display: block;
  }

  .avatar:hover {
    cursor: pointer;
  }

  .employee-avatar {
    height: 100px;
    border-radius: 50%;
    display: block;
    margin: auto;
  }

  .user-name,
  .user-title {
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
  .red {
    color: rgb(236, 99, 45);
  }
  .green {
    color: green;
  }
  .bg-green {
    background-color: green;
  }

  .pointer {
    cursor: pointer;
  }
`;

export const TableWrapper = styled.div`
  box-shadow: 0px 1px 2px 1px #dbdbdb;
  nav {
    padding: 10px 10px;
    background: #1a1f24;
    height: 65px;
    h2 {
      margin: 0;
      padding: 10px;
      font-weight: 300;
      color: #fff;
    }
    .btn-filter {
      background: #14449c9b;
      color: #fff;
      height: 45px;
      border-radius: 5px;
      border: none;
      padding: 5px 15px;
      width: 100%;
      font-size: 0.9em;
      font-weight: 300;
    }
    .btn-filter.active {
      background: #fff;
      color: #000;
    }
    .display-inline {
      display: inline;
    }
    .input-field {
      padding: 5px 15px;
      height: 45px;
      border: none;
      border-radius: 5px;
      font-size: 0.9em;
      background: #14449c9b;
      color: #fff;
      width: 100%;
    }
    .input-field::placeholder {
      color: #d8d8d8;
      font-weight: 300;
    }
  }
  table {
    // background: #1a1f24;
    width: 100%;
    border-collapse: collapse;
    // color: #fff;
    tr {
      border: solid;
      border-width: 1px 0;
    }
    tr:last-child {
      border-bottom: none;
    }
    th {
      padding: 15px;
      font-weight: 500;
      text-transform: uppercase;
    }
    td {
      padding: 15px;
      font-size: 0.9em;
      font-weight: 500;
      font-weight: normal;
    }
    thead tr th:nth-child(4),
    tbody tr td:nth-child(4) {
      width: ${props => (props.milestones ? '13em' : 'auto')};
      min-width: ${props => (props.milestones ? '13em' : 'auto')};
      max-width: ${props => (props.milestones ? '13em' : 'auto')};
      word-break: break-all;
    }
    .btn-action {
      padding: 5px 10px;
      border-radius: 5px;
      font-weight: 300;
      background: #1a1f24;
      color: #fff;
      font-size: 0.9em;
      border: none;
      margin-right: 10px;
    }

    .btn-main {
      padding: 5px 10px;
      border-radius: 5px;
      font-weight: 400;
      color: #fff;
      font-size: 0.9em;
      border: none;
      margin-right: 10px;
      background: #1a1f24;
    }

    .btn-action.success {
      background: rgb(27, 182, 86);
      color: #fff;
    }

    .btn-action.delete {
      background: #d92525;
      color: #fff;
    }

    .btn-action.edit {
      background: #f2f2f2;
      margin-right: 10px;
      color: #000;
    }
    button {
      cursor: pointer;
    }
  }
`;

export const TabWrapper = styled.div`
  padding: 0px 0px 20px 0;

  button {
    padding: 10px 20px;
    margin-right: 10px;
    border: 1px solid #1a1f24;
    border-radius: 5px;
  }

  button.active {
    background: #1a1f24;
    color: #fff;
  }

  button:hover {
    cursor: pointer;
  }
`;
