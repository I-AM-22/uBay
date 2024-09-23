export declare const updateMe: {
    type: string;
    properties: {
        name: {
            type: string;
        };
        email: {
            type: string;
        };
    };
    example: {
        name: string;
        email: string;
    };
};
export declare const signUp: {
    type: string;
    required: string[];
    properties: {
        name: {
            type: string;
        };
        email: {
            type: string;
        };
        password: {
            type: string;
        };
    };
    example: {
        name: string;
        email: string;
        password: string;
    };
};
