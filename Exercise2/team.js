class Team {
    constructor(teamname,trainer,roster){
        this.teamname = teamname;
        this.trainer = trainer;
        this.roster = roster;
    }
    
    describe(){
        return `This is team ${this.teamname}, the trainer is ${this.trainer} and the team consists of ${[...this.roster]}`
    }
}
//let team = new Team("example teamname","example trainer","example rooster");

export default Team;