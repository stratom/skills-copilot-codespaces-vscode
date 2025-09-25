// Ejemplo de lo que puede hacer GitHub Copilot
// Example of what GitHub Copilot can do

// Función para calcular números - Copilot puede autocompletar funciones matemáticas
function calculateNumbers(var1, var2) {
    // Copilot suggests mathematical operations
    return {
        sum: var1 + var2,
        difference: var1 - var2,
        product: var1 * var2,
        quotient: var2 !== 0 ? var1 / var2 : null,
        average: (var1 + var2) / 2
    };
}

// Función para validar email - Copilot puede generar regex y validaciones
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Función para formatear fecha - Copilot entiende formatos de fecha
function formatDate(date) {
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    return new Date(date).toLocaleDateString('es-ES', options);
}

// Demostrar las capacidades con ejemplos
console.log('=== GitHub Copilot Capabilities Demo ===');
console.log('Calculation result:', calculateNumbers(10, 5));
console.log('Email validation:', validateEmail('usuario@ejemplo.com'));
console.log('Formatted date:', formatDate('2023-12-25'));