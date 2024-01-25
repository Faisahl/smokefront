import React from 'react'
import { ProductObject } from '@/app/types/ProductTypes'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

type Props = {
    item: ProductObject,
    setter: (arg: ProductObject) => void,
    selected: string
}

const CartAdder: React.FC<Props> = ({ item, setter, selected }) => {
    return (
        <div className='cursor-pointer lg:hover:text-custo-51' onClick={()=>setter(item)}>
            <p className={`${item.attributes.name === selected ? 'inline' : 'hidden'} mr-2 text-s text-green-55 font-bold`}>
                Item Added!
            </p>
          <AddShoppingCartIcon />
        </div> 
    )
}

export default CartAdder