define(function() {

    function Cell(x, y, data) {
        this.x = x;
        this.y = y;
        this.data = data || 0;
    };

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
        if (Math.random() < 0.2) return 4;
        else return 2;
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    function swap(array, a, b) {
        var temp = array[a];
        array[a] = array[b];
        array[b] = temp;
    }
    
    //[[1,2],[3,4]] --> [[1,3],[2,4]]
    function transponation(matrix) {
        var matrixTransp = [
            [],
            [],
            [],
            []
        ];
        matrix.forEach(function(el) {
            for (var i = 0; i < el.length; i++) {
                matrixTransp[i].push(el[i]);
            }
        });
        return matrixTransp;
    }
    
    //[{},{},{},{}] --> [data,data,data,data]
    function getData(array) {
        var dataArray = array.map(function(el) {
            return el.data;
        });
        return dataArray;
    }
    
    // [,,,,,,,,] --> [[],[],[],[]] 
    function arrayToMatrix(dataArray) {
        var partOfOrigin, matrix = [];
        for (var i = 0; i < 15; i += 4) {
            partOfOrigin = dataArray.slice(i, i + 4);
            matrix.push(partOfOrigin);
        }
        return matrix;
    }

    //[2,2,4,0] --> [0,2,2,4] --> [0,0,0,8]
    function shiftReduceRight(matrix) {
        matrix.forEach(function(el, index) {
            for (var j = el.length - 2; j >= 0; j--) {
                if (el[j] === 0) {
                    swap(el, j + 1, j);
                }
                if (el[j + 1] === el[j]) {
                    el[j] = el[j + 1] + el[j];
                    el[j + 1] = 0;
                }
            }
        });
        return matrix;
    }
    
    //[0,2,2,4] --> [2,2,4,0] --> [8,0,0,0]
    function shiftReduceLeft(matrix) {
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
        return matrix;
    }
    //[[],[],[],[]] ---> [,,,,,,,,]
    function concatenate(array) {
        console.log(array);
        array = array.join(",").split(",").map(function(el) {
            return parseInt(el, 10);
        });
        console.log(array);
        return array;
    }


    return {
        Cell: Cell,
        fillMain: fillMain,
        getRandomCoord: getRandomCoord,
        twoOrFour: twoOrFour,
        getRandomInt: getRandomInt,
        swap: swap,
        transponation: transponation,
        getData: getData,
        arrayToMatrix: arrayToMatrix,
        shiftReduceRight: shiftReduceRight,
        shiftReduceLeft: shiftReduceLeft,
        concatenate: concatenate

    };

});
