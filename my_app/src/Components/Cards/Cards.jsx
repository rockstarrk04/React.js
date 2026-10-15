import {cardsdata} from './cardsdata'
import './cardsdesign.css'

const Cards = () => {
    return(
        <>
            <div className="cards">
                <div className="heading">Cards</div>
                <div className="container">
                    {cardsdata.map((elem) => {
                        let {id , title , desc , image} = elem
                        return(
                            <div className="card">
                                <img src={image} alt="" />
                                <div className="title">{title}</div>
                                <div className="desc">{desc}</div>
                                <button>Click Here</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Cards