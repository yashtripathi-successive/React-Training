function Weather({temperature}) {


    let status;
    if(temperature > 25){
        status = 'its sunny day'
    }
    else if (temperature < 10) {
        status='its a cold day'
    }else {
    status = "It's a mild day";
  }
    return ( 
        <div>
        <p>Temperature: {temperature}°C</p>
        <p> {status} </p>


        </div>
     );
}

export default Weather;