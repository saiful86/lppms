export const getBaseUrl = (): string => {
  return typeof process !== 'undefined'
    ? process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5173"
    : "http://localhost:5173";
};


