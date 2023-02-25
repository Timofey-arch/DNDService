import {ClasseBase} from "./ClasseBase";
import {Spell} from "./Spell";

export class Wizard {
    public level: number;
    public ability: Array<string>;
    public hits: ClasseBase;
    public numberOfSpellCells: number;
    public spell: Spell;

    constructor(level: number, ability: Array<string>, hits: ClasseBase, numberOfSpellCells: number, spell: Spell) {
        this.level = level;
        this.ability = ability;
        this.hits = hits;
        this.numberOfSpellCells = numberOfSpellCells;
        this.spell = spell;
    }




}