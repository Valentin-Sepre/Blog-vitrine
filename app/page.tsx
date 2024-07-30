import React from 'react';
import Navbar from './composants/navbar'; 
import Carousel from './composants/carousel';
import Footer from './composants/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-concrete-nude">
      <Navbar />
      <main className="flex-grow flex flex-col items-center">
        <section className="flex-grow flex items-center justify-center text-center p-8">
          <div className="bg-concrete-light mb-8 shadow-lg p-6 rounded-lg max-w-4xl w-full mx-4">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Bienvenue sur Blog</h1>
            <p className="text-lg text-gray-600">Découvrez un univers swag</p>
          </div>
        </section>
        <Carousel />
      </main>
      <Footer />
    </div>
  );
}
