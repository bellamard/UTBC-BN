import React, { useState } from "react";
import Image from "next/image";
import illustration from "@/assets/logos.png";
import { AiFillEdit } from "react-icons/ai";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!form.name.trim()) newErrors.name = "Le nom est requis.";
    if (!form.email.trim()) newErrors.email = "L'e-mail est requis.";
    else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email))
      newErrors.email = "E-mail invalide.";
    if (!form.message.trim()) newErrors.message = "Le message est requis.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSent(true);
      setTimeout(() => setSent(false), 3000);
      setForm({ name: "", email: "", message: "" });
    }
    
  };

  return (
    <section
      className="section py-16 bg-gradient-to-br from-blue-50 via-white to-blue-100"
      id="contact"
    >
      <div className="max-w-4xl mx-auto px-4">
        <h3 className="text-3xl md:text-4xl font-bold text-blue-800 mb-10 text-center border-b-2 border-blue-400 pb-2 animate-fade-in-up">
          Contact
        </h3>
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Illustration et infos */}
          <div className="flex flex-col items-center md:items-start w-full md:w-1/3 animate-fade-in-up">
            <div className="rounded-2xl shadow-xl bg-white/80 p-4 mb-4">
              <Image
                src={illustration}
                alt="Présentation bibliothèque virtuelle"
                width={180}
              />
            </div>
            <address className="not-italic text-blue-800 text-base font-light text-center md:text-left">
              <span className="block font-semibold text-blue-700 mb-1">
                Université Technologique BelCampus
              </span>
              Tel:{" "}
              <a
                href="tel:+243XXXXXXXXX"
                className="underline hover:text-blue-600 transition"
              >
                +243 XXX XXX XXX
              </a>
              <br />8<sup>ème</sup> rue, Industriel
              <br />
              Kinshasa | Limete
            </address>
          </div>
          {/* Formulaire */}
          <form
            onSubmit={handleSubmit}
            className="flex-1 bg-white/90 rounded-2xl shadow-xl border border-blue-100 p-8 flex flex-col gap-6 animate-fade-in-up"
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-blue-700 font-semibold mb-1">
                  Nom
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Votre nom"
                  className={`w-full px-4 py-2 rounded-full border ${
                    errors.name ? "border-red-400" : "border-blue-200"
                  } focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/80 text-blue-900 placeholder:text-blue-400 transition`}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>
              <div className="flex-1">
                <label className="block text-blue-700 font-semibold mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Votre adresse courriel"
                  className={`w-full px-4 py-2 rounded-full border ${
                    errors.email ? "border-red-400" : "border-blue-200"
                  } focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/80 text-blue-900 placeholder:text-blue-400 transition`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>
            </div>
            <div>
              <label className="block text-blue-700 font-semibold mb-1">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Votre message"
                rows={4}
                className={`w-full px-4 py-2 rounded-2xl border ${
                  errors.message ? "border-red-400" : "border-blue-200"
                } focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/80 text-blue-900 placeholder:text-blue-400 transition`}
              />
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">{errors.message}</p>
              )}
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="flex items-center gap-3 px-7 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold shadow-lg hover:from-blue-700 hover:to-blue-500 transition"
              >
                <span className="p-2 rounded-full bg-white/20">
                  <AiFillEdit className="text-2xl" />
                </span>
                <span className="text-lg">Envoyer</span>
              </button>
            </div>
            {sent && (
              <div className="text-green-600 text-center font-semibold animate-fade-in-up">
                Message envoyé avec succès !
              </div>
            )}
          </form>
        </div>
      </div>
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
          animation: fade-in-up 0.8s cubic-bezier(0.39, 0.575, 0.565, 1) both;
        }
      `}</style>
    </section>
  );
};

export default Contact;
