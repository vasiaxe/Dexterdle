const characters = [
  {
    name: "Dexter Morgan",
    gender: "Male",
    role: "Forensic Analyst",
    affiliation: "Miami Metro",
    firstSeason: 1,
    status: "Alive",
    relationToDexter: "Self",
    image: "assets/dexter.jpg"
  },
  {
    name: "Debra Morgan",
    gender: "Female",
    role: "Detective",
    affiliation: "Miami Metro",
    firstSeason: 1,
    status: "Dead",
    relationToDexter: "Sibling",
    image: "assets/debra.jpg"
  },
  {
    name: "Harry Morgan",
    gender: "Male",
    role: "Police Officer",
    affiliation: "Miami Metro",
    firstSeason: 1,
    status: "Dead",
    relationToDexter: "Father",
    image: "assets/harry.jpg"
  },
  {
    name: "Rita Bennett",
    gender: "Female",
    role: "Civilian",
    affiliation: "None",
    firstSeason: 1,
    status: "Dead",
    relationToDexter: "Partner",
    image: "assets/rita.jpg"
  },
  {
    name: "Angel Batista",
    gender: "Male",
    role: "Detective",
    affiliation: "Miami Metro",
    firstSeason: 1,
    status: "Alive",
    relationToDexter: "Coworker",
    image: "assets/batista.jpg"
  },
  {
    name: "Vince Masuka",
    gender: "Male",
    role: "Forensic Analyst",
    affiliation: "Miami Metro",
    firstSeason: 1,
    status: "Alive",
    relationToDexter: "Coworker",
    image: "assets/masuka.jpg"
  },
  {
    name: "Maria LaGuerta",
    gender: "Female",
    role: "Lieutenant",
    affiliation: "Miami Metro",
    firstSeason: 1,
    status: "Dead",
    relationToDexter: "Coworker",
    image: "assets/maria.jpg"
  },
  {
    name: "James Doakes",
    gender: "Male",
    role: "Sergeant",
    affiliation: "Miami Metro",
    firstSeason: 1,
    status: "Dead",
    relationToDexter: "Enemy",
    image: "assets/doakes.jpg"
  },
  {
    name: "Joey Quinn",
    gender: "Male",
    role: "Detective",
    affiliation: "Miami Metro",
    firstSeason: 3,
    status: "Alive",
    relationToDexter: "Coworker",
    image: "assets/joey.jpg"
  },
  {
    name: "Arthur Mitchell",
    gender: "Male",
    role: "Serial Killer",
    affiliation: "None",
    firstSeason: 4,
    status: "Dead",
    relationToDexter: "Enemy",
    image: "assets/arthur.jpg"
  },
  {
    name: "Brian Moser",
    gender: "Male",
    role: "Serial Killer",
    affiliation: "None",
    firstSeason: 1,
    status: "Dead",
    relationToDexter: "Sibling",
    image: "assets/brian.jpg"
  },
  {
    name: "Miguel Prado",
    gender: "Male",
    role: "Serial Killer",
    affiliation: "District Attorney Office",
    firstSeason: 3,
    status: "Dead",
    relationToDexter: "Enemy",
    image: "assets/miguel.jpg"
  },
  {
    name: "Hannah McKay",
    gender: "Female",
    role: "Serial Killer",
    affiliation: "None",
    firstSeason: 7,
    status: "Alive",
    relationToDexter: "Partner",
    image: "assets/hannah.jpg"
  },
  {
    name: "Lila West",
    gender: "Female",
    role: "Serial Killer",
    affiliation: "None",
    firstSeason: 2,
    status: "Dead",
    relationToDexter: "Enemy",
    image: "assets/lila.jpg"
  },
  {
    name: "Lumen Pierce",
    gender: "Female",
    role: "Civilian",
    affiliation: "None",
    firstSeason: 5,
    status: "Alive",
    relationToDexter: "Ally",
    image: "assets/lumen.jpg"
  },
  {
    name: "Jordan Chase",
    gender: "Male",
    role: "Serial Killer",
    affiliation: "None",
    firstSeason: 5,
    status: "Dead",
    relationToDexter: "Enemy",
    image: "assets/jordan.jpg"
  },
{
    name: "Frank Lundy",
    gender: "Male",
    role: "Special Agent",
    affiliation: "FBI",
    firstSeason: 2,
    status: "Dead",
    relationToDexter: "Coworker",
    image: "assets/lundy.jpg"
},
{
    name: "Travis Marshall",
    gender: "Male",
    role: "Serial Killer",
    affiliation: "None",
    firstSeason: 6,
    status: "Dead",
    relationToDexter: "Enemy",
    image: "assets/travis.jpg"
},
{
    name: "Oliver Saxon",
    gender: "Male",
    role: "Serial Killer",
    affiliation: "None",
    firstSeason: 8,
    status: "Dead",
    relationToDexter: "Enemy",
    image: "assets/oliver.jpg"
},
{
    name: "Brother Sam",
    gender: "Male",
    role: "Preacher",
    affiliation: "None",
    firstSeason: 7,
    status: "Dead",
    relationToDexter: "Ally",
    image: "assets/brothersam.jpg"
},
{
    name: "Isaak Sirko",
    gender: "Male",
    role: "Mobster",
    affiliation: "Russian Mafia",
    firstSeason: 7,
    status: "Dead",
    relationToDexter: "Enemy",
    image: "assets/isaak.jpg"
},
{
    name: "Astor Bennett",
    gender: "Female",
    role: "Civilian",
    affiliation: "None",
    firstSeason: 1,
    status: "Alive",
    relationToDexter: "Stepdaughter",
    image: "assets/astor.jpg"
},
{
    name: "Cody Bennett",
    gender: "Male",
    role: "Civilian",
    affiliation: "None",
    firstSeason: 1,
    status: "Alive",
    relationToDexter: "Stepson",
    image: "assets/cody.jpg"
},
{
    name: "Harrison Morgan",
    gender: "Male",
    role: "Civilian",
    affiliation: "None",
    firstSeason: 4,
    status: "Alive",
    relationToDexter: "Son",
    image: "assets/harrison.jpg"
},
{
    name: "Jamie Batista",
    gender: "Female",
    role: "Civilian",
    affiliation: "None",
    firstSeason: 6,
    status: "Alive",
    relationToDexter: "Friend",
    image: "assets/jamie.jpg"
},
{
    name: "Evelyn Vogel",
    gender: "Female",
    role: "Neuropsychiatrist",
    affiliation: "None",
    firstSeason: 8,
    status: "Dead",
    relationToDexter: "Ally",
    image: "assets/evelyn.jpg"
},
{
    name: "Doris Morgan",
    gender: "Female",
    role: "Civilian",
    affiliation: "None",
    firstSeason: 1,
    status: "Dead",
    relationToDexter: "Mother",
    image: "assets/doris.jpg"
},
{
    name: "Laura Moser",
    gender: "Female",
    role: "Civilian",
    affiliation: "None",
    firstSeason: 1,
    status: "Dead",
    relationToDexter: "Mother",
    image: "assets/laura.jpg"
},
{
    name: "Paul Bennett",
    gender: "Male",
    role: "Civilian",
    affiliation: "None",
    firstSeason: 1,
    status: "Dead",
    relationToDexter: "Enemy",
    image: "assets/paul.jpg"
},
{
    name: "Thomas Matthews",
    gender: "Male",
    role: "Deputy Chief",
    affiliation: "Miami Metro",
    firstSeason: 1,
    status: "Alive",
    relationToDexter: "Enemy",
    image: "assets/thomas.jpg"
},
{
    name: "Mike Anderson",
    gender: "Male",
    role: "Civilian",
    affiliation: "Miami Metro",
    firstSeason: 6,
    status: "Dead",
    relationToDexter: "Coworker",
    image: "assets/mike.jpg"
},
{
    name: "Sylvia Prado",
    gender: "Female",
    role: "Civilian",
    affiliation: "None",
    firstSeason: 3,
    status: "Alive",
    relationToDexter: "Friend",
    image: "assets/sylvia.jpg"
},
{
    name: "Lisa Marshall",
    gender: "Female",
    role: "Civilian",
    affiliation: "None",
    firstSeason: 6,
    status: "Dead",
    relationToDexter: "None",
    image: "assets/lisa.jpg"
},
{
    name: "Niki Walters",
    gender: "Female",
    role: "Civilian",
    affiliation: "None",
    firstSeason: 8,
    status: "Alive",
    relationToDexter: "None",
    image: "assets/niki.jpg"
},
{
    name: "Camilla Figg",
    gender: "Female",
    role: "Civilian",
    affiliation: "Miami Metro",
    firstSeason: 1,
    status: "Dead",
    relationToDexter: "Friend",
    image: "assets/camilla.jpg"
},
{
    name: "Stan Liddy",
    gender: "Male",
    role: "Detective",
    affiliation: "None",
    firstSeason: 5,
    status: "Dead",
    relationToDexter: "Enemy",
    image: "assets/liddy.jpg"
},
{
    name: "Angie Miller",
    gender: "Female",
    role: "Sergeant",
    affiliation: "Miami Metro",
    firstSeason: 7,
    status: "Alive",
    relationToDexter: "Coworker",
    image: "assets/angie.jpg"
},
{
    name: "George King",
    gender: "Male",
    role: "Serial Killer",
    affiliation: "None",
    firstSeason: 3,
    status: "Dead",
    relationToDexter: "Enemy",
    image: "assets/george.jpg"
},
{
    name: "Jonah Mitchell",
    gender: "Male",
    role: "Civilian",
    affiliation: "None",
    firstSeason: 4,
    status: "Alive",
    relationToDexter: "None",
    image: "assets/jonah.jpg"
},
{
    name: "Ray Speltzer",
    gender: "Male",
    role: "Serial Killer",
    affiliation: "None",
    firstSeason: 7,
    status: "Dead",
    relationToDexter: "Enemy",
    image: "assets/ray.jpg"
},
{
    name: "Ramon Prado",
    gender: "Male",
    role: "Lieutenant",
    affiliation: "Miami Sherriff's Department",
    firstSeason: 3,
    status: "Alive",
    relationToDexter: "Enemy",
    image: "assets/ramon.jpg"
},  
{
    name: "Oscar Prado",
    gender: "Male",
    role: "Civilian",
    affiliation: "None",
    firstSeason: 3,
    status: "Dead",
    relationToDexter: "None",
    image: "assets/oscar.jpg"
},
{
    name: "Jacob Elway",
    gender: "Male",
    role: "Detective",
    affiliation: "Elway Investigations",
    firstSeason: 8,
    status: "Alive",
    relationToDexter: "None",
    image: "assets/jacob.jpg"
},
{
    name: "Esmee Pascal",
    gender: "Female",
    role: "Lieutenant",
    affiliation: "Miami Metro",
    firstSeason: 1,
    status: "Alive",
    relationToDexter: "Coworker",
    image: "assets/esmee.jpg"
},
{
    name: "Ellen Wolf",
    gender: "Female",
    role: "Lawyer",
    affiliation: "None",
    firstSeason: 3,
    status: "Dead",
    relationToDexter: "None",
    image: "assets/ellen.jpg"

},
{
    name: "Elliot Larson",
    gender: "Male",
    role: "Civilian",
    affiliation: "None",
    firstSeason: 4,
    status: "Alive",
    relationToDexter: "Neighbor",
    image: "assets/elliot.jpg"
},
{
    name: "Sally Mitchell",
    gender: "Female",
    role: "Civilian",
    affiliation: "None",
    firstSeason: 4,
    status: "Dead",
    relationToDexter: "None",
    image: "assets/sally.jpg"
},
{
    name: "Rebecca Mitchell",
    gender: "Female",
    role: "Civilian",
    affiliation: "None",
    firstSeason: 4,
    status: "Dead",
    relationToDexter: "None",
    image: "assets/rebecca.jpg"
},
{
    name: "Professor James Gellar",
    gender: "Male",
    role: "Professor",
    affiliation: "University of Tallahassee",
    firstSeason: 6,
    status: "Dead",
    relationToDexter: "None",
    image: "assets/gellar.jpg"
},
{
    name: "Louis Greene",
    gender: "Male",
    role: "Intern",
    affiliation: "Miami Metro",
    firstSeason: 6,
    status: "Dead",
    relationToDexter: "Enemy",
    image: "assets/louis.jpg"
},
{
    name: "Nadia",
    gender: "Female",
    role: "Civilian",
    affiliation: "None",
    firstSeason: 7,
    status: "Alive",
    relationToDexter: "None",
    image: "assets/nadia.jpg"
},
{
    name: "Ryan Chambers",
    gender: "Female",
    role: "Intern",
    affiliation: "Miami Metro",
    firstSeason: 6,
    status: "Alive",
    relationToDexter: "None",
    image: "assets/ryan.jpg"
},
{
    name: "Zach Hamilton",
    gender: "Male",
    role: "Civilian",
    affiliation: "None",
    firstSeason: 8,
    status: "Dead",
    relationToDexter: "Ally",
    image: "assets/zach.jpg"
},
{
    name: "Neil Perry",
    gender: "Male",
    role: "Criminal",
    affiliation: "None",
    firstSeason: 1,
    status: "Alive",
    relationToDexter: "None",
    image: "assets/neil.jpg"
}
];

