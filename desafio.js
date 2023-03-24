class Contador{
    constructor(responsable){
        this.responsable = responsable;
        this.conteo = 0;
    }
    static conteoGlobal = 0;
    getRespontable = () =>{
        return this.responsable;
    }
    contar = () =>{
        this.conteo++; //Sumale 1
        Contador.conteoGlobal++;
    }
    getCuentaIndividual = () =>{
        return this.conteo;
    }
    getCuentaGobal = () =>{
        return Contador.conteoGlobal;
    }
}

const contador1 = new Contador('Carlos');
const contador2 = new Contador('Julia');
const contador3 = new Contador('Maricarmen');

contador1.contar();
contador1.contar();
contador1.contar();
contador2.contar();
contador3.contar();

console.log(contador1.getCuentaIndividual())
console.log(contador2.getCuentaIndividual())
console.log(contador3.getCuentaGobal())