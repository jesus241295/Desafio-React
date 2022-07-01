export const getCharacters = async () => {
  const response = await fetch(
    "mongodb+srv://JLOPEZY:55816305@cluster0.ed3pd.mongodb.net/?retryWrites=true&w=majority"
  );
  const data = await response.json();
  return data;
};
