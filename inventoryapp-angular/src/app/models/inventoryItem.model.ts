class InventoryItem {
    _id:string;
    date: Date;
    title: string;
    description: string;
    keywords: string[];
    image: any;

    constructor(){
      this.date;//: new Date();
      this.title;//: "";
      this.description;//: "";
      this.keywords;//: [];
      this.image;//: ["", ""];
    }

}

export default InventoryItem;
