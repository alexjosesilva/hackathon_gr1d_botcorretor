const Services = require('../models/services');

module.exports = {
  async index(request, response) {
    try {
      const service = await Services.find().populate(['client']);

      return response.json({ service });
    } catch{
      return response.status(400).json({ error: 'Error loading projects' });
    }

  },

  async create(request, response) {
    const { id } = request.params;
    const { service, company, description, value } = request.body;


    const client = await Services.create({
      service,
      company,
      description,
      value,
      client: id,
    });

    return response.json({ client });
  }
}