import React, { Component } from 'react';
import '../style.scss';

class Com extends Component {
    constructor(props) {
        super(props);

        this.state = {
            zrobione : 'false',
            x : 0,
            lista : [
                {
                    string : 'Hello Julia!',
                    button : 'Coooo ?',
                },
                {
                    string : 'I am so so sorry, Welcome princess Julia',
                    button : 'Tak lepiej!',
                },
                {
                    string : 'Love',
                    button : '<3',
                },
                {
                    string : '',
                    button : ''
                }
            ]
        };
    }

    change=() => {
        if(this.state.x > 2){
            this.setState({string : 'Love', button : '<3'})
        }else{
            this.setState({x : this.state.x+1})
        }
    }

    render() {
        return (
            <div className ='Component'>
                <p>{this.state.lista[this.state.x].string}</p>
            <button onClick={() => this.change()}>
            <span>{this.state.lista[this.state.x].button}</span>
            </button>
            </div>
        );
    }

}

export default Com;