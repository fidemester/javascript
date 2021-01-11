let num1=Number.parseInt(window.prompt("Adj meg egy számot"));

let percentage=(num1 / 55) * 100;

console.log(percentage);

switch (num1){
    case percentage < 20:
        console.log("1");
        document.getElementById("result").innerHTML="Az érdemjegyed: 1";
        break;
    case 20 > percentage < 40:
        console.log("2");
        document.getElementById("result").innerHTML="Az érdemjegyed: 2";
        break;

}