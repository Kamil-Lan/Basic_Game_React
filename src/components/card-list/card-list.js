import React from 'react';
import { Card } from '../card/card.component';
import './card-list.scss';


// export zmiennej stałej bez default trzeba wskazać dokładną zmienną a nie całą funkcje
export const CardList = props => ( // nie mozna dawac w takim nawiasie ifow i return
    // return <div className='card-list'>{props.children}</div>
    <div className='card-list'>
        {props.monsters.map(monster => (
            <Card key={monster.id} monster={monster} />
        ))}
    </div>
);