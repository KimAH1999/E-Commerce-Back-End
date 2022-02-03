// imports
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
const Product = require('./Product');
const Category = require('./Category');
// Products from Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});
// Categories has many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
});
// Products belongToMany Tags from ProductTag
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
});
// Tags belongToMany Products from ProductTag
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
});
//exports
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
