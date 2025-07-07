import Image from "next/image";
import illustration from "@/assets/bel-campus-4-removebg-preview.png";

const About = () => {
  return (
    <section
      className="relative flex justify-center items-center py-14 md:py-24 bg-gradient-to-br from-blue-100 via-white to-blue-200 overflow-hidden"
      id="About"
    >
      {/* Halo animé en fond */}
      <span className="absolute -top-32 -left-32 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl animate-pulse z-0"></span>
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 px-4 md:px-10">
        {/* Image animée et badge */}
        <div className="flex flex-col items-center md:items-end w-full md:w-[340px]">
          <div className="relative group">
            <div className="rounded-full overflow-hidden border-4 border-blue-400 shadow-xl transition-transform duration-500 group-hover:scale-105 group-hover:rotate-2">
              <Image
                src={illustration}
                alt="Présentation bibliothèque virtuelle"
                width={320}
                height={320}
                className="object-cover w-[320px] h-[320px] bg-white"
              />
            </div>
            
          </div>
        </div>
        {/* Bloc texte animé */}
        <div className="bg-white/95 rounded-2xl shadow-xl p-8 flex-1 flex flex-col justify-center animate-fade-in-up border border-blue-100">
          <h3 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4 relative w-fit after:block after:h-1 after:bg-gradient-to-r after:from-blue-400 after:to-sky-400 after:rounded-full after:mt-1 after:animate-underline">
            À propos
          </h3>
          <p className="text-blue-800 text-base md:text-lg font-light mb-6 leading-relaxed">
            <span className="font-semibold text-blue-700">
              La Bibliothèque Numérique
            </span>{" "}
            de l&apos;Université Technologique BelCampus est un espace virtuel
            moderne dédié à la découverte, à la recherche et à
            l&apos;apprentissage. Notre mission : offrir un accès simple, rapide
            et universel aux ressources académiques et culturelles.
          </p>
          <ul className="space-y-3 mb-4">
            <li className="flex items-center gap-3 text-blue-700">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 shadow">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M5 13l4 4L19 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              Des milliers de livres électroniques sur tous les sujets.
            </li>
            <li className="flex items-center gap-3 text-blue-700">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 shadow">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M12 8v4l3 3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              Recherche avancée et filtres intelligents.
            </li>
            <li className="flex items-center gap-3 text-blue-700">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 shadow">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M8 12l2 2 4-4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              Accessible 24h/24, sur tous vos appareils.
            </li>
          </ul>
          <div className="flex items-center gap-2 mt-2">
            <span className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></span>
            <span className="text-blue-700 text-sm font-medium">
              Votre savoir, sans limite !
            </span>
          </div>
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
        @keyframes underline {
          0% {
            transform: scaleX(0);
          }
          100% {
            transform: scaleX(1);
          }
        }
        .after\\:animate-underline::after {
          transform-origin: left;
          animation: underline 1s cubic-bezier(0.39, 0.575, 0.565, 1) both;
          content: "";
          display: block;
          width: 100%;
        }
      `}</style>
    </section>
  );
};

export default About;
