import NavPanel from 'components/Desktop/MainPage/NavPanel';
import axios from "axios";
import BackgroundInfoContainer from './BackgroundInfoContainer';
import HandbookNavigation from 'components/Desktop/Handbook/HandbookNavigation';

export default function Item({ item }){

    return(
        <>
            <NavPanel></NavPanel>
            <BackgroundInfoContainer background={item}></BackgroundInfoContainer>
        </>
    )
}

export async function getServerSideProps(req, res){
    const item = await axios.get(`http://127.0.0.1:8090/api/collections/backgrounds/records/${req.query.id}`);

    return{
        props:{
            item: JSON.parse(JSON.stringify(item.data))
        }
    }
}