export class Info{
    // private  pageSize=1;
    // private  limit=3;
    // private  sortType;
    // private  sortField;
    // private  searchItem;
    constructor(
        private  pageSize:number=1,
        private  limit:number=5,
        private  sortType:string,
        private  sortField:string,
        private  searchItem:string
    ){
      
            
    }
}