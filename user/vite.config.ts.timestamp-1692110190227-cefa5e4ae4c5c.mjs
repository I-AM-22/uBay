// vite.config.ts
import react from "file:///mnt/84CCA7BCCCA7A740/Backy/projects/4th/nazif/user/node_modules/@vitejs/plugin-react-swc/index.mjs";
import { defineConfig } from "file:///mnt/84CCA7BCCCA7A740/Backy/projects/4th/nazif/user/node_modules/vite/dist/node/index.js";
import { VitePWA } from "file:///mnt/84CCA7BCCCA7A740/Backy/projects/4th/nazif/user/node_modules/vite-plugin-pwa/dist/index.mjs";
import tsconfigPaths from "file:///mnt/84CCA7BCCCA7A740/Backy/projects/4th/nazif/user/node_modules/vite-tsconfig-paths/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    VitePWA({
      includeAssets: [
        "favicon.ico",
        "apple-touch-icon.png",
        "masked-icon.svg",
        "fonts/Montserrat-Arabic-Regular.ttf"
      ],
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,ttf}"]
      },
      devOptions: { enabled: false },
      manifest: {
        name: "React & MUI Dashboard",
        short_name: "Dashboard",
        start_url: ".",
        display: "standalone",
        background_color: "#ffffff",
        description: "Dashboard app built with react",
        theme_color: "#ffffff",
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ]
      }
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvbW50Lzg0Q0NBN0JDQ0NBN0E3NDAvQmFja3kvcHJvamVjdHMvNHRoL25hemlmL3VzZXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9tbnQvODRDQ0E3QkNDQ0E3QTc0MC9CYWNreS9wcm9qZWN0cy80dGgvbmF6aWYvdXNlci92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vbW50Lzg0Q0NBN0JDQ0NBN0E3NDAvQmFja3kvcHJvamVjdHMvNHRoL25hemlmL3VzZXIvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0LXN3Y1wiO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCB7IFZpdGVQV0EgfSBmcm9tIFwidml0ZS1wbHVnaW4tcHdhXCI7XG5pbXBvcnQgdHNjb25maWdQYXRocyBmcm9tIFwidml0ZS10c2NvbmZpZy1wYXRoc1wiO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHJlYWN0KCksXG4gICAgdHNjb25maWdQYXRocygpLFxuICAgIFZpdGVQV0Eoe1xuICAgICAgaW5jbHVkZUFzc2V0czogW1xuICAgICAgICBcImZhdmljb24uaWNvXCIsXG4gICAgICAgIFwiYXBwbGUtdG91Y2gtaWNvbi5wbmdcIixcbiAgICAgICAgXCJtYXNrZWQtaWNvbi5zdmdcIixcbiAgICAgICAgXCJmb250cy9Nb250c2VycmF0LUFyYWJpYy1SZWd1bGFyLnR0ZlwiLFxuICAgICAgXSxcbiAgICAgIHJlZ2lzdGVyVHlwZTogXCJhdXRvVXBkYXRlXCIsXG4gICAgICB3b3JrYm94OiB7XG4gICAgICAgIGdsb2JQYXR0ZXJuczogW1wiKiovKi57anMsY3NzLGh0bWwsaWNvLHBuZyxzdmcsdHRmfVwiXSxcbiAgICAgIH0sXG4gICAgICBkZXZPcHRpb25zOiB7IGVuYWJsZWQ6IGZhbHNlIH0sXG4gICAgICBtYW5pZmVzdDoge1xuICAgICAgICBuYW1lOiBcIlJlYWN0ICYgTVVJIERhc2hib2FyZFwiLFxuICAgICAgICBzaG9ydF9uYW1lOiBcIkRhc2hib2FyZFwiLFxuICAgICAgICBzdGFydF91cmw6IFwiLlwiLFxuICAgICAgICBkaXNwbGF5OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgYmFja2dyb3VuZF9jb2xvcjogXCIjZmZmZmZmXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkRhc2hib2FyZCBhcHAgYnVpbHQgd2l0aCByZWFjdFwiLFxuICAgICAgICB0aGVtZV9jb2xvcjogXCIjZmZmZmZmXCIsXG4gICAgICAgIGljb25zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcInB3YS0xOTJ4MTkyLnBuZ1wiLFxuICAgICAgICAgICAgc2l6ZXM6IFwiMTkyeDE5MlwiLFxuICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJwd2EtNTEyeDUxMi5wbmdcIixcbiAgICAgICAgICAgIHNpemVzOiBcIjUxMng1MTJcIixcbiAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwicHdhLTUxMng1MTIucG5nXCIsXG4gICAgICAgICAgICBzaXplczogXCI1MTJ4NTEyXCIsXG4gICAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgICAgICAgICAgcHVycG9zZTogXCJhbnkgbWFza2FibGVcIixcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEyVSxPQUFPLFdBQVc7QUFDN1YsU0FBUyxvQkFBb0I7QUFDN0IsU0FBUyxlQUFlO0FBQ3hCLE9BQU8sbUJBQW1CO0FBRzFCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLGNBQWM7QUFBQSxJQUNkLFFBQVE7QUFBQSxNQUNOLGVBQWU7QUFBQSxRQUNiO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsY0FBYztBQUFBLE1BQ2QsU0FBUztBQUFBLFFBQ1AsY0FBYyxDQUFDLG9DQUFvQztBQUFBLE1BQ3JEO0FBQUEsTUFDQSxZQUFZLEVBQUUsU0FBUyxNQUFNO0FBQUEsTUFDN0IsVUFBVTtBQUFBLFFBQ1IsTUFBTTtBQUFBLFFBQ04sWUFBWTtBQUFBLFFBQ1osV0FBVztBQUFBLFFBQ1gsU0FBUztBQUFBLFFBQ1Qsa0JBQWtCO0FBQUEsUUFDbEIsYUFBYTtBQUFBLFFBQ2IsYUFBYTtBQUFBLFFBQ2IsT0FBTztBQUFBLFVBQ0w7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsWUFDTixTQUFTO0FBQUEsVUFDWDtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
