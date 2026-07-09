const originalTargets = [
  "Dexter Morgan",
  "Debra Morgan",
  "Harry Morgan",
  "Rita Bennett",
  "Angel Batista",
  "Vince Masuka",
  "Maria LaGuerta",
  "James Doakes",
  "Joey Quinn",
  "Arthur Mitchell",
  "Brian Moser",
  "Miguel Prado",
  "Hannah McKay",
  "Lila West",
  "Lumen Pierce",
  "Jordan Chase",
  "Frank Lundy",
  "Travis Marshall",
  "Oliver Saxon",
  "Brother Sam",
  "Isaak Sirko",
  "Astor Bennett",
  "Cody Bennett",
  "Harrison Morgan",
  "Jamie Batista",
  "Evelyn Vogel",
  "Doris Morgan",
  "Laura Moser",
  "Paul Bennett",
  "Thomas Matthews",
  "Mike Anderson",
  "Sylvia Prado",
  "Lisa Marshall",
  "Niki Walters",
  "Camilla Figg",
  "Stan Liddy",
  "Angie Miller",
  "George King",
  "Jonah Mitchell",
  "Ray Speltzer",
  "Ramon Prado",
  "Oscar Prado",
  "Jacob Elway",
  "Esmee Pascal",
  "Ellen Wolf",
  "Elliot Larson",
  "Sally Mitchell",
  "Rebecca Mitchell",
  "Professor James Gellar",
  "Louis Greene",
  "Nadia",
  "Ryan Chambers",
  "Zach Hamilton",
  "Neil Perry"
];

const newBloodTargets = [
  ...originalTargets,
  "Kurt Caldwell",
  "Angela Bishop",
  "Sergeant Logan",
  "Audrey Bishop",
  "Matt Caldwell",
  "Edward Olsen",
  "Fred Jr.",
  "Tess Silvera",
  "Abraham Brown",
  "Molly Park",
  "Elric Kane",
  "Ethan Williams",
  "Esther",
  "Teddy Reed",
  "Gig",
  "Wiggles the Clown",
  "Zach Wright",
  "Susan",
  "Jasper Hodge",
  "Lily Kosnicki"
];

const resurrectionTargets = [
  ...newBloodTargets,
  "Leon Prater",
  "Al Walker",
  "Blessing Kamara",
  "Charley Brown",
  "Chike",
  "Claudette Wallace",
  "Constance Kamara",
  "Cooper Morris",
  "Elsa Rivera",
  "Gareth Pike",
  "Gareth's twin",
  "Gigi Jones",
  "Joy Kamara",
  "Lance Thomas",
  "Lowell Sloane",
  "Melvin Oliva",
  "Mia LaPierre",
  "Ronald Schmidt"
];

function getUtcDateKey() {
  return new Date().toISOString().slice(0, 10);
}

function hashString(text) {
  let hash = 2166136261;

  for (let i = 0; i < text.length; i += 1) {
    hash ^= text.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }

  return hash >>> 0;
}

function getDailyTarget(pool, dateKey, mode) {
  const seed = `dexterdle:${dateKey}:${mode}:v1`;
  const index = hashString(seed) % pool.length;
  return pool[index];
}

module.exports = function handler(request, response) {
  if (request.method !== "GET") {
    response.setHeader("Allow", "GET");
    return response.status(405).json({
      error: "Method not allowed"
    });
  }

  const dateKey = getUtcDateKey();

  response.setHeader("Content-Type", "application/json; charset=utf-8");
  response.setHeader("X-Content-Type-Options", "nosniff");
  response.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate=60");

  return response.status(200).json({
    date: dateKey,
    timezone: "UTC",
    targets: {
      original: getDailyTarget(originalTargets, dateKey, "original"),
      "new-blood": getDailyTarget(newBloodTargets, dateKey, "new-blood"),
      resurrection: getDailyTarget(resurrectionTargets, dateKey, "resurrection")
    }
  });
};