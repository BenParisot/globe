
//Call geocode
  var latitude;
  var longitude;

  function geocode(){
  var location = '632 NE Failing Street Portland OR';
    axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
      params:{
        address:location,
        key:'AIzaSyCS97JDbtkMF07H6OkVPGa3B0S9zQxbYAs'
      }
    })
    .then(function(response){

      //log full response
      console.log(response);

      //formatted address




      latitude = response.data.results[0].geometry.location.lat;
      longitude = response.data.results[0].geometry.location.lng;
      console.log(latitude);
      console.log(longitude);
      initialize();

    })
    .catch(function(error){
      alert("Ooops there was an error.");
    })


  };
