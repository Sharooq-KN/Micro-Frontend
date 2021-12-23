export interface Product{
    id: number;
    name: string;
    price: number;
    description: string;
}

const products: Product[] = [
    {
        id: 1,
        name: 'Coconut Oil',
        price: 100,
        description: 'Oil that can be used for cooking'
    },
    {
        id: 2,
        name: 'Wheat',
        price: 50,
        description: 'It can be used for making flours for dishes'
    },
    {
        id: 3,
        name: 'Dal',
        price: 10,
        description: 'It can be used for making protein rich curry'
    },
    {
        id: 4,
        name: 'Barley',
        price: 150,
        description: 'Helps in maintaining health'
    },
    {
        id: 5,
        name: 'Cooking Oil',
        price: 50,
        description: 'Used to cook various items'
    },
];

export default products;