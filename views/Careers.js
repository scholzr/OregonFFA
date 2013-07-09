FFAApp.Careers = function (params) {

    var viewModel = {
        dataSource: [
              {
                  name: "Browse all jobs",
                  view: "#CareersList",
              },
              {
                  name: "Jobs by category",
                  view: "#CareersCategory",
              },
              {
                  name: "Jobs by company",
                  view: "ScheduleDay",
              },
              {
                  name: "Jobs by location",
                  view: "ScheduleDay",
              },
        ]
    };

    return viewModel;
};