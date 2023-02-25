import {Item} from "./Item";


export class ClasseBase {
    public boneHits: number;
    public hitsAtLevel1:number;
    public hitsAtNextLevel: number;

    public armors: Array<string>;
    public weapons: Array<string>;
    public tools: Array<string>;
    public listSaveRolls: Array<string>;

    public equipment: Array<Item>;



    constructor(boneHits: number, hitsAtLevel1:number, hitsAtNextLevel: number, armors: Array<string>,
                weapons: Array<string>, tools: Array<string>, listSaveRolls: Array<string>, equipment: Array<Item>) {
        this.boneHits = boneHits;
        this.hitsAtLevel1 = hitsAtLevel1;
        this.hitsAtNextLevel = hitsAtNextLevel;
        this.armors = armors;
        this.weapons = weapons;
        this.tools = tools;
        this.listSaveRolls  = listSaveRolls;
        this.equipment = equipment;
    }
}