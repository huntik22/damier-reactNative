import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const Etudiant3 = ({ nom }) => {
  
  const [moyenne, setMoyenne] = useState(() => Math.round(Math.random() * 20));
  const [dateDeuxiemeSession, setDateDeuxiemeSession] = useState(() => {
    const date = new Date();
    date.setMonth(date.getMonth() + 1);
    return date.toDateString();
  });

  
  const regenererMoyenne = () => {
    setMoyenne(Math.round(Math.random() * 20));
  };

  return (
    <View>
      <Text>Nom de l'étudiant: {nom}</Text>
      <Text>Moyenne: {moyenne}</Text>

      {moyenne <= 10 && (
        <View>
          <Text>Date de la deuxième session: {dateDeuxiemeSession}</Text>
        </View>
      )}

      <Button title="Regénérer Moyenne" onPress={regenererMoyenne} />
    </View>
  );
};

export default Etudiant3;