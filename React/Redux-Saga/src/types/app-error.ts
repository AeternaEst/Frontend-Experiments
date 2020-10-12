
export enum ErrorCode {
    FETCH_PROPERTIES_ERROR,
    ADD_FAVORITES_ERROR,
    ADD_COMMENT_ERROR,
    LOGIN_ERROR,
    LOGOUT_ERROR
}

export class AppError extends Error {
    public code: ErrorCode;

    constructor(name: string, message: string, code: ErrorCode) {
        super(message);
        this.name = name;
        this.code = code;
    }
}