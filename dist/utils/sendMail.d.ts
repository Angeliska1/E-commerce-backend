type ResendParams = {
    to: string;
    subject: string;
    text: string;
    html: string;
};
export declare const sendMail: ({ to, subject, text, html }: ResendParams) => Promise<import("resend").CreateEmailResponse>;
export {};
//# sourceMappingURL=sendMail.d.ts.map