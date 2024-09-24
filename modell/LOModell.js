export default class Modell{
    #lista = [];
    #index;
    #db;
    #nyert;
    #nyertElem;
    constructor(){
        this.listaFeltolt();
        this.#nyert = false;
        this.#nyertElem = $("nyertesHelye");
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
            randomBool = Math.random() < 0.5 /* true */;
            this.#lista[index] = randomBool;
        }
    }
    
    lampaKapcsol(id){
        this.#lista[id] = !(this.#lista[id])
    }


    kornyezoElemek(i){
        if((i+1)%3==0){
                this.setLista(i-1)
                if(i<6){
                    this.setLista(i+3)
                }
                if(i>3){
                    this.setLista(i-3)
                }
        }else if(i%3==0){
            this.setLista(i+1)
                this.setLista(i-3)
                if(i<6){
                    this.setLista(i+3)
                }
        }else{
            if(i>0){
                this.setLista(i-1)
            }
            if(i<8){
                this.setLista(i+1)
            }
            if(i>3){
                this.setLista(i-3)
            }
            if(i<6){
                this.setLista(i+3)
            }
        }
    }

    ellenorzes(){
        let i = 0;
        while(this.#lista[i]){
            i++
        }
        this.#nyert= i>=8

        if(this.#nyert){
            console.log("nyert");
            this.#nyertKiir();
        }
    }

    getNyert(){
        return this.#nyert
    }


    setLista(i){
        if(this.#lista[i] === true){
            this.#lista[i] = false;
        }
        else{
            this.#lista[i] = true;
        }
    }

    #nyertKiir(){
        if (this.#nyert) {
            this.#nyertElem.append(`<h1>Nyert!</h1>`)
        }
    }
}