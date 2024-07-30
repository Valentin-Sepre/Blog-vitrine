import React from 'react';
import Navbar from '../composants/navbar';
import Footer from '../composants/footer';

const Contact = () => {
  return (
    <section className='bg-concrete-nude shadow-lg w-full'>
      <Navbar/>
      <main className="min-h-screen py-14 ">
        <div className="container mx-auto max-w-4xl bg-concrete-light p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl text-center font-bold text-gray-800 mb-6">Contactez-Nous</h1>

          {/* Section Formulaire de Contact */}
          <section>
            <form
              action="/send-message" // Changez l'URL d'action en fonction de votre backend
              method="POST"
              className="space-y-6"
            >
              <div className="flex flex-col">
                <label htmlFor="name" className="text-gray-800 mb-2 font-semibold">Nom</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Votre Nom"
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-gray-800 mb-2 font-semibold">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Votre Email"
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="message" className="text-gray-800 mb-2 font-semibold">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Votre Message"
                  rows={5}
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <div className="flex justify-center"> {/* Center the button */}
                <button
                  type="submit"
                  className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Envoyer
                </button>
              </div>
            </form>
          </section>
        </div>
      </main>
      <Footer/>
    </section>
  );
};

export default Contact;
