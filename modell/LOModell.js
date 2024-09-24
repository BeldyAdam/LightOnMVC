export default class Modell{
    #lista = [];
    #index;
    #db;
    constructor(){
        this.listaFeltolt();
        /* this.felkapcsoltEllenorzes(); */
        /* this.#db = this.felkapcsoltEllenorzes(); */
    }
    
    getList(){
        return this.#lista;
    }
    
    felkapcsoltEllenorzes(){
        let db = 0;
        this.#lista.forEach(element => {
            if(this.#lista[element]){
                db++;
            }
        });
        return db;
    }
    
    listaFeltolt(){
        let randomBool;
        for (let index = 0; index < 9; index++) {
            randomBool = Math.random() < 0.5;
            this.#lista[index] = randomBool;
        }
    }
    
    lampaKapcsol(id){
        this.#lista[id] = !(this.#lista[id])
        /* console.log(this.#db); */
    }
}