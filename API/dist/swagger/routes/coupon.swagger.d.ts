export declare const couponSchema: {
    type: string;
    properties: {
        user: {
            type: string;
            description: string;
            example: string;
        };
        product: {
            type: string;
            description: string;
            example: string;
        };
        expire: {
            type: string;
            description: string;
            example: string;
        };
        discount: {
            type: string;
            description: string;
            example: number;
        };
    };
    example: {
        user: string;
        product: string;
        expire: string;
        discount: number;
    };
    required: string[];
};
export declare const favoriteSchema: {
    type: string;
    properties: {
        favoriteCategories: {
            type: string;
            description: string;
        };
        favoriteCities: {
            type: string;
            description: string;
        };
    };
    example: {
        favoriteCategories: string[];
        favoriteCities: string[];
    };
};
