import './style.css'

const ItemLista = (props) => {

    return (

        <div className='card-box'>
            <div className='nome-signo'>
                {props.signo}
            </div>

            <img src={props.imagem} alt={props.signo} className='img-signo'></img>

            <div className='periodo-signo'>
                {props.dataInicio} - {props.dataFim}
            </div>

        </div>

    )

}

export default ItemLista;