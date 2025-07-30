export interface Language {
    code: string;
    name: string
}

export interface ProcessResponse {
    transcribed: string;
    translated: string;
}

export interface SummaryTextResponse {
    summary: string;
}