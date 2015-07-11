requirejs.config({
    paths: {
        rivets: 'https://cdnjs.cloudflare.com/ajax/libs/rivets/0.8.1/rivets.min',
        sightglass: 'https://cdn.rawgit.com/mikeric/sightglass/master/index'
    },
    shim: {}
});

define(['rivets', './utils'], function(rivets, utils) {

    var view = document.querySelector("#view"),
        viewModel = {
        cells: utils.fillCells(),
        buttons: ["up", "down", "left", "right"],
        operate: function(ev, el) {
            viewModel.cells = utils.shift(el.index, viewModel.cells);
            utils.addNewCell(viewModel.cells);
        }
    }

    rivets.bind(view, {
        "model": viewModel
    });

})