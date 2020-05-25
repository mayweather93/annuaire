import React from 'react';
import { Card } from 'semantic-ui-react';

const Etablissement = ({ properties }) => {
    const { nom, telephone, url, email } = properties;
    return (
        <Card>
            <Card.Content>
                <Card.Header>{nom}</Card.Header>
                <Card.Meta>Téléphone: {telephone}</Card.Meta>
                <Card.Meta>Email: {email}</Card.Meta>
                <Card.Meta>Site web: {url}</Card.Meta>
            </Card.Content>
        </Card>
    )
}

export default Etablissement;