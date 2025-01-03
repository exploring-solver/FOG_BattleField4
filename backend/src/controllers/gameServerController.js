import GameServer from '../models/GameServer.js';

export const getCurrentServer = async (req, res) => {
  try {
    const server = await GameServer.findOne();
    if (!server) {
      return res.status(404).json({ message: 'Server not found' });
    }
    res.json(server);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateServer = async (req, res) => {
  try {
    const server = await GameServer.findOneAndUpdate({}, req.body, {
      new: true,
      runValidators: true
    });
    res.json(server);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};