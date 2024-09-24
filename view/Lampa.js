import Modell from "../modell/LOModell.js";

export default class Lampa{
    #allapot;
    #index;
    #szuloElem;


    constructor(allapot, index, szuloElem){
        this.#allapot = allapot;
        this.#index = index;
        this.#szuloElem = szuloElem;
        this.kiir();
        this.gombElem = $(".card:last");
        this.#szinbeallit();
        this.#kattintasEsemeny();
    }


    kiir(){
        this.#szuloElem.append(`
        <div class="card col-lg-4" id="box">
        <p class="card-text"></p>
        </div>`)
    };

    #szinbeallit(){
        if(this.#allapot){
            this.gombElem.addClass("felkapcs");
        }else{
            this.gombElem.removeClass("felkapcs");
        }
    }

    #kattintasEsemeny(){
        this.gombElem.on("click", () =>{
            const e = new CustomEvent("kattintas", { detail: this.#index});
            window.dispatchEvent(e);
        });
    }
}