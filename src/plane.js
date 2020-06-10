'use strict';

class Plane {


  landAt(airport) { airport.landingOk(this) };

  takeoffFrom(airport) { airport.takeoffOk(this) };

};
