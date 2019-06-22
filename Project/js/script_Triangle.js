let ax = document.getElementById("AX");
let ay = document.getElementById("AY");
let bx = document.getElementById("BX");
let by = document.getElementById("BY");
let cx = document.getElementById("CX");
let cy = document.getElementById("CY");
let resultOfTringle = document.querySelector('.result-triangle');

function getCords() {
    const x1 = ax.value;
    const y1 = ay.value;
    const x2 = bx.value;
    const y2 = by.value;
    const x3 = cx.value;
    const y3 = cy.value;
    return [{x: x1, y: y1}, {x: x2, y: y2}, {x: x3 , y: y3}];
}

function checkIsTriangle(lengths) {
    return lengths[0] + lengths[1] > lengths[2];
}

function  getLegLength(cord1 , cord2) {
    return Math.sqrt(Math.pow((cord2.x - cord1.x),2) + Math.pow((cord2.y - cord1.y),2));
} 

function findLegLengths(cords) {
    const lengths = [];
    for (let i = 0; i < cords.length; i++) {
        let nextIndex = i + 1;
        if(i === cords.length - 1){
            nextIndex = 0;
        }  
        lengths.push(getLegLength(cords[i],cords[nextIndex]));    
    }
    return lengths;
}

function findAngles(lengths) {
    const a = lengths[0];
    const b = lengths[1];
    const c = lengths[2];
    const angleAB = Math.round((Math.acos(( Math.pow(a, 2) +  Math.pow(b, 2) -  Math.pow(c, 2)) / (2 * a * b))) * (180 / Math.PI));
    const angleBC = Math.round((Math.acos(( Math.pow(b, 2) +  Math.pow(c, 2) -  Math.pow(a, 2)) / (2 * b * c))) * (180 / Math.PI));
    const angleAC = 180 - angleAB - angleBC;     
    return [angleAB, angleBC, angleAC];
}

function defineTriangleType(angles) {
    for (let i = 0; i < angles.length; i++) {
        if (angles[i] > 90 && angles[i] < 180) {
            return 'Acute';
        }
        if (angles[i] === 90) {
            return 'Right';
        }
    }
    return 'Obtuse';
}
function runApp() {
    const cords = getCords();
    const lengths = findLegLengths(cords);
    const isTriangle = checkIsTriangle(lengths);
    if (!isTriangle) {
        resultOfTringle.innerHTML ='is not a tiangle';
        runApp();
    } else{
        const angles = findAngles(lengths);
        const type = defineTriangleType(angles);
        resultOfTringle.innerHTML = "Your ABC Triangle is " + type + " angled triangle";
    }
};
