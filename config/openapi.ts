import { defineConfig } from '@foadonis/openapi'

export default defineConfig({
  ui: 'scalar',
  document: {
    info: {
      title: 'BFF API',
      version: '1.0.0',
    },
  },
})
