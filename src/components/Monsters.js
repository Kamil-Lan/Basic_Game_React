import React, { Component } from 'react';
import '../style.scss';
import { CardList } from './card-list/card-list';
import { SearchBox } from './search-box/search-box.component';

class Monsters extends Component {
    constructor(props){
        super(props);

        this.state = {
            monsters: [
                // {
                //     id: '1',
                //     name: 'Frankenstein'
                // },
                // {
                //     id: '1',
                //     name: 'Dracula'
                // },
                // {
                //     id: '1',
                //     name: 'Zombie'
                // }
            ],
            searchField: ''
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response => Response.json())
        .then(users => this.setState({monsters : users}));
    }

    handleChange = e => {
        this.setState({ searchField: e.target.value });
    };


    render() {

        const { monsters, searchField } = this.state;
        const filteredMonsters = monsters.filter(monster =>
            monster.name.toLowerCase().includes(searchField.toLowerCase())
            );

        return (
            <div className='monster_name'>
                <h1> Monsters Rolodex </h1>
                <SearchBox
                    placeholder='search monsters'
                    handleChange={this.handleChange}
                />
                <CardList monsters={filteredMonsters} />
            </div>
        )
    }
}

export default Monsters;