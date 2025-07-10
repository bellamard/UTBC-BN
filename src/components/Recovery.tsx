import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineCheck, AiOutlineArrowLeft } from "react-icons/ai";
import { FaUser } from "react-icons/fa";

const Recovery = () => {
  const [userEmail, setUserEmail] = useState("");

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-blue-900/60 backdrop-blur-sm -z-10"></div>
      <div className="w-full max-w-4xl bg-white/90 rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden animate-fade-in-up transition-transform duration-300 hover:scale-105 hover:shadow-3xl">
        {/* Colonne Avantages */}
        <div className="hidden md:flex flex-col justify-center items-start bg-gradient-to-br from-blue-700 to-blue-500 text-white p-10 w-1/2">
          <h3 className="text-3xl font-bold mb-6">Instructions</h3>
          <ul className="space-y-4 text-base font-light">
            <li>Entrez l'adresse email utilisée lors de votre inscription.</li>
            <li>
              Vérifiez votre boîte de réception pour le lien de
              réinitialisation.
            </li>
            <li>
              Cliquez sur le lien et saisissez un nouveau mot de passe sécurisé.
            </li>
            <li>
              Confirmez le nouveau mot de passe pour finaliser le processus.
            </li>
          </ul>
        </div>
        {/* Formulaire */}
        <div className="flex-1 p-8 flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-blue-800 mb-8 text-center border-b pb-4">
            Récupérer le mot de passe
          </h3>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            {/* Champ email */}
            <div className="relative group">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-500 transition-colors group-focus-within:text-blue-700">
                <FaUser />
              </span>
              <input
                type="email"
                id="userEmail"
                value={userEmail}
                placeholder="Votre adresse email"
                className="w-full pl-10 pr-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/80 transition-all duration-200 group-hover:border-blue-400"
                onChange={(e) => setUserEmail(e.target.value)}
                required
              />
            </div>

            {/* Bouton soumettre */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white rounded-lg font-semibold text-lg shadow transition-all duration-200 hover:scale-105"
            >
              <AiOutlineCheck className="text-xl" />
              Soumettre
            </button>

            {/* Lien retour à la connexion */}
            <div className="text-center mt-4">
              <Link
                href="/login"
                className="text-blue-600 hover:underline text-sm flex items-center justify-center gap-1"
              >
                <AiOutlineArrowLeft />
                Retour à la connexion
              </Link>
            </div>
          </form>
        </div>
      </div>
      {/* Animation CSS */}
      <style jsx global>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.7s cubic-bezier(0.39, 0.575, 0.565, 1) both;
        }
      `}</style>
    </div>
  );
};

export default Recovery;
