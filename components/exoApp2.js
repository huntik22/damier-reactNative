import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Etudiant2 extends Component {
  constructor(props) {
    super(props);

        this.state = {
      nom: this.props.nom,
      moyenne: this.genererMoyenne(),
      dateDeuxiemeSession: this.calculerDateDeuxiemeSession(),
    };
  }

  
  genererMoyenne = () => {
    return Math.round(Math.random() * 20);
  };

  
  calculerDateDeuxiemeSession = () => {
    const date = new Date();
    date.setMonth(date.getMonth() + 1);
    return date.toDateString();
  };

  
  regenererMoyenne = () => {
    this.setState({
      moyenne: this.genererMoyenne(),
    });
  };

  render() {
    const { nom, moyenne, dateDeuxiemeSession } = this.state;

    return (
      <View>
        <Text>Nom de l'étudiant: {nom}</Text>
        <Text>Moyenne: {moyenne}</Text>

        {moyenne <= 10 && (
          <View>
            <Text>Date de la deuxième session: {dateDeuxiemeSession}</Text>
          </View>
        )}

        <Button title="Regénérer Moyenne" onPress={this.regenererMoyenne} />
      </View>
    );
  }
}

export default Etudiant2;