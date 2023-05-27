import axios from "axios";

export default async function handler(req, res){
    if(!['classes', 'races', 'backgrounds'].includes(req.query.collectionName)){
        res.status(404).json({error: "This collection does not exist"});
    }
    
    const item = await axios.get(`http://127.0.0.1:8090/api/collections/${req.query.collectionName}/records`);
    res.status(200).json(item.data.items);
}