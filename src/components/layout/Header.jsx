import React from 'react';
import { Bell, User, LogOut } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import Button from '../ui/Button';

const Header = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="flex items-center justify-between px-6 py-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            EcoleManager
          </h1>
          <p className="text-sm text-gray-600">
            Gestion scolaire moderne
          </p>
        </div>

        <div className="flex items-center space-x-4">
          <button className="relative p-2 text-gray-400 hover:text-gray-600 transition-colors">
            <Bell className="w-6 h-6" />
            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400"></span>
          </button>

          <div className="flex items-center space-x-3">
            <div className="flex flex-col text-right">
              <span className="text-sm font-medium text-gray-900">
                {user?.prenom} {user?.nom}
              </span>
              <span className="text-xs text-gray-500 capitalize">
                {user?.role}
              </span>
            </div>
            
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={handleLogout}
              icon={LogOut}
            >
              Déconnexion
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;