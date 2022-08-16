export default {
    setAccessToken: (token: string): void => window.localStorage.setItem("accessToken", token),
    getAccessToken: (): string | null => window.localStorage.getItem("accessToken"),
    deleteAccessToken: (): void => window.localStorage.removeItem("accessToken"),
};