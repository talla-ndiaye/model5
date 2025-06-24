import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import InputField from '../components/ui/InputField';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const Connexion = () => {
  const [formData, setFormData] = useState({
    email: '',
    motDePasse: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { login, user } = useAuth();

  if (user) {
    const dashboardPath = `/${user.role}/tableau-de-bord`;
    return <Navigate to={dashboardPath} replace />;
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const result = await login(formData.email, formData.motDePasse);
      if (!result.success) {
        setError(result.error);
      }
    } catch (err) {
      setError('Une erreur inattendue s\'est produite');
    } finally {
      setLoading(false);
    }
  };

  const comptesDemonstration = [
    { role: 'Admin', email: 'admin@ecole.fr', password: 'admin123' },
    { role: 'Enseignant', email: 'prof@ecole.fr', password: 'prof123' },
    { role: 'Parent', email: 'parent@ecole.fr', password: 'parent123' },
    { role: 'Élève', email: 'eleve@ecole.fr', password: 'eleve123' },
    { role: 'Comptable', email: 'comptable@ecole.fr', password: 'comptable123' }
  ];

  const fillDemo = (email, password) => {
    setFormData({ email, motDePasse: password });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            EcoleManager
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Connectez-vous à votre espace
          </p>
        </div>

        <Card className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm">
                {error}
              </div>
            )}

            <InputField
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="votre.email@ecole.fr"
              required
            />

            <InputField
              label="Mot de passe"
              type="password"
              name="motDePasse"
              value={formData.motDePasse}
              onChange={handleChange}
              placeholder="Votre mot de passe"
              required
              showPasswordToggle
            />

            <Button
              type="submit"
              className="w-full"
              loading={loading}
            >
              Se connecter
            </Button>
          </form>
        </Card>

        <Card className="p-6">
          <h3 className="text-sm font-medium text-gray-900 mb-4">
            Comptes de démonstration
          </h3>
          <div className="space-y-2">
            {comptesDemonstration.map((compte, index) => (
              <button
                key={index}
                onClick={() => fillDemo(compte.email, compte.password)}
                className="w-full text-left p-2 text-xs bg-gray-50 hover:bg-gray-100 rounded border transition-colors"
              >
                <div className="font-medium">{compte.role}</div>
                <div className="text-gray-600">{compte.email}</div>
              </button>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Connexion;