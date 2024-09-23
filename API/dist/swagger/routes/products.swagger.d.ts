export declare const productSchema: {
    type: string;
    properties: {
        title: {
            type: string;
            description: string;
        };
        content: {
            type: string;
            description: string;
        };
        photos: {
            type: string;
            items: {
                type: string;
                format: string;
            };
            description: string;
        };
        price: {
            type: string;
            description: string;
        };
        category: {
            type: string;
            description: string;
        };
        store: {
            type: string;
            description: string;
        };
    };
    example: {
        title: string;
        content: string;
        user: string;
        photos: string[];
        price: number;
        category: string;
        likes: number;
        likedBy: any[];
        likedByMe: boolean;
        store: string;
    };
    required: string[];
};
