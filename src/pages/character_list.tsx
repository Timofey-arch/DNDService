import CharacterForm from "components/Desktop/CharacterForm/CharacterForm";
import NavPanel from "components/Desktop/MainPage/NavPanel";

export default function CharacterList(props: any){
    return(
        <>
            <NavPanel></NavPanel>
            <CharacterForm></CharacterForm>
        </> 
    );
}