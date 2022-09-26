export interface ApiResponseModel<T> {
    message: string | undefined;
    data: T[] | T | null | undefined
}