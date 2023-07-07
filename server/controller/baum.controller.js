const BaumService = require('../service/baum.service');

class BaumController{

    async getPosts(){
       console.log('Controller: getPosts') 
       return await BaumService.getPosts();
    }        

    async createPost(post){
        console.log("Controller: createPost");
        return await BaumService.createPost(post);
    }

    async deletePost(id){
        console.log("Controller: deletePost");
        return await BaumService.deletePost(id);
    }

    async getCreators(){
        console.log('Controller: getCreators') 
        return await BaumService.getCreators();
     } 
}

module.exports = new BaumController();