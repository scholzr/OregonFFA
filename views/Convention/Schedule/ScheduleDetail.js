FFAApp.ScheduleDetail = function (params) {

    var viewModel = {
        category: params.id,
        dataSource: [
            { id: 1, name: "Event 1", date: "3/21/2014", time: "8:00 AM", location: "LaSells Stewart Center", category: params.id },
            { id: 2, name: "Event 2", date: "3/21/2014", time: "8:00 AM", location: "LaSells Stewart Center", category: params.id },
            { id: 3, name: "Event 3", date: "3/21/2014", time: "8:00 AM", location: "LaSells Stewart Center", category: params.id },
            { id: 4, name: "Event 4", date: "3/21/2014", time: "8:30 AM", location: "LaSells Stewart Center", category: params.id },
            { id: 5, name: "Event 5", date: "3/21/2014", time: "8:30 AM", location: "LaSells Stewart Center", category: params.id }
        ]
    };

    return viewModel;
};