export const search = async (query) => {
  // https://api.artic.edu/api/v1/artworks/search?q=cats
  const apiUrl = `https://api.artic.edu/api/v1/artworks/search`;
  const qs = `?q=${query}&limit=30&fields=id,title,image_id,thumbnail`;
  const res = await fetch(apiUrl + qs);

  if (!res.ok) {
    throw new Error(`error loading search results (${res.status})`);
  }
  return res.json();
};
