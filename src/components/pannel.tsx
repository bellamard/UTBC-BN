import React from 'react';
import Card from './card';
import Link from 'next/link';

interface Memory {
  [key: string]: any;
}

interface PannelProps {
  memories: {
    title: string;
    memory: Memory[];
  };
}

const Pannel: React.FC<PannelProps> = ({ memories }) => {
  return (
    <section className="w-full px-4 py-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-2xl font-semibold text-blue-700 hover:underline transition-all duration-200">
          <Link href={`/dashBoard/${memories.title}`}>
            {memories.title}
          </Link>
        </h3>
        <Link
          href={`/dashBoard/${memories.title}`}
          className="text-sm text-blue-500 hover:text-blue-700 transition"
        >
          Voir tout →
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {memories.memory.map((item, index) => (
          <Card key={index} memory={item} />
        ))}
      </div>
    </section>
  );
};

export default Pannel;
