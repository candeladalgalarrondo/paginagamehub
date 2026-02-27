function login() {
  const user = document.getElementById('user').value;
  const pass = document.getElementById('pass').value;
  if(user === 'mari' && pass === '123') {
    window.location.href = 'admin.html?user=' + user;
  } else {
    document.getElementById('msg').textContent = 'Usuario incorrecto';
  }
}

