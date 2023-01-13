let button = document.querySelector('#button');
let output = document.querySelector('#output');
let nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

button.addEventListener('click', calcular);
let form = document.querySelector('#formulario');
form.addEventListener('submit', function(event){
    event.preventDefault();
});

function mudarResultado_output(msg, status){
    output.innerHTML = '';
    const p = document.createElement('p');
    p.innerHTML = msg;
    if(status === 'bad')
        p.classList.add('estilo_output_bad');
    else{
        p.classList.add('estilo_output_nice');
    }
    output.appendChild(p);
}

function calcular(){
    const peso = document.querySelector('#peso').value;
    const altura = document.querySelector('#altura').value;
    // calculando imc
    const imc = peso / (altura**2);
    // verificar campos vazios
    if(peso === '' || altura === ''){
        mudarResultado_output('Preencha todos os campos!', 'bad');
    }
    // verificar o imc do usuário
    else{
        // abaixo do peso
        if (imc < 18.5){
            mudarResultado_output(`${nivel[0]} (IMC: ${imc.toFixed(2)})`, 'bad');
        }
        // peso normal
        else if(imc > 18.5 && imc <= 24.9){
            mudarResultado_output(`${nivel[1]} (IMC: ${imc.toFixed(2)})`, 'nice');
        }
        // Sobrepeso
        else if(imc >= 25 && imc <= 29.9){
            mudarResultado_output(`${nivel[2]} (IMC: ${imc.toFixed(2)})`, 'bad');
        }
        // Obesidade grau 1
        else if(imc >= 30 && imc <= 34.9){
            mudarResultado_output(`${nivel[3]} (IMC: ${imc.toFixed(2)})`, 'bad');
        }
        // Obesidade grau 2
        else if(imc >= 35 && imc <= 40){
            mudarResultado_output(`${nivel[4]} (IMC: ${imc.toFixed(2)})`, 'bad');
        }
        // Obesidade grau 3
        else {mudarResultado_output(`${nivel[5]} (IMC: ${imc.toFixed(2)})`, 'bad');
        }
    }
}