import React from 'react';

const ServerDetails = ({ serverData }) => (
  <div className=" p-4 rounded">


    <div className="flex flex-wrap gap-8">
      <ServerSettingsSection title="SETTINGS" data={serverData.settings} />
      <ServerSettingsSection title="ADVANCED" data={serverData.advanced} />
      <ServerSettingsSection title="RULES" data={serverData.rules} />
    </div>
  </div>
);

const ServerSettingsSection = ({ title, data }) => (

  <div className=''>
    <h3 className="mb-2">{title}</h3>
    <div className="grid grid-cols-2 gap-2 ">
      {Object.entries(data).map(([key, value]) => (
        <React.Fragment key={key} >
          <div className="border-b-2 border-gray-500 ">{key.toUpperCase()}</div>
          <div className="border-b-2 border-gray-500 transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-white hover:text-black font-semibold">{typeof value === 'boolean' ? (value ? 'ON' : 'OFF') : value}</div>
        </React.Fragment>
      ))}
    </div>
  </div>
);

export default ServerDetails;