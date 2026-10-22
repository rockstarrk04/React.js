const ReactEvents = () => {
    // TODO : Function without Parameter
    let handleclick = () =>{
        console.log('Welcome to React JS');
    }

    // TODO : Function with Parameter
    let printName = (name) =>{
        console.log(`Hello ${name}`);
    }

    // ToDO : Generate 4OTP
    let generateOTP = () =>{
        let otp = Math.floor(Math.random() * 9000 + 1000)
        console.log(otp);
    }
    return(
        <>
            <div className="events">
                <h1>React Events</h1>
            </div>
            
            <button onClick={handleclick}>Message</button>
            <br /><br />

            <button onClick={() => printName("Ram")}>Print Name</button>
            <br /><br />

            {/* <button onClick={generateOTP}>OTP</button> */}
            <button onClick={() => alert(Math.floor(Math.random() * 9000 + 1000))}>
                OTP
            </button>
        </>
    )
}

export default ReactEvents