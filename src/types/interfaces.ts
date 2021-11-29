export interface LeadRecord {
    id: string;
    fields: {
        "Name": string,
        "Contact Concat": string,
        "Email Reference": string,
        "Company concat": string,
        "Company Address": string[],
        "Created": string,
        "Currency": string,
        "Quote Validity": string,
        "Incoterms": string,
        "Payment Terms": string,
    };
    createdTime: string;
}

export interface LineItemRecord {
    id: string;
    fields: {
        "Name": string,
        "Lead": string[],
        "Item Number": string,
        "Description": string,
        "Unit Price": number,
        "Extended Price": number,
        "Quantity": number,
        "Delivery": string,

    };
    createdTime: string;
}