const new_blood_characters = [
{
    name: "Kurt Caldwell",
    gender: "Male",
    role: "Serial Killer",
    affiliation: "None",
    firstSeason: 9,
    firstSeasonLabel: "New Blood",
    status: "Dead",
    relationToDexter: "Enemy",
    image: "assets/kurt.jpg"
},
{
    name: "Angela Bishop",
    gender: "Female",
    role: "Chief of Police",
    affiliation: "Iron Lake Police Department",
    firstSeason: 9,
    firstSeasonLabel: "New Blood",
    status: "Alive",
    relationToDexter: "Partner",
    image: "assets/angela.jpg"
},
{
    name: "Sergeant Logan",
    gender: "Male",
    role: "Sergeant",
    affiliation: "Iron Lake Police Department",
    firstSeason: 9,
    firstSeasonLabel: "New Blood",
    status: "Dead",
    relationToDexter: "Friend",
    image: "assets/logan.jpg"
},
{
    name: "Audrey Bishop",
    gender: "Female",
    role: "Civilian",
    affiliation: "None",
    firstSeason: 9,
    firstSeasonLabel: "New Blood",
    status: "Alive",
    relationToDexter: "Friend",
    image: "assets/audrey.jpg"
},
{
    name: "Matt Caldwell",
    gender: "Male",
    role: "Civilian",
    affiliation: "None",
    firstSeason: 9,
    firstSeasonLabel: "New Blood",
    status: "Dead",
    relationToDexter: "Enemy",
    image: "assets/matt.jpg"
},
{
    name: "Edward Olsen",
    gender: "Male",
    role: "Civilian",
    affiliation: "None",
    firstSeason: 9,
    firstSeasonLabel: "New Blood",
    status: "Alive",
    relationToDexter: "None",
    image: "assets/edward.jpg"
},
{
    name: "Fred Jr.",
    gender: "Male",
    role: "Civilian",
    affiliation: "Fred's Fish & Game",
    firstSeason: 9,
    firstSeasonLabel: "New Blood",
    status: "Alive",
    relationToDexter: "Coworker",
    image: "assets/fred.jpg"
},
{
    name: "Tess Silvera",
    gender: "Female",
    role: "Civilian",
    affiliation: "None",
    firstSeason: 9,
    firstSeasonLabel: "New Blood",
    status: "Alive",
    relationToDexter: "Friend",
    image: "assets/tess.jpg"
},
{
    name: "Abraham Brown",
    gender: "Male",
    role: "Civilian",
    affiliation: "None",
    firstSeason: 9,
    firstSeasonLabel: "New Blood",
    status: "Alive",
    relationToDexter: "None",
    image: "assets/abraham.jpg"
},
{
    name: "Molly Park",
    gender: "Female",
    role: "Podcaster",
    affiliation: "None",
    firstSeason: 9,
    firstSeasonLabel: "New Blood",
    status: "Dead",
    relationToDexter: "None",
    image: "assets/molly.jpg"
},
{
    name: "Elric Kane",
    gender: "Male",
    role: "Truck Driver",
    affiliation: "None",
    firstSeason: 9,
    firstSeasonLabel: "New Blood",
    status: "Dead",
    relationToDexter: "Enemy",
    image: "assets/elric.jpg"
},
{
    name: "Ethan Williams",
    gender: "Male",
    role: "Civilian",
    affiliation: "None",
    firstSeason: 9,
    firstSeasonLabel: "New Blood",
    status: "Alive",
    relationToDexter: "None",
    image: "assets/ethan.jpg"
},
{
    name: "Esther",
    gender: "Female",
    role: "Dispatcher",
    affiliation: "Iron Lake Police Department",
    firstSeason: 9,
    firstSeasonLabel: "New Blood",
    status: "Alive",
    relationToDexter: "None",
    image: "assets/esther.jpg"
},
{
    name: "Teddy Reed",
    gender: "Male",
    role: "Police Officer",
    affiliation: "Iron Lake Police Department",
    firstSeason: 9,
    firstSeasonLabel: "New Blood",
    status: "Alive",
    relationToDexter: "None",
    image: "assets/teddy.jpg"
},
{
    name: "Gig",
    gender: "Male",
    role: "Civilian",
    affiliation: "None",
    firstSeason: 9,
    firstSeasonLabel: "New Blood",
    status: "Alive",
    relationToDexter: "None",
    image: "assets/gig.jpg"
},
{
    name: "Wiggles the Clown",
    gender: "Male",
    role: "Serial Killer",
    affiliation: "None",
    firstSeason: 9,
    firstSeasonLabel: "New Blood",
    status: "Dead",
    relationToDexter: "Enemy",
    image: "assets/wiggles.jpg"
},
{
    name: "Zach Wright",
    gender: "Male",
    role: "Civilian",
    affiliation: "None",
    firstSeason: 9,
    firstSeasonLabel: "New Blood",
    status: "Alive",
    relationToDexter: "None",
    image: "assets/wright.jpg"
},
{
    name: "Susan",
    gender: "Female",
    role: "Civilian",
    affiliation: "None",
    firstSeason: 9,
    firstSeasonLabel: "New Blood",
    status: "Alive",
    relationToDexter: "None",
    image: "assets/susan.jpg"
},
{
    name: "Jasper Hodge",
    gender: "Male",
    role: "Drug Dealer",
    affiliation: "None",
    firstSeason: 9,
    firstSeasonLabel: "New Blood",
    status: "Dead",
    relationToDexter: "Enemy",
    image: "assets/jasper.jpg"
},
{
    name: "Lily Kosnicki",
    gender: "Female",
    role: "Civilian",
    affiliation: "None",
    firstSeason: 9,
    firstSeasonLabel: "New Blood",
    status: "Dead",
    relationToDexter: "None",
    image: "assets/lily.jpg"
}

];

