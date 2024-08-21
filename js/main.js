//Aclaración: Hice todo con console.log, pero no tenia forma de ver reflejado en el navegador todo eso, 
//solamente los promts. Por lo que reemplace todos los console.log por alerts, no se si es correcto, sin embargo
//al ejecutar en el navegador, se visualiza todo bien! 


//Saludo inicial, solo porque sí
alert("Hola Humano! Bienvenido a mi segunda entrega de JS")

// Array para almacenar el historial de cálculos
let calculationHistory = [];

// Función para saludo y solicitud de datos
function welcomeUser() {
    alert("¡Es un..... simulador de cálculos! ¡Con historial!");
    const name = prompt("Por favor, ingresa tu nombre:");
    const age = prompt("Por favor, ingresa tu edad:");
    alert(`Hola ${name}. Tienes ${age} años, y puedes continuar!`);
    mainMenu();
}

// Función principal
function mainMenu() {
    let menu = "\nSelecciona una opción:\n";
    menu += "1. Suma\n";
    menu += "2. Resta\n";
    menu += "3. Multiplicación\n";
    menu += "4. División\n";
    menu += "5. Porcentaje\n";
    menu += "6. Ver historial de cálculos\n";
    menu += "7. Salir\n";
    const choice = prompt(menu);
    switch (choice) {
        case '1':
            performCalculation("suma");
            break;
        case '2':
            performCalculation("resta");
            break;
        case '3':
            performCalculation("multiplicación");
            break;
        case '4':
            performCalculation("división");
            break;
        case '5':
            performCalculation("porcentaje");
            break;
        case '6':
            viewHistory();
            break;
        case '7':
            exitSimulator();
            break;
        default:
            alert("Opción no válida. Por favor, selecciona una opción del menú.");
            mainMenu();
    }
}

// Función para realización de un cálculo
function performCalculation(operation) {
    const num1 = parseFloat(prompt("Ingresa el primer número:"));
    const num2 = parseFloat(prompt("Ingresa el segundo número:"));
    let result;
    switch (operation) {
        case "suma":
            result = num1 + num2;
            alert(`Resultado de la suma: ${result}`);
            break;
        case "resta":
            result = num1 - num2;
            alert(`Resultado de la resta: ${result}`);
            break;
        case "multiplicación":
            result = num1 * num2;
            alert(`Resultado de la multiplicación: ${result}`);
            break;
        case "división":
            if (num2 !== 0) {
                result = num1 / num2;
                alert(`Resultado de la división: ${result}`);
            } else {
                alert("Error: División por cero no permitida.");
                result = null;
            }
            break;
        case "porcentaje":
            result = (num1 * num2) / 100;
            alert(`Resultado del porcentaje: ${result}`);
            break;
    }
    if (result !== null) {
        // Guardar cálculo en el historial
        calculationHistory.push({ operation, num1, num2, result });
    }
    mainMenu();
}

// Función para ver el historial de cálculos
function viewHistory() {
    let history = "\nHistorial de cálculos:\n";
    if (calculationHistory.length === 0) {
        history += "No hay cálculos en el historial.";
    } else {
        calculationHistory.forEach((entry, index) => {
            history += `${index + 1}. Operación: ${entry.operation}, Números: ${entry.num1} y ${entry.num2}, Resultado: ${entry.result}\n`;
        });
    }
    alert(history);
    mainMenu();
}

// Función para salir del simulador
function exitSimulator() {
    alert("¡Gracias por usar el simulador de cálculos generado por Gian Paolo, fue toda una odisea!! Hasta la próxima.");
}

// Iniciar el simulador
welcomeUser();
