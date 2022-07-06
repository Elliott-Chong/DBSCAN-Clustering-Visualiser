class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.screen_x = map(this.x, 0, x_range, 0, width);
    this.screen_y = map(this.y, 0, y_range, 0, height);
    this.serialised = this.x.toString() + "-" + this.y.toString();
  }

  show() {
    push();
    noStroke();
    let l = label.get(this.serialised);
    if (l == "noise") {
      fill(0, 255, 0);
    } else {
      fill(label_colors[l]);
    }
    ellipse(this.screen_x, this.screen_y, 6);
    pop();
  }
  getNeighbours(distFunc, epsilon) {
    let neighbours = [];
    for (let point of points) {
      if (distFunc(this, point) <= epsilon) {
        neighbours.push(point);
      }
    }
    return neighbours;
  }
}
