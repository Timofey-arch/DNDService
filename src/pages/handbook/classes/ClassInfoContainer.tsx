export default function ClassInfoContainer({ p_class }){
    return(
        <div className="class_info_container">
            <h1>{p_class.name}</h1>
            <div><b>Описание: </b> {p_class.description}</div>
            <div>
                <b>Количество костей хитов</b> - {p_class.hitsDices}
            </div>
        </div>
    )
}