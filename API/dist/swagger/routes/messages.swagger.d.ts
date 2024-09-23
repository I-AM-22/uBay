export declare const messagesSchema: {
    type: string;
    properties: {
        content: {
            type: string;
            description: string;
        };
        chat: {
            type: string;
            description: string;
        };
        user: {
            type: string;
            description: string;
        };
    };
    example: {
        content: string;
        chat: string;
        user: string;
    };
    required: string[];
};
