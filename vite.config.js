import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()], // Ensure that the order of plugins is appropriate for your use case
  // proxy: {
  //   '/': {
  //     target: 'http://localhost:3000', // Change this to match your backend server URL and port
  //     secure: false, // Fine for local development, but handle SSL certificates properly in production
  //   },
  // },
});
