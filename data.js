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
}
];