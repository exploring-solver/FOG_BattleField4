import React, { useState } from 'react';
import { Users, Plus } from 'lucide-react';

const PlayerList = () => {
  const [isHovered, setIsHovered] = useState(false);

  const squadMembers = [
    { id: 1, name: 'Marcus', avatar: '/avatars/gamer 1.jpeg', online: true, inSquad: true },
    { id: 2, name: 'Sarah', avatar: '/avatars/gamer 2.jpeg', online: true, inSquad: true },
    { id: 3, name: 'Alex', avatar: '/avatars/gamer 3.jpeg', online: true, inSquad: false },
    { id: 4, name: 'John', avatar: '/avatars/gamer 4.jpeg', online: true, inSquad: false },
    { id: 5, name: 'Emma', avatar: '/avatars/gamer 5.jpeg', online: false, inSquad: false },
    { id: 6, name: '420', avatar: '/avatars/gamer 6.jpeg', online: false, inSquad: false },
  ];

  return (
    <div 
      className={`fixed right-0 top-0 h-screen bg-gray-900 transition-all duration-300 ease-in-out ${isHovered ? 'w-64' : 'w-16'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-4">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 bg-gray-800 rounded-sm flex items-center justify-center">
            <Users className="w-4 h-4" />
          </div>
          <span className={`font-semibold whitespace-nowrap transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0 absolute'}`}>
            SQUAD
          </span>
        </div>

        <button className="w-8 h-8 bg-gray-800 rounded-sm flex items-center justify-center mb-8">
          <Plus className="w-4 h-4" />
        </button>

        <div className="space-y-6">
          {/* In Squad Section */}
          <div>
            <div className={`text-xs text-gray-500 mb-2 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0 absolute'}`}>
              IN SQUAD
            </div>
            <div className="space-y-2">
              {squadMembers.filter(member => member.inSquad).map(member => (
                <div key={member.id} className="flex items-center group cursor-pointer rounded-sm transition-all duration-200 ease-in-out hover:bg-white">
                  <div className="relative w-8 h-8 flex-shrink-0">
                    <img src={member.avatar} alt={member.name} className="w-8 h-8 rounded-sm group-hover:rounded-l-sm group-hover:rounded-r-none" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full" />
                  </div>
                  <span className={`ml-2 whitespace-nowrap transition-all duration-200 group-hover:text-gray-900 ${isHovered ? 'opacity-100' : 'opacity-0 absolute'}`}>
                    {member.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Online Section */}
          <div>
            <div className={`text-xs text-gray-500 mb-2 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0 absolute'}`}>
              ONLINE
            </div>
            <div className="space-y-2">
              {squadMembers.filter(member => member.online && !member.inSquad).map(member => (
                <div key={member.id} className="flex items-center group cursor-pointer rounded-sm transition-all duration-200 ease-in-out hover:bg-white">
                  <div className="relative w-8 h-8 flex-shrink-0">
                    <img src={member.avatar} alt={member.name} className="w-8 h-8 rounded-sm group-hover:rounded-l-sm group-hover:rounded-r-none" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full" />
                  </div>
                  <span className={`ml-2 whitespace-nowrap transition-all duration-200 group-hover:text-gray-900 ${isHovered ? 'opacity-100' : 'opacity-0 absolute'}`}>
                    {member.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Offline Section */}
          <div>
            <div className={`text-xs text-gray-500 mb-2 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0 absolute'}`}>
              OFFLINE
            </div>
            <div className="space-y-2">
              {squadMembers.filter(member => !member.online).map(member => (
                <div key={member.id} className="flex items-center group cursor-pointer rounded-sm transition-all duration-200 ease-in-out hover:bg-white">
                  <div className="relative w-8 h-8 flex-shrink-0">
                    <img src={member.avatar} alt={member.name} className="w-8 h-8 rounded-sm opacity-50 group-hover:rounded-l-sm group-hover:rounded-r-none" />
                  </div>
                  <span className={`ml-2 whitespace-nowrap text-gray-500 transition-all duration-200 group-hover:text-gray-900 ${isHovered ? 'opacity-100' : 'opacity-0 absolute'}`}>
                    {member.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerList;