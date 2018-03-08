class InventoryItem {
    _id:string;
    date: Date;
    title: string;
    description: string;
    keywords: string[];
    images: any[];

    constructor(){
      this.date;//: new Date();
      this.title;//: "";
      this.description;//: "";
      this.keywords;//: [];
      this.images;//: ["", ""];
    }

}

export default InventoryItem;
