import React, { Component } from 'react';
import Recherche from './components/Recherche';
import Etablissement from './components/Etablissement';
import { Message, Card } from 'semantic-ui-react';

import './App.css';

class App extends Component {

  state = {
    data: [],
    error: ''
  }

onEmpty = () => {
  this.setState({ data: [], error: ''})
}
onSearch = async (dpt, type) => {
  if(dpt && type){
    try {
      let response = await fetch(`https://etablissements-publics.api.gouv.fr/v3/departements/${dpt}/${type}`)
      let data = await response.json();
      this.setState({
        data: data.features,
        error: ''
      })
    } catch(e){
      this.setState({ erro : "Erreur lors de la recherche"}) 
    }
  }else{
     this.setState({ error: "Merci de choisir un département et un établissement"})
  }
}

renderResults = () => {
  return this.state.data.map((etablissement) => {
    return <Etablissement key={etablissement} properties={etablissement.properties} />
  })
}
  render() {
    return (
      <div className="App">
        <h1>Annuaire des Administrations en Normandie et Paris</h1>
        <Recherche onSearch={this.onSearch} onEmpty={this.onEmpty} />
        { this.state.error ? <Message warning>{this.state.error}</Message> : undefined}
        {this.state.data ? 
        <Card.Group>
          { this.renderResults() }
        </Card.Group>
        : undefined }
      </div>
    );
  }
}

export default App;
