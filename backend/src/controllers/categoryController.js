// src/controllers/categoryController.js

/**
 * Category controller placeholder
 * Handles CRUD operations for ticket categories and subcategories.
 */
module.exports = {
  // GET /categories - list all categories
  async list(req, res) {
    // TODO: fetch categories from DB
    res.json({ message: 'List categories - not implemented' });
  },

  // GET /categories/:id - get specific category
  async get(req, res) {
    const { id } = req.params;
    // TODO: fetch category by id
    res.json({ message: `Get category ${id} - not implemented` });
  },

  // POST /categories - create new category
  async create(req, res) {
    // TODO: create category with req.body
    res.status(201).json({ message: 'Create category - not implemented' });
  },

  // PUT /categories/:id - update category
  async update(req, res) {
    const { id } = req.params;
    // TODO: update category fields
    res.json({ message: `Update category ${id} - not implemented` });
  },

  // DELETE /categories/:id - delete category
  async delete(req, res) {
    const { id } = req.params;
    // TODO: delete category
    res.json({ message: `Delete category ${id} - not implemented` });
  }
};
