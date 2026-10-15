import img1 from '../../assets/images/img1.jpg'
import img2 from '../../assets/images/img2.png'
import img3 from '../../assets/images/img3.jpg'

const DisplayImages = () =>{
    
let imagepath = [img1 , img2 , img3 , './public/images/tiger.jpg' , "https://etimg.etb2bimg.com/photo/98897586.cms"]
    return(
        <>
            <div className="display-images">
                <h1>Display Images</h1>
                <div className="container">
                    {imagepath.map((path) => {
                        return <img src={path} 
                                height={200}
                                width={200}
                                />
                    })}
                </div>
            </div>
        </>
    )
}

export default DisplayImages