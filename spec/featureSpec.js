describe('Feature Test:', function(){

  var plane;
  var planeAlt;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    planeAlt = new Plane();
    airport = new Airport();
  });

  it('planes can be instructed to land at an airport', function(){
    plane.landAt(airport);
    expect(airport.planes()).toContain(plane);
  });

  // spec/featureSpec.js
  it('planes can be instructed to takeoff', function(){
    plane.landAt(airport)
    planeAlt.landAt(airport)
    plane.takeoffFrom(airport);
    expect(airport.planes()).toContain(planeAlt);
  });

});
