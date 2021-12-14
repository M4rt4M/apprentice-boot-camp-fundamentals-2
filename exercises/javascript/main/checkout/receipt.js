class Receipt {
  constructor() {
    this.text = '';
    this.numberOfA = 0;
    this.numberOfB = 0;
    this.numberOfC = 0;
    this.total = 0;
  }

  getText() {
    return this.text + "Total: " + this.total;
  }

  scannedA() {
    this.text += 'A: 50';
    if (++this.numberOfA % 5 == 0) {
      this.text += ' - 30 (5 for 220)';
      this.total += 20;
    } else {
      this.total += 50;
    }
    this.text += '\n';
  };

  scannedB() {
    this.text += 'B: 30';
    if (++this.numberOfB % 2 == 0) {
      this.text += ' - 15 (2 for 45)';
      this.total += 15;
    } else {
      this.total += 30;
    }
    this.text += '\n';
  };

  scannedC() {
    this.text += 'C: 20';
    if (++this.numberOfC % 4 == 0) {
      this.text += ' - 10 (4 for 70)';
      this.total += 10;
    } else {
      this.total += 20;
    }
    this.text += '\n';
  };

  scannedD() {
    this.text += 'D: 15\n';
    this.total += 15;
  };
};

module.exports = {
  Receipt
};