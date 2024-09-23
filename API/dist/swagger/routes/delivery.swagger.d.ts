export declare const deliverySchema: {
    type: string;
    properties: {
        payment: {
            type: string;
            description: string;
        };
        employee: {
            type: string;
            description: string;
        };
        customer_date: {
            type: string;
            description: string;
        };
        seller_date: {
            type: string;
            description: string;
        };
        status: {
            type: string;
            description: string;
        };
    };
    example: {
        payment: string;
        status: string;
    };
    required: string[];
};
export declare const QrSchema: {
    type: string;
    properties: {
        product: {
            type: string;
            description: string;
        };
    };
    example: {
        product: string;
    };
    required: string[];
};
