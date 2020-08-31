import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

class Addition extends Component {
    state = {
        operation:'',
        nombre_un:'',
        nombre_deux:''
    }

    addInputElementOne = (event, nombre_un) => {
        const valueSelectedByUser = parseInt(event.target.value);
        this.setState({
            nombre_un : valueSelectedByUser,
        })
    }

    addInputElementTwo = (event, nombre_deux) => {
        const valueSelectedByUser = parseInt(event.target.value);
        this.setState({
            nombre_deux : valueSelectedByUser,
        })
    }

    handleChange = (event, operation) => {
        const valueSelectedByUser = parseInt(event.target.value);
        this.setState({
            operation: valueSelectedByUser
        })
    }
    render() {
        const { nombre_un, nombre_deux, operation } = this.state;
        let c = 0;
        
        switch(operation) {
            case 1:
                c = nombre_un + nombre_deux;
                break;
            case 2:
                c = nombre_un - nombre_deux;
                break;
            case 3:
                c = nombre_un * nombre_deux;
                break;
            case 4:
                c = nombre_un / nombre_deux;
                break;
        }
        return(
            <div>
                {/* c = {c}; */}
                <form>
                    <div className="wrapper">
                        <div className="form-group">
                            <label for="name">Nombre:
                                <input type="text" value={nombre_un} onChange={this.addInputElementOne}/>
                            </label>
                        </div>
                    </div><br></br>
                    <div className="form-group">
                        <select value={operation} onChange={this.handleChange}>
                            <option value="1">Addition</option>
                            <option value="2">Soustraction</option>
                            <option value="3">Multiplication</option>
                            <option value="4">Division</option>
                        </select>
                    </div><br></br>
                    <div className="wrapper">
                        <div className="form-group">
                            <label for="name">Nombre:
                                <input type="text" value={nombre_deux} onChange={this.addInputElementTwo}/>
                            </label>
                        </div>
                    </div><br></br>
                    <div className="wrapper">
                        <div className="form-group">
                            <label for="name">Résultat:
                                <input type="text" value={c}/>
                            </label>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Addition;