

class Model{
    #list = [];
    constructor(){
        
    }

    getList(){
        return this.#list;
    }

    ujAdatHozzaAdas(obj){
        this.#list.push(obj);
    }
} export default Model