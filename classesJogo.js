class classeJogo{
    constructor(nameHeroi, idadeHeroi, tipoHeroi){
        this.nameHeroi = nameHeroi
        this.idadeHeroi = idadeHeroi
        this.tipoHeroi = tipoHeroi.toLowerCase()
    }
    atacar(){
        if(this.tipoHeroi === 'mago'){
            console.log(`O herói ${this.nameHeroi} de ${this.idadeHeroi} anos do tipo ${this.tipoHeroi} usou magia.`);

        }else if(this.tipoHeroi === 'guerreiro'){
            console.log(`O herói ${this.nameHeroi} de ${this.idadeHeroi} anos do tipo ${this.tipoHeroi} usou espada.`);
        }else if(this.tipoHeroi === 'monge'){
            console.log(`O herói ${this.nameHeroi} de ${this.idadeHeroi} anos do tipo ${this.tipoHeroi} usou artes marciais.`);
        }else if(this.tipoHeroi === 'ninja'){
            console.log(`O herói ${this.nameHeroi} de ${this.idadeHeroi} anos do tipo ${this.tipoHeroi} usou shuriken.`);
        }
    }
}

const escolha = new classeJogo('Tauan', 29, 'Guerreiro');
escolha.atacar();