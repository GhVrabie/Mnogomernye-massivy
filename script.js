// Exercise 1

let out1 = document.querySelector(".out-1");
let b1 = document.querySelector(".b-1");
let a1 = [3, 0, 55];

b1.onclick = function f1() {
    out1.innerHTML = a1[2];
    return a1[2];
}


// Exercise 2

let out2 = document.querySelector(".out-2");
let b2 = document.querySelector(".b-2");
let a2 = ["hi", "here"];

b2.onclick = function f2() {
    out2.innerHTML = a2[0];
    return a2[0];
}


// Exercise 3

let out3 = document.querySelector(".out-3");
let b3 = document.querySelector(".b-3");
let a3 = ["this", 22, 1000, "my"];

b3.onclick = function f3() {
    out3.innerHTML = a3[a3.length - 1];
    return a3[a3.length - 1];
}


// Exercise 4

let out4 = document.querySelector(".out-4");
let b4 = document.querySelector(".b-4");
let a4 = ["this", 22, 1000, "my", "go", 122, 38];

b4.onclick = function f4() {
    out4.innerHTML = a4[4];
    return a4[4];
}


// Exercise 5

let out5 = document.querySelector(".out-5");
let b5 = document.querySelector(".b-5");
let a5 = [-1, 2, 5, 8, 10, 22, 46, 37, 35, 9];

b5.onclick = function f5() {
    for(let i = 0; i < a5.length; i++) {
        if(a5[i] % 2 == 0) {
            out5.innerHTML += a5[i] + " ";
        }
    }
}


// Exercise 6

let out6 = document.querySelector(".out-6");
let b6 = document.querySelector(".b-6");
let a6 = [-1, 2, 5, -3, 8, 10, 15, 22, 46, 37, 35, 9];

b6.onclick = function f6() {
    for(let i = 0; i < a6.length; i++) {
        if(a6[i] % 2 !== 0) {
            out6.innerHTML += a6[i] + " ";
        }
    }
}


// Exercise 7

let out7 = document.querySelector(".out-7");
let b7 = document.querySelector(".b-7");
let a7 = [1, [3, 2], [3, [4]], [6, [10]]];

b7.onclick = function f7() {
    for(let i = 0; i < a7.length; i++) {
        for(let j = 0; j < a7.length; j++) {
            if(a7[i][j] % 2 == 0) {
                out7.innerHTML += a7[i][j] + " ";
            }
        }
    }
}


// Exercise 8

let out8 = document.querySelector(".out-8");
let b8 = document.querySelector(".b-8");
let a8 = [1, [3, 2], [3, [4]], -1, [-3, [-5]]];

b8.onclick = function f8() {

    for(let i = 0; i < a8.length; i++) {
        if(Array.isArray(a8[i])) { 
            for(let j = 0; j < a8[i].length; j++) {
                if(a8[i][j] % 2 != 0) {
                    out8.innerHTML += a8[i][j] + ' ';
                }
            }
        } else {
            if(a8[i] % 2 != 0) {
                out8.innerHTML += a8[i] + ' ';
            }
        }
    }
}



// Exercise 9

let out9 = document.querySelector(".out-9");
let b9 = document.querySelector(".b-9");
let a9 = [1, 3, 2, 3, 4, -1, -3, -5];

b9.onclick = function f9() {
    for(let i = 0; i < a9.length; i++) {
            if(a9[i] > 0) {
                out9.innerHTML += a9[i] + " ";
        }
    }
}


// Exercise 10

let out10 = document.querySelector(".out-10");
let b10 = document.querySelector(".b-10");
let a10 = ["this", 22, 1000, "my", "const", 33, 11, "end"];

b10.onclick = function f10() {
    for(let i = 0; i < a10.length; i++) {
        if(typeof a10[i] == "string") {
            out10.innerHTML += a10[i] + " ";
        }
    }
}


// Exercise 11

let out11 = document.querySelector(".out-11");
let b11 = document.querySelector(".b-11");
let a11 = [
    [4, 5, 6, 7, 8],
    [9, 10, 11, 12, 13]
]

b11.onclick = function f11() {
    let space = " "
    for(let i = 0; i < a11.length; i++) {
        let arrReverse = a11[i];
        for(let j = arrReverse.length - 1; j >= 0; j--) {
            out11.innerHTML += arrReverse[j] + space;
        }
    }
}



// Exercise 12 + 13

let out12 = document.querySelector(".out-12");
let b12 = document.querySelector(".b-12");
let chessTable = document.createElement("table");
let a12 = ["", "a", "b","c", "d", "e", "f", "g", "h"];

