import { Users, Plus } from 'lucide-react';
import PlayerList from './PlayerList';

const ServerStats = ({ serverData }) => (
  <div className="mb-6">
    <h2 className="mb-4 text-xl font-semibold">{serverData.name}</h2>
    <div className='flex gap-2 !text-xs text-gray-400 font-semibold'>
      <img src="https://cdn.prod.website-files.com/6022d2c0d37628c87d9e16ab/6022d74ce15ae958f20e10a9_america-flag.svg" alt="" className='w-12'/>
      <p>CONQUEST LARGE - LANCING DAM - CUSTOM - 60HZ</p>
    </div>
    <p className="text-xs text-gray-400 font-semibold my-2">
      Server protected by The_K-50 AntiCheat. VIP Rules, Questions, Requests, Appeals: Visit
      <a
        href="https://www.epg.gg"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline ml-1"
      >
        www.epg.gg
      </a>.
      Discord:
      <a
        href="https://discord.gg/3r5NK4d"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline ml-1"
      >
        https://discord.gg/3r5NK4d
      </a>
    </p>
    <div className="flex justify-between items-center mb-4 gap-2 flex-wrap">
      <div className=''>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <button className="border-2 border-gray-500 p-2 rounded bg-transparent transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-white hover:text-black font-semibold">JOIN</button>
          <button className="border-2 border-gray-500 p-2 rounded bg-transparent transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-white hover:text-black font-semibold">SPECTATE</button>
          <button className="border-2 border-gray-500 p-2 rounded bg-transparent transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-white hover:text-black font-semibold">JOIN AS COMMANDER</button>
        </div>
        <div className="flex gap-8">

          <div className="font-semibold text-sm flex flex-col">
            PLAYERS <span className="text-white text-lg font-semibold">{serverData.players.current}/{serverData.players.max}</span>
          </div>
          <div className="font-semibold text-sm flex flex-col">
            PING <span className="text-white text-lg font-semibold">{serverData.network.ping}ms</span>
          </div>
          <div className="font-semibold text-sm flex flex-col">
            TICKRATE <span className="text-white text-lg font-semibold">{serverData.network.tickrate} Hz</span>
          </div>
        </div>
        <div className="mt-4">
          <div className="mb-2">3D SPOTTING <span className="text-green-500">{serverData.advanced.threeDSpotting ? 'ON' : 'OFF'}</span></div>
          <div>ENEMY NAME TAGS <span className="text-green-500">{serverData.advanced.enemyNameTags ? 'ON' : 'OFF'}</span></div>
        </div>
      </div>
      {/* <div className="flex gap-2 flex-wrap bg-gray-900 ">
        <button className="bg-gray-800 px-4 py-2 rounded flex items-center gap-2">
          <Users className="h-4 w-4" />
          SQUAD
        </button>
        <button className="bg-gray-800 px-4 py-2 rounded">
          <Plus className="h-4 w-4" />
        </button>
      </div> */}
      <PlayerList />
    </div>
  </div>
);

export default ServerStats;