class Airport{

  constructor() {
    this._hangar = []
  }

  planes() {
    return this._hangar;
  }

  landingOk(plane) {
    this._hangar.push(plane);
  };
  
};
