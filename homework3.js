// 1
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const min=-10;
const max=10;
let randomNumber = random(min, max); //Math.random(min, max) - добавляет плавающую точку
console.log("Случайное число между " + min + " и " + max + " = " + randomNumber);

function makeNegative(x){
    return((x>0)?(-1)*x:x);
}
console.log("№1: Перевод любого числа в отрицательное", makeNegative(randomNumber)); 

// 2
function approveGame(val){
    if ((val==="scissors")||(val==="paper")||(val==="rock")){
        return true;
    }else{
        return false;
    }
}

function rockPaperScissors(player1, player2){
    if (approveGame(player1) && approveGame(player2)){
        if (player1===player2){
            return "Draw!";
        }

        switch(player1){
            case "scissors":
                if (player2==="rock"){return "Player 2 won!";}
                if (player2==="paper"){return "Player 1 won!";}
                break;

            case "paper":
                if (player2==="rock"){return "Player 1 won!";}
                if (player2==="scissors"){return "Player 2 won!";}
                break;
            
            case "rock":
                if (player2==="scissors"){return "Player 1 won!";}
                if (player2==="paper"){return "Player 2 won!";}
                break;
            
            default:
                return "undefined";
        }

    }else{
        return "unknown sign";
    }

}
console.log("№2:", rockPaperScissors("scissors", "paper")); //return "Player 1 won!"
console.log("№2:", rockPaperScissors("scissors", "rock")); //return "Player 2 won!"
console.log("№2:", rockPaperScissors("paper", "paper")); //return "Draw!"
console.log("№2:", rockPaperScissors("car", "paper")); //return "unknown sign"

// 3
function sumPositive(arr){
    let sum=0;
    arr.forEach(element => {
        (element>0?sum+=element:"");    
    });
return sum;
}

const arrTmp1 = [1,-4,7,12];
const arrTmp2 = [];
console.log("№3:", sumPositive(arrTmp1));
console.log("№3:", sumPositive(arrTmp2));

// 4
function countBy(step, maxValue){
    let arr = [];
    for (let i=step;i<=maxValue*step;i+=step){
        arr.push(i);
    }
return arr;
}
console.log("№4:", countBy(3, 10)); //return [3,6,9,12,15,18, 21, 24,27,30]
console.log("№4:", countBy(2,5)); //return [2,4,6,8,10]
console.log("№4:", countBy(4, 11)); // return  [4,44]

// 5
let j=0;
function trafficlightNextColors(color,count){
    const arrTrafic = ["red","yellow","green","yellow"];
    let tmp="";
    j=arrTrafic.indexOf(color,j);
    for (let i=0;i<count;i++){
        j++;
        if (j>arrTrafic.length-1){j=0;}
        tmp=tmp + " " + arrTrafic[j];
    }
return tmp;
}

console.log("№5:", trafficlightNextColors("green", 4));  //return "yellow red yellow green"
console.log("№5:", trafficlightNextColors("yellow", 1));  //return "red"
console.log("№5:", trafficlightNextColors("red", 5));  //return "yellow green yellow red yellow"