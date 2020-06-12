const Sinister = require('../models/sinister');

module.exports = {
  async index(request, response) {
    try {
      const sinister = await Sinister.find().populate(['client', ['service']]);

      return response.json({ sinister });
    } catch{
      return response.status(400).json({ error: 'Error loading projects' });
    }

  },

  async create(request, response) {
    const { id } = request.params;
    const { service_client } = request.query;
    const { caso, description } = request.body;


    const sinister = await Sinister.create({
      caso,
      description,
      client: id,
      service: service_client
    });

    return response.json({ sinister });
  }
}