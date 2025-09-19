const NGROK_URL = 'https://508da0e3e608.ngrok-free.app'; // ganti sesuai ngrok

document.getElementById('signupForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    const ttl = e.target.ttl.value;
    const terms = e.target.terms.checked;

    if (!terms) {
        alert("Anda harus menyetujui Syarat & Ketentuan!");
        return;
    }

    if(password !== confirmPassword){
        alert("Password dan Confirm Password tidak cocok!");
        return;
    }

    const data = { username, email, password, ttl };

    fetch(`${NGROK_URL}/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    .then(res => res.text())
    .then(msg => alert(msg))
    .catch(err => console.error('Error:', err));
});
