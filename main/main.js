function loadAllNumbers(){
    return{
        0:['._.', '|.|', '|_|'],
        1:['...', '..|', '..|'],
        2:['._.', '._|', '|_.'],
        3:['._.', '._|', '._|'],
        4:['...', '|_|', '..|'],
        5:['._.', '|_.', '._|'],
        6:['._.', '|_.', '|_|'],
        7:['._.', '..|', '..|'],
        8:['._.', '|_|', '|_|'],
        9:['._.', '|_|', '..|']
    };
}

function buildLcd(number) {

    var stringNumber = getStringNumber(number);
    var allNumbers = loadAllNumbers();
    var objectNumber = getObjectNumber(stringNumber, allNumbers);

    print(objectNumber);
}

function getStringNumber(number) {
    return number.toString().split('');
}

function getObjectNumber(elements, allNumbers) {
    var objectNumber = [];

    elements.forEach(function (element) {
        objectNumber.push(allNumbers[element]);
    });

    return objectNumber;
}

function print(numberObject) {
    var print = '';
    for (var i = 0; i < numberObject[0].length; i++) {
        for (var j = 0; j < numberObject.length; j++) {
            print += numberObject[j][i] + ' ';
        }
        print += '\n';
    }
    console.log(print);
}

module.exports = {
    buildLcd:buildLcd,
    getStringNumber: getStringNumber,
    loadAllNumbers: loadAllNumbers,
    getObjectNumber: getObjectNumber,
    print: print };

