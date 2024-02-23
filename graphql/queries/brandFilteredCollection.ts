const brandFilterQueryBuilder = (collection:string, brandFilters:string[]) => {
  const brands = brandFilters.map(brand => `"${brand}"`);
  const query = `
  query getBrandFilteredProducts {
    ${collection}(filters: {brand : { name: {in: [${brands}]}}}) {
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
      meta{
        pagination{
          page,
          pageSize,
          pageCount
        }
      }
    }
  }`
  return query;
}

export default brandFilterQueryBuilder;
