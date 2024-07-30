import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-concrete-light  text-black py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-center mb-8">
                    {/* Section Liens de Navigation Principaux */}
                    <div className="flex flex-col md:w-1/4 mb-6 md:mb-0">
                        <h3 className="text-lg font-bold text-gray-800 mb-4">Liens Rapides</h3>
                        <ul className="space-y-2">
                            <li><a href="/" className="hover:underline">Accueil</a></li>
                            <li><a href="/a-propos" className="hover:underline">À Propos</a></li>
                            <li><a href="/contact" className="hover:underline">Contact</a></li>
                            <li><a href="/privacy" className="hover:underline">Politique de Confidentialité</a></li>
                        </ul>
                    </div>

                    {/* Section Informations de Contact */}
                    <div className="flex flex-col md:w-1/4 mb-6 md:mb-0">
                        <h3 className="text-lg font-bold text-gray-800 mb-4">Nous Contacter</h3>
                        <p className="text-gray-700 mb-2"><strong>Email:</strong> <a href="mailto:contact@example.com" className="ms-1 text-blue-500 hover:underline">contact@example.com</a></p>
                        <p className="text-gray-700 mb-2"><strong>Téléphone:</strong> <a href="tel:+1234567890" className="text-blue-500 hover:underline ms-1">+123 456 7890</a></p>
                        <p className="text-gray-700"><strong>Adresse:</strong> 123 Rue de l'Association, 75001 Paris, France</p>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="bg-concrete-light text-center ">
                    <p className="text-gray-700 text-sm">&copy; {new Date().getFullYear()} Valentin. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
