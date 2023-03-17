export interface packages {
    packages: serverPackage[];
}

export interface serverPackage {
    name: string;
    price: number;
    description: string;
    id: number;
    image: string;
    category: string;
}