b12.onclick = function f12() {

    for(let i = 1; i < 9; i++) {
        let tr = document.createElement("tr");

        let tdd = document.createElement('td');
        tdd.setAttribute("class", "tdd")
        tdd.innerHTML = i;
        tr.appendChild(tdd);

        for(let j = 1; j < 9; j++) {
            let td = document.createElement("td");
    
            if((i + j) % 2 == 0) {
                td.setAttribute("class", "cell whitecell");
                tr.appendChild(td);
            } else {
                td.setAttribute("class", "cell blackcell");
                tr.appendChild(td);
            }
        }
    
        chessTable.appendChild(tr);
    }

    let trr = document.createElement("tr");

    for(let k = 0; k < a12.length; k++) {
        let td = document.createElement("td");
        td.setAttribute("class", "td");
        td.innerHTML = a12[k];

        trr.appendChild(td);
        trr.setAttribute("class", "trr")
    }

    chessTable.appendChild(trr);

    out12.appendChild(chessTable);
    chessTable.setAttribute("cellspacing", 0);
    chessTable.setAttribute("width", "270px");

}



// Exercise 14

let out14 = document.querySelector(".out-14");
let b14 = document.querySelector(".b-14");
let a14 = [
    ["a", "b", "c", "d"],
    [1, 2, 3, 4, 5],
    ["a", 1, "b", 2, "c", 3, "d", 4],
    ["arr", "length"],
];

b14.onclick = function f14() {
    out14.innerHTML += a14[0].length + " " + a14[1].length + " " + a14[2].length + " " + a14[3].length;
}


// Exercise 15

let out15 = document.querySelector(".out-15");
let b15 = document.querySelector(".b-15");
let a15 = [
    ["a", "b", "c", "d"],
    [1, 2, 3, 4, 5],
    ["a", 1, "b", 2, "c", 3, "d", 4],
    ["not", "me"],
];

b15.onclick = function f15() {
    let max = a15[0].length;
    for(let i = 0; i < a15.length; i++) {
        if(a15[i].length > max) {
            max = a15[i].length;
        }
    }
    out15.innerHTML = "Длина самого большого массива - " + max;
}


// Exercise 16

let a16 = [
    [0,7,0,6],
    0,
    0,
    8
];


console.group('Task 16 ================');
console.log(a16[3] == 8);
console.log(a16[0][1] == 7);
console.log(a16[0][3] == 6);
console.log(a16[0][0] == 0);
console.log(a16[0][2] == 0);
console.log(a16[1] == 0);
console.log(a16[2] == 0);
console.groupEnd();


// Exercise 17

let a17 = [
    [1, 2, 6],
    [5, 7],
    [0, 3],
    [10, 9, 8]
];

console.group('Task 17 ================');
console.log(a17[3][2] == 8);
console.log(a17[1][1] == 7);
console.log(a17[0][2] == 6);
console.groupEnd();


// Exercise 18

let a18 = [
    3,
    [4],
    [0, 12],
    7,
    [8]
];

console.group('Task 18 ================');
console.log(a18[0] == 3);
console.log(a18[4][0] == 8);
console.log(a18[2][1] == 12);
console.groupEnd();


// Exercise 19

let a19 = [
    [[1, [3]]],
    [[4, [5, 7], [8]]],
    [10, [12, 13]]
];

console.group('Task 19 ================');
console.log(a19[0][0][1] == 3);
console.log(a19[1][0][2] == 8);
console.log(a19[2][1][0] == 12);
console.groupEnd();


// Exercise 20

let a20 = [10,
    [3, [[6], [7, 9], [8], ["a"]]],
    [100, [5, 11], [20, [4], ["b"], [19], ["abc"]]],
    ["undefined"],
    [[1], [2, 3], [4], [0, ["end"]]]
];

console.group('Task 20 ================');
console.log(a20[1][1][3] == "a");
console.log(a20[2][2][4] == "abc");
console.log(a20[4][3][0] == 0);
console.groupEnd();






// CLASSWORK


// let b = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];


// for(let i = 0; i < b.length; i++) {
//     console.log(b[i]);


//     let c = b[i];
//     for(let j = 0; j < c.length; j++) {
//         console.log(c[j]);
//     }

//     for(let j = c.length - 1; j >= 0; j--) {
//         console.log(c[j]);
//     }
// }



// let b = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];


// let out = "";

// for(let i = 0; i < b.length; i++) {
//     for(let j = 0; j < b[i].length; j++) {
//         console.log(b[i][j]);
//         out += b[i][j] + " ";
//     }
//     out += "<br>";
// }

// document.querySelector(".out-first").innerHTML = out;



// let c = [1, 0, 0, 0];
// let j = 0;

// document.querySelector(".b-one").onclick = () => {
//     if(j + 1 < 4) {
//     c[j] = 0;
//     c[j + 1] = 1;
//     j++;
//     }
//     document.querySelector(".out-second").innerHTML = c;
// }