function Proceso() {
    let valoresInput = document.getElementById("valores").value;

    let arregloValores = valoresInput.split(",").map(num => parseFloat(num.trim()));

    if (arregloValores.length < 8) {
        alert("Por favor, ingrese al menos 8 valores.");
        return;
    }

    let suma = arregloValores.reduce((acc, valor) => acc + valor, 0);

    let promedio = suma / arregloValores.length;

    document.getElementById("suma").textContent = suma;
    document.getElementById("promedio").textContent = promedio.toFixed(2);
}
