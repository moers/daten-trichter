App.Data = DS.Model.extend({
  name: DS.attr('string'),
  primarySource: DS.attr('boolean'),
  dataProvider: DS.attr('string'),
  contactPerson: DS.attr('string'),
  releaseData: DS.attr('string'),
  
  url: DS.attr('string'),
  published: DS.attr('string'),
  
  nondisclosureCriteria: DS.attr('number'),
  privacyCriteria: DS.attr('number'),
  servitudeCriteria: DS.attr('number'),
  utilityCriteria: DS.attr('number'),
  effortCriteria: DS.attr('number'),
  qualityCriteria: DS.attr('number'),
  availabilityCriteria: DS.attr('number'),
  synergyCriteria: DS.attr('number'),
  
  nondisclosureEvaluation: DS.attr('number', {defaultValue: 2}),
  privacyEvaluation: DS.attr('number', {defaultValue: 2}),
  servitudeEvaluation: DS.attr('number', {defaultValue: 2}),
  utilityEvaluation: DS.attr('number', {defaultValue: 2}),
  effortEvaluation: DS.attr('number', {defaultValue: 2}),
  qualityEvaluation: DS.attr('number', {defaultValue: 2}),
  availabilityEvaluation: DS.attr('number', {defaultValue: 2}),
  synergyEvaluation: DS.attr('number', {defaultValue: 2}),

  nondisclosure: function() {
    return calculatePoints(this, "nondisclosure")
  }.property("nondisclosureCriteria", "nondisclosureEvaluation"),
  privacy: function() {
    return calculatePoints(this, "privacy")
  }.property("privacyCriteria", "privacyEvaluation"),
  servitude: function() {
    return calculatePoints(this, "servitude")
  }.property("servitudeCriteria", "servitudeEvaluation"),
  utility: function() {
    return calculatePoints(this, "utility")
  }.property("utilityCriteria", "utilityEvaluation"),
  effort: function() {
    return calculatePoints(this, "effort")
  }.property("effortCriteria", "effortEvaluation"),
  quality: function() {
    return calculatePoints(this, "quality")
  }.property("qualityCriteria", "qualityEvaluation"),
  availability: function() {
    return calculatePoints(this, "availability")
  }.property("availabilityCriteria", "availabilityEvaluation"),
  synergy: function() {
    return calculatePoints(this, "synergy")
  }.property("synergyCriteria", "synergyEvaluation"),
  
  sum: function() {
    var nondisclosure = this.get("nondisclosure"),
        privacy = this.get("privacy"),
        servitude = this.get("servitude"),
        utility = this.get("utility"),
        effort = this.get("effort"),
        quality = this.get("quality"),
        availability = this.get("availability"),
        synergy = this.get("synergy"),
        sum = 0;
        
    if(
      nondisclosure == 0 ||
      privacy == 0 ||
      servitude == 0 ||
      utility == 0 ||
      effort == 0 ||
      quality == 0 ||
      availability == 0 ||
      synergy == 0
    ) {
      sum = 0
    } else {
      sum = nondisclosure + privacy + servitude + utility + effort + quality + availability + synergy;
    }
    
    return sum;
  }.property("nondisclosure", "privacy", "servitude", "utility", "utility", "effort", "quality", "availability", "synergy")
});