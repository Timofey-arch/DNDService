export default function CharacterWindow(props){
    return(
        <div className="character_form" 
            style={{display: props.currentWindowNumber == props.windowNumber ? "flex" : "none"}}>
            {props.userData.userRace}
            {props.userData.userPlayerClass}
            {props.userData.userBackground}
        </div>
    )
}