import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }
    const onSubmit = (e)=>{
        e.preventDefault();
        //Condicion para que no permita buscar ningun o 1 caracter
        if(inputValue.trim().length <= 1) return;
        //Callback para agregar e nuevo valor a la lista y conserve los datos anteriores
        //setCategories( categories => [inputValue, ...categories])
        //Otra forma de hacerlo
        onNewCategory( inputValue.trim() );
        setInputValue('');
    }

  return (
    //Lo de abajo es igual a esto: <form onSubmit={ (event) => onSubmit(e) }>
    <form onSubmit={ onSubmit }>
        <input 
            type="text" 
            placeholder="Buscar Gifts"
            value={inputValue}
            onChange={ onInputChange }
        />
    </form>
  )
}
