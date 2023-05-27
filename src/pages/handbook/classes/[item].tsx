import NavPanel from 'components/Desktop/MainPage/NavPanel';
import { useRouter } from 'next/router';
import axios from "axios";
import ClassInfoContainer from './ClassInfoContainer';

export default function Item({ item }){
    const router = useRouter();

    return(
        <>
            <NavPanel></NavPanel>
            <ClassInfoContainer p_class={item}></ClassInfoContainer>
        </>
    )
}

export async function getServerSideProps(req, res){
    const item = await axios.get(`http://127.0.0.1:8090/api/collections/classes/records/${req.query.id}`);

    return{
        props:{
            item: JSON.parse(JSON.stringify(item.data))
        }
    }
}