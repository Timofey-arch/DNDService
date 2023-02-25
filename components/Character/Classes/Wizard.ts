import {ClasseBase} from "./ClasseBase";
import {Spell} from "./Spell";

export class Wizard {
    private _level: number;
    private _nameClass: String;
    private _ability: Array<string>;
    private _classBase: ClasseBase;
    private _numberOfSpellCells: number;
    private _spell: Spell;

    constructor(level: number, ability: Array<string>, classBase: ClasseBase, numberOfSpellCells: number, spell: Spell,
                nameClass: String) {
        this._level = level;
        this._ability = ability;
        this._classBase = classBase;
        this._numberOfSpellCells = numberOfSpellCells;
        this._spell = spell;
        this._nameClass = nameClass;
    }

    get level(): number {
        return this._level;
    }

    set level(value: number) {
        this._level = value;
    }

    get ability(): Array<string> {
        return this._ability;
    }

    set ability(value: Array<string>) {
        this._ability = value;
    }

    get hits(): ClasseBase {
        return this._classBase;
    }

    set hits(value: ClasseBase) {
        this._classBase = value;
    }

    get numberOfSpellCells(): number {
        return this._numberOfSpellCells;
    }

    set numberOfSpellCells(value: number) {
        this._numberOfSpellCells = value;
    }

    get spell(): Spell {
        return this._spell;
    }

    set spell(value: Spell) {
        this._spell = value;
    }

}