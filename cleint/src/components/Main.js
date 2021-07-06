import axios from 'axios';
import React, { Component } from 'react'
import DataFromApi from './DataFromApi';
export class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Url: process.env.REACT_APP_SERVER_URL,
            dataFromApi: [],
            showDataFromApi: false,
            messageShow: false,
            message: ''

        }
    }


    componentDidMount = async () => {
        const request = await axios.get(`${this.state.Url}/drinks`);
        this.setState({
            dataFromApi: request.data,
            showDataFromApi: true
        })
    }

    favoriteItem = async (objData) => {
        const Postrequest = await axios.post(`${this.state.Url}/drinks/favorite`, objData);
        this.setState({
            message: Postrequest.data,
            messageShow: true
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
                    this.state.showDataFromApi &&
                    <DataFromApi
                        dataFromApi={this.state.dataFromApi}
                        favoriteItem={this.favoriteItem}
                    />

                }




            </>
        )
    }
}

export default Main
