import {notification} from 'antd';

notification.config({
    placement: 'topRight',
    duration: 3,
});

const _openNotificationWithIcon = (type = 'info', message, description = '') => {
    notification[type]({
        message: message,
        description: description
    });
};

export const openSuccessNotification = (message, description = '') => {
    return _openNotificationWithIcon('success', message, description)
};

export const openInfoNotification = (message, description = '') => {
    return _openNotificationWithIcon('info', message, description)
};

export const openWarningNotification = (message, description = '') => {
    return _openNotificationWithIcon('warning', message, description)
};

export const openErrorNotification = (message, description = '') => {
    return _openNotificationWithIcon('error', message, description)
};
