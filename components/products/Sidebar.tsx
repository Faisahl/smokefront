'use client'
import React, { Dispatch, MouseEventHandler, SetStateAction, useEffect, useState } from "react";

type Props = {
  setValue: Dispatch<SetStateAction<string>>,
  setBrand: Dispatch<SetStateAction<string[]>>,
  brands: string[]
};

const Sidebar: React.FC<Props> = ({ setValue, setBrand, brands }) => {

  const [selectedFilter, setSelectedFilter] = useState('')
  const [checked, setChecked] = useState(
    new Array(brands.length).fill(false)
  )

  useEffect(()=>{
    console.log(checked);
  })

  const handleClear = () => {
    setValue('nosort')
    setBrand([])
  }

  const handleOnChange = (position:any) => {
    const updatedCheckedState = checked.map((brand, index) => 
      index === position ? !brand : brand
    )

    setChecked(updatedCheckedState);
  }

  const handleClick = (e:any) => {
    if(checked){
      setBrand(e.currentTarget.value);

    } else {
      // setChecked(false)
      setBrand([])
    }
    // if(e.currentTarget.value === selectedFilter){
    //   setSelectedFilter('');  
    // }
    // setChecked(true);
    // setSelectedFilter(e.currentTarget.value);

  }
  
  return (
    <div className="bg-white dark:bg-gray-800 dark:border dark:border-gray-700 rounded-lg shadow-md dark:shadow-lg p-6 ">
      <div className="h-fit">
        <div className="flex items-center justify-between">
          <p className="text-gray-900 dark:text-white text-2xl mb-1">Filters</p>
          <button onClick={()=>handleClear()} className="text-sm text-custo-51">Clear</button>
        </div>
        <hr className="mb-4" />
        <label
          className="block mb-2 text-md text-gray-900 dark:text-white"
          htmlFor="prodsort"
        >
          Sort by:
        </label>
        <select
          defaultValue={""}
          name="productsort"
          className="p-1 rounded-sm text-sm"
        >
          <option value=""></option>
          <option
            onClick={(e) => setValue(e.currentTarget.value)}
            value="lowtohigh"
          >
            Price low to high
          </option>
          <option
            onClick={(e) => setValue(e.currentTarget.value)}
            value="hightolow"
          >
            Price high to low
          </option>
          <option onClick={(e) => setValue(e.currentTarget.value)} value="AtoZ">
            A-Z
          </option>
        </select>

        <label
          className="block mt-4 text-gray-900 dark:text-white"
          htmlFor="brandradios"
        >
          Brands:
        </label>
        <fieldset id="brandradios" className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
          {brands.map((brand,index) => (
            <div 
              key={index}
              className="mt-6 text-center"
            >
              <input
                className="peer hidden"
                type="checkbox"
                id={brand}
                name="radiobrand"
                value={brand}
                checked={checked[index]}
                onChange={() => handleOnChange(index)}
              />
              <label
                className="cursor-pointer text-sm text-gray-900 dark:text-white border-2 border-gray-700 hover:border-custo-51 peer-checked:border-custo-51 rounded p-2"
                htmlFor={brand}
              >
                {brand}
              </label>
            </div>
          ))}
        </fieldset>
      </div>
    </div>
  );
};

export default Sidebar;
