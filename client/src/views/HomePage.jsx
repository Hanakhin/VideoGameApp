import React from 'react';
import {Link} from "react-router-dom";
import Nav from "../components/nav/nav.jsx"


const HomePage = () => {
    return (
        <div className="bg-gray-100 text-gray-900 min-h-screen">
            {/* Navigation */}
            <Nav/>
            {/* Hero Section */}
            <header className="bg-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-4">Découvrez l'univers du jeu</h2>
                    <p className="text-xl mb-8 text-gray-600">Les meilleurs jeux, au meilleur prix</p>
                    <Link to={'allvideogames'}><button className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition duration-300">
                        Voir les jeux
                    </button>
                    </Link>
                </div>
            </header>

            {/* Featured Games */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h3 className="text-2xl font-bold mb-8 text-center">Jeux populaires</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Game Card 1 */}
                        <div className="bg-white rounded-lg overflow-hidden shadow-md">
                            <img src="https://via.placeholder.com/300x200" alt="Game 1" className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h4 className="text-lg font-semibold mb-2">Aventure Fantastique</h4>
                                <p className="text-sm text-gray-600 mb-4">Un monde magique à explorer</p>
                                <a href="#" className="text-blue-600 hover:underline">En savoir plus</a>
                            </div>
                        </div>

                        {/* Game Card 2 */}
                        <div className="bg-white rounded-lg overflow-hidden shadow-md">
                            <img src="https://via.placeholder.com/300x200" alt="Game 2" className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h4 className="text-lg font-semibold mb-2">Course Ultime</h4>
                                <p className="text-sm text-gray-600 mb-4">La vitesse à l'état pur</p>
                                <a href="#" className="text-blue-600 hover:underline">En savoir plus</a>
                            </div>
                        </div>

                        {/* Game Card 3 */}
                        <div className="bg-white rounded-lg overflow-hidden shadow-md">
                            <img src="https://via.placeholder.com/300x200" alt="Game 3" className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h4 className="text-lg font-semibold mb-2">Stratégie Cosmique</h4>
                                <p className="text-sm text-gray-600 mb-4">Dominez la galaxie</p>
                                <a href="#" className="text-blue-600 hover:underline">En savoir plus</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h3 className="text-2xl font-bold mb-4">Restez connecté</h3>
                    <p className="mb-8 text-gray-600">Recevez nos dernières actualités et offres exclusives</p>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-100 text-gray-600 py-8">
                <div className="container mx-auto px-4 text-center">
                    <p>&copy; 2024 GameHub. Tous droits réservés.</p>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;