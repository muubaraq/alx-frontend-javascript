class Car {
    constructor(brand, motor, color) {
      this._brand = brand;
      this._motor = motor;
      this._color = color;
    }
  
    get brand() {
      return this._brand;
    }
  
    get motor() {
      return this._motor;
    }
  
    get color() {
      return this._color;
    }
  
    cloneCar() {
      const clone = new Car();
      clone._brand = this._brand;
      clone._motor = this._motor;
      clone._color = this._color;
      return clone;
    }
  }
  