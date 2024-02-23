import {
  ProductPiece,
} from "@/app/types/GqlProductTypes";
import React from "react";
import { Component, Filter, FilterType, ProductObject, ProductResponse } from "@/app/types/ProductTypes";
import { retrieve } from "../actions/retrieve";


const useCollections = (path: string) => {
  const BASE_QUERY = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/${path}?populate[base][populate]=image&populate=brand`;
  const [sort, setSort] = React.useState<string>("");
  const [products, setProducts] = React.useState<ProductObject[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [filters, setFilters] = React.useState<Filter[]>([]);

  const handleProducts = (data: ProductObject[] | []) => {
    setProducts(data);
  }

  const handleFilter = (arr: Filter[] | []) => {
    if(!loading){
      setLoading(true);
    }
    setFilters(arr);
  }

  const handleSort = (sort: string) => {
    if(!loading){
      setLoading(true);
    }
    setSort(sort);
  };

  React.useEffect(() => {
    if (products.length === 0) {
      async function getInitialData() {
        const initialData: ProductResponse = await retrieve(BASE_QUERY);
        setProducts(initialData.data);
        setLoading(false);
      }
      getInitialData();
    }
    if (filters.length !== 0 || sort !== "") {
      async function getFilteredData() {
        const mutatedQuery = getMutatedQuery(filters);
        const filtered: ProductResponse = await retrieve(mutatedQuery);
        setProducts(filtered.data);
        setLoading(false);
      }
      getFilteredData()
    }

  }, [sort, filters]);


  const onFilterSelection = (component: Component, type: FilterType, filt: string, val: string) => {
    setLoading(true);
    const existing = filters.some(i => i.value === val);
    
    if(existing){
      const newFilters = filters.filter(i => i.value !== val);
      setFilters(newFilters)
    } else {
      const obj:Filter = {
        component,
        type,
        filter: filt,
        value: val
      }
      setFilters(prev => [...prev, obj]);
    }
  };

  const getMutatedQuery = (data:Filter[]) => {
    let filterString: string = "";
    let query: string = "";

    data.forEach(filter => {
      const newFilt:string = `filters[${filter.component}][${filter.type}][${filter.filter}]=${filter.value}&`;
      filterString+=newFilt;
    })

    if(sort !== ""){
      query = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/${path}?sort=${sort}&${filterString}populate[base][populate]=image&populate=brand`;
    } else {
      query = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/${path}?${filterString}populate[base][populate]=image&populate=brand`;
    }

    return query;
  }

  const getBrands = (products:ProductPiece[]) => {
    let arr: string[] = [];
    for (let i of products) {
      arr.push(i.attributes.brand.data.attributes.name);
    }
    return new Set(arr);
  }

  return {
    loading,
    products,
    handleProducts,
    handleSort,
    getBrands,
    onFilterSelection,
    handleFilter
  };
};

export default useCollections;
