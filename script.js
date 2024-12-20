let container = document.getElementsByClassName('container')[0]
let sizeBtnbtn = document.querySelector('#sizeBtn');
let clearBtn = document.querySelector('#clearBtn');
let colorBtn = document.querySelector('#colorBtn');
let eraserBtn = document.querySelector('#eraserBtn');

const fillContainer = () => {
    for (let i = 0; i < size; i++) {
        let rows = document.createElement('div');
        rows.classList.add('flex', 'row-div')
        container.append(rows)
        for (let i = 0; i < size; i++) {
            let cols = document.createElement('div');
            cols.className = 'individual-div'
            cols.className = 'col-div'
            rows.append(cols)
            cols.addEventListener('mouseover', () => {
                if (colorFlag == true) {
                    if (eraserflag == false) {
                        cols.style.backgroundColor = getRandomColor();
                    }
                    else if (eraserflag == true) {
                        cols.style.backgroundColor = colorBg;
                    }
                }
                else if (colorFlag == false) {
                    cols.style.backgroundColor = colorBg;
                }
            })
        }
    }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

let colorFlag = false;
let colorBg = 'black';

colorBtn.addEventListener('click', () => {
    if (colorFlag == false) {
        colorFlag = true;
        colorBtn.style.backgroundColor = 'rgb(62, 165, 131)';
    }
    else {
        colorFlag = false
        colorBtn.style.backgroundColor = 'aquamarine';
        console.log(colorBg)
    }
})

let eraserflag = false
eraserBtn.addEventListener('click', () => {
    if (eraserflag == false) {
        eraserflag = true;
        colorBg = 'white'
        eraserBtn.style.backgroundColor = 'rgb(62, 165, 131)';
    }
    else {
        eraserflag = false;
        if (colorFlag == true) {

        }
        else {
            colorBg = 'black'
        }
        eraserBtn.style.backgroundColor = 'aquamarine';
    }
})


const resetScreen = () => {
    let dabba = document.querySelectorAll('.row-div');
    dabba.forEach((chotaDabba) => {
        chotaDabba.remove();
    })
}

let size = 16;
fillContainer()

clearBtn.addEventListener('click', () => {
    resetScreen()
    fillContainer()
})

sizeBtn.addEventListener('click', () => {
    size = +prompt("Enter the size of the grid!");
    if (size > 64) {
        size = 64
        resetScreen()
        fillContainer()
    }
    else {
        resetScreen()
        fillContainer()
    }
})

