import {ClasseBase} from "./ClasseBase";
import {Spell} from "./Spell";

export class Wizard {
    private _level: number;
    private _ability: Array<string>;
    private _hits: ClasseBase;
    private _numberOfSpellCells: number;
    private _spell: Spell;

    constructor(level: number, ability: Array<string>, hits: ClasseBase, numberOfSpellCells: number, spell: Spell) {
        this._level = level;
        this._ability = ability;
        this._hits = hits;
        this._numberOfSpellCells = numberOfSpellCells;
        this._spell = spell;
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
        return this._hits;
    }

    set hits(value: ClasseBase) {
        this._hits = value;
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