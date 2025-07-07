import React, { useState } from "react";
import Image from "next/image";
import illustration from "@/assets/logos.png";
import { AiOutlineCheck, AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { FaUser, FaLock, FaEnvelope, FaMobile } from "react-icons/fa";

const Register = () => {
  const [step, setStep] = useState(1);
  const [userName, setUserName] = useState("");
  const [userSurname, setUserSurname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleTogglePassword = () => setShowPassword((prev) => !prev);

  // Validation étape 1
  const validateStep1 = () => {
    const newErrors: { [key: string]: string } = {};
    if (!userName.trim()) newErrors.userName = "Le nom complet est requis.";
    if (!userSurname.trim()) newErrors.userSurname = "Le pseudo est requis.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Validation étape 2
  const validateStep2 = () => {
    const newErrors: { [key: string]: string } = {};
    if (!password) newErrors.password = "Le mot de passe est requis.";
    else if (password.length < 6) newErrors.password = "6 caractères minimum.";
    if (!confirmPassword)
      newErrors.confirmPassword = "Confirmez le mot de passe.";
    else if (password !== confirmPassword)
      newErrors.confirmPassword = "Les mots de passe ne correspondent pas.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Validation étape 3
  const validateStep3 = () => {
    const newErrors: { [key: string]: string } = {};
    if (!userEmail) newErrors.userEmail = "L'e-mail est requis.";
    else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(userEmail))
      newErrors.userEmail = "E-mail invalide.";
    if (!userPhone) newErrors.userPhone = "Le téléphone est requis.";
    else if (!/^\d{9,15}$/.test(userPhone.replace(/\D/g, "")))
      newErrors.userPhone = "Numéro invalide.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1 && validateStep1()) {
      setErrors({});
      setStep(2);
    }
    if (step === 2 && validateStep2()) {
      setErrors({});
      setStep(3);
    }
  };

  const handlePrev = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setStep((s) => s - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep3()) {
      setErrors({});
      alert("Inscription réussie !");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=1500&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-blue-900/60 backdrop-blur-sm -z-10"></div>
      <div className="w-full max-w-3xl bg-white/90 rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden animate-fade-in-up">
        {/* Illustration */}
        <div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-br from-blue-700 to-blue-500 text-white p-10 w-1/2">
          <Image
            src={illustration}
            alt="image de presentation du bibliotheque virtuel"
            width={200}
          />
          <h3 className="text-2xl font-bold mt-8 mb-2">Bienvenue !</h3>
          <ul className="space-y-2 text-base font-light">
            <li>Accès partout à la bibliothèque numérique.</li>
            <li>Stockage illimité, sans contrainte d’espace.</li>
            <li>Recherche rapide et interface conviviale.</li>
          </ul>
        </div>
        {/* Formulaire multi-étapes */}
        <div className="flex-1 p-8 flex flex-col justify-center">
          <h3 className="text-3xl font-bold text-blue-800 mb-8 text-center border-b pb-4">
            S&apos;enregistrer
          </h3>
          <form className="space-y-6">
            {step === 1 && (
              <>
                {/* Prénom & Nom */}
                <div className="relative mb-2">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-500">
                    <FaUser />
                  </span>
                  <input
                    required
                    type="text"
                    id="userName"
                    value={userName}
                    placeholder="Prénom & Nom : Erick Ilunga"
                    className={`w-full pl-10 pr-4 py-2 border ${
                      errors.userName ? "border-red-400" : "border-blue-200"
                    } rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/80`}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                  {errors.userName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.userName}
                    </p>
                  )}
                </div>
                {/* Pseudo */}
                <div className="relative mb-2">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-500">
                    <FaUser />
                  </span>
                  <input
                    required
                    type="text"
                    id="userSurname"
                    value={userSurname}
                    placeholder="Pseudo : Ilunga08"
                    className={`w-full pl-10 pr-4 py-2 border ${
                      errors.userSurname ? "border-red-400" : "border-blue-200"
                    } rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/80`}
                    onChange={(e) => setUserSurname(e.target.value)}
                  />
                  {errors.userSurname && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.userSurname}
                    </p>
                  )}
                </div>
                <div className="flex justify-end">
                  <button
                    onClick={handleNext}
                    className="px-6 py-2 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
                  >
                    Suivant
                  </button>
                </div>
              </>
            )}
            {step === 2 && (
              <>
                {/* Mot de passe */}
                <div className="relative mb-2">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-500">
                    <FaLock />
                  </span>
                  <input
                    required
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    placeholder="Mot de passe"
                    className={`w-full pl-10 pr-10 py-2 border ${
                      errors.password ? "border-red-400" : "border-blue-200"
                    } rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/80`}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={handleTogglePassword}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-blue-500 hover:text-blue-700"
                    tabIndex={-1}
                  >
                    {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                  </button>
                  {errors.password && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.password}
                    </p>
                  )}
                </div>
                {/* Confirmation */}
                <div className="relative mb-2">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-500">
                    <FaLock />
                  </span>
                  <input
                    required
                    type={showPassword ? "text" : "password"}
                    id="confirmPassword"
                    value={confirmPassword}
                    placeholder="Confirmé"
                    className={`w-full pl-10 pr-4 py-2 border ${
                      errors.confirmPassword
                        ? "border-red-400"
                        : "border-blue-200"
                    } rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/80`}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>
                <div className="flex justify-between">
                  <button
                    onClick={handlePrev}
                    className="px-6 py-2 rounded-full bg-gray-200 text-blue-700 font-semibold hover:bg-gray-300 transition"
                  >
                    Précédent
                  </button>
                  <button
                    onClick={handleNext}
                    className="px-6 py-2 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
                  >
                    Suivant
                  </button>
                </div>
              </>
            )}
            {step === 3 && (
              <>
                {/* Email */}
                <div className="relative mb-2">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-500">
                    <FaEnvelope />
                  </span>
                  <input
                    required
                    type="email"
                    id="email"
                    value={userEmail}
                    placeholder="E-mail : contact@belcampus.cd"
                    className={`w-full pl-10 pr-4 py-2 border ${
                      errors.userEmail ? "border-red-400" : "border-blue-200"
                    } rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/80`}
                    onChange={(e) => setUserEmail(e.target.value)}
                  />
                  {errors.userEmail && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.userEmail}
                    </p>
                  )}
                </div>
                {/* Téléphone */}
                <div className="relative mb-2">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-500">
                    <FaMobile />
                  </span>
                  <input
                    required
                    type="tel"
                    id="phone"
                    value={userPhone}
                    placeholder="Téléphone : 00243 XXX XXX XXX"
                    className={`w-full pl-10 pr-4 py-2 border ${
                      errors.userPhone ? "border-red-400" : "border-blue-200"
                    } rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/80`}
                    onChange={(e) => setUserPhone(e.target.value)}
                  />
                  {errors.userPhone && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.userPhone}
                    </p>
                  )}
                </div>
                <div className="flex justify-between">
                  <button
                    onClick={handlePrev}
                    className="px-6 py-2 rounded-full bg-gray-200 text-blue-700 font-semibold hover:bg-gray-300 transition"
                  >
                    Précédent
                  </button>
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold flex items-center gap-2 hover:from-purple-600 hover:to-pink-600 transition"
                  >
                    <AiOutlineCheck className="text-xl" />
                    Valider
                  </button>
                </div>
              </>
            )}
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

export default Register;
