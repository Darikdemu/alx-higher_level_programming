#1usr/bin/node
class Rectangle{ 
    constructor (h, w){
         if (((w = parseInt(w)) <= 0) && ((h = parseInt(h)) <= 0)) {
            this.width = w;
            this.height = h;
         }
    }
}
