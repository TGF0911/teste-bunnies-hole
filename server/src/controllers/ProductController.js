const ProductSchema = require('../models/Product');

module.exports = {
  async create(req, res){
    const {name, type, value, rating, thumbnail} = req.body;

    const product = await ProductSchema.create({
      name,
      type,
      value,
      rating : rating || 0.0,
      thumbnail : thumbnail || ""
    })

    return res.json(product)
  },

  async index(req, res){
    const products = await ProductSchema.find();
    return res.json(products); 
  },

  async search(req,res){
    const searchParams = req.query.searchParams;
    const products = await ProductSchema.find({name : {$all : searchParams}});
    if(!products) return res.json({message: "Dont found"});
    return res.json(products);
  },

  async sortBy(req, res){

  },

  async filter(req, res){
    const filter = req.query.filter;
    const products = await ProductSchema.find({type : filter});
    return res.json(products);
  },

  async update(req, res){
    const id = req.params.id;
    const {name, value } = req.body;
    const product = await ProductSchema.findOneAndUpdate({_id : id}, {
      name,
      value,
    })

   return res.json(product);
  },

  async delete(req, res){
    const id = req.params.id;

   await ProductSchema.findByIdAndRemove({_id : id});

   return res.status(201);
  }
}