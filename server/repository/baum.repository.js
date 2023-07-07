const pgp = require('pg-promise')();
const cn = 'postgres://postgres:@localhost:5432/BaumStorageBackend'
class BaumRepository{

    db = {};

    constructor(){
        this.db = pgp(cn);
    }

    async getPosts(){
        try{
            let data = await this.db.any('SELECT posts.id, posts.title, posts.body, posts.publication_date, creators.nickname as creator FROM posts join creators on posts.creator = creators.id  ORDER BY posts.id');
            return data;
        }catch(error){
            return {error: error.message};
        }
    }

    async createPost(post){
        const {title, body, publication_date, creator} = post;
        console.log(post);
        try{
            let data = await this.db.one("INSERT INTO posts (title, body, publication_date, creator) VALUES ($1, $2, $3, $4) RETURNING *", [title, body, publication_date, creator]);
            // let data = await this.db.one('INSERT INTO services (name, price) VALUES ($1, $2) RETURNING *', [name, price]);
            return data;
        }
        catch(error){
            return{error: error.message};
        }
    }

    async deletePost(id) {
        try {
            let data = await this.db.one('DELETE FROM posts WHERE id = $1 RETURNING *', [id]);
            return data;
        } catch (error) {
            return {error: error.message};
        }
    }

    async getCreators(){
        try{
            let data = await this.db.any('SELECT * FROM creators ORDER BY id');
            return data;
        }catch(error){
            return {error: error.message};
        }
    }

}

module.exports = new BaumRepository();