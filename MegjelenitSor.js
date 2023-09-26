
class MegjelenitSor{

    #obj={}
    #index;
    constructor(obj, szuloElem, index){
        this.#obj = obj;
        this.szuloElem = szuloElem;
        this.#index = index;
        this.#sor();

        this.sorElem = this.szuloElem.children("tr:last-child");
    }

    #sor(){
        let txt = `<tr>`; 
        for (let x in this.#obj) {
            if (x != "kesz") {
                txt+=`<td>${this.#obj[x]}</td>`;
            }
        }
        txt+=`</tr>`;
        this.szuloElem.append(txt);
    }


} export default MegjelenitSor
