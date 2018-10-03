
function initialize() {
  var earth = new WE.map('earth_div');
  WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    attribution: '© OpenStreetMap contributors'
  }).addTo(earth);
  var marker = WE.marker([latitude, longitude]).addTo(earth);
  marker.bindPopup("<img src='images/ben.jpg'><h3>Ben</h3><h4>Portland, OR, USA</h4>", {maxWidth: 150, closeButton: true}).openPopup();
  console.log(latitude);
}
