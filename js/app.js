requirejs.config({
    paths: {
        rivets: 'https://cdnjs.cloudflare.com/ajax/libs/rivets/0.8.1/rivets.min',
        sightglass: 'https://cdn.rawgit.com/mikeric/sightglass/master/index'
    },
    shim: {}
});

define(['rivets', './utils'], function(rivets, utils) {
//binder
    rivets.binders.startvalue = function(element, value) {
        addNewData();
    }
//formatter    
    rivets.formatters.hidezero = function(value) {
        if (value !== 0)
            return value;
        else return;
    }

    var view = document.querySelector("#view");

    function addNewData() {
        var cell = new utils.Cell(utils.getRandomCoord(), utils.getRandomCoord(), utils.twoOrFour());
        var emptyIndexes = [];
        for (var i = 0; i < viewModel.cells.length; i++) {
            if (viewModel.cells[i].data === 0) emptyIndexes.push(i);
        }
        var elementIndex = emptyIndexes[utils.getRandomInt(0, emptyIndexes.length - 1)];
        if (elementIndex >= 0) {
            viewModel.cells[elementIndex].data = cell.data;
        }
    }

    var viewModel = {
        cells: utils.fillMain(),
        buttons: ["up", "down", "left", "right"],
        shift: function(way) {
            switch (way) {
                case 0:
                    //up
                    var matrixTransp = utils.transponation(utils.arrayToMatrix(utils.getData(viewModel.cells)));
                    matrixTransp = utils.shiftReduceRight(matrixTransp);
                    viewModel.cells = utils.fillMain(utils.concatenate(utils.transponation(matrixTransp)));
                    break;
                case 1:
                    //down
                    var matrixTransp = utils.transponation(utils.arrayToMatrix(utils.getData(viewModel.cells)));
                    matrixTransp = utils.shiftReduceLeft(matrixTransp)
                    viewModel.cells = utils.fillMain(utils.concatenate(utils.transponation(matrixTransp)));
                    break;
                case 2:
                    //left
                    var matrix = utils.arrayToMatrix(utils.getData(viewModel.cells));
                    matrix = utils.shiftReduceRight(matrix);
                    viewModel.cells = utils.fillMain(utils.concatenate((matrix)));
                    break;
                case 3:
                    //right
                    var matrix = utils.arrayToMatrix(utils.getData(viewModel.cells));
                    matrix = utils.shiftReduceLeft(matrix);
                    viewModel.cells = utils.fillMain(utils.concatenate((matrix)));
                    break;
            }
        },

        operate: function(ev, el) {
            viewModel.shift(el.index);
            addNewData();
        }


    }

    rivets.bind(view, {
        "model": viewModel
    });

})



// var view = document.querySelector("#view")

// var Cell = function(x, y, data) {
//     this.x = x;
//     this.y = y;
//     this.data = data || 0;
// }


// // function fillMain(dataArray) {

// //     var array = [];
// //     for (var y = 0; y < 4; y++) {
// //         for (var x = 0; x < 4; x++) {
// //             array.push(new Cell(x, y));
// //         }
// //     }
// //     if (dataArray) {
// //         for (var i = 0; i < array.length; i++) {
// //             array[i].data = dataArray[i];
// //         }
// //     }
// //     return array;
// // }

// // function getRandomCoord() {
// //     return Math.floor(Math.random() * 4);
// // }

// // function twoOrFour() {
// //     if (Math.random() < 0.2) return 4;
// //     else return 2;
// // }

// // function getRandomInt(min, max) {
// //     return Math.floor(Math.random() * (max - min + 1)) + min;
// // }

// function addNewData() {
//     var cell = new Cell(getRandomCoord(), getRandomCoord(), twoOrFour());
//     var emptyIndexes = [];
//     for (var i = 0; i < viewModel.cells.length; i++) {
//         if (viewModel.cells[i].data === 0) emptyIndexes.push(i);
//     }
//     var elementIndex = emptyIndexes[getRandomInt(0, emptyIndexes.length - 1)];
//     if (elementIndex >= 0) {
//         viewModel.cells[elementIndex].data = cell.data;
//     }
// }


