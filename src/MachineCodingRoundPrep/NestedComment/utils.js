export function generateSentence() {
  var nouns = ["girl", "boy", "man", "woman", "animal", "kitty", "dog"];
  var adjectives = ["giant", "tiny", "funny", "sad", "strange", "cute", "dumb"];
  var verbs = [
    "jumping",
    "running",
    "exploding",
    "dying",
    "laughing",
    "awesome",
    "stupid",
  ];

  function randIndex() {
    var randIndex = Math.floor(Math.random() * 7);
    var noun = nouns[randIndex];
    var adjective = adjectives[randIndex];
    var verb = verbs[randIndex];
    var result = "The " + adjective + " " + noun + " is " + verb + ".";

    return result;
  }
  return randIndex();
}

export function generateName() {
  let firstname = [
    "Kai",
    "Eliana",
    "Jaden",
    "Ezra",
    "Luca",
    "Rowan",
    "Nova",
    "Amara",
    "Aaliyah",
    "Finn",
  ];
  let lastname = [
    "Smith",
    "Johnson",
    "Williams",
    "Brown",
    "Jones",
    "Garcia",
    "Miller",
    "Davis",
    "Martinez",
    "Wilson",
  ];
  let rand_first = Math.floor(Math.random() * firstname.length);
  let rand_last = Math.floor(Math.random() * lastname.length);
  return firstname[rand_first] + " " + lastname[rand_last];
}
