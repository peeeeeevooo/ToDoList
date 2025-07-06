import pool from "../bd.js";

class UserController{
    async create(req, res){
        const {email, password} = req.body;
        const newPerson = await pool.query(`INSERT INTO person (email, password) VALUES ($1, $2) RETURNING *`, [email, password]);

        res.json(newPerson);
    }

    async getUsers(req, res){
        const users = await pool.query(`SELECT * FROM person`);
        res.json(users);
    }

    async getUser(req, res){
        const email = req.params.email;
        const password = req.params.password;
        const user = await pool.query(`SELECT * FROM person WHERE email = $1 and password = $2`, [email, password]);


        res.json(user);
    }
}

export default new UserController();