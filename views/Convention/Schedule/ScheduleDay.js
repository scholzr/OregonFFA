FFAApp.ScheduleDay = function (params) {

    var viewModel = {
        dataSource: [
              {
                  name: "Friday",
                  page: "#ScheduleDetail/3.21.2014"
              },
              {
                  name: "Saturday",
                  page: "#ScheduleDetail/3.22.2014"
              },
              {
                  name: "Sunday",
                  page: "#ScheduleDetail/3.23.2014"
              },
              {
                  name: "Monday",
                  page: "#ScheduleDetail/3.24.2014"
              },
        ]
    };

    return viewModel;
};