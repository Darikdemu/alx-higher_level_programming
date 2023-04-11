#1/usr/bin/node
import square from './5-square'

class Square extends square {
    charprint(c){
        if(c === undefined){
            console.log(('X'.repeat(this.Width) + '\n').repeat(this.height-1) + 'X'.repeat(this.height))
        }
        else{
            console.log((c.repeat(this.width) + '\n').repeat(this.height - 1) + c.repeat(this.width));
        }
    }
} 
