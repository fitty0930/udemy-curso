import React, {Component} from "react";

class LoginButton extends Component {
    render (){
        return <div>
            <button> Ingresar</button>
        </div>
    }
}

class LogoutButton extends Component {
    render (){
        return <div>
            <p>Bienvenido! Martin </p>
            <button> Cerrar sesión </button>
        </div>
    }
}

function conditionalRendering(isLogged){
    return isLogged ?   <LogoutButton/> : <LoginButton/>
}

export default class ConditionalSection extends Component {
    
    constructor(props){
        super(props);
        this.state = { isLogged:  true}
    }

    render (){
        const renderCondicional=conditionalRendering(this.state.isLogged);
        return <div>
            <h4> Rederizado condicional </h4>
            {renderCondicional}
        </div>
    }
}