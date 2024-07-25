import React from 'react';
import {Link} from "react-router-dom";

const GameCard = ({ game }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={game.imagePath} alt={game.title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-600">{game.title}</h3>
                <p className="text-gray-500">{game.description}</p>
            </div>
            <Link to={'#'}>Details</Link>
        </div>
    );
};

export default GameCard;
