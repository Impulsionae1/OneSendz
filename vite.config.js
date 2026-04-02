import { defineConfig } from 'vite';

export default defineConfig(async ({ command }) => {
  const plugins = [];
  if (command === 'serve') {
    const { vibedit } = await import('@vibedit/vite');
    plugins.push(vibedit());
  }
  return { plugins };
});
