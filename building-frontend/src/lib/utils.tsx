export function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export const parseJson = (str?: string | null) => {
    if (!str) return null;
    try {
        const data = JSON.parse(str);
        return data;
    } catch (err) {
        return null;
    }
};