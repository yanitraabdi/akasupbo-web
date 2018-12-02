export class ListCategory {
    listCategory: Category[];
    ErrorCode: number;
    ErrorDesc: string;
}

export class Category {
    CategoryId: number;
    CategoryName: string;
    ImageFile: string;
    Tag: string;
    Statu: number;
    StatusDesc: string;
}
