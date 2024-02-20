
function sortCollectionNameAsc(collection:string) {
  const query = `
  query getProducts {
    ${collection}(sort: "base.name:asc") {
      data{
        id,
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
  `;
  return query;
}

function sortCollectionPriceAsc(collection:string) {
const query = `
query getProducts {
  ${collection}(sort: "base.price:asc") {
    data{
      id,
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
`;

return query;

}

function sortCollectionPriceDesc(collection:string) {
  const query = `
  query getProducts {
    ${collection}(sort: "base.price:desc") {
      data{
        id,
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




export { sortCollectionNameAsc, sortCollectionPriceAsc, sortCollectionPriceDesc }