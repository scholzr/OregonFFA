FFAApp.CareersList = function (params) {

    var viewModel = {
        searchString: ko.observable(''),
        find: function () {
            viewModel.showSearch(!viewModel.showSearch());
            viewModel.searchString('');
        },
        showSearch: ko.observable(false),
        dataSource: [
              {
                  name: "Job title",
                  company: "Capital Press",
                  category: "Communications",
                  location: "Salem, OR",
                  region: "NW Oregon",
                  openDate: "6/15/2013",
                  closeDate: "7/1/2013"
              },
              {
                  name: "Job #2",
                  company: "Wilco",
                  category: "Retail",
                  location: "Canby, OR",
                  region: "NW Oregon",
                  openDate: "6/15/2013",
                  closeDate: "7/1/2013"
              },
              {
                  name: "Job #3",
                  company: "Les Schwab Tires",
                  category: "Retail",
                  location: "Prineville, OR",
                  region: "Central Oregon",
                  openDate: "6/15/2013",
                  closeDate: "7/1/2013"
              },
              {
                  name: "Job #4",
                  company: "Company",
                  category: "Production",
                  location: "Pendleton, OR",
                  region: "Eastern Oregon",
                  openDate: "6/15/2013",
                  closeDate: "7/1/2013"
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