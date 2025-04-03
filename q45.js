// var p1 = 1;
// var p2 = 2;
// var p3 = 3;
// var p4 = 4;
// var p5 = 5;
// var p6 = 6;


// var p = [0,0,0,0,0,0];
// p[0] = 1;
// p[1] = 2;
// p[2] = 3;
// p[3] = 4;
// p[4] = 5;
// p[5] = 6;

// // var r[0], r[1], r[2], r[3], r[4], r[5];
// var r = [0,0,0,0,0,0];
var p = [1, 2, 3, 4, 5, 6];
var r = [0, 0, 0, 0, 0, 0];

r[0] = Math.floor(Math.random() * 45) + 1;
document.write(r[0]);
document.write("<br>");

while (true) {
    r[1] = Math.floor(Math.random() * 45) + 1;
    if (r[0] != r[1]) {
        document.write(r[1]);
        document.write("<br>");
        break;
    }

}

while (true) {
    r[2] = Math.floor(Math.random() * 45) + 1;
    if (r[1] != r[2] && r[0] != r[2]) {
        document.write(r[2]);
        document.write("<br>");
        break;
    }
}

while (true) {
    r[3] = Math.floor(Math.random() * 45) + 1;
    if (r[2] != r[3] && r[1] != r[3] && r[0] != r[3]) {
        document.write(r[3]);
        document.write("<br>");
        break;
    }
}

while (true) {
    r[4] = Math.floor(Math.random() * 45) + 1;
    if (r[3] != r[4] && r[2] != r[4] && r[1] != r[4] && r[0] != r[4]) {
        document.write(r[4]);
        document.write("<br>");
        break;
    }
}

while (true) {
    r[5] = Math.floor(Math.random() * 45) + 1;
    if (r[4] != r[5] && r[3] != r[5] && r[2] != r[5] && r[1] != r[5] && r[0] != r[5]) {
        document.write(r[5]);
        document.write("<br>");
        break;
    }
}

while (true) {
    bonus = Math.floor(Math.random() * 45) + 1;
    if (r[5] != bonus && r[4] != bonus && r[3] != bonus && r[2] != bonus && r[1] != bonus && r[0] != bonus) {
        document.write("보너스:" + bonus);
        document.write("<br>");
        break;
    }
}
var win = 0;

for (var i = 0; i <= 5; i = i + 1) {
    for (var j = 0; j <= 5; j = j + 1) {
        if (p[i] == r[j]) {
            win = win + 1;
        }
    }
}


// if (p[0] == r[0]) {
//     win = win + 1;
// }

// if (p[0] == r[1]) {
//     win = win + 1;
// }

// if (p[0] == r[2]) {
//     win = win + 1;
// }

// if (p[0] == r[3]) {
//     win = win + 1;
// }

// if (p[0] == r[4]) {
//     win = win + 1;
// }

// if (p[0] == r[5]) {
//     win = win + 1;
// }
// // p1

// if (p[1] == r[0]) {
//     win = win + 1;
// }

// if (p[1] == r[1]) {
//     win = win + 1;
// }

// if (p[1] == r[2]) {
//     win = win + 1;
// }

// if (p[1] == r[3]) {
//     win = win + 1;
// }

// if (p[1] == r[4]) {
//     win = win + 1;
// }

// if (p[1] == r[5]) {
//     win = win + 1;
// }
// // p2

// if (p[2] == r[0]) {
//     win = win + 1;
// }

// if (p[2] == r[1]) {
//     win = win + 1;
// }

// if (p[2] == r[2]) {
//     win = win + 1;
// }


// if (p[2] == r[3]) {
//     win = win + 1;
// }


// if (p[2] == r[4]) {
//     win = win + 1;
// }


// if (p[2] == r[5]) {
//     win = win + 1;
// }
// // p3

// if (p[3] == r[0]) {
//     win = win + 1;
// }


// if (p[3] == r[1]) {
//     win = win + 1;
// }


// if (p[3] == r[2]) {
//     win = win + 1;
// }


// if (p[3] == r[3]) {
//     win = win + 1;
// }


// if (p[3] == r[4]) {
//     win = win + 1;
// }


// if (p[3] == r[5]) {
//     win = win + 1;
// }
// // p4

// if (p[4] == r[0]) {
//     win = win + 1;
// }


// if (p[4] == r[1]) {
//     win = win + 1;
// }


// if (p[4] == r[2]) {
//     win = win + 1;
// }


// if (p[4] == r[3]) {
//     win = win + 1;
// }


// if (p[4] == r[4]) {
//     win = win + 1;
// }


// if (p[4] == r[5]) {
//     win = win + 1;
// }
// // p5

// if (p[5] == r[0]) {
//     win = win + 1;
// }


// if (p[5] == r[1]) {
//     win = win + 1;
// }


// if (p[5] == r[2]) {
//     win = win + 1;
// }


// if (p[5] == r[3]) {
//     win = win + 1;
// }


// if (p[5] == r[4]) {
//     win = win + 1;
// }


// if (p[5] == r[5]) {
//     win = win + 1;
// }
// // p6

document.write("맞힌숫자:" + win);
document.write("<br>");

var str = "";
switch (win) {
    case 0:
    case 1:
    case 2:
        str = "꽝";
        break;
    case 3:
        str = "5등";
        break;
    case 4:
        str = "4등";
        break;
    case 5:
        str = "3등";
        for (var i = 0; i < 6; i = i + 1)
            if (bonus == p[i]) {
                str = "2등";
            }
        break;
    case 6:
        str = "1등";
        break;
}
document.write(str);
