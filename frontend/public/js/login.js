// login.js – handles form submission for the login page

document.getElementById('loginForm').addEventListener('submit', async e => {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const errorDiv = document.getElementById('errorMsg');

  // Simple client‑side validation
  if (!email || !password) {
    errorDiv.textContent = 'Preencha e‑mail e senha.';
    errorDiv.style.display = 'block';
    return;
  }

  try {
    const response = await fetch('http://localhost:3003/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    if (!response.ok) {
      const data = await response.json();
      errorDiv.textContent = data.error || 'Falha ao fazer login.';
      errorDiv.style.display = 'block';
      return;
    }

    const data = await response.json();
    // In a real app you would store the JWT, redirect, etc.
    alert('Login bem‑sucedido!');
    errorDiv.style.display = 'none';
  } catch (err) {
    console.error(err);
    errorDiv.textContent = 'Erro de conexão.';
    errorDiv.style.display = 'block';
  }
});
