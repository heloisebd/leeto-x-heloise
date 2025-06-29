import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.stories.@(js|ts|jsx|tsx|mdx)',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
