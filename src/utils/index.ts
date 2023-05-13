export const randomInt = (max: number, min?: number) => {
    return Math.random() * (max - (min || 0)) + (min || 0);
};

export { default as Axios } from "./axios";
