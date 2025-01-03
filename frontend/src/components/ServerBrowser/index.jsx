import React, { useEffect, useState } from 'react';
import ServerHeader from './ServerHeader';
import NavigationSidebar from './NavigationSidebar';
import ServerStats from './ServerStats';
import ServerDetails from './ServerDetails';
import MapRotation from './MapRotation';

const ServerBrowser = () => {
    const maps = [
        { name: 'CONQUEST LARGE DAWNBREAKER', image: '/maps/1.png' },
        { name: 'CONQUEST LARGE PROPAGANDA', image: '/maps/2.png' },
        { name: 'CONQUEST LARGE OPERATION LOCKER', image: '/maps/3.png' },
        { name: 'CONQUEST LARGE LANCANG DAM', image: '/maps/4.png' },
        { name: 'CONQUEST LARGE SIEGE OF SHANGHAI', image: '/maps/5.png' },
        { name: 'CONQUEST LARGE GOLMUD RAILWAY', image: '/maps/6.png' },
        { name: 'CONQUEST LARGE DAWNBREAKER', image: '/maps/1.png' },
        { name: 'CONQUEST LARGE PROPAGANDA', image: '/maps/2.png' },
        { name: 'CONQUEST LARGE OPERATION LOCKER', image: '/maps/3.png' },
        { name: 'CONQUEST LARGE LANCANG DAM', image: '/maps/4.png' },
        { name: 'CONQUEST LARGE SIEGE OF SHANGHAI', image: '/maps/5.png' },
        { name: 'CONQUEST LARGE GOLMUD RAILWAY', image: '/maps/6.png' }
    ];

    const [serverData, setServerData] = useState(null);
    const [loading, setLoading] = useState(true);
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    useEffect(() => {
        fetchServerData();
    }, []);

    const fetchServerData = async () => {
        try {
            const response = await fetch(`${backendUrl}/api/servers/current`);
            const data = await response.json();
            setServerData(data);
        } catch (error) {
            console.error('Error fetching server data:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
    }

    return (
        <div className="font-rajdhani bg-blur-bg bg-cover bg-center text-white min-h-screen">
            <ServerHeader />
            <div className="grid grid-cols-12 gap-4 p-4">
                <div className="col-span-1">
                    <NavigationSidebar />
                </div>
                <div className="col-span-11">
                    <ServerStats serverData={serverData} />
                    <ServerDetails serverData={serverData} />
                    <MapRotation maps={maps} />
                </div>
            </div>
        </div>

    );
};

export default ServerBrowser;