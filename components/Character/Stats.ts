export class Stats {
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
        attention: null,
        survival: null,
        athletics: null,
        intimidation: null,
        execution: null,
        history: null,
        sleightOfHand: null,
        magic: null,
        medicine: null,
        fraud: null,
        nature: null,
        insight: null,
        investigation: null,
        religion: null,
        stealth: null,
        conviction: null
    }

    constructor(strength: number, dexterity: number, endurance: number, intelligence: number, wisdom: number,
                charisma: number) {
        this.strength = strength
        this.dexterity = dexterity
        this.endurance = endurance
        this.intelligence = intelligence
        this.wisdom = wisdom
        this.charisma = charisma
    }



}