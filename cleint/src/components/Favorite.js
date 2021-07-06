import React, { Component } from 'react'
import axios from 'axios';
import DataCrudFromApi from './DataCrudFromApi';
import ShowUpdate from './ShowUpdate';

export class Favorite extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Url: process.env.REACT_APP_SERVER_URL,
            dataFromCrudApi: [],
            showDataFromCrudApi: false,
            messageShow: false,
            message: '',
            idDrink: '',
            nameOfStrDrink: '',
            showUpdateForm: false

        }
    }


    componentDidMount = async () => {
        const request = await axios.get(`${this.state.Url}/drinks/favorite`);
        this.setState({
            dataFromCrudApi: request.data,
            showDataFromCrudApi: true
        })
    }

    deleteItem = async (strDrink) => {
        const request = await axios.delete(`${this.state.Url}/drinks/favorite/${strDrink}`);
        this.setState({
            dataFromCrudApi: request.data,

        })
    }

    showUdate = (idDrink, strDrink) => {
        this.setState({
            idDrink: idDrink,
            nameOfStrDrink: strDrink,
            showUpdateForm: true
        })
    }

    UpdateData = (e) => this.setState({
        idDrink: e.target.value
    })

    UpdateOfIdDrink = async (e) => {
        e.preventDefault();
        const request = await axios.put(`${this.state.Url}/drinks/favorite/${this.state.nameOfStrDrink}`, { idDrink: this.state.idDrink });
        this.setState({
            dataFromCrudApi: request.data,

        })
    }



    render() {
        return (
            <>
                {
                    this.state.messageShow &&
                    <h2>
                        {this.state.message}
                    </h2>
                }

                {

                    this.state.showUpdateForm &&
                    <ShowUpdate
                        UpdateData={this.UpdateData}
                        UpdateOfIdDrink={this.UpdateOfIdDrink}
                        idDrink={this.state.idDrink}

                    />

                }

                {
                    this.state.showDataFromCrudApi &&
                    <DataCrudFromApi
                        dataFromCrudApi={this.state.dataFromCrudApi}
                        deleteItem={this.deleteItem}
                        showUdate={this.showUdate}
                    />
                }






            </>
        )
    }
}

export default Favorite
