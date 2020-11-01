function solve(){

  class Figure{
    units = 'cm';

    params = {
      mm: 10,
      cm: 1,
      m: 0.01,
    };

    changeUnits(unit) {
      this.units = unit;
    }
  }

  class Circle extends Figure{
    constructor(radius){
      super();
      this.radius = radius;
      
    }

    get area(){
      
      return Math.PI * (this.radius * this.params[this.units]) ** 2;
    }

    toString(){
      return `Figures units: ${this.units} Area: ${this.area} - radius: ${this.radius}`;
    }
  }

  class Rectangle extends Figure{

    constructor(width, height, unit){
      super();
      this.width = width;
      this.height = height;
      this.changeUnits(unit);
    }

    get area(){
      return (this.width * this.params[this.units]) * (this.height * this.params[this.units]);
    }

    toString(){
      return `Figures units: ${this.units} Area: ${this.area} - width: ${this.width * this.params[this.units]}, height: ${this.height * this.params[this.units]}`;
    }
  }

  let c = new Circle(5);
  console.log(c.area); // 78.53981633974483
  c.changeUnits('mm');
  console.log(c.area); 


  return {
    Figure,
    Circle,
    Rectangle
  }
}

solve();


