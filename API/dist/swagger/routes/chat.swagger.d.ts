export declare const chatSchema: {
    type: string;
    properties: {
        name: {
            type: string;
            description: string;
        };
        product: {
            type: string;
            description: string;
        };
        user: {
            type: string;
            description: string;
        };
    };
    example: {
        name: string;
        product: string;
        user: string;
    };
    required: string[];
};
export declare const updatechatSchema: {
    type: string;
    properties: {
        name: {
            type: string;
            description: string;
        };
        product: {
            type: string;
            description: string;
        };
        seller: {
            type: string;
            description: string;
        };
        customer: {
            type: string;
            description: string;
        };
    };
    example: {
        name: string;
        product: string;
        seller: string;
        customer: string;
    };
};
