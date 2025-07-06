import pool from '../bd.js'

class SessionController{

    async getSessions(req, res){
        const session = await pool.query(`SELECT * FROM session`);
        res.json(session);
    }

    async createSession(req, res){
        const {email, user_id} = req.body;
        const newSession = await pool.query(`INSERT INTO session (email, user_id) VALUES ($1, $2) RETURNING *`, [email, user_id]);
        res.json(newSession);
    }

    async deleteSession(req, res){
        const posts = await pool.query(`DELETE FROM session`);
        res.json(posts);
    }

}

export default new SessionController();