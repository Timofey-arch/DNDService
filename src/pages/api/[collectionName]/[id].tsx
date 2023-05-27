import axios from "axios";

export default async function handler(req, res){
    if(!['classes', 'races', 'backgrounds'].includes(req.query.collectionName)){
        res.status(404).json({error: "This collection does not exist"});
    }
    const item = await axios.get(`http://locahost:8090/api/${req.query.collectionName}/${req.query.id}`);

    res.status(200).json(item);
}