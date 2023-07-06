export const getItems = (date: string): Promise<any> => {
  return fetch(`${process.env.BASE_URL}?start_date=${date}&end_date=${date}&api_key=${process.env.API_KEY}`)
    .then(response => response.json())
};