const collectionQueryBuilder = (collection:string) => {
  const query = `
  query getProducts {
    ${collection} {
      data{
        attributes{
          base{
            id,
            name,
            description,
            price,
            image{
              data{
                attributes{
                  formats
                }
              }
            }
          }
          brand{
            data{
              attributes{
                name
              }
            }
          }
        }
      }
    }
  }
  `
  return query;
}

export default collectionQueryBuilder;