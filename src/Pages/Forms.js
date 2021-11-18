import React, { useEffect, useState } from 'react';
import Header from '../Header';
import axios from 'axios';

function Forms(){
    const [estados, setEstados] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3030/estados').then(response => {
            console.log(response.data);
        })
    }, []);

    return (
        <div > 
            <Header title="React form" />
            <form>
                <fieldset>
                    <legend>
                        <h2>Dados Cadastrais</h2>
                    </legend>

                    <div>
                        <label>Nome:
                            <input type="text" name="txtNome" id="txtNome" />
                        </label>
                    </div>
                    <br />
                    <div>
                        <label>Idade:
                            <input type="number" name="txtIdade" id="txtIdade" />                           
                        </label>
                    </div>        
                    <br />
                    <div>
                        <label> UF:
                            <select name="cmbUF" id="cmbUF">
                                <option value="0">Selecione uma opção</option>
                                {estados.map(estado =>
                                    (<option key={estado.id} value={estado.id}>{estado.uf}</option>))}
                            </select>                           
                        </label>
                    </div>
                    <br />
                    <input type="submit" value="Salvar" />
                </fieldset>
            </form>
        </div>        
    )
}

export default Forms;