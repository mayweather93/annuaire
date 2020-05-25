import React, {Component} from 'react';
import { Button, Select } from 'semantic-ui-react';
import './recherche.css';

class Recherche extends Component {
    
    state = {
         dpt : '',
         type : ''
    }

    onDptChange = (e, data) => { 
    this.setState({dpt : data.value})
    }

    onTypeChange = (e, data) => {  
        this.setState({type : data.value})
        }

    
        render(){
        const optionDpt = [
            {value: "76", key: "76", text: "Seine-Maritime"},
            {value: "27", key: "27", text: "Eure"},
            {value: "14", key: "14", text: "Calvados"},
            {value: "75", key: "75", text: "Paris"},
        ];

        const optionsType = [
            { value: "cpam", key:"cpam", text: "Caisse primaire d’assurance maladie (CPAM)"},
            { value: "cci", key:"cci", text: "Chambre de commerce et d’industrie (CCI)"},
            { value: "crous", key:"crous", text: "CROUS et ses antennes"}
        ]
        return(
            <div className="recherche">
                <Select placeholder="Choisissez un département" onChange={this.onDptChange} options={optionDpt} value={this.state.dpt} />
                <Select placeholder="Choisissez une administration" onChange={this.onTypeChange} options={optionsType} value={this.state.type} />
                <Button primary onClick={() => this.props.onSearch(this.state.dpt, this.state.type)}>Lancer la recherche</Button>
                <Button secondary onClick={this.props.onEmpty}>Vider la recherche</Button>
            </div>
        )
    }
}

export default Recherche;