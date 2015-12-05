
var atlanta;
var turin;
var athens;
var sanFrancisco;
var boone;
var newOrleans;
var canyonlands;
var costaRica;
var belgium;
var michiganUP;
var vermont;
var dC;
var boulder;
var amsterdam;
var portland;
var istanbul;
var independence;
var christmas1;
var christmas2;
var northPole1;
var northPole2;
var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: {lat: 38.8281814, lng: -99.5551222}
    // lat: 38.8281814, lng: -99.5551222
  });

  var atlantaBounds = {
    north: 33.7776,
    south: 33.7756,
    east: -84.3861,
    west: -84.3881
  };
  atlanta = new google.maps.GroundOverlay(
      'images1/letter1_D.png',
      atlantaBounds);

      //    45.0715117,7.7110521
  var turinBounds = {
    north: 45.0719117,
    south: 45.0711117,
    east: 7.7112521,
    west: 7.7107521
  };
  turin = new google.maps.GroundOverlay(
      'images1/letter2_e.png',
      turinBounds);

      // 33.9334174,-83.3459067
  var athensBounds = {
    north: 33.9341174,
    south: 33.9333174,
    east: -83.3445067,
    west: -83.3449067
  };
  athens = new google.maps.GroundOverlay(
      'images1/letter3_F.png',
      athensBounds);

      //    37.7546219,-122.4287755
  var sanFranciscoBounds = {
    north: 37.7549219,
    south: 37.7541219,
    east: -122.4285755,
    west: -122.4289755
  };
  sanFrancisco = new google.maps.GroundOverlay(
      'images1/letter4_I.png',
      sanFranciscoBounds);

    //    36.2162113,-81.6772727
  var booneBounds = {
    north: 36.2172113,
    south: 36.2162113,
    east: -81.6772727,
    west: -81.6782727
  };
  boone = new google.maps.GroundOverlay(
      'images1/letter5_N.png',
      booneBounds);

      //29.9536778,-90.0722323
  var newOrleansBounds = {
    north: 29.9566778,
    south: 29.9536778,
    east: -90.0722323,
    west: -90.0732323
  };
  newOrleans = new google.maps.GroundOverlay(
      'images1/letter6_I.png',
      newOrleansBounds);

    //    38.3271534,-109.8894008
  var canyonlandsBounds = {
    north: 38.3278534,
    south: 38.3271534,
    east: -109.8894008,
    west: -109.8899008
  };
  canyonlands = new google.maps.GroundOverlay(
      'images1/letter7_T.png',
      canyonlandsBounds);

      //    9.9306334,-84.0948115
  var costaRicaBounds = {
    north: 9.9338334,
    south: 9.9309334,
    east: -84.0920115,
    west: -84.0940115
  };
  costaRica = new google.maps.GroundOverlay(
      'images1/letter8_E.png',
      costaRicaBounds);

      //50.8529755,4.3548399
  var belgiumBounds = {
    north: 50.8549755,
    south: 50.8529755,
    east: 4.3568399,
    west: 4.3548399
  };
  belgium = new google.maps.GroundOverlay(
      'images1/letter9_L.png',
      belgiumBounds);

      //46.1791583,-86.693852
  var michiganUPBounds = {
    north: 46.1891583,
    south: 46.1791583,
    east: -86.693852,
    west: -86.703852
  };
  michiganUP = new google.maps.GroundOverlay(
      'images1/letter10_Y.png',
      michiganUPBounds);

      //44.4211401,-72.7794281
  var vermontBounds = {
    north: 44.4268401,
    south: 44.4211401,
    east: -72.7794281,
    west: -72.7844281
  };
  vermont = new google.maps.GroundOverlay(
      'images1/letter11_S.png',
      vermontBounds);

      //    38.8875463,-77.0264717
  var dCBounds = {
    north: 38.8906463,
    south: 38.8891463,
    east: -77.0264717,
    west: -77.0275717
  };
  dC = new google.maps.GroundOverlay(
      'images1/letter12_O.png',
      dCBounds);

      //lat: 40.0158293, lng: -105.2704527
  var boulderBounds = {
    north: 40.0168293,
    south: 40.0158293,
    east: -105.2704527,
    west: -105.2714527
  };
  boulder = new google.maps.GroundOverlay(
      'images1/letter13_M.png',
      boulderBounds);

      //    52.3718372,4.8949473
  var amsterdamBounds = {
    north: 52.3728372,
    south: 52.3718372,
    east: 4.8959473,
    west: 4.8949473
  };
  amsterdam = new google.maps.GroundOverlay(
      'images1/letter14_E.png',
      amsterdamBounds);

      //    45.5253117,-122.676569
  var portlandBounds = {
    north: 45.5263117,
    south: 45.5253117,
    east: -122.676569,
    west: -122.677569
  };
  portland = new google.maps.GroundOverlay(
      'images1/letter15_D.png',
      portlandBounds);

      //    41.0094167,28.9783082
  var istanbulBounds = {
    north: 41.0104167,
    south: 41.0094167,
    east: 28.9793082,
    west: 28.9783082
  };
  istanbul = new google.maps.GroundOverlay(
      'images1/letter15_A.png',
      istanbulBounds);

      //    39.0924833,-94.4137231
  var independenceBounds = {
    north: 39.0929833,
    south: 39.0924833,
    east: -94.4133731,
    west: -94.4137231
  };
  independence = new google.maps.GroundOverlay(
      'images1/letter17_Y.png',
      independenceBounds);
  var northPole1Bounds = {
    north: 64.7682322,
    south: 64.7572322,
    east: -147.3313357,
    west: -147.3523357
  };
  northPole1 = new google.maps.GroundOverlay(
      'images1/christmas.gif',
      northPole1Bounds);

  var christmas1Bounds = {
    north: -10.491231,
    south: -10.501231,
    east: 105.6529817,
    west: 105.6229817
  };
  christmas1 = new google.maps.GroundOverlay(
      'images1/message1.png',
      christmas1Bounds);

  var christmas2Bounds = {
    north: 46.455785,
    south: 46.440785,
    east: -86.7028568,
    west: -86.7328568
  };
  christmas2 = new google.maps.GroundOverlay(
      'images1/message2.png',
      christmas2Bounds);

  var northPole2Bounds = {
    north: 64.7669609,
    south: 64.7569609,
    east: -147.3621484,
    west: -147.3981484
  };
  northPole2 = new google.maps.GroundOverlay(
      'images1/message3.png',
      northPole2Bounds);

  addOverlay();
}

function addOverlay() {
  atlanta.setMap(map);
  turin.setMap(map);
  sanFrancisco.setMap(map);
  athens.setMap(map);
  boone.setMap(map);
  newOrleans.setMap(map);
  canyonlands.setMap(map);
  costaRica.setMap(map);
  belgium.setMap(map);
  michiganUP.setMap(map);
  vermont.setMap(map);
  dC.setMap(map);
  boulder.setMap(map);
  amsterdam.setMap(map);
  portland.setMap(map);
  istanbul.setMap(map);
  independence.setMap(map);
  christmas1.setMap(map);
  christmas2.setMap(map);
  northPole1.setMap(map);
  northPole2.setMap(map);
}

function removeOverlay() {
  historicalOverlay.setMap(null);
}
