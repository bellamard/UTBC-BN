import React from "react";
import Image from "next/image";
import yali from "@/assets/yali.jpg";
import jci from "@/assets/jci.png";
import ccbc from "@/assets/ccbc-removebg-preview.png";
import ibem from "@/assets/ibem.png";
import belcampus from "@/assets/bel-campus-4-removebg-preview.png";

const partners = [
  { src: belcampus, alt: "UTBC" },
  { src: jci, alt: "JCI RDC" },
  { src: yali, alt: "YALI RDC" },
  { src: ibem, alt: "IBEM" },
  { src: ccbc, alt: "CENTRE CULTURE BEL CAMPUS" },
];

const Partner = () => {
  return (
    <section className="section py-16" id="Partner">
      <div className="max-w-5xl mx-auto px-4">
        <h3 className="text-3xl md:text-4xl font-bold text-blue-800 mb-12 text-center animate-fade-in-up tracking-tight">
          Nos partenaires
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="group flex flex-col items-center transition-transform duration-300 hover:scale-110"
            >
              <div
                className="w-[160px] h-[120px] flex items-center justify-center rounded-2xl shadow-xl bg-white p-4 transition-all duration-300 group-hover:shadow-blue-200 group-hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1 + 0.2}s` }}
              >
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={140}
                  height={100}
                  className="object-contain grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out drop-shadow-lg"
                  style={{
                    filter: "grayscale(100%)",
                    transition: "filter 0.7s",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.filter = "grayscale(0%)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.filter = "grayscale(100%)")
                  }
                />
              </div>
              <span
                className="mt-4 text-sm text-blue-700 font-semibold opacity-90 tracking-wide animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1 + 0.3}s` }}
              >
                {partner.alt}
              </span>
            </div>
          ))}
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

export default Partner;
