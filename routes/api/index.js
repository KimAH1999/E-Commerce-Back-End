const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');
const categoryRoutes = require('./category-routes');
const router = require('express').Router();

router.use('/products', productRoutes);
router.use('/tags', tagRoutes);
router.use('/categories', categoryRoutes);

module.exports = router;
