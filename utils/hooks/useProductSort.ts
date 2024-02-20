import { ProductPiece, ProductResponseGql } from "@/app/types/GqlProductTypes";
import fetchCollection from "@/utils/actions/fetchCollection";
import collectionQueryBuilder from "@/graphql/queries/collectionQueryBuilder";
import { sortCollectionNameAsc, sortCollectionPriceAsc, sortCollectionPriceDesc } from "@/graphql/queries/sortedCollectionQueryBuilder";
import React from "react";

const useProductSort = (path:string) => {
  const [products, setProducts] = React.useState<ProductPiece[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  
  React.useEffect(() => {
    if(products.length === 0){
      async function getInitialData() {
        const getAllQuery = collectionQueryBuilder(path);
        const initialData = await fetchCollection(getAllQuery);
        setProducts(initialData.data[path].data);
        setLoading(false);
      }
      getInitialData();
    }

  }, [products]);

  const handleSort = async (data: string) => {
    setLoading(true);
    
    let res: ProductResponseGql;
    let query:string;

    switch (data) {
      // case "":
      //   query = collectionQueryBuilder(path);
      //   res = await fetchCollection(query);
      //   setProducts(res.data[path].data);
      //   break;
      case "nameAscending":
        query = sortCollectionNameAsc(path);
        res = await fetchCollection(
          query
        );
        setProducts(res.data[path].data);
        break;
      case "priceAscending":
        query = sortCollectionPriceAsc(path);
        res = await fetchCollection(
          query
        );
        setProducts(res.data[path].data);
        break;
      case "priceDescending":
        query = sortCollectionPriceDesc(path);
        res = await fetchCollection(
          query
        );
        setProducts(res.data[path].data);
        break;
      }
    setLoading(false);
  };
  return { loading, products, handleSort }
}

export default useProductSort;