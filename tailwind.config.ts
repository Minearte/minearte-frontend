import type {Config} from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default <Partial<Config>>{
    theme: {
        extend: defaultTheme,
    },
    plugins: [
        require('flowbite/plugin'),
    ],
    content: [
        "./node_modules/flowbite/**/*.{js,ts}"
    ],
    darkMode: 'class',
};
