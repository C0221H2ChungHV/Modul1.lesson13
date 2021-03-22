
    let bTag = document.getElementById('carogame');

    let bData = [];
    let board = "";
    for (let i = 0; i < 10; i++) {
    bData[i] = new Array("<th>( . )</th>", "<th>( . )</th>", "<th>( . )</th>", "<th>( . )</th>", "<th>( . )</th>", "<th>( . )</th>", "<th>( . )</th>", "<th>( . )</th>", "<th>( . )</th>", "<th>( . )</th>");
}
for (let i = 0; i < 10; i++) {
    board += "<tr>";
    for (let j = 0; j < 10; j++) {
        board += bData[i][j];// "&nbsp;&nbsp;";
    }
    board += "</tr>";
}
document.getElementById('carogame').innerHTML = board;

function showBoard(){
    board = '';
    for (let i = 0; i < 10; i++) {
        board += "<tr>";
        for (let j = 0; j < 10; j++) {
            board += bData[i][j];
        }
        board += "</tr>";
    }
    document.getElementById('carogame').innerHTML = board;
}

function changeValue(str) {
    let positionX = +prompt("X: ");
    let positionY = +prompt("Y: ");

    if (str == 'X'){
        bData[positionX][positionY] = "<th> X </th>";
        document.getElementById('btn').innerHTML = "<button onclick=\"changeValue(\'O\')\">Change Value</button>";
    }
    else{
        bData[positionX][positionY] = "<th> O </th>";
        document.getElementById('btn').innerHTML = "<button onclick=\"changeValue(\'X\')\">Change Value</button>";
    }
    showBoard();
    checkWin(positionX,positionY);
}

function checkWin(x,y){
    let score = 1;
    let i = 1;
    //check right
    while (bData[x][y] === bData[x][y+i] && (y+i) < 10){
        score++;
        i++;
    }
    i=1;
    //check left
    while (bData[x][y] === bData[x][y-i] && (y-i) >= 0){
        score++;
        i++;
    }
    if (score >= 3){
        winAndReset(bData[x][y]);
        return;
    }

    score = 1;
    i=1;
    //check down
    while (bData[x][y] === bData[x+i][y] && (x+i) < 10){
        score++;
        i++;
    }
    i=1;
    //check up
    while (bData[x][y] === bData[x-i][y] && (x-i) >= 0){
        score++;
        i++;
    }
    if (score >= 3){
        winAndReset(bData[x][y]);
        return;
    }

    score = 1;
    i=1;
    //check left down
    while (bData[x][y] === bData[x+i][y-i] && (x+i) < 10){
        score++;
        i++;
    }
    i=1;
    //check right up
    while (bData[x][y] === bData[x-i][y+i] && (x-i) >= 0){
        score++;
        i++;
    }
    if (score >= 3){
        winAndReset(bData[x][y]);
        return;
    }

    score = 1;
    i=1;
    //check right down
    while (bData[x][y] === bData[x+i][y+i] && (x+i) < 10){
        score++;
        i++;
    }
    i=1;
    //check left up
    while (bData[x][y] === bData[x-i][y-i] && (x-i) >= 0){
        score++;
        i++;
    }
    if (score >= 3){
        winAndReset(bData[x][y]);
        return;
    }
}

function winAndReset(str){
    //display win
    alert("Người chơi " + "\"" + str.slice(5, 6) + "\"" + " đã dành chiến thắng!");

    //reset board
    board = '';
    for (let i = 0; i < 10; i++) {
        bData[i] = new Array("<th>( . )</th>", "<th>( . )</th>", "<th>( . )</th>", "<th>( . )</th>", "<th>( . )</th>", "<th>( . )</th>", "<th>( . )</th>", "<th>( . )</th>", "<th>( . )</th>", "<th>( . )</th>");
    }
    for (let i = 0; i < 10; i++) {
        board += "<tr>";
        for (let j = 0; j < 10; j++) {
            board += bData[i][j];// "&nbsp;&nbsp;";
        }
        board += "</tr>";
    }
    document.getElementById('carogame').innerHTML = board;
}


document.write();

