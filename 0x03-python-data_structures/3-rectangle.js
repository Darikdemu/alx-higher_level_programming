#!/usr/bin/node
class Rectangle{ 
    constructor (h, w){
         if (((w = parseInt(w)) <= 0) && ((h = parseInt(h)) <= 0)) {
            this.width = w;
            this.height = h;
         }
         print(){
            console.log(('X'.repeat(this.width) + '\n').repeat(this.height-1) + 'X'.repeat(this.width));
         }
    }
}
