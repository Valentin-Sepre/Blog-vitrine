import React from 'react';
import Navbar from '../composants/navbar';
import Footer from '../composants/footer';

const AboutPage: React.FC = () => {
    return (
        <main className="flex min-h-screen flex-col bg-concrete-nude">
            <Navbar />
            <section className="flex-grow flex flex-col items-center justify-center p-8">
                <div className="bg-concrete-light p-8 rounded-lg shadow-lg max-w-4xl mx-4">
                    {/* En-tête */}
                    <header className="text-center mb-8">
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">À Propos de Nous</h1>
                        <p className="text-lg text-gray-600">Découvrez notre association et ce que nous faisons.</p>
                    </header>

                    {/* Section Présentation */}
                    <section className="mb-12">
                        <h2 className="text-2xl text-center font-semibold text-gray-800 mb-4">Qui Nous Sommes</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Nous sommes l'association [Nom de l'Association], dédiée à [mission de l'association]. Fondée en [année de fondation], notre objectif est de [objectif principal de l'association].
                            Nous nous efforçons de [principales activités ou projets] pour [bénéficiaires ou impact attendu].
                        </p>
                    </section>

                    {/* Section Objectifs */}
                    <section className="mb-12">
                        <h2 className="text-2xl text-center font-semibold text-gray-800 mb-4">Nos Objectifs</h2>
                        <ul className="list-disc list-inside text-center text-gray-700">
                            <li>Objectif 1: [Description de l'objectif]</li>
                            <li>Objectif 2: [Description de l'objectif]</li>
                            <li>Objectif 3: [Description de l'objectif]</li>
                            <li>Objectif 4: [Description de l'objectif]</li>
                        </ul>
                    </section>

                    {/* Section Équipe */}
                    <section className="mb-12">
                        <h2 className="text-2xl text-center font-semibold text-gray-800 mb-4">Notre Équipe</h2>
                        <div className="flex flex-wrap justify-center gap-6">
                            {/* Exemple d'un membre de l'équipe */}
                            <div className="flex flex-col items-center w-full md:w-1/3 lg:w-1/4">
                                <img
                                    src="/Naruto.jpg" // Remplacez par une image réelle
                                    alt="Naruto"
                                    className="w-32 h-32 rounded-full object-cover mb-4"
                                />
                                <h3 className="text-lg font-semibold text-gray-800">Naruto</h3>
                                <p className="text-gray-600">Devenir Hokage</p>
                            </div>

                            <div className="flex flex-col items-center w-full md:w-1/3 lg:w-1/4">
                                <img
                                    src="/Batman.jpg" // Remplacez par une image réelle
                                    alt="Batman"
                                    className="w-32 h-32 rounded-full object-cover mb-4"
                                />
                                <h3 className="text-lg font-semibold text-gray-800">Batman</h3>
                                <p className="text-gray-600">Aimerait des pouvoirs </p>
                            </div>

                            <div className="flex flex-col items-center w-full md:w-1/3 lg:w-1/4">
                                <img
                                    src="/Flash.jpg" // Remplacez par une image réelle
                                    alt="Nom du Membre"
                                    className="w-32 h-32 rounded-full object-cover mb-4"
                                />
                                <h3 className="text-lg font-semibold text-gray-800">Flash</h3>
                                <p className="text-gray-600">Meilleur perso</p>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
            <Footer/>
        </main>
    );
};

export default AboutPage;
