import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'practice',
    templateUrl: './practice.component.html'
})
export class PracticeComponent {
    running: boolean = false;
    severity = 1;
    score: number;
    submitted: boolean = false;
    numbers: number[];
    showSubmit: boolean = false;
    result: number;
    check: boolean = false;
    correct: boolean;
    alreadyChecked: number;
    userName: string;
    selectedOperations = {
        addition: true,
        subtraction: false,
        multiplication: false,
        division: false,
    };
    operations: string[];
    usedOperator: string;

    constructor() {
        this.operations = [];
    }
    toggleRunning(start) {
        this.running = start;
        if (start) {
            this.score = 0;
            this.submitted = false;

            if (this.selectedOperations.addition) {
                this.operations.push('+');
            }
            if (this.selectedOperations.subtraction) {
                this.operations.push('-');
            }
            if (this.selectedOperations.multiplication) {
                this.operations.push('*');
            }
            if (this.selectedOperations.division) {
                this.operations.push(':');
            }

            this.newExercise();
        }

        if (!start) {
            this.showSubmit = true;
        }
    }

    submitScore() {
        this.showSubmit = false;
    }

    newExercise() {
        var numberA;
        var numberB;

        this.check = false;
        this.usedOperator = this.operations[(Math.floor(Math.random() * this.operations.length))];

        if (this.usedOperator.search('/')) {
            do {
                numberA = (Math.floor(Math.random() * Math.pow(10, this.severity)) + 1);
                numberB = (Math.floor(Math.random() * Math.pow(10, this.severity)) + 1);

                if (numberB > numberA) {
                    var numberTemp = numberB;
                    numberB = numberA;
                    numberA = numberTemp;
                }
            }
            while ((numberA % numberB) != 0);
        } else {
            numberA = (Math.floor(Math.random() * Math.pow(10, this.severity)));
            numberB = (Math.floor(Math.random() * Math.pow(10, this.severity)));
        }

        this.numbers = [numberA, numberB];
        this.alreadyChecked = 0;
    }

    checkCalc() {
        this.numbers[0]
        this.check = true;
        var correctResult;

        if (this.usedOperator.search('\\+') != -1) {
            correctResult = this.numbers[0] + this.numbers[1];
        }
        if (this.usedOperator.search('-') != -1) {
            correctResult = this.numbers[0] - this.numbers[1];

        }
        if (this.usedOperator.search('\\*') != -1) {
            correctResult = this.numbers[0] * this.numbers[1];
        }
        if (this.usedOperator.search(':') != -1) {
            correctResult = this.numbers[0] / this.numbers[1];
        }

        if (this.alreadyChecked == 0) {
            if (correctResult == this.result) {
                this.score += this.severity;
                this.correct = true;
            } else {
                this.correct = false;
            }
        }

        this.alreadyChecked++;
    }
}