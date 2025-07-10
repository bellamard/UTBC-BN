import React, { useState } from "react";
import Link from "next/link";
import {
  AiOutlineCheck,
  AiFillEyeInvisible,
  AiFillEye,
  AiOutlineBorder,
  AiOutlineCheckSquare,
} from "react-icons/ai";
import { FaUser, FaLock } from "react-icons/fa";
import { useAuth } from "@/contexts/authContext";
import { useRouter } from "next/navigation";

const SingIn = () => {
  const { login } = useAuth();
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [userName, setUserName] = useState("");
  const [saveUser, setSaveUser] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword((prevState) => !prevState);
  };
  const handleToggleSaveUser = () => {
    setSaveUser(!saveUser);
  };
  const handleSubmit = async () => {
    try {
      await login(userName, password);
    } catch (error) {
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1500&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-blue-900/60 backdrop-blur-sm -z-10"></div>
      <div className="w-full max-w-4xl bg-white/90 rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden animate-fade-in-up transition-transform duration-300 hover:scale-105 hover:shadow-3xl">
        {/* Colonne Avantages */}
        <div className="hidden md:flex flex-col justify-center items-start bg-gradient-to-br from-blue-700 to-blue-500 text-white p-10 w-1/2">
          <h3 className="text-3xl font-bold mb-6">Avantages</h3>
          <ul className="space-y-4 text-base font-light">
            <li>Accès partout à la bibliothèque numérique.</li>
            <li>Stockage illimité, sans contrainte d’espace.</li>
            <li>Recherche rapide et interface conviviale.</li>
          </ul>
        </div>
        {/* Formulaire */}
        <div className="flex-1 p-8 flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-blue-800 mb-8 text-center border-b pb-4">
            Se connecter
          </h3>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Champ utilisateur */}
            <div className="relative group">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-500 transition-colors group-focus-within:text-blue-700">
                <FaUser />
              </span>
              <input
                type="text"
                id="userName"
                value={userName}
                placeholder="Nom d'utilisateur"
                className="w-full pl-10 pr-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/80 transition-all duration-200 group-hover:border-blue-400"
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            {/* Champ mot de passe */}
            <div className="relative group">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-500 transition-colors group-focus-within:text-blue-700">
                <FaLock />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                placeholder="Mot de passe"
                className="w-full pl-10 pr-10 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/80 transition-all duration-200 group-hover:border-blue-400"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={handleTogglePassword}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-blue-500 hover:text-blue-700 transition"
                tabIndex={-1}
              >
                {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
              </button>
            </div>
            {/* Se rappeler de moi */}
            <div className="flex items-center">
              <button
                type="button"
                onClick={handleToggleSaveUser}
                className="flex items-center text-blue-700 text-sm focus:outline-none"
              >
                {saveUser ? (
                  <AiOutlineCheckSquare className="mr-2" />
                ) : (
                  <AiOutlineBorder className="mr-2" />
                )}
                Se rappeler de moi
              </button>
            </div>
            {/* Bouton connexion */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white rounded-lg font-semibold text-lg shadow transition-all duration-200 hover:scale-105"
            >
              <AiOutlineCheck className="text-xl" />
              Se connecter
            </button>
            {/* Lien mot de passe oublié */}
            <div className="text-center mt-4">
              <Link
                href="/recovery"
                className="text-blue-600 hover:underline text-sm"
              >
                Mot de passe oublié ?
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

export default SingIn;
