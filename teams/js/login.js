const loginForm = document.querySelector('#loginForm');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(loginForm);

    fetch('php/login.php', {
        method: 'POST',
        body: formData,
    })
    .then((response) => response.json())
    .then((data) => {
        if (data.status === 'success') {
            alert('Login successful!');
            window.location.href = 'dashboard.php';
        } else {
            alert(data.message);
        }
    });
});
