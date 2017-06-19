import { Component } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe {
  transform(value) {
    try {
      return value.slice().reverse();
    }
    catch(ignore) {
      console.log("Waiting for data...");
    }
  }
}