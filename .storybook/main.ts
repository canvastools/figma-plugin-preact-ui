import type { StorybookConfig } from "@storybook/preact-vite"

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-docs",
    "@chromatic-com/storybook",
  ],
  framework: {
    name: "@storybook/preact-vite",
    options: {},
  },
  viteFinal: async (config) => {
    if (process.env.STORYBOOK_BASE_PATH) {
      config.base = process.env.STORYBOOK_BASE_PATH
    }

    // Ignore all SCSS imports by mapping them to a virtual JS module
    config.plugins = config.plugins || []
    const VIRTUAL_PREFIX = "\0virtual-empty-scss:"
    config.plugins.push({
      name: "ignore-all-scss",
      enforce: "pre",
      resolveId(id) {
        if (id.includes(".scss")) return VIRTUAL_PREFIX + id
        return null
      },
      load(id) {
        if (id.startsWith(VIRTUAL_PREFIX)) return "export default {}\n"
        return null
      },
    })

    return config
  },
}
export default config
