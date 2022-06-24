export type Item = {
    id: number;
    name: string;
    description: string;
    cost: number;
    img_url?: string;
}

export type ItemList =  Item[]