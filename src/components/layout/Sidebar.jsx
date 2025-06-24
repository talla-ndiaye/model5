import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  GraduationCap, 
  BookOpen, 
  Calendar,
  FileText,
  CreditCard,
  Upload,
  UserCheck,
  Clock,
  FileBarChart,
  Receipt
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Sidebar = () => {
  const { user } = useAuth();

  const getMenuItems = () => {
    switch (user?.role) {
      case 'admin':
        return [
          { icon: LayoutDashboard, label: 'Tableau de bord', path: '/admin/tableau-de-bord' },
          { icon: Users, label: 'Gestion utilisateurs', path: '/admin/gestion-utilisateurs' },
          { icon: GraduationCap, label: 'Élèves', path: '/admin/eleves' },
          { icon: UserCheck, label: 'Enseignants', path: '/admin/enseignants' },
          { icon: BookOpen, label: 'Classes', path: '/admin/classes' },
          { icon: FileText, label: 'Matières', path: '/admin/matieres' },
          { icon: Calendar, label: 'Emplois du temps', path: '/admin/emplois-du-temps' },
          { icon: FileBarChart, label: 'Notes & Bulletins', path: '/admin/notes-bulletins' },
          { icon: CreditCard, label: 'Paiements', path: '/admin/paiements' },
          { icon: Upload, label: 'Import élèves', path: '/admin/import-eleves' }
        ];
      
      case 'enseignant':
        return [
          { icon: LayoutDashboard, label: 'Tableau de bord', path: '/enseignant/tableau-de-bord' },
          { icon: BookOpen, label: 'Mes classes', path: '/enseignant/mes-classes' },
          { icon: Calendar, label: 'Emploi du temps', path: '/enseignant/emploi-du-temps' },
          { icon: FileBarChart, label: 'Gestion notes', path: '/enseignant/gestion-notes' }
        ];
      
      case 'eleve':
        return [
          { icon: Calendar, label: 'Emploi du temps', path: '/eleve/emploi-du-temps' },
          { icon: FileBarChart, label: 'Mes notes', path: '/eleve/notes' }
        ];
      
      case 'parent':
        return [
          { icon: GraduationCap, label: 'Mes enfants', path: '/parent/mes-enfants' }
        ];
      
      case 'comptable':
        return [
          { icon: Receipt, label: 'Reçus', path: '/comptable/recus' }
        ];
      
      default:
        return [];
    }
  };

  const menuItems = getMenuItems();

  return (
    <aside className="w-64 bg-gray-900 text-white flex flex-col">
      <div className="p-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <h2 className="font-semibold">EcoleManager</h2>
            <p className="text-xs text-gray-400 capitalize">{user?.role}</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive 
                      ? 'bg-blue-600 text-white' 
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`
                }
              >
                <item.icon className="w-5 h-5" />
                <span className="text-sm font-medium">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;