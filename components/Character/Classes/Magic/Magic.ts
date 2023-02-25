import {Spell} from "./Spell";

export class Magic {
    private _numberOfSpellCells: number;
    private _spells: Array<Spell>;


    constructor(numberOfSpellCells: number, spells: Array<Spell>) {
        this._numberOfSpellCells = numberOfSpellCells;
        this._spells = spells;
    }

    get numberOfSpellCells(): number {
        return this._numberOfSpellCells;
    }

    set numberOfSpellCells(value: number) {
        this._numberOfSpellCells = value;
    }

    get spells(): Array<Spell> {
        return this._spells;
    }

    set spells(value: Array<Spell>) {
        this._spells = value;
    }
}