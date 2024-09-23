export declare const chats: ({
    isGroupChat: boolean;
    users: {
        name: string;
        email: string;
    }[];
    _id: string;
    chatName: string;
    groupAdmin?: undefined;
} | {
    isGroupChat: boolean;
    users: {
        name: string;
        email: string;
    }[];
    _id: string;
    chatName: string;
    groupAdmin: {
        name: string;
        email: string;
    };
})[];
