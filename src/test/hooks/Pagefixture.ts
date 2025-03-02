import { Page } from "@playwright/test";
import { Logger, LoggerOptions } from "winston";

export const fixture = {
    // @ts-ignore
    page: undefined as Page,
    logger: undefined as unknown as Logger,
    
}

