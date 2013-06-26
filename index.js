window.FFAApp = window.FFAApp || {};

$(function() {
    FFAApp.app = new DevExpress.framework.html.HtmlApplication({
        ns: FFAApp,
        defaultLayout: FFAApp.config.defaultLayout,
        navigation: FFAApp.config.navigation
    });
    FFAApp.app.router.register(":view/:id", { view: "home", id: undefined });

    FFAApp.app.navigate();

});