// // function swap(array, a, b) {
// //     var temp = array[a];
// //     array[a] = array[b];
// //     array[b] = temp;
// // }

// // function transponation(matrix) {
// //     var matrixTransp = [
// //         [],
// //         [],
// //         [],
// //         []
// //     ];
// //     matrix.forEach(function(el) {
// //         for (var i = 0; i < el.length; i++) {
// //             matrixTransp[i].push(el[i]);
// //         }
// //     })
// //     return matrixTransp;
// // }

// // function getData(array) {
// //     var dataArray = array.map(function(el) {
// //         return el.data;
// //     });
// //     return dataArray;
// // }

// // function arrayToMatrix(dataArray) {
// //     var partOfOrigin, matrix = [];
// //     for (var i = 0; i < 15; i += 4) {
// //         partOfOrigin = dataArray.slice(i, i + 4);
// //         matrix.push(partOfOrigin);
// //     }
// //     return matrix;
// // }

// // function shiftReduceRight(matrix) {
// //     matrix.forEach(function(el, index) {
// //         for (var j = el.length - 2; j >= 0; j--) {
// //             if (el[j] === 0) {
// //                 swap(el, j + 1, j);
// //             }
// //             if (el[j + 1] === el[j]) {
// //                 el[j] = el[j + 1] + el[j];
// //                 el[j + 1] = 0;
// //             }
// //         }
// //     })
// //     return matrix;
// // }

// // function shiftReduceLeft(matrix) {
// //     matrix.forEach(function(el, index) {
// //         for (var j = 1; j < el.length; j++) {
// //             if (el[j] === 0) {
// //                 swap(el, j - 1, j);
// //             }
// //             if (el[j - 1] === el[j]) {
// //                 el[j] = el[j - 1] + el[j];
// //                 el[j - 1] = 0;
// //             }
// //         }
// //     });
// //     return matrix;
// // }


// var viewModel = {
//     cells: fillMain(),
//     buttons: ["up", "down", "left", "right"],
//     shift: function(way) {
//         switch (way) {
//             case 0:
//                 //up
//                 // [,,,,,,,,] ---> [[],[],[],[]] + транспонируем матрицу
//                 var matrixTransp = transponation(arrayToMatrix(getData(viewModel.cells)));
//                 matrixTransp = shiftReduceRight(matrixTransp);
//                 //транспонируем обратно
//                 viewModel.cells = fillMain(transponation(matrixTransp).join(",").split(",").map(function(el) {
//                     return parseInt(el, 10);//[[],[],[],[]] ---> [,,,,,,,,]
//                 }));
//                 break;
//             case 1:
//                 //down
//                 //транспонируем матрицу
//                 var matrixTransp = transponation(arrayToMatrix(getData(viewModel.cells)));
//                 matrixTransp = shiftReduceLeft(matrixTransp)
//                 //транспонируем обратно
//                 viewModel.cells = fillMain(transponation(matrixTransp).join(",").split(",").map(function(el) {
//                     return parseInt(el, 10);
//                 }));
//                 break;
//             case 2:
//                 //left
//                 var matrix = arrayToMatrix(getData(viewModel.cells));

//                 matrix = shiftReduceRight(matrix);

//                 viewModel.cells = fillMain(matrix.join(",").split(",").map(function(el) {
//                     return parseInt(el, 10);
//                 }));
//                 break;
//             case 3:
//                 //right
//                 var matrix = arrayToMatrix(getData(viewModel.cells));
//                     matrix = shiftReduceLeft(matrix);
//                 viewModel.cells = fillMain(matrix.join(",").split(",").map(function(el) {
//                     return parseInt(el, 10);
//                 }));
//                 break;
//         }
//     },

//     operate: function(ev, el) {
//         viewModel.shift(el.index);
//         addNewData();
//     }


// }

// rivets.bind(view, {
//     "model": viewModel
// });