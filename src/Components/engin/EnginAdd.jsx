import React, { useState } from 'react';

const EnginAdd = ({ onAddengin }) => {
  const [newengin, setNewengin] = useState({
    label: '',
    detail: '',
    userRole: 'User',
    vehicleType: 'Trottinette',
    photoURL: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewengin({ ...newengin, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddengin(newengin);
    setNewengin({
      label: '',
      detail: '',
      userRole: 'User',
      vehicleType: 'Trottinette',
      photoURL: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="engin-add">
      <input
        type="text"
        placeholder="Libellé"
        name="label"
        value={newengin.label}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Détail"
        name="detail"
        value={newengin.detail}
        onChange={handleChange}
      />
      <select name="userRole" value={newengin.userRole} onChange={handleChange}>
        <option value="User">Utilisateur</option>
        <option value="Admin">Administrateur</option>
      </select>
      <select name="vehicleType" value={newengin.vehicleType} onChange={handleChange}>
        <option value="Trottinette">Trottinette</option>
        <option value="Vélo">Vélo</option>
        <option value="Moto">Moto</option>
        <option value="Voiture">Voiture</option>
      </select>
      <input
        type="text"
        placeholder="URL de la photo"
        name="photoURL"
        value={newengin.photoURL}
        onChange={handleChange}
      />
      <button type="submit">Ajouter engin</button>
    </form>
  );
};

export default EnginAdd;
