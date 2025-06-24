import React from 'react';
import { Users, GraduationCap, BookOpen, CreditCard, TrendingUp } from 'lucide-react';
import Card from '../../components/ui/Card';
import { eleves, enseignants, classes, paiements, evenements } from '../../data/donneesTemporaires';

const TableauDeBord = () => {
  const stats = [
    {
      title: 'Total Élèves',
      value: eleves.length,
      icon: GraduationCap,
      color: 'bg-blue-500',
      change: '+12%'
    },
    {
      title: 'Enseignants',
      value: enseignants.length,
      icon: Users,
      color: 'bg-green-500',
      change: '+3%'
    },
    {
      title: 'Classes',
      value: classes.length,
      icon: BookOpen,
      color: 'bg-orange-500',
      change: '0%'
    },
    {
      title: 'Revenus ce mois',
      value: `${paiements.reduce((sum, p) => sum + p.montant, 0)}€`,
      icon: CreditCard,
      color: 'bg-red-500',
      change: '+8%'
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Tableau de bord</h1>
        <p className="text-gray-600">Vue d'ensemble de l'établissement</p>
      </div>

      {/* Statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="p-6">
            <div className="flex items-center">
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">{stat.title}</p>
                <div className="flex items-center">
                  <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                  <span className="ml-2 text-sm text-green-600 flex items-center">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    {stat.change}
                  </span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Événements récents */}
        <Card>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Événements à venir</h2>
          <div className="space-y-4">
            {evenements.map((event) => (
              <div key={event.id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <h3 className="font-medium text-gray-900">{event.titre}</h3>
                  <p className="text-sm text-gray-600">{event.description}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {new Date(event.date).toLocaleDateString('fr-FR')}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Répartition par classe */}
        <Card>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Répartition par classe</h2>
          <div className="space-y-3">
            {classes.map((classe) => (
              <div key={classe.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-medium text-gray-900">{classe.nom}</h3>
                  <p className="text-sm text-gray-600">Salle {classe.salle}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">{classe.nombreEleves}</p>
                  <p className="text-xs text-gray-500">élèves</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default TableauDeBord;