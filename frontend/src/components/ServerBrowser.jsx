// import React, { useEffect, useState } from 'react';
// import { ChevronLeft, Users, Play, Menu, HelpCircle, Power, Plus } from 'lucide-react';

// const ServerBrowser = () => {
//   const maps = [
//     { name: 'CONQUEST LARGE DAWNBREAKER', image: '/maps/1.png' },
//     { name: 'CONQUEST LARGE PROPAGANDA', image: '/maps/2.png' },
//     { name: 'CONQUEST LARGE OPERATION LOCKER', image: '/maps/3.png' },
//     { name: 'CONQUEST LARGE LANCANG DAM', image: '/maps/4.png' },
//     { name: 'CONQUEST LARGE SIEGE OF SHANGHAI', image: '/maps/5.png' },
//     { name: 'CONQUEST LARGE GOLMUD RAILWAY', image: '/maps/6.png' }
//   ];

//   const [serverData, setServerData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const backendUrl = import.meta.env.VITE_BACKEND_URL;

//   useEffect(() => {
//     fetchServerData();
//   }, []);

//   const fetchServerData = async () => {
//     try {
//       const response = await fetch(`${backendUrl}/api/servers/current`);
//       const data = await response.json();
//       setServerData(data);
//     } catch (error) {
//       console.error('Error fetching server data:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
//   }

//   return (
//     <div className="bg-gray-900 text-white min-h-screen">
//       <header className="p-4 flex items-center gap-4 border-b border-gray-800">
//         <ChevronLeft className="h-6 w-6" />
//         <span className="text-sm">MULTIPLAYER / SERVER BROWSER /</span>
//         <h1 className="text-xl font-bold">SERVER INFO</h1>
//       </header>

//       <div className="grid grid-cols-12 gap-4 p-4">
//         <div className="col-span-1">
//           <div className="flex flex-col gap-2">
//             {[Users, Play, Menu, HelpCircle, Power].map((Icon, i) => (
//               <button key={i} className="p-2 hover:bg-gray-800 rounded">
//                 <Icon className="h-6 w-6" />
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className="col-span-11">
//           <div className="mb-6">
//             <div className="flex justify-between items-center mb-4">
//               <div>
//                 <div className="flex gap-8">
//                   <div className="text-gray-400">
//                     PLAYERS <span className="text-white">{serverData.players.current}/{serverData.players.max}</span>
//                   </div>
//                   <div className="text-gray-400">
//                     PING <span className="text-white">{serverData.network.ping}ms</span>
//                   </div>
//                   <div className="text-gray-400">
//                     TICKRATE <span className="text-white">{serverData.network.tickrate} Hz</span>
//                   </div>
//                 </div>
//                 <div className="mt-4">
//                   <div className="mb-2">3D SPOTTING <span className="text-green-500">{serverData.advanced.threeDSpotting ? 'ON' : 'OFF'}</span></div>
//                   <div>ENEMY NAME TAGS <span className="text-green-500">{serverData.advanced.enemyNameTags ? 'ON' : 'OFF'}</span></div>
//                 </div>
//               </div>
//               <div className="flex gap-2">
//                 <button className="bg-gray-800 px-4 py-2 rounded flex items-center gap-2">
//                   <Users className="h-4 w-4" />
//                   SQUAD
//                 </button>
//                 <button className="bg-gray-800 px-4 py-2 rounded">
//                   <Plus className="h-4 w-4" />
//                 </button>
//               </div>
//             </div>
//           </div>

//           <div className="bg-gray-800 p-4 rounded">
//             <h2 className="mb-4">{serverData.name}</h2>
//             <div className="grid grid-cols-3 gap-4 mb-4">
//               <button className="bg-gray-900 p-2 rounded">JOIN</button>
//               <button className="bg-gray-900 p-2 rounded">SPECTATE</button>
//               <button className="bg-gray-900 p-2 rounded">JOIN AS COMMANDER</button>
//             </div>

//             <div className="grid grid-cols-3 gap-8">
//               <div>
//                 <h3 className="mb-2">SETTINGS</h3>
//                 <div className="grid grid-cols-2 gap-2">
//                   {Object.entries(serverData.settings).map(([key, value]) => (
//                     <React.Fragment key={key}>
//                       <div className="text-gray-400">{key.toUpperCase()}</div>
//                       <div>{typeof value === 'boolean' ? (value ? 'ON' : 'OFF') : value}</div>
//                     </React.Fragment>
//                   ))}
//                 </div>
//               </div>

//               <div>
//                 <h3 className="mb-2">ADVANCED</h3>
//                 <div className="grid grid-cols-2 gap-2">
//                   {Object.entries(serverData.advanced).map(([key, value]) => (
//                     <React.Fragment key={key}>
//                       <div className="text-gray-400">{key.toUpperCase()}</div>
//                       <div>{value ? 'ON' : 'OFF'}</div>
//                     </React.Fragment>
//                   ))}
//                 </div>
//               </div>

//               <div>
//                 <h3 className="mb-2">RULES</h3>
//                 <div className="grid grid-cols-2 gap-2">
//                   {Object.entries(serverData.rules).map(([key, value]) => (
//                     <React.Fragment key={key}>
//                       <div className="text-gray-400">{key.toUpperCase()}</div>
//                       <div>{value}</div>
//                     </React.Fragment>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           <h2 className="my-4">MAP ROTATION</h2>
//           <div className="grid grid-cols-4 gap-4">
//             {maps.map((map, i) => (
//               <div key={i} className="relative">
//                 <img src={map.image} alt={map.name} className="w-full rounded" />
//                 <div className="absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-50">
//                   <div className="text-sm">{map.name}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServerBrowser;