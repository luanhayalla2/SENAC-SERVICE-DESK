// controllers/userController.js

/**
 * User controller placeholder
 * Provides basic CRUD operations for User model.
 */
module.exports = {
  // GET /users - list all users
  async list(req, res) {
    // TODO: implement fetching users from DB
    res.json({ message: 'List users - not implemented' });
  },

  // GET /users/:id - get single user
  async get(req, res) {
    const { id } = req.params;
    // TODO: fetch user by id
    res.json({ message: `Get user ${id} - not implemented` });
  },

  // POST /users - create new user
  async create(req, res) {
    // TODO: create user with req.body
    res.status(201).json({ message: 'Create user - not implemented' });
  },

  // PUT /users/:id - update user
  async update(req, res) {
    const { id } = req.params;
    // TODO: update user
    res.json({ message: `Update user ${id} - not implemented` });
  },

  // DELETE /users/:id - delete user
  async delete(req, res) {
    const { id } = req.params;
    // TODO: delete user
    res.json({ message: `Delete user ${id} - not implemented` });
  }
};
