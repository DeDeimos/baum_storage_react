const BaumRepository = require('../repository/baum.repository')

class BaumService{

    constructor(){}

    async getPosts(){
        return await BaumRepository.getPosts();
    }

    async createPost(post){
        return await BaumRepository.createPost(post);
    }

    async deletePost(id){
        return await BaumRepository.deletePost(id);
    }

    async getCreators(){
        return await BaumRepository.getCreators();
    }
}

module.exports = new BaumService();

