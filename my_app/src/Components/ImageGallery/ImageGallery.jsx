import './imagegallery.css'
import img1 from '../../assets/images/lion.jpg'
import img2 from '../../assets/images/thor.jpg'
import img3 from '../../assets/images/img1.jpg'

const ImageGallery = () => {
    return(
        <>
            <div className="image-gallery">
                <h1 className="header">Image Gallery</h1>
                <div className="boxes">
                    <div className="box">
                        <img src={img1} alt="" />
                        <div className="title">LION</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, temporibus ab quibusdam possimus cum aliquam, nam nemo assumenda ipsa quisquam eum quam est exercitationem quas ad soluta debitis magnam quia.</p>
                        <button className='btn'>Click Here</button>
                    </div>
                    <div className="box">
                        <img src={img2} alt="" />
                        <div className="title">THOR</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, temporibus ab quibusdam possimus cum aliquam, nam nemo assumenda ipsa quisquam eum quam est exercitationem quas ad soluta debitis magnam quia.</p>
                        <button className='btn'>Click Here</button>
                    </div>
                    <div className="box">
                        <img src={img3} alt="" />
                        <div className="title">MINION</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, temporibus ab quibusdam possimus cum aliquam, nam nemo assumenda ipsa quisquam eum quam est exercitationem quas ad soluta debitis magnam quia.</p>
                        <button className='btn'>Click Here</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImageGallery