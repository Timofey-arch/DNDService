export default function ClassInfoContainer({ p_class }){
    return(
        <div className="class_info_container">
            <h1>{p_class.name}</h1>
            <img src={"http://127.0.0.1:8090/api/files/classes/"+p_class.id+"/" + p_class.field}></img>
            <div>
                <b>Описание: </b> {p_class.description}
            </div>

            <div>
                <b>Количество костей хитов</b> - {p_class.hitsDices}
            </div>

            <div>
                <b>Владение броней: </b> - {p_class.armor !== null ? p_class.armor.getArmors.toString() : "Нет"}
            </div>

            <div>
                <b>Владение оружием: </b> - {p_class.weapon !== null ? p_class.weapon.getWeapons.toString() : "Нет"}
            </div>

            <div>
                <b>Владение инструментами: </b> - {p_class.tools !== null ? p_class.tools.getTools.toString() : "Нет"}
            </div>

            <div>
                <b>Спасброски: </b> - {p_class.saveThrows !== null ? p_class.saveThrows.getSavesThrows.toString() : "Нет"}
            </div>

            <div>
                <b>Навыки: </b> - {p_class.possibleSkills !== null ? p_class.possibleSkills.getSkills.toString() : "Нет"}
            </div>

            <div>
                <b>Стартовый инвентарь: </b> - {p_class.possibleInventory !== null ? p_class.possibleInventory.getInv : "Нет"}
            </div>
        </div>
    )
}