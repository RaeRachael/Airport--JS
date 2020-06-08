describe('Plane',function(){

  var plane;
  var aiport;

  beforeEach(function(){
    plane = new Plane();
    airport = jasmine.createSpyObj('airport',['landingOk']);
  });

  it('can land at an airport', function(){
    plane.landAt(airport);
    expect(airport.landingOk).toHaveBeenCalledWith(plane);
  });

})
