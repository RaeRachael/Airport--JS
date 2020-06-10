describe('Plane',function(){

  var plane;
  var aiport;

  beforeEach(function(){
    plane = new Plane();
    airport = jasmine.createSpyObj('airport', ['landingOk', 'takeoffOk']);

  });

  it('can land at an airport', function(){
    plane.landAt(airport);
    expect(airport.landingOk).toHaveBeenCalledWith(plane);
  });

  it('can land at an airport', function(){
    plane.takeoffFrom(airport);
    expect(airport.takeoffOk).toHaveBeenCalledWith(plane);
  });


})
