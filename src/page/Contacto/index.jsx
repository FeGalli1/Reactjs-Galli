import React from "react";
import NavBar from "../../componente/NavBar/navBar";
import ItemListContainer from "../../componente/ItemListContainer/index";
const contacto = () => 
{
    return (
        <>
            {/*este navBar cuenta con un "logo o nombre",ubicado en la parte izquierda,
             3 botonoes "inicio","obras" y "contacto" y el cardWidget,ubicados en el centro
             y por ultimo un buscador en la parte derecha */}
            <NavBar/>
     
                        {/*ItemListContainer recibe un promp que en esta caso se llama greeting */}
            <ItemListContainer greeting={"Bienvenido"}/>
            
        </>
    );
}

export default contacto;