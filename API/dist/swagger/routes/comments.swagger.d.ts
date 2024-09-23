export declare const commentSchema: {
    type: string;
    properties: {
        content: {
            type: string;
            description: string;
            example: string;
        };
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
    };
    example: {
        content: string;
        user: string;
        product: string;
    };
    required: string[];
};
