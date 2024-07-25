import React, { useState } from "react";
import axios from "axios";
import Nav from "../../nav/nav.jsx";

const AddGame = () => {
    const baseURL = "http://localhost:3002";
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [imagePath, setImagePath] = useState("");
    const [dateSortie, setDateSortie] = useState("");
    const [category, setCategory] = useState("");

    const addVideoGame = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${baseURL}/newgame`, {
                title,
                description,
                price,
                imagePath,
                dateSortie,
                category
            });
            console.log("Jeu ajouté avec succès:", response.data);
            // Réinitialiser le formulaire après l'ajout
            setTitle("");
            setDescription("");
            setPrice("");
            setImagePath("");
            setDateSortie("");
            setCategory("");
        } catch (err) {
            console.error("Erreur lors de l'ajout du jeu:", err);
        }
    }

    return (
        <>
            <Nav/>
        <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">

            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Ajouter un nouveau jeu</h2>
            <form onSubmit={addVideoGame} className="space-y-4">
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Titre</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        rows="3"
                        required
                    ></textarea>
                </div>
                <div>
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700">Prix</label>
                    <input
                        type="number"
                        id="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="imagePath" className="block text-sm font-medium text-gray-700">URL de l'image</label>
                    <input
                        type="text"
                        id="imagePath"
                        value={imagePath}
                        onChange={(e) => setImagePath(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="dateSortie" className="block text-sm font-medium text-gray-700">Date de sortie</label>
                    <input
                        type="date"
                        id="dateSortie"
                        value={dateSortie}
                        onChange={(e) => setDateSortie(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700">Catégorie</label>
                    <input
                        type="text"
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        required
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Ajouter le jeu
                    </button>
                </div>
            </form>
        </div>
        </>
    );
}

export default AddGame;
