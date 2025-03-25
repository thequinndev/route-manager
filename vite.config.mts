import { resolve } from 'node:path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: {
      "@thequinndev/route-manager": "/src/route-manager",
      "@examples": "/examples",
    },
  },
    build: {
        lib: {
            entry: {
                index: resolve(__dirname, 'src/route-manager.ts'),
            },
            name: 'RouteManager'
        },
        sourcemap: true
    },
    test: {
        globals: true,
        environment: 'node',
        include: ['src/**/*.test.ts', 'src/**/*.spec.ts'], 
        coverage: {
          thresholds: {
            100: true,
          },
          reporter: ["text", "json", "html"],
          exclude: [
            '**/node_modules/**', // Ignore
            '**/dist/**', // Ignore
            '**/examples/**', // Ignore examples
            // The below are export files only
            '**/src/index.ts',
            '**/src/route-manager.ts',
            '**/src/route-manager/openapi/index.ts',
            // Config files only
            '.eslintrc.js' ,                                                                       
            'route-manager.d.ts',                                                           
            'tsup.config.ts',                      
            'vite.config.mts'
          ]
        },
    },
});