const resurrection_characters = [
{
    name: "Leon Prater",
    gender: "Male",
    role: "Billionaire",
    affiliation: "None",
    firstSeason: 10,
    firstSeasonLabel: "Resurrection",
    status: "Dead",
    relationToDexter: "Enemy",
    image: "assets/leon.jpg"
},
{
    name: "Al Walker",
    gender: "Male",
    role: "Serial Killer",
    affiliation: "None",
    firstSeason: 10,
    firstSeasonLabel: "Resurrection",
    status: "Alive",
    relationToDexter: "Enemy",
    image: "assets/al.jpg"
},
{
    name: "Blessing Kamara",
    gender: "Male",
    role: "Civilian",
    affiliation: "None",
    firstSeason: 10,
    firstSeasonLabel: "Resurrection",
    status: "Alive",
    relationToDexter: "Friend",
    image: "assets/blessing.jpg"
},
{
    name: "Charley Brown",
    gender: "Female",
    role: "Head of Security",
    affiliation: "Leon Prater",
    firstSeason: 10,
    firstSeasonLabel: "Resurrection",
    status: "Alive",
    relationToDexter: "Enemy",
    image: "assets/charley.jpg"
},
{
    name: "Chike",
    gender: "Male",
    role: "Civilian",
    affiliation: "None",
    firstSeason: 10,
    firstSeasonLabel: "Resurrection",
    status: "Alive",
    relationToDexter: "None",
    image: "assets/chike.jpg"
},
{
    name: "Claudette Wallace",
    gender: "Female",
    role: "Detective",
    affiliation: "New York Police Department",
    firstSeason: 10,
    firstSeasonLabel: "Resurrection",
    status: "Alive",
    relationToDexter: "Enemy",
    image: "assets/claudette.jpg"
},
{
    name: "Constance Kamara",
    gender: "Female",
    role: "Civilian",
    affiliation: "None",
    firstSeason: 10,
    firstSeasonLabel: "Resurrection",
    status: "Alive",
    relationToDexter: "Friend",
    image: "assets/constance.jpg"
},
{
    name: "Cooper Morris",
    gender: "Male",
    role: "Serial Killer",
    affiliation: "None",
    firstSeason: 10,
    firstSeasonLabel: "Resurrection",
    status: "Dead",
    relationToDexter: "None",
    image: "assets/cooper.jpg"
},
{
    name: "Elsa Rivera",
    gender: "Male",
    role: "Civilian",
    affiliation: "None",
    firstSeason: 10,
    firstSeasonLabel: "Resurrection",
    status: "Alive",
    relationToDexter: "None",
    image: "assets/elsa.jpg"
},
{
    name: "Gareth Pike",
    gender: "Male",
    role: "Serial Killer",
    affiliation: "None",
    firstSeason: 10,
    firstSeasonLabel: "Resurrection",
    status: "Dead",
    relationToDexter: "Enemy",
    image: "assets/gareth.jpg"
},
{
    name: "Gareth's twin",
    gender: "Male",
    role: "Serial Killer",
    affiliation: "None",
    firstSeason: 10,
    firstSeasonLabel: "Resurrection",
    status: "Dead",
    relationToDexter: "Enemy",
    image: "assets/twin.jpg"
},
{
    name: "Gigi Jones",
    gender: "Female",
    role: "Civilian",
    affiliation: "None",
    firstSeason: 10,
    firstSeasonLabel: "Resurrection",
    status: "Alive",
    relationToDexter: "None",
    image: "assets/gigi.jpg"
},
{
    name: "Joy Kamara",
    gender: "Female",
    role: "Civilian",
    affiliation: "None",
    firstSeason: 10,
    firstSeasonLabel: "Resurrection",
    status: "Alive",
    relationToDexter: "Friend",
    image: "assets/joy.jpg"
},
{
    name: "Lance Thomas",
    gender: "Male",
    role: "Civilian",
    affiliation: "None",
    firstSeason: 10,
    firstSeasonLabel: "Resurrection",
    status: "Alive",
    relationToDexter: "None",
    image: "assets/lance.jpg"
},
{
    name: "Lowell Sloane",
    gender: "Male",
    role: "Serial Killer",
    affiliation: "None",
    firstSeason: 10,
    firstSeasonLabel: "Resurrection",
    status: "Dead",
    relationToDexter: "Enemy",
    image: "assets/lowell.jpg"
},
{
    name: "Melvin Oliva",
    gender: "Female",
    role: "Detective",
    affiliation: "New York Police Department",
    firstSeason: 10,
    firstSeasonLabel: "Resurrection",
    status: "Alive",
    relationToDexter: "Enemy",
    image: "assets/melvin.jpg"
},
{
    name: "Mia LaPierre",
    gender: "Female",
    role: "Serial Killer",
    affiliation: "None",
    firstSeason: 10,
    firstSeasonLabel: "Resurrection",
    status: "Dead",
    relationToDexter: "Enemy",
    image: "assets/mia.jpg"
},
{
    name: "Ronald Schmidt",
    gender: "Male",
    role: "Serial Killer",
    affiliation: "None",
    firstSeason: 10,
    firstSeasonLabel: "Resurrection",
    status: "Dead",
    relationToDexter: "Enemy",
    image: "assets/ronald.jpg"
}
];