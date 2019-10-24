//Math.floor() === 向下取整
class position{
    init(){
         this.x = Math.floor(Math.random()*5);
         this.y = Math.floor(Math.random()*511);
    }
    toString(){
        return '('+this.x+', '+this.y+')';
    }
}

class quarter{
    constructor(a,b,c){
        this.a = a;
        this.b = b;
        this.c = c;
    }
}

//生成一个八分之一格子的图
function generatorMap(){
    //定义一个5*5的数组
    var arr = new array();         //先声明一维

    for(let i=0;i<5;i++) {          //一维长度为5
        arr[i] = new array();    //在声明二维
        for (let j = 0; j < 5; j++) {      //二维长度为5
            arr[i][j] = 1;
        }
    }

    //随机生成3个点
    let a = position.init();
    let b = position.init();
    let c = position.init();

    return new quarter(a,b,c);
}


