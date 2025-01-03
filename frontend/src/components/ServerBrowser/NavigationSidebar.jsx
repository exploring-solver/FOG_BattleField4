import { Users, Play, Menu, HelpCircle, Power } from 'lucide-react';

const NavigationSidebar = () => (
  <div className="flex flex-col gap-2">
    {[Users, Play, Menu, HelpCircle, Power].map((Icon, i) => (
      <button key={i} className="p-2 hover:bg-gray-800 rounded">
        <Icon className="h-6 w-6" />
      </button>
    ))}
  </div>
);

export default NavigationSidebar;
