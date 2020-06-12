const Client = require('../models/client');

module.exports = {
  async index(request, response) {
    try {
      const client = await Client.find();

      return response.json({ client });
    } catch{
      return response.status(400).json({ error: 'Error loading projects' });
    }

  },

  async create(request, response) {
    const { name, identity, description, value, phone, email } = request.body;

    if (await Client.findOne({ identity }))
      return response.status(400).send({ error: 'User already exists' });

    const client = await Client.create(request.body);

    return response.json({ client });
  }
}