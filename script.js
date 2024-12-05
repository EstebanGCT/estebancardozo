function CuantoTeQueda() {
    const birthYear = prompt("Ingresá tu año de nacimiento:");
    const currentYear = new Date().getFullYear();

    if (birthYear === null || birthYear === "") {
        alert("Ingresa bien!.");
        return;
    }

    const age = currentYear - parseInt(birthYear);
    const lifeExpectancy = 80; // Un promedio que encontre en internet
    const yearsLeft = lifeExpectancy - age;

    let message = `Tienes ${age} años. Te quedan aproximadamente ${yearsLeft} años de vida, aprovechalos!.`;

    if (age < 18) {
        message += " ¡Estás chiquito!";
    } else if (age >= 18 && age < 30) {
        message += " ¡Aprovecha a viajar!";
    } else if (age >= 30 && age < 40) {
        message += " ¡A trabajar!";
    } else if (age >= 40 && age < 60) {
        message += " ¡Estoy cansado jefe!";
    } else if (age >= 60 && age < 80) {
        message += " ¡Viejos los trapos!";
    } else {
        message += " ¡Edad no especificada!";
    }

    alert(message);
}
