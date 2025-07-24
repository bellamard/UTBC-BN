import React from "react";
import PropTypes from "prop-types";
import { FaPowerOff } from "react-icons/fa6";

headerDashboard.propTypes = {};

function headerDashboard(props) {
  return (
    <header className=" shadow-md mb-6">
      <div className="flex justify-between items-end px-8 py-6 border-b-2 border-blue-500">
        <nav aria-label="Fil d’Ariane">
          <h3 className="font-light text-blue-700 text-lg tracking-wide animate-fade-in-down">
            {props.path}
          </h3>
        </nav>
        <div className="flex flex-col items-end">
          <div className="flex flex-row">
            <h1 className="font-extrabold text-5xl md:text-4xl text-blue-900 animate-fade-in-up drop-shadow-lg transition-all duration-700">
              Bonjour
              <span className="text-blue-600">{props?.name}</span>
            </h1>
            <button
              className="pl-2 mt-2 text-blue-500 hover:text-blue-700 transition-colors duration-300"
              onClick={props.logout}
            >
              <FaPowerOff className="inline-block text-lg mr-1 wave" />
            </button>
          </div>

          <p className="text-blue-500 mt-2 text-sm animate-fade-in-up delay-200">
            Heureux de vous revoir sur votre tableau de bord !
          </p>
        </div>
      </div>
      <style>
        {`
                @keyframes fade-in-down {
                    from { opacity: 0; transform: translateY(-20px);}
                    to { opacity: 1; transform: translateY(0);}
                }
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(20px);}
                    to { opacity: 1; transform: translateY(0);}
                }
                .animate-fade-in-down {
                    animation: fade-in-down 0.7s cubic-bezier(.4,0,.2,1) both;
                }
                .animate-fade-in-up {
                    animation: fade-in-up 0.7s cubic-bezier(.4,0,.2,1) both;
                }
                .wave {
                    display: inline-block;
                    animation: wave-hand 1.2s infinite;
                    transform-origin: 70% 70%;
                }
                @keyframes wave-hand {
                    0%, 60%, 100% { transform: rotate(0deg);}
                    10%, 30% { transform: rotate(18deg);}
                    20% { transform: rotate(-8deg);}
                    40% { transform: rotate(4deg);}
                    50% { transform: rotate(-4deg);}
                }
                `}
      </style>
    </header>
  );
}

export default headerDashboard;
