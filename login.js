// Ganti URL ini dengan URL ngrok servermu
const serverUrl = "https://dda92e06f711.ngrok-free.app";

document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch(`${serverUrl}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });

    const result = await response.json();
    document.getElementById("message").innerText = result.message || "Login berhasil!";
  } catch (error) {
    console.error(error);
    document.getElementById("message").innerText = "Gagal login. Coba lagi.";
  }
});
