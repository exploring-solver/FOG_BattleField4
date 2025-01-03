import mongoose from 'mongoose';

const gameServerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  players: {
    current: { type: Number, required: true },
    max: { type: Number, required: true }
  },
  network: {
    ping: { type: Number, required: true },
    tickrate: { type: Number, required: true }
  },
  settings: {
    region: { type: String, required: true },
    punkbaster: { type: Boolean, default: false },
    fairfight: { type: Boolean, default: true },
    password: { type: Boolean, default: false },
    preset: { type: String, default: 'NORMAL' }
  },
  advanced: {
    minimap: { type: Boolean, default: true },
    onlySquadLeaderSpawn: { type: Boolean, default: false },
    vehicles: { type: Boolean, default: true },
    teamBalance: { type: Boolean, default: true },
    minimapSpotting: { type: Boolean, default: true },
    hud: { type: Boolean, default: true },
    thirdPersonVehicleCam: { type: Boolean, default: true },
    regenerativeHealth: { type: Boolean, default: true },
    killCam: { type: Boolean, default: true },
    friendlyFire: { type: Boolean, default: false },
    threeDSpotting: { type: Boolean, default: true },
    enemyNameTags: { type: Boolean, default: true }
  },
  rules: {
    tickets: { type: Number, default: 400 },
    vehicleSpawnDelay: { type: Number, default: 25 },
    bulletDamage: { type: Number, default: 100 },
    kickAfterTeamKills: { type: Number, default: 5 },
    playerHealth: { type: Number, default: 100 },
    playerRespawnTime: { type: Number, default: 100 },
    kickAfterIdle: { type: Number, default: 300 },
    banAfterKicks: { type: Number, default: 3 }
  },
//   mapRotation: [{
//     name: { type: String, required: true },
//     image: { type: String, required: true }
//   }]
});

export default mongoose.model('GameServer', gameServerSchema);