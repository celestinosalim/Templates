class Circle {
  constructor(
    x,
    y,
    dx,
    dy,
    radius,
    colorArray = ["#0339A6", "#03318C", "#023373", "#2175BF", "#4AA2D9"]
  ) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
    this.minRadius = radius;
    /*
        "#xxxxxx".replace(/x/g, y =>
          ((Math.random() * 16) | 0).toString(16)
        );
        */
  }

  draw = (c, canvas) => {
    c.beginPath();

    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    c.fill();
    c.fillStyle = this.color;
  };

  update = (c, canvas) => {
    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;

    //interactivity

    this.draw(c, canvas);
  };
}

export default Circle;
