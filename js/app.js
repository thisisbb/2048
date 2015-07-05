var view = document.querySelector("#view")

var Cell = function(x, y, data) {
    this.x = x;
    this.y = y;
    this.data = data || 0;
}



function fillMain(dataArray) {


    var array = [];
    for (var y = 0; y < 4; y++) {
        for (var x = 0; x < 4; x++) {
            array.push(new Cell(x, y));
        }
    }
    if (dataArray) {
        for (var i = 0; i < array.length; i++) {
            array[i].data = dataArray[i];
        }
    }
    return array;
}

function getRandomCoord() {
    return Math.floor(Math.random() * 4);
}

function twoOrFour() {
    if (Math.random() < 0.5) return 4;
    else return 2;
}

function filterNoData(el) {
    if (!el.data) return el;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function addNewData() {
    var cell = new Cell(getRandomCoord(), getRandomCoord(), twoOrFour());
    var emptyIndexes = [];
    for (var i = 0; i < viewModel.cells.length; i++) {
        if (viewModel.cells[i].data === 0) emptyIndexes.push(i);
    }
    var elementIndex = emptyIndexes[getRandomInt(0, emptyIndexes.length - 1)];
    if (elementIndex >= 0) {
        viewModel.cells[elementIndex].data = cell.data;
    }
}

function swap(array, a, b) {
    var temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}


var viewModel = {
    cells: fillMain(),
    buttons: ["up", "down", "left", "right"],




    operate: function(ev, el) {

        function shift(way) {

            switch (way) {
                case 0:
                    console.log(way);
                    break;
                case 1:
                    console.log(way);
                    break;
                case 2:
                    var dataArray = viewModel.cells.map(function(el) {
                        return el.data;
                    });

                    var partOfOrigin, matrix = [];
                    for (var i = 0; i < 15; i += 4) {
                        partOfOrigin = dataArray.slice(i, i + 4);
                        matrix.push(partOfOrigin);
                    }

                    matrix.forEach(function(el, index) {
                        for (var j = el.length-2; j >= 0 ; j--) {
                            console.log(j);
                            if (el[j] === 0) {
                                swap(el, j + 1, j);
                            }
                            if (el[j + 1] === el[j]) {
                                el[j] = el[j + 1] + el[j];
                                el[j + 1] = 0;
                            }
                        }
                        console.log(el);
                    });
                    console.log("--------");
                    var t = fillMain(matrix.join(",").split(",").map(function(el) {
                        return parseInt(el, 10);
                    }))


                    viewModel.cells = t;
                    break;
                case 3:
                    {
                        var dataArray = viewModel.cells.map(function(el) {
                            return el.data;
                        });
                        var partOfOrigin, matrix = [];
                        for (var i = 0; i < 15; i += 4) {
                            partOfOrigin = dataArray.slice(i, i + 4);
                            matrix.push(partOfOrigin);
                        }

                        matrix.forEach(function(el, index) {
                            for (var j = 1; j < el.length; j++) {
                                if (el[j] === 0) {
                                    swap(el, j - 1, j);
                                }
                                if (el[j - 1] === el[j]) {
                                    el[j] = el[j - 1] + el[j];
                                    el[j - 1] = 0;
                                }
                            }
                        });


                        var t = fillMain(matrix.join(",").split(",").map(function(el) {
                            return parseInt(el, 10);
                        }));



                        viewModel.cells = t;
                        break;
                    }

                default:
                    // code
            }
        };



        shift(el.index);
        addNewData();

    }

}

rivets.bind(view, {
    "model": viewModel
});