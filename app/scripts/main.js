// --------------- Layout ----------------------

var Layout = Marionette.LayoutView.extend({
  template: "#app-skeleton",

  className: "app-layout",

  regions: {
    header: "#header",

    content: "#content",

    footer: "#footer"
  }
});

// -------------- ItemView --------------------

var HomeView = Marionette.ItemView.extend({
  template: "#home-template"
});

// ------------- Controller -------------------

var Controller = Marionette.Controller.extend({
  init: function() {
    var homeView = new HomeView();

    App.Layout.content.show( homeView );
  }
});

// --------------- Router ---------------------

var Router = Marionette.AppRouter.extend({
  controller: new Controller(),

  appRoutes: {
    "index" : "init",
    "" : "init",
    "/" : "init"
  }
});

// ----------------- App ----------------------

var App = new Marionette.Application();

App.addInitializer(function() {
  App.routes = new Router();

  App.addRegions({
    MainRegion: "#main-region"
  });

  App.Layout = new Layout();

  App.MainRegion.show(App.Layout);
});

App.on("start", function() {
  Backbone.history.start({ trigger: true });
});

App.start();
