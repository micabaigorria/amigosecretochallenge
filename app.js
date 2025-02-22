let amigos = [];

function agregarAmigo() {
    const nombreInput = document.getElementById('amigo');
    const nombre = nombreInput.value.trim();

    if (nombre === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    amigos.push(nombre);
    nombreInput.value = '';
    actualizarLista();
}

function actualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Por favor, agrega algunos nombres antes de sortear.');
        return;
    }

    const randomIndex = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[randomIndex];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `El amigo secreto es: ${amigoSecreto}`;
}

    const randomIndex = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[randomIndex];
    
    document.getElementById('resultado').textContent = `El amigo secreto es: ${amigoSecreto}`;

