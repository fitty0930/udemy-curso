import React, { Component } from "react";
import miniatures from '../data/miniatures.json';

export default class MiniaturesItem extends Component {

    constructor(props) {
        super(props);
        this.state = { isLogged: true }

    }

    render() {
        const { car } = this.props
        return (
            <li key={car.id}>
                <p> Miniatura Nro {car.id}</p>
                <p> {car.nombre}, Año: {car.anio}</p>
            </li>
        )
    }
}