const NGROK_URL = 'https://508da0e3e608.ngrok-free.app'; // ganti sesuai ngrok terbaru

document.getElementById('signinForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const data = {
    username: document.getElementById("username").value,
    password: document.getElementById("password").value
  };

  fetch(`${NGROK_URL}/signin`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  .then(res => res.text())
  .then(msg => {
    alert(msg); // tes dulu, nanti bisa diarahkan ke dashboard
  })
  .catch(err => {
    console.error(err);
    alert("Terjadi error saat login!");
  });
});
