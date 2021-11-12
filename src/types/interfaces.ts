export interface Record {
    id: string;
    fields: {
        "Name": string,
        "Company concat": string,
        "Contact Concat": string,
        "Email Reference": string,
    };
    createdTime: string;
}

export interface DocRecord {
    showDoc: boolean,
    record: Record | null,
}