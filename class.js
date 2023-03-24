class Persona{
    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.amigos = [];
        this.especie = 'humano';
    }
    saludar = () =>{
        console.log(`¡Hola, soy ${this.nombre}!`)
    }
}

const persona1 = new Persona('Thomas', 'Casuccio', 21);

const persona2 = new Persona('Fiorella', 'Diaz', 24);

persona1.saludar();

persona2.saludar()