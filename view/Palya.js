import Lampa from "./Lampa.js";

export default class Palya{
    #lista = [];
    #szuloElem;

    constructor(lista, szuloElem){
        this.#lista = lista;
        this.#szuloElem = szuloElem;
        this.#szuloElem.empty();
        this.kiir();
    }

    kiir(){
        this.#lista.forEach((elem, index) => {
            new Lampa(elem, index, this.#szuloElem);
        })
    }

 
}