// funciona pelo amor de deus

function loginAcess() {
    var login = document.getElementById('ilogin').value
    var password = document.getElementById('isenha').value
    if (login == "admin" && password == "1234") {
        alert("Login realizado com sucesso!")
        window.location.href = "validei.html";
    } else {
        alert("Usuário ou senha incorretos!")
    }
}