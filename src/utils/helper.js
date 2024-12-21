export const dateConverter = (data) => {
    const date = new Date(data);

    // Extract day, month, and year
    const day = String(date.getUTCDate()).padStart(2, '0');  // "24"
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');  // "06"
    const year = String(date.getUTCFullYear()).slice(-2);  // "24"

    // Format: dd/mm/yy
    const formattedDate = `${day}/${month}/${year}`;

    return formattedDate;

}