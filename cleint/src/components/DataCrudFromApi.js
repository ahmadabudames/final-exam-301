import React, { Component } from 'react'

export class DataCrudFromApi extends Component {
    render() {
        return (
            this.props.dataFromCrudApi.map((obj, idx) => {
                return (
                    <div key={idx}>
                        <h2>
                            {obj.strDrink}
                        </h2>
                        <img src={obj.strDrinkThumb} alt="" />

                        <h3>
                            {obj.idDrink}
                        </h3>

                        <button onClick={e => this.props.deleteItem(obj.name)}>
                            add to favorite
                        </button>


                        <button onClick={e => this.props.showUdate(obj.idDrink, obj.strDrink)}>
                            show the update
                        </button>


                    </div>

                )
            })
        )
    }
}

export default DataCrudFromApi
