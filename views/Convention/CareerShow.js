FFAApp.CareerShow = function (params) {

    var viewModel = {
        searchString: ko.observable(''),
        find: function () {
            viewModel.showSearch(!viewModel.showSearch());
            viewModel.searchString('');
        },
        showSearch: ko.observable(false),
        dataSource: [
              {
                  name: "Capital Press",
                  location: "Booth #1"
              },
              {
                  name: "Oregon Dairy Women",
                  location: "Booth #2"
              },
              {
                  name: "Oregon FFA Alumni",
                  location: "Booth #3"
              },
              {
                  name: "Wilco",
                  location: "Booth #4"
              },
        ]
    };
    return viewModel;
};
ko.computed(function () {
    return viewModel.searchString();
}).extend({
    throttle: 500
}).subscribe(function () {
    viewModel.dataSource.changed.fire();
});