import {Item} from "../Items/Item";

export class Class {
    private _level: number;
    private _nameClass: String;
    private _description: string;
    private _ability: Array<string>;

    private _boneHits: number;
    private _hitsAtLevel1: number;
    private _hitsAtNextLevel: number;

    private _armors: Array<string>;
    private _weapons: Array<string>;
    private _tools: Array<string>;
    private _listSaveRolls: Array<string>;

    private _equipment: Array<Item>;
    
    constructor(level: number, nameClass: String, description: string, ability: Array<string>, boneHits: number,
                hitsAtLevel1: number, hitsAtNextLevel: number, armors: Array<string>, weapons: Array<string>,
                tools: Array<string>, listSaveRolls: Array<string>, equipment: Array<Item>) {
        this._level = level;
        this._nameClass = nameClass;
        this._description = description;
        this._ability = ability;
        this._boneHits = boneHits;
        this._hitsAtLevel1 = hitsAtLevel1;
        this._hitsAtNextLevel = hitsAtNextLevel;
        this._armors = armors;
        this._weapons = weapons;
        this._tools = tools;
        this._listSaveRolls = listSaveRolls;
        this._equipment = equipment;
    }

    get boneHits(): number {
        return this._boneHits;
    }

    set boneHits(value: number) {
        this._boneHits = value;
    }

    get hitsAtLevel1(): number {
        return this._hitsAtLevel1;
    }

    set hitsAtLevel1(value: number) {
        this._hitsAtLevel1 = value;
    }

    get hitsAtNextLevel(): number {
        return this._hitsAtNextLevel;
    }

    set hitsAtNextLevel(value: number) {
        this._hitsAtNextLevel = value;
    }

    get armors(): Array<string> {
        return this._armors;
    }

    set armors(value: Array<string>) {
        this._armors = value;
    }

    get weapons(): Array<string> {
        return this._weapons;
    }

    set weapons(value: Array<string>) {
        this._weapons = value;
    }

    get tools(): Array<string> {
        return this._tools;
    }

    set tools(value: Array<string>) {
        this._tools = value;
    }

    get listSaveRolls(): Array<string> {
        return this._listSaveRolls;
    }

    set listSaveRolls(value: Array<string>) {
        this._listSaveRolls = value;
    }

    get equipment(): Array<Item> {
        return this._equipment;
    }

    set equipment(value: Array<Item>) {
        this._equipment = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }


    get level(): number {
        return this._level;
    }

    set level(value: number) {
        this._level = value;
    }

    get nameClass(): String {
        return this._nameClass;
    }

    set nameClass(value: String) {
        this._nameClass = value;
    }


    get ability(): Array<string> {
        return this._ability;
    }

    set ability(value: Array<string>) {
        this._ability = value;
    }
}