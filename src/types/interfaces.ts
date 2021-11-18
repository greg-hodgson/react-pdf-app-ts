export interface LeadRecord {
    id: string;
    fields: {
        "Name": string,
        "Contact Concat": string,
        "Email Reference": string,
        "Company concat": string,
        "Company Address": string[],
        "Created": string,
    };
    createdTime: string;
}

export interface LineItemRecord {
    id: string;
    fields: {
        "Name": string,
        "Lead": string[]
    };
    createdTime: string;
}