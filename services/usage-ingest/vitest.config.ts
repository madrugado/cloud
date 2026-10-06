import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: {
      '@kilocode/web-shared': fileURLToPath(
        new URL('../../packages/web-shared/src', import.meta.url)
      ),
    },
  },
  test: { environment: 'node', include: ['src/**/*.test.ts'] },
});
