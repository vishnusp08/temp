export function validation(value: unknown, maxLength: number): boolean {
    if (!value || typeof value != "string" || value.length > maxLength) return false; // validation of the senderemail so that no unwanted value get transimtted to the rest of the program
    return true;
}

export function giveMeTheError(e: unknown) {
    if (e instanceof Error) {
        return {
            error: e.message,
        };
    } else if (e && typeof e == "object" && "message" in e) {
        return {
            error: e.message,
        };
    } else if (typeof e == "function") {
        return {
            error: e,
        };
    } else {
        return {
            error: "Something went wrong",
        };
    }
}
