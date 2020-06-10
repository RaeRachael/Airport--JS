describe('Airport', function(){

  var airport;
  var plane;
  var planeAlt

  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpyObj('plane', ['landAt', 'takeoffFrom']);
    planeAlt = jasmine.createSpyObj('planeAlt', ['landAt', 'takeoffFrom']);
  });

  it('has no planes by default', function(){
    expect(airport.planes()).toEqual([]);
  });

  it('can land planes', function(){
    airport.landingOk(plane);
    expect(airport.planes()).toEqual([plane]);
  });

  it('departs the correct plane', function(){
    airport.landingOk(plane);
    airport.landingOk(planeAlt)
    airport.takeoffOk(plane);
    expect(airport.planes()).toEqual([planeAlt]);
  });

  it('prevents landing if at maximum capacity', function(){
    for (i = 0; i < 101; i++) {
      airport.landingOk(plane);
    }
    expect(airport.planes().length).toEqual(100);
  });


});
