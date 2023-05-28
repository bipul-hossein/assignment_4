//-------problem 1---------
function radianToDegree(radian) {
    if (typeof (radian) === "number") {
        const pi = Math.PI; //pi value
        const radianFormula = radian * (180 / pi); //formula
        return radianFormula.toFixed(2);
    }
    else {
        return 'Please! Input Number type value:'
    }
}
let numbersOfRadian = radianToDegree(1);
console.log(numbersOfRadian);
 //--------problem 2-----------
function isJavaScriptFile(fileName) {
    if (typeof (fileName) === "string") {
        let fileExtension = fileName.split('.').pop(); //use split & pop
        if (fileExtension === 'js') { //condition
            return true;
        }
        else {
            return false;
        }
    }
    return 'Input a String Number value:'
}
let inputFile = isJavaScriptFile('mm.js');
// console.log(inputFile);
// -------problem 3--------
function oilPrice(diesel, petrol, octane) {
    if (typeof (diesel && petrol && octane) === "number") {
        let dieselPricePerLitre = 114; //diesel part
        const totalDieselPrice = dieselPricePerLitre * diesel;
        let petrolPricePerLitre = 130; //petrol part
        const totalPetrolPrice = petrolPricePerLitre * petrol;
        let octanePricePerLitre = 135; //octane part
        const totalOctanePrice = octanePricePerLitre * octane;
        //---sum----y
        let totalMoney = totalDieselPrice + totalPetrolPrice + totalOctanePrice;
        return totalMoney;
    }
    return 'Please! Input Number type value:'
}
var totalPrice = oilPrice('', 9, 9);
// console.log( totalPrice);
//--------problem 4----------
function publicBusFare(number) {
    if (typeof (number) === "number") {
        const busSet = 50; //bus set
        const restOfBus = number % busSet;
        const microbusSet = 11; //microbus set
        const restOfMicrobus = restOfBus % microbusSet; //remaining passenger
        const publicbus = restOfMicrobus * 250;
        return publicbus;
    }
    else {
        return 'Please! Input Number type value:'
    }
}
let busFare = publicBusFare(123);
// console.log(busFare);
//--------------problem 5----------------
const obj1 = { name: 'sumon', friend: 'juel' }; //object
const obj2 = { name: 'juel', friend: 'sumon' };
function isBestFriend(object1, object2) {
    if (typeof (object1, object2) === "object") {
        if (object1.name === object2.friend && object2.name === object1.friend) {
            return 'Best Friend';
        }
        return false
    }
    else {
        return 'Please! Input Object type value:'
    }
}
const sumOfObject = isBestFriend(obj1, obj2);
    // console.log(sumOfObject)