export class Product {
    public name: string;
    public description: string;
    public imagePath: string;
    public price: number;
    public category: string[];

    constructor(name: string, description: string, imagePath: string, price: number, category: string[]) {
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.price = price;
        this.category = category;
    }

}
