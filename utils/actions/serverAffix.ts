'use server'
export async function affix(url: string, options: object) {
  let response;
  response = await fetch(url, options);
  if (!response.ok) throw new Error("Problem fetching data...");
  const data = await response.json();
  return data;
}