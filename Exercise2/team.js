class Team {
    constructor(){
        this.teamName = "Squadron";
        this.trainer = "Attila";
        this.roster = [];
    }
    
    describe(){
        let names = [];
        this.roster.forEach(ele => names.push(ele.name));

        return `This is team ${this.teamName}, the trainer is ${this.trainer}
         and the team consists of ${[...names]}`
    }

    addPokemon(p){
        let message = {
            value: '',
            type: 'ERROR'
        };

        if(this.roster.length == 6){
            message.value = 'The team is full!';
            return message;
        }
        if(this.roster.find(ele => ele.id == p.id)){
            message.value = 'This pokemon is already part of your team!';
        }
        this.roster.push(p);
        message.value= `The pokemon ${p.name} has been succesfully added to the team!`;
        message.type = 'SUCCES';
        return message;
    }
}
//let team = new Team("example teamname","example trainer","example rooster");

export default Team;