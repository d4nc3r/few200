import { Component } from '@angular/core';

@Component({
  selector: 'app-tip-calculator',
  templateUrl: './tip-calculator.component.html'
})

export class TipCalculatorComponent {
  tipPercent = .2;
  billAmount = 0;
  tipAmount = 0;
  total = 0;

  changeTipPercent(amount: number) {
    this.tipPercent = amount;
    this.calculateAmounts();
  }

  updateAmount(amount: number) {
    this.billAmount = amount;
    this.calculateAmounts();
  }

  calculateAmounts() {
    this.tipAmount = this.billAmount * this.tipPercent;
    this.total = this.billAmount + this.tipAmount;
  }
}
