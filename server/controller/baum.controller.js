const BaumService = require('../service/baum.service');

class BaumController {

    async getPosts() {
        console.log('Controller: getPosts')
        return await BaumService.getPosts();
    }

    async createPost(post) {
        console.log("Controller: createPost");
        return await BaumService.createPost(post);
    }

    async deletePost(id) {
        console.log("Controller: deletePost");
        return await BaumService.deletePost(id);
    }

    async getCreators() {
        console.log('Controller: getCreators')
        return await BaumService.getCreators();
    }

    async checkCreator(login){
        console.log("Controller: checkCreator");
        return await BaumService.checkCreator(login);
    }

    async createCreator(creator){
        console.log("Controller: createCreator");
        return await BaumService.createCreator(creator);
    }
}

module.exports = new BaumController();