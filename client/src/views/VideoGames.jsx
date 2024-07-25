import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from "../components/nav/nav.jsx";
import GameCard from "../components/games/card/GameCard.jsx";
import {Link} from "react-router-dom";

const VideoGamePage = () => {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const baseURL = "http://localhost:3002";

    const getVideoGame = async () => {
        try {
            const response = await axios.get(`${baseURL}/videogames`);
            setGames(response.data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getVideoGame();
    }, []);

    if (loading) {
        return <div className="text-center text-gray-500">Chargement...</div>;
    }

    if (error) {
        return <div className="text-center  text-red-600">Erreur : {error}</div>;
    }

    return (
        <div className="min-h-screen ">
            <Nav />
            <div className="w-8/12 h-full flex flex-col m-auto">
                <h2 className="text-3xl font-extrabold text-gray-800 mb-8 mt-6 text-center">Tous les Jeux Vidéo</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {games.map((game, index) => (
                        <GameCard key={index} game={game} />
                    ))}
                </div>
                <Link to={'/newgame'}><button>Ajouter un jeu</button></Link>
            </div>
        </div>
    );
};

export default VideoGamePage;
