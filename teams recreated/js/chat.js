const messageInput = document.querySelector('#messageInput');
const sendButton = document.querySelector('#sendButton');
const messageList = document.querySelector('#messageList');

sendButton.addEventListener('click', () => {
    const message = messageInput.value.trim();
    if (message) {
        fetch('php/send_message.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({ message }),
        })
        .then((response) => response.json())
        .then((data) => {
            if (data.status === 'success') {
                const newMessage = document.createElement('li');
                newMessage.textContent = message;
                messageList.appendChild(newMessage);
                messageInput.value = '';
            }
        });
    }
});
