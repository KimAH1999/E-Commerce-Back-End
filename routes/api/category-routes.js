//imports
const router = require('express').Router();
const { Category, Product } = require('../../models');
//router. get,post,put, and delete from specific path 
router.get('/', (req, res) => {
  Category.findAll({
    include: Product
  }).then(catData => {
    res.json(catData);
  }).catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: [Product]
  }).then(oneCatData => {
    if(!oneCatData) {
      return res.status(404).json({message: `No category with ID: ${req.params.id}`});
    }
    res.json(oneCatData);
  }).catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.post('/', (req, res) => {
  Category.create(req.body).then(newCat => {
    res.json(newCat);
  }).catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.put('/:id', (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(updateCat => {
    if(!updateCat) {
      return res.status(404).json({message: `No category with ID: ${req.params.id}`});
    }
    res.json(updateCat);
  }).catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id
    }
  }).then(catDelete => {
    if(!catDelete) {
      return res.status(404).json({message: `There is currently no category with ID: ${req.params.id}`});
    }
    res.json(catDelete);
  }).catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
