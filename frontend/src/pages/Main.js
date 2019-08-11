import React from 'react';

import logo from '../assets/logo.svg';
import dislike from '../assets/dislike.svg';
import like from '../assets/like.svg';

import './Main.css';

export default function Main({ match }) {
    return(
        <div className='main-container'>
            <im src={logo} alt="Tindev" />
            <ul>
                <li>
                    <img src={"https://avatars1.githubusercontent.com/u/15988500?v=4"} alt="" />
                    <footer>
                        <strong>Gease Oliveira da Rosa</strong>
                        <p>Programador e Piloto de Drones</p>
                    </footer>
                    <div className="buttons">
                        <button type="button">
                           <img src={dislike} alt="dislike" /> 
                        </button>
                        <button type="button">
                           <img src={like} alt="like" /> 
                        </button>
                    </div>
                </li>
                <li>
                    <img src={"https://avatars1.githubusercontent.com/u/15988500?v=4"} alt="" />
                    <footer>
                        <strong>Gease Oliveira da Rosa</strong>
                        <p>Programador e Piloto de Drones</p>
                    </footer>
                    <div className="buttons">
                        <button type="button">
                           <img src={dislike} alt="dislike" /> 
                        </button>
                        <button type="button">
                           <img src={like} alt="like" /> 
                        </button>
                    </div>
                </li>
                <li>
                    <img src={"https://avatars1.githubusercontent.com/u/15988500?v=4"} alt="" />
                    <footer>
                        <strong>Gease Oliveira da Rosa</strong>
                        <p>Programador e Piloto de Drones</p>
                    </footer>
                    <div className="buttons">
                        <button type="button">
                           <img src={dislike} alt="dislike" /> 
                        </button>
                        <button type="button">
                           <img src={like} alt="like" /> 
                        </button>
                    </div>
                </li>
                <li>
                    <img src={"https://avatars1.githubusercontent.com/u/15988500?v=4"} alt="" />
                    <footer>
                        <strong>Gease Oliveira da Rosa</strong>
                        <p>Programador e Piloto de Drones</p>
                    </footer>
                    <div className="buttons">
                        <button type="button">
                           <img src={dislike} alt="dislike" /> 
                        </button>
                        <button type="button">
                           <img src={like} alt="like" /> 
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    )
}
