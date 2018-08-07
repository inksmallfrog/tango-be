import Passage from '../db'

function get(ctx, next){
    const { page, size, type } = ctx.query;
    const passages = await Passage.find
}

function getOne(ctx, next){
    const { id } = ctx.params;
    const passage = await Passage.findById(id).exec();
    //const text = getPassageText(passage.url);
    //ctx.body = { title: passage.title, createdAt: passage.createdAt, text: passage.text, previous: , next:  }
}

function add(ctx, next){

}

export default {
    get,
    getOne,
    add
}