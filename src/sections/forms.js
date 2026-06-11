import React, {Component} from "react";

export default class Forms extends Component {
    
    constructor(props){
        super(props);
        this.state = { inputName: '',
            inputTwitter: '',
            inputTerms: ''
        }
    }

    handleChange = (e) => {
        console.log('chequeado', e.target.checked)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const name = this.state.inputName;
        const email = this.state.inputTwitter;

        console.log('logueo', 
            this.state
        )
    }

    render (){
        return <div>
            <h4> Formulario </h4>
            <form onSubmit={this.handleSubmit}>
                <p>
                    <label htmlFor="name">Nombre:</label>
                    <input
                    onChange={e => this.setState({
                        inputName : e.target.value
                    })}
                    value={this.state.inputName} id="name" name="userName" placeholder="Introduce el nombre">
                    </input>
                </p>
                <p>
                    <label htmlFor="twitter">Twitter</label>
                    <input  onChange={e => this.setState({
                        inputTwitter : e.target.value
                    })} value={this.state.inputTwitter} id="twitter" name="twitterAccount" placeholder="Introduce tu twitter">
                    </input>
                </p>
                <p>
                    <label htmlFor="terms">
                        <input onChange={e => this.setState({
                        inputTerms : e.target.checked
                    })} name="terms" type="checkbox" value={this.state.inputTerms}/>
                        Aceptar terminos y condiciones
                    </label>
                    
                </p>
                
                <button> enviar </button>
            </form>
        </div>
    }
}