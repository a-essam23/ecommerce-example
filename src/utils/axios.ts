import axios, { AxiosRequestConfig } from "axios";

class Axios {
    constructor() {}

    async get(url: string, config?: AxiosRequestConfig) {
        const payload: { data: any; err: any } = { data: null, err: null };
        try {
            const res = await axios.get(url, config);
            payload.data = res.data;
            return payload;
        } catch (e: any) {
            payload.err = {
                status:
                    e.response?.data?.error?.statusCode ||
                    e.response?.status ||
                    500,
                message:
                    e.response?.data?.message ||
                    e.response?.statusText ||
                    "Bad Request: Unhandeled Error",
            };
            return payload;
        }
    }
}

export default new Axios();
