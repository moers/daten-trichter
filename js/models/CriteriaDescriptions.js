App.CriteriaDescriptions = Ember.Object.create({
  nondisclosure: [
    Ember.Object.create({text: "Geheimhaltungspflicht gegeben", id: 0}),
    Ember.Object.create({text: "Einschränkungen vorhanden, kaum änderbar (z. B: EU-Vorgaben)", id: 1}),
    Ember.Object.create({text: "Einschränkungen vorhanden, änderbar (z. B: Landesgesetzgebung oder Gemeinderat mit 2/3 Mehrheit)", id: 2}),
    Ember.Object.create({text: "Einschränkungen vorhanden, leicht änderbar (z. B: Landesgesetzgebung oder Gemeinderat mit einfacher Mehrheit)", id: 3}),
    Ember.Object.create({text: "Einschränkungen vorhanden, sehr leicht änderbar (z. B: interne Richtlinien, Verwaltungskultur)", id: 4}),
    Ember.Object.create({text: "keine Einschränkungen", id: 5})
  ],
  privacy: [
    Ember.Object.create({text: "Personenbezogene Daten", id: 0}),
    Ember.Object.create({text: "Nicht anonymisierbare Daten, fehlende Zustimmung kaum einholbar", id: 1}),
    Ember.Object.create({text: "Nicht anonymisierbare Daten, fehlende Zustimmung einholbar", id: 2}),
    Ember.Object.create({text: "Zustimmung zur Veröffentlichung vorhanden (z. B. Förderdaten)", id: 3}),
    Ember.Object.create({text: "Anonymisierbare Daten", id: 4}),
    Ember.Object.create({text: "Kein Rückschluss auf Personen oder Unternehmen ableitbar, bzw. keine Verletzung schutzwürdiger Geheimhaltungsinteressen", id: 5})
  ],
  servitude: [
    Ember.Object.create({text: "Fehlendes Nutzungsrecht: Veröffentlichung ist nicht möglich", id: 0}),
    Ember.Object.create({text: "Lizenzkosten fallen an, Genehmigungen sind einzuholen", id: 1}),
    Ember.Object.create({text: "Lizenzkosten fallen an, Genehmigungen sind vorhanden", id: 2}),
    Ember.Object.create({text: "Keine Lizenzkosten, aber Genehmigungen sind einzuholen", id: 3}),
    Ember.Object.create({text: "Keine Lizenzkosten, Genehmigungen vorhanden", id: 4}),
    Ember.Object.create({text: "Alleiniges Nutzungsrecht sichergestellt", id: 5})
  ],
  utility: [
    Ember.Object.create({text: "Der Nutzen ist sehr gering", id: 1}),
    Ember.Object.create({text: "Der Nutzen ist gering", id: 2}),
    Ember.Object.create({text: "Der Nutzen ist durchschnittlich", id: 3}),
    Ember.Object.create({text: "Der Nutzen ist hoch", id: 4}),
    Ember.Object.create({text: "Der Nutzen ist sehr hoch", id: 5})
  ],
  effort: [
    Ember.Object.create({text: "Aufwand nicht vertretbar", id: 0}),
    Ember.Object.create({text: "Der Aufwand ist sehr hoch", id: 1}),
    Ember.Object.create({text: "Der Aufwand ist hoch", id: 2}),
    Ember.Object.create({text: "Der Aufwand ist durchschnittlich", id: 3}),
    Ember.Object.create({text: "Der Aufwand ist gering", id: 4}),
    Ember.Object.create({text: "Der Aufwand ist sehr gering", id: 5})
  ],
  quality: [
    Ember.Object.create({text: "Datenqualität nicht vertretbar", id: 0}),
    Ember.Object.create({text: "Die Datenqualität ist sehr gering", id: 1}),
    Ember.Object.create({text: "Die Datenqualität ist gering", id: 2}),
    Ember.Object.create({text: "Die Datenqualität ist durchschnittlich", id: 3}),
    Ember.Object.create({text: "Die Datenqualität ist hoch", id: 4}),
    Ember.Object.create({text: "Die Datenqualität ist sehr hoch", id: 5})
  ],
  availability: [
    Ember.Object.create({text: "Daten sind elektronisch verfügbar", id: 1}),
    Ember.Object.create({text: "Daten sind in maschinenlesbarem Format verfügbar", id: 2}),
    Ember.Object.create({text: "Daten sind in OGD-Formaten verfügbar", id: 3}),
    Ember.Object.create({text: "Daten sind mit URI / als RDF verfügbar", id: 4}),
    Ember.Object.create({text: "Daten sind als Linked Data verfügbar", id: 5})
  ],
  synergy: [
    Ember.Object.create({text: "Freiwillig bereits publiziert", id: 1}),
    Ember.Object.create({text: "Freiwillig zu publizieren", id: 2}),
    Ember.Object.create({text: "Aufgrund einer veränderbaren Verpflichtung zu publizieren", id: 3}),
    Ember.Object.create({text: "Aufgrund einer Verpflichtung (Gesetz, EU-Vorschrift oder Vertrag) bereits publiziert (z. B: INSPIRE)", id: 4}),
    Ember.Object.create({text: "Aufgrund einer schwer änderbaren Verpflichtung (Gesetz, EU- Vorschrift oder Vertrag) zu publizieren (z. B: INSPIRE)", id: 5})
  ]
});