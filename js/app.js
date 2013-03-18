function calculatePoints(scope, name) {
  var criteria = scope.get(name + "Criteria") || 0;
  var evaluation = scope.get(name + "Evaluation") || 0;
  return criteria * evaluation;
}

window.App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

// ===============================
// Routes
// ===============================

App.Router.map(function() {
  this.resource("data", function() {
    this.route("new");
    this.route("edit", {path: "edit/:data_id"})
    this.route("show", {path: ":data_id"})
    this.route("export")
  })
})

App.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('data');
  }
});

App.DataIndexRoute = Ember.Route.extend({
  model: function() {
    return App.Data.find()
  }
})

App.DataNewRoute = Ember.Route.extend({
  model: function(params) {
    return App.Data.createRecord()
  }
})

// ===============================
// Models
// ===============================

App.store = DS.Store.create({
  revision: 12,
  adapter: "App.LSAdapter"
});


App.LSAdapter = DS.LSAdapter.extend({
  namespace: 'Datamonitoring'
});

// ===============================
// Controllers
// ===============================

App.DataIndexController = Ember.Controller.extend({
  delete: function(item) {
    if(confirm("Element wirklich löschen?")) {
      item.deleteRecord();
      item.get("store").commit();
    }
  },
  
  new: function(router) {
    router.transitionToRoute('data.new')
  }
})

App.DataEditController = Ember.Controller.extend({
  save: function(router, event) {
    App.store.commit();
    router.transitionToRoute('data')
  }
})

App.DataNewController = App.DataEditController.extend({})

App.DataExportController = Ember.Controller.extend({
  exportJson: function() {
    var text = localStorage.Datamonitoring;
    text = "data:application/json," + encodeURIComponent(text);
    
    window.location = text;
  },
  importJson: function() {
    if(confirm("Alle Daten werden gelöscht und überschrieben!")) {
      var text = prompt("Hier die Datei einfügen:", "")
      text = JSON.parse(text);
      
      localStorage.Datamonitoring = JSON.stringify(text);
    }
  }
})

// ===============================
// Views
// ===============================

App.DataIndexView = Ember.View.extend({
  layoutName: "index"
})

App.DataShowView = Ember.View.extend({
  layoutName: "index"
})

App.DataEditView = Ember.View.extend({
  layoutName: "index"
})

App.DataNewView = Ember.View.extend({
  layoutName: "index",
  templateName: "data/edit"
})

App.DataExportView = Ember.View.extend({
  layoutName: "index"
})