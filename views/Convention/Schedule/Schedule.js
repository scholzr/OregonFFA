FFAApp.Schedule = function (params) {

    var viewModel = {
        dataSource: [
              {
                  name: "Day",
                  view: "ScheduleDay",
                  page: ""
              },
              {
                  name: "Sessions",
                  view: "ScheduleDetail",
                  page: "Sessions"
              },
              {
                  name: "Workshops",
                  view: "ScheduleDetail",
                  page: "Workshops"
              },
              {
                  name: "Entertainment",
                  view: "ScheduleDetail",
                  page: "Entertainment"
              },
              {
                  name: "CDE's",
                  view: "ScheduleDetail",
                  page: "CDE's"
              },
              {
                  name: "My Favorites",
                  view: "ScheduleDetail",
                  page: "My Favorites"
              },
              {
                  name: "My Schedule",
                  view: "ScheduleDetail",
                  page: "My Schedule"
              },
              {
                  name: "Happening Now",
                  view: "ScheduleDetail",
                  page: "Happening Now"
              },
        ]
    };

    return viewModel;
};