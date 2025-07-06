import pool from "../bd.js";
import res from "express/lib/response.js";

class PostController{

    async create(req, res){
        const {text, completed, user_id} = req.body;
        const NewPost = await pool.query(`INSERT INTO post (text, completed, user_id) VALUES ($1, $2, $3) RETURNING *`, [text, completed, user_id]);
        res.json(NewPost);
    }

    async update(req, res){
        const {id, text, completed} = req.body;
        const post = await pool.query(`UPDATE post set text = $1, completed = $2 WHERE id = $3 RETURNING *`, [text,completed,id]);
        res.json(post);
    }

    async delete(req, res){
        const id = req.params.id;
        const posts = await pool.query(`DELETE FROM post WHERE id = $1`, [id]);
        res.json(posts);
    }

    async getAll(req,res){
        const logId = req.params.id
        const posts = await pool.query(`SELECT * FROM post WHERE user_id = $1 ORDER BY id ASC`,[logId]);
        res.json(posts);
    }

    async getCompleted(req, res){
        const logId = req.params.id
        const posts = await pool.query(`SELECT * FROM post WHERE completed = TRUE and user_id = $1 ORDER BY id ASC`,[logId]);
        res.json(posts);
    }

    async getNotCompleted(req, res){
        const logId = req.params.id
        const posts = await pool.query(`SELECT * FROM post WHERE completed = FALSE and user_id = $1 ORDER BY id ASC`,[logId]);
        res.json(posts);
    }
}

export default new PostController();