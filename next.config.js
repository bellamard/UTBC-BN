
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['facimprimeur.fr']
    },
    
}

module.exports = nextConfig

// const withTM = require('next-transpile-modules')(['canvas']);

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ['facimprimeur.fr'],
//   },
//   webpack: (config, { isServer }) => {
//     // Si vous avez besoin de certaines configurations spécifiques au serveur, vous pouvez les ajouter ici.
//     // Par exemple, ignorer certains modules côté serveur.
//     if (!isServer) {
//       // Vous pouvez ajouter d'autres configurations spécifiques au client ici si nécessaire.
//     }

//     // Ajout de la règle pour gérer les fichiers .node
//     config.module.rules.push({
//       test: /\.node$/,
//       use: 'node-loader',
//     });

//     return config;
//   },
// };

// module.exports = withTM(nextConfig);

