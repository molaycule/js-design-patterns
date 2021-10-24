class RoundHole {
  constructor(radius) {
    this.radius = radius;
  }

  checkIfPegFits(peg) {
    return this.radius >= peg.getRadius();
  }
}

class RoundPeg {
  constructor(radius) {
    this.radius = radius;
  }

  getRadius() {
    return this.radius;
  }
}

class SquarePeg {
  constructor(width) {
    this.width = width;
  }

  getWidth() {
    return this.width;
  }
}

class SquarePegAdapter extends RoundPeg {
  constructor(peg) {
    super();
    this.peg = peg;
  }

  getRadius() {
    return (this.peg.getWidth() * Math.sqrt(2)) / 2;
  }
}

const roundHole = new RoundHole(5);
const roundPeg = new RoundPeg(5);
console.log(
  `Check if round peg fits the round hole: ${roundHole.checkIfPegFits(
    roundPeg
  )}`
);

const smallSquarePeg = new SquarePeg(5);
const largeSquarePeg = new SquarePeg(10);

const smallSquarePegAdapter = new SquarePegAdapter(smallSquarePeg);
const largeSquarePegAdapter = new SquarePegAdapter(largeSquarePeg);
console.log(
  `Check if small square peg fits the round hole using adapter: ${roundHole.checkIfPegFits(
    smallSquarePegAdapter
  )}`
);
console.log(
  `Check if large square peg fits the round hole using adapter: ${roundHole.checkIfPegFits(
    largeSquarePegAdapter
  )}`
);
