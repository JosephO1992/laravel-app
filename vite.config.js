import vue from '@vitejs/plugin-vue';

export default ({ command }) => ({
    base: command === 'serve' ? '' : '/build/',
    publicDir: 'fake_dir_so_nothing_gets_copied',
    build: {
        manifest: true,
        outDir: 'public/build',
        rollupOptions: {
            input: 'resources/js/app.js',
        },

    },
    plugins: [vue()],
    resolveComponent: (name) => {
        const pages = import.meta.globEager(`./Pages/${name}.vue`);

        return pages[`./Pages/${name}.vue`].default;
    },
});