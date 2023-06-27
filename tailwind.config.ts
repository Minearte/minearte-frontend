import type {Config} from "tailwindcss";

export default <Partial<Config>>{
    theme: {
        colors: {
            gray: {
                950: '#09121a',
            }
        },
    },
    plugins: [
        require('flowbite/plugin'),
    ],
    content: [
        "./node_modules/flowbite/**/*.{js,ts}"
    ],
    darkMode: 'class',
};
