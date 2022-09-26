export interface ApiResponseModel<T> {
    message: string | undefined;
    data: T | null | undefined
}