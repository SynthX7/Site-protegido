async function login() {
    const email = document.getElementById("emailUsuario").value.toLowerCase();
    const senha = document.getElementById("senhaUsuario").value;
    
    const response = await fetch('accounts.csv');
    const text = await response.text();
    
    const parsedCSV = Papa.parse(text, { header: true });
    const usuarios = parsedCSV.data;
    
    const usuarioAutenticado = usuarios.find(usuario => {
        return usuario.email.toLowerCase() === email && usuario.senha === senha;
    });
    
    if (usuarioAutenticado) {
        window.location.href = "indextwo.html";
    } else {
        alert("Email ou senha incorretos. Por favor, tente novamente.");
        document.getElementById("emailUsuario").value = '';
        document.getElementById("senhaUsuario").value = '';
    }
}
