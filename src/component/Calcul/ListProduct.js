import React, { Component } from 'react'
// import { Table, Button, Form } from 'semantic-ui-react';


class ListProduct extends Component {
    state= {
        nombre_un:'',
        nombre_deux:'',
        nombre_trois:'',
        operateur = [
            { id: '1' , value="addition"},
            { id: '2' , value="soustraction"},
            { id: '3' , value="multiplication"},
            { id: '4' , value="division"},
        
        ]
    }
    
    handleChange = (event) =>{
        this.setState({
            value: event.target.value
        });
        console.log(event);
    }

    handleSubmit(event) {
        event.preventDefault();
        const { nombre_un, nombre_deux } = this.state;
        if (value == 1) {
            value = nombre_un + nombre_deux;
            return value;        
        } 
        if (value == 2) {
            value =  nombre_un - nombre_deux;
            return value;
        }
        if (value == 3) {
            value =  nombre_un * nombre_deux;
            return value;
        } 
        if (value == 4) {
            value =  nombre_un / nombre_deux;
            return value;
        }
    }

    render() {
        const { nombre_un, nombre_deux, nombre_trois } = this.state;
        return(
            <>
            {/* <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Nom</Table.HeaderCell>
                        <Table.HeaderCell>Description</Table.HeaderCell>
                        <Table.HeaderCell>Catégorie</Table.HeaderCell>
                        <Table.HeaderCell>Prix</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>{ this.props.nom }</Table.Cell>
                        <Table.Cell>{ this.props.description }</Table.Cell>
                        <Table.Cell>{ this.props.categorie }</Table.Cell>
                        <Table.Cell>{ this.props.prix }</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table> */}
            <br></br>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Premier nombre :
                <input type="text" value={nombre_un} onChange={this.handleChange} />
                </label>
                <select value={nombre_trois} onChange={this.handleChange}>
                    <option value="1">Addition</option>
                    <option value="2">Soustraction</option>
                    <option value="3">Multiplication</option>
                    <option value="4">Division</option>
                </select>
                <label>
                    Deuxième nombre :
                <input type="text" value={nombre_deux} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Envoyer" />
            </form>
            <br></br>
            <h1>Le résultat de votre calcul est: </h1>
        </>
        )
    }
}

export default ListProduct
