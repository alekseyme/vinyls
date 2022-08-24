export const createStarRating = (rate: number): string => '★★★★★☆☆☆☆☆'.slice(5 - rate, 10 - rate);
