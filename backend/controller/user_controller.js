import pool from "../bd.js";

class UserController{
    async create(req, res){
        const {email, password} = req.body;
        const newPerson = await pool.query(`INSERT INTO person (email, password) VALUES ($1, $2) RETURNING *`, [email, password]);
        res.json(newPerson);
    }
}

export default new UserController();