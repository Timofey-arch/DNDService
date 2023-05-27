import axios from "axios";

export default async function handler(req, res){
    if(req.query.id !== undefined){
        const item = await axios.get(`http://127.0.0.1:8090/api/collections/${req.query.collectionName}/records/${req.query.id}`);
        res.status(200).json(item);
    }

    const item = await axios.get(`http://127.0.0.1:8090/api/collections/${req.query.collectionName}/records`);
    res.status(200).json(item);
}