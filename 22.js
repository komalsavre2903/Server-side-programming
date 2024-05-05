class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    getArea() {
      return this.width * this.height;
    }
  
    getPerimeter() {
      return 2 * (this.width + this.height);
    }
  }
  
  var rect = new Rectangle(5, 3);
  console.log('Area:', rect.getArea()); // Output: 15
  console.log('Perimeter:', rect.getPerimeter()); // Output: 16
  