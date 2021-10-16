export interface Product{
    id: number;
    type: string;
    name: string;
    description: string | null;
    price: string;
    'discount_percentage': string;
    'stock_left': number;
    special : boolean;
    'view_count': number;
    'created_at': string;
    'updated_at': string;
}