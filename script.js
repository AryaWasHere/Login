const NGROK_URL = 'https://508da0e3e608.ngrok-free.app'; // ganti sesuai ngrok

// Sign In
document.getElementById('signinForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const data = {
    username: e.target.username.value,
    password: e.target.password.value
  };
  fetch(`${NGROK_URL}/signin`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  .then(res => res.text())
  .then(msg => alert(msg))
  .catch(console.error);
});
