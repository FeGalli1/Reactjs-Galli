import './index.css'
// Importar estilos de Bootstrap en tu archivo de entrada de JavaScript
import 'bootstrap/dist/css/bootstrap.css';
import Item from '../Item/index'

const IntemList =({productos}) => {
    return (
        <div class="container">
            <div class="row">
                <main >
                    <div className='album py-5'>
                        <div className='container'>
                            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 card-outer'>
                                {productos.map(prod=> <Item key={prod.id} {...prod} />)}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default IntemList