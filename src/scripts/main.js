
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-sorteador').addEventListener('submit', function(evento) {

        evento.preventDefault()

        let numeroMaximo = document.getElementById('numero-maximo').value
        numeroMaximo = parseInt(numeroMaximo) // trasnformando em um numero inteiro

        let numeroAleatorio = Math.random() * numeroMaximo

        document.getElementById('resultado-valor').innerHTML = numeroAleatorio
    })
})

