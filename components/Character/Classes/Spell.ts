export class Spell{
    private _levelSpell: number;
    private _nameSpell: string;
    private _duration: number;
    private _overlayTime: number;
    private _distance: number;
    private _components: Array<string>;
    private _classes: Array<string>;


    constructor(levelSpell: number, nameSpell: string, duration: number, overlayTime: number, distance: number,
                components: Array<string>, classes: Array<string>) {
        this._levelSpell = levelSpell;
        this._nameSpell = nameSpell;
        this._duration = duration;
        this._overlayTime = overlayTime;
        this._distance = distance;
        this._components = components;
        this._classes = classes;
    }


    get levelSpell(): number {
        return this._levelSpell;
    }

    set levelSpell(value: number) {
        this._levelSpell = value;
    }

    get nameSpell(): string {
        return this._nameSpell;
    }

    set nameSpell(value: string) {
        this._nameSpell = value;
    }

    get duration(): number {
        return this._duration;
    }

    set duration(value: number) {
        this._duration = value;
    }

    get overlayTime(): number {
        return this._overlayTime;
    }

    set overlayTime(value: number) {
        this._overlayTime = value;
    }

    get distance(): number {
        return this._distance;
    }

    set distance(value: number) {
        this._distance = value;
    }

    get components(): Array<string> {
        return this._components;
    }

    set components(value: Array<string>) {
        this._components = value;
    }

    get classes(): Array<string> {
        return this._classes;
    }

    set classes(value: Array<string>) {
        this._classes = value;
    }
}