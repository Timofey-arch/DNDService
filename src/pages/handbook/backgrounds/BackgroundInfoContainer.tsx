export default function BackgroundInfoContainer({ background }){
    return(
        <div className="background_info_container">
            <h1>{background.name}</h1>
            <div><b>Описание: </b> {background.description}</div>
            <div><b>Способность: </b> {background.ability}</div>
        </div>
    )
}