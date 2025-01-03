import mongoose from 'mongoose';
import dotenv from 'dotenv';
import GameServer from '../models/GameServer.js';

dotenv.config();

const seedData = {
  name: "! RC3-BASEMAPS",
  players: {
    current: 60,
    max: 64
  },
  network: {
    ping: 104,
    tickrate: 60
  },
  settings: {
    region: "EUROPE - DE",
    punkbaster: true,
    fairfight: true,
    password: false,
    preset: "NORMAL"
  },
  advanced: {
    minimap: true,
    onlySquadLeaderSpawn: false,
    vehicles: true,
    teamBalance: true,
    minimapSpotting: true,
    hud: true,
    thirdPersonVehicleCam: true,
    regenerativeHealth: true,
    killCam: true,
    friendlyFire: false,
    threeDSpotting: true,
    enemyNameTags: true
  },
  rules: {
    tickets: 400,
    vehicleSpawnDelay: 25,
    bulletDamage: 100,
    kickAfterTeamKills: 5,
    playerHealth: 100,
    playerRespawnTime: 100,
    kickAfterIdle: 300,
    banAfterKicks: 3
  },
  mapRotation: [
    {
      name: "CONQUEST LARGE DAWNBREAKER",
      image: "/maps/dawnbreaker.jpg"
    },
    {
      name: "CONQUEST LARGE PROPAGANDA",
      image: "/maps/propaganda.jpg"
    },
    {
      name: "CONQUEST LARGE OPERATION LOCKER",
      image: "/maps/operation-locker.jpg"
    },
    {
      name: "CONQUEST LARGE LANCANG DAM",
      image: "/maps/lancang-dam.jpg"
    },
    {
      name: "CONQUEST LARGE SIEGE OF SHANGHAI",
      image: "/maps/siege-of-shanghai.jpg"
    },
    {
      name: "CONQUEST LARGE GOLMUD RAILWAY",
      image: "/maps/golmud-railway.jpg"
    }
  ]
};

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    
    await GameServer.deleteMany({});
    await GameServer.create(seedData);
    
    console.log('Database seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();