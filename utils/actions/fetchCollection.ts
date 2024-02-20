'use server';

async function fetchCollection(gqlQuery:string){
  const response = await fetch(`${process.env.NEXT_STRAPI_GQL_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: gqlQuery
    })
  })
  if (!response.ok) throw new Error("Problem fetching data...");
  const data = await response.json();
  return data;
}

export default fetchCollection