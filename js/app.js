requirejs.config({
    paths: {
        rivets: 'https://cdnjs.cloudflare.com/ajax/libs/rivets/0.8.1/rivets.min',
        sightglass: 'https://cdn.rawgit.com/mikeric/sightglass/master/index'
    },
    shim: {}
});

define(['rivets', './utils'], function(rivets, utils) {
    //defining it here cause require
//binder -- sets start point
    rivets.binders.startvalue = function(element, value) {
        addNewData();
    };
    rivets.binders.setcolor = function(el, value) {
        el.style.backgroundColor =  "hsl(" + value*25 + ", 60%, 70%)";
    };
//formatter -- hides zeros    
    rivets.formatters.hidezero = function(value) {
        if (value !== 0)
            return value;
    };

    var view = document.querySelector("#view");

    function addNewData() {
        var cell = new utils.Cell(utils.getRandomCoord(), utils.getRandomCoord(), utils.twoOrFour()),
            emptyIndexes = [];
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
                    matrixTransp = utils.shiftReduceLeft(matrixTransp);
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