// tailwind.config.js (extend)
module.exports = {
  theme: {
    extend: {
      colors: {
        grapheneblack: '#0B0C0E',
        helixindigo: '#4F46E5',
        verdantsignal: '#10B981',
        alloysilver: '#E6EEF6',
        paperwarm: '#FCFBFA',
        auroracoral: '#FF7A59',
      },
      backgroundImage: {
        'helix-gradient': 'linear-gradient(135deg,#4F46E5 0%,#10B981 55%,#4F46E5 100%)',
      },
      borderRadius: {
        'xl-3': '24px',
      },
      boxShadow: {
        'soft-2xl': '0 20px 40px rgba(11,12,14,0.08)',
      },
    },
  },
}
