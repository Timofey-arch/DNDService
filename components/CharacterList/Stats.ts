export class Stats{
    public strength: number;
    public dexterity: number;
    public endurance: number;
    public intelligence: number;
    public wisdom: number;
    public charisma: number;
    
    public saveRolls: object = {
        strength: null,
        dexterity: null,
        endurance: null,
        intelligence: null,
        wisdom: null,
        charisma: null,
    }

    public skills: object = {
        acrobatics: null,
        training: null,
        //Дописать
    }

    constructor(){}

    
}