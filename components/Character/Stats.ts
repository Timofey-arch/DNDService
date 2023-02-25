export class Stats{
    private _strength: number;
    private _dexterity: number;
    private _endurance: number;
    private _intelligence: number;
    private _wisdom: number;
    private _charisma: number;
    
    private _saveRolls: object = {
        strength: null,
        dexterity: null,
        endurance: null,
        intelligence: null,
        wisdom: null,
        charisma: null,
    }

    private _skills: object = {
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
        this._strength = strength
        this._dexterity = dexterity
        this._endurance = endurance
        this._intelligence = intelligence
        this._wisdom = wisdom
        this._charisma = charisma
    }

    get strength(): number {
        return this._strength;
    }

    set strength(value: number) {
        this._strength = value;
    }

    get dexterity(): number {
        return this._dexterity;
    }

    set dexterity(value: number) {
        this._dexterity = value;
    }

    get endurance(): number {
        return this._endurance;
    }

    set endurance(value: number) {
        this._endurance = value;
    }

    get intelligence(): number {
        return this._intelligence;
    }

    set intelligence(value: number) {
        this._intelligence = value;
    }

    get wisdom(): number {
        return this._wisdom;
    }

    set wisdom(value: number) {
        this._wisdom = value;
    }

    get charisma(): number {
        return this._charisma;
    }

    set charisma(value: number) {
        this._charisma = value;
    }

    get saveRolls(): object {
        return this._saveRolls;
    }

    set saveRolls(value: object) {
        this._saveRolls = value;
    }

    get skills(): object {
        return this._skills;
    }

    set skills(value: object) {
        this._skills = value;
    }
}