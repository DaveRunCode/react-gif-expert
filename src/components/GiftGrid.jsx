
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GiftItem } from "./GiftItem";


export const GiftGrid = ({category}) => {
    
    const {images, isLoading} = useFetchGifs (category)
    
    return (
    <>
        <h3>{category}</h3>
        {
            // Dos formas de hacerlo: 
            // isLoading ? (<h2>Cargando...</h2>) : null
            isLoading && (<h2>Cargando...</h2>)
        }
        
        <div className="card-grid">
            {
                images.map( (image) => (
                    <GiftItem 
                        key={ image.id }
                        /* title={image.title}
                        url={image.url} 
                        Esta es una formad e hacerlo.
                        */
                        { ...image }//Esparcimos todas las props de image
                    />  
                ))
            }
            
        </div>
    </>
  )
}
