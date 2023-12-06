
import React from 'react';
import { View, Text } from 'react-native';

const Etudiant1 = ({ nom, noteEC, notePR }) => {
  // Calculer la moyenne avec les coefficients
  const moyenne = (noteEC + 2 * notePR) / 3;

  // Déterminer si l'étudiant doit passer à la deuxième session
  const doitPasserSession2 = moyenne <= 10;


  // Calculer la date de la deuxième session (aujourd'hui + 1 mois)
  const dateDeuxiemeSession = new Date();
  dateDeuxiemeSession.setMonth(dateDeuxiemeSession.getMonth() + 1);

  return (
    <View>
      <Text>Nom de l'étudiant: {nom}</Text>
      <Text>Moyenne: {moyenne}</Text>

      {doitPasserSession2 ? (
        <View>
          <Text>Date de la deuxième session: {dateDeuxiemeSession.toDateString()}</Text>
        </View>
      ) : null}
    </View>
  );
};

export default Etudiant1;