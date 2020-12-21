import "@emotion/react";

declare module "@emotion/react" {
    export interface Theme {
        white: string;
        darkWhite: string;
        black: string;
        gray: string;
        mainColor: string;
        ss: string;
        ms: string;
        ls: string;
        xls: string;
        blue: string;
    }
}

// You are also able to use a 3rd party theme this way:
