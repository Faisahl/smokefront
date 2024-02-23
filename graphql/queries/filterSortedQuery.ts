type Filter = {
  type: 'brand' | 'price' | 'color';
  value: string;
};
const filterSortedQueryBuilder = (sort:string,filters:Filter[]) => {
  const query = `
  query GetProducts {
    cigarillos(sort: "${sort}", filters: {${filters}: {name: {in: ["Swisher Sweets"]}}} ) {
      data{
        attributes{
          base{
            id,
            name,
            price,
            description,
            image{
              data{
                attributes{
                  formats
                }
              }
            }
          },
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

export default filterSortedQueryBuilder;