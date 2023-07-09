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

    async checkCreator(login){
        return await BaumRepository.checkCreator(login);
    }

    async createCreator(creator){
        return await BaumRepository.createCreator(creator);
    }
}

module.exports = new BaumService();

