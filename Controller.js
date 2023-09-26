import Model from "./Model.js";
import Megjelenit from "./Megjelenit.js";
import AutoUrlapView from "./AutoUrlapView.js";

class Controller{
    constructor(){
        let szuloElem = $(`.tarolo`);
        let ujElem = $(`.ujadat`);
        const MODEL = new Model();
        new Megjelenit(MODEL.getList(), szuloElem);
        new AutoUrlapView({
            tipus: "Típus",
            rendszam: "Rendszám",
        },
        {
            tipus: "",
            rendszam: "",
        }, ujElem);

        $(window).on("ujAdatHozzaAdas", function(event){
            MODEL.ujAdatHozzaAdas(event.detail);
            szuloElem.empty();
            new Megjelenit(MODEL.getList(), szuloElem);
        })
    }
} export default Controller