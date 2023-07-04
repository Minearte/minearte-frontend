export interface serverPackage {
    name: string;
    price: number;
    description: string;
    id: number;
    image: string | boolean | undefined;
    category: string;
}

export default serverPackage;