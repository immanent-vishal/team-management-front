
export default function showMessage(title, message, type) {
    const myNotification = window.createNotification({
        title: title,
        message: message,
        closeOnClick: true,
        displayCloseButton: false,
        positionClass: 'nfc-top-right',
        onclick: false,
        theme: type
    });
    myNotification({
        title: title,
        message: message,
        closeOnClick: true,
        displayCloseButton: false,
        positionClass: 'nfc-top-right',
        onclick: false,
        theme: type
    });
}

