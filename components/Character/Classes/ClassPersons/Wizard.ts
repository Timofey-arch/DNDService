import {Item} from "../Item/Item";
import {Magic} from "../Magic/Magic";
import {Class} from "./Base/Class";

export class Wizard extends Class {
    private _magic: Magic;

    constructor(level: number, nameClass: String, description: string, ability: Array<string>, boneHits: number,
                hitsAtLevel1: number, hitsAtNextLevel: number, armors: Array<string>, weapons: Array<string>,
                tools: Array<string>, listSaveRolls: Array<string>, equipment: Array<Item>, magic: Magic) {
        super(level, nameClass, description, ability, boneHits, hitsAtLevel1, hitsAtNextLevel, armors, weapons,
            tools, listSaveRolls, equipment);
        this._magic = magic;
    }

    get magic(): Magic {
        return this._magic;
    }

    set magic(value: Magic) {
        this._magic = value;
    }


}