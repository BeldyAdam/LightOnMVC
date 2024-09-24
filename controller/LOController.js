import Modell from "../modell/LOModell.js";
import Palya from "../view/Palya.js";

export default class Controller{

    constructor(){
        this.jatekTer = $(".jatekter");
        this.model = new Modell();
        new Palya(this.model.getList(), this.jatekTer)
        this.#esemenykezelo();
    }

    #esemenykezelo(){
        $(window).on("kattintas", (event)=>{
            this.model.lampaKapcsol(event.detail);
            new Palya(this.model.getList(), this.jatekTer);
        });
    }
}