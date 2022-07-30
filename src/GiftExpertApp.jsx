import {useState} from 'react'
import { AddCategory, GiftGrid } from './components';

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {
        //Si el ultimo elemento es igual al anterior, no permite agregarlo.
        if(categories.includes(newCategory)) return;
        setCategories([ newCategory, ...categories ])
    }

  return (
    <>
        { /* Titulo */ }
        <h1>GiftExpertApp</h1>

        { /* Input */ }
        <AddCategory 
            //setCategories={setCategories} 
            onNewCategory={ e => onAddCategory(e) }
        />

        { /* Listado de Gifts */ }

        { categories.map( (category) => (
                <GiftGrid
                    key={ category } 
                    category = { category }
                />
            )) 
        }

        { /*Gift item*/ }
    </>
  )
}
