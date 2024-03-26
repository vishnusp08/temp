"use server";
import {Resend} from "resend";
import {validation, giveMeTheError} from "@/library/utils";
import {Email_styled} from "@/email/email-styled-format";
import React from "react";
export async function sendEmail(formData: FormData) {
    // the formData cannot be accessed like a usual object
    const resend = new Resend(process.env.RESEND_API_KEY);
    const senderEmail = formData.get("email");
    const message = formData.get("message");

    if (!validation(senderEmail, 100)) return {error: "Something went wrong"};
    if (!validation(message, 5000)) return {error: "Something went wrong"};
    // if (!message || typeof message != "string" || message.length > 500) return new Error("Something wrong with the message");

    let data;
    try {
        data = await resend.emails.send({
            from: `${senderEmail} <onboarding@resend.dev>`,
            to: "theimperical8@gmail.com", // can only send to the email that has been registered in the resend website.
            subject: "Contacting from the portfolio",
            reply_to: senderEmail as string, // typescript geeking here so i am asserting my dominance telling that it wont be null.
            react: React.createElement(Email_styled, {
                message: message as string,
                senderEmail: senderEmail as string,
            }), // same here too
            //Type 'FormDataEntryValue | null' is not assignable to type 'string | undefined'.
            // Type 'null' is not assignable to type 'string | undefined'. (tsserver 2322)
        });
        if (!data.data) throw new Error(data.error?.message);
    } catch (e: unknown) {
        return giveMeTheError(e);
    }
    return {
        data,
    };
}
