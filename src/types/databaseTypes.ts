/*
    YouHaveTheFloor (YHTF)
    (c)2020 Trevor D. Brown. All rights reserved.
    
    databaseTypes.ts - the interfaces and types used within the service for database utilization.
*/


export interface Query {
    queryName: string;
    queryType: string;
    queryTemplate: string;
    queryInput: string[];
    queryInputValues?: string[];
    queryInstance?: string;
}

export interface QueryResult {
    query: Query;
    queryResults?: string[];
}
