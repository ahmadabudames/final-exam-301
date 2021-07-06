import React, { Component } from 'react'

export class DataFromApi extends Component {
    render() {
        return (
            this.props.dataFromApi.map((obj, idx) => {
                return (
                    <div key={idx}>
                        <h2>
                            {obj.strDrink}
                        </h2>
                        <img src={obj.strDrinkThumb} alt="" />

                        <h3>
                            {obj.idDrink}
                        </h3>

                        <button onClick={e => this.props.favoriteItem((obj.strDrink))}>
                            add to favorite
                        </button>


                    </div>

                )
            })
        )
    }
}

export default DataFromApi
