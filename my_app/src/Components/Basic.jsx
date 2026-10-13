import lion from '../assets/images/lion.jpg'


const Basic = () => {

  //! JS Code
  let num = 100
  let name = "Ram"
  let msz = "Hyper Text Markup Language"
  let otp = Math.floor(Math.random() * 9000 + 1000)

  let image = "https://cdn.pixabay.com/photo/2019/12/22/09/31/lion-4712141_1280.jpg"

  let heading = {
    color : "red",
    background : "yellow",
    textAlign : "center"
  }

  return(

    //! HTML Code
    <>
      {/* Static Content */}
      <h1>I'm in Basic Component</h1>
      <hr />

      {/* Dynamic Content */}
      <h2>{num*2}</h2>
      <hr />

      {/* Static & Dynamic Content */}
      <h2>My name is {name}</h2>
      <h3 title={msz}>HTML : {msz}</h3>
      <hr />
      
      {/* Generate OTP */}
      <h2>OTP : {otp}</h2>
      <hr />

      {/* Display Image */}
      <img src={image} alt="No Image"  height={500}/>

      {/* Apply CSS */}
      <h1 style={heading}>
        Welcome to React JS Class
      </h1>

      <p style={{color : "green" , background : "lightpink"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, molestiae aliquid ipsa vitae hic ullam voluptatibus maiores placeat dolorem, quia consectetur ducimus fuga iusto. Illo eligendi libero deserunt dolorem minus.</p>

      {/* importing Image from src */}
      <img src={lion} alt="No Image" height={500} width={400} />
      <br />

      <img src="./public/images/tiger.jpg" alt="No Image" />
    </>
  )
}

export default Basic