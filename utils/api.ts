import { ProductResponse } from "@/app/types/ProductTypes";

export async function retrieve(url: string, options: object = {}) {
  console.log(url);
  let response;
  if (!options) {
    response = await fetch(url);
  } else {
    response = await fetch(url, options);
  }
  if (!response.ok) throw new Error("Problem fetching data...");
  const data = await response.json();
  return data;
}

export async function affix(url: string, options: object) {
  let response;
  response = await fetch(url, options);
  if (!response.ok) throw new Error("Problem fetching data...");
  const data = await response.json();
  return data;
}
