export type CourseType={  
    "id": string,
    "parent_item_id"?: string,
    "descriptor": {
        "name": string,
        "long_desc"?: string,
        "images": Array<{url:string}>
    },
    "price": {
        "currency": string,
        "value": string | number
    },
    "category_id": string,
    "recommended": boolean,
    "time": {
        "label": string,
        "duration": string,
        "range": {
            "start": string,
            "end": string
        }
    },
    "rating": string,
    "tags": Array<Record<string,string>>,
    "rateable": boolean

}