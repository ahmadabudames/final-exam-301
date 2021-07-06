import React, { Component } from 'react'

export class ShowUpdate extends Component {
    render() {
        return (
            <form onSubmit={this.props.UpdateData}  >
                <input onChange={this.props.UpdateOfIdDrink} type="text" value={this.props.idDrink} />
                <input type="submit" value="update form" />
            </form>
        )
    }
}

export default ShowUpdate
