//Object.keys() and Object.values()

//Object.keys() is a method that returns an array of a given object's own property names.
//Ojbect.values() is a method that returns an array of a given object's own enumerable property values.
//ex

let spaceJam = {
    toonSquad: {
      human: 'Michael Jordan',
      rabbit1: 'Bugs Bunny',
      rabbit2: 'Lola Bunny',
      duck: 'Daffy Duck',
      tDevil: 'Tasmanian Devil',
      bird: 'Tweety',
      cat: 'Sylvester',
      pig: 'Porky Pig'
    },
    monstars: {
      0: 'Bupkus',
      1: 'Bang',
      2: 'Nawt',
      3: 'Pound',
      4: 'Blanko'
    },
    nbaPlayers: {
      phoenixSuns: 'Charles Barkley',
      newJerseyNets: 'Shawn Bradley',
      newYorkNicks: 'Patrick Ewing',
      charlotteHornets1: 'Larry Johnson',
      charlotteHornets2: 'Muggsy Bogues'
    }
  }
  //console.log(Object.keys(spaceJam.toonSquad).toString());
  //console.log(Object.keys(spaceJam.toonSquad.duck));

  console.log(Object.values(spaceJam.toonSquad))

  //Square Bracket Notation

  let garden = {
      vegetable: 'zucchini',
      flower: 'sun flowers',
      fruit: 'apple',
      water: true,
      sun: true,
      size: 10
  };

  //console.log(garden.vegetable)

  //let x = 'vegetable';
  //console.log(garden.x, garden[x]);

  //let baking = {};
  //baking ['zucchini'] = 'better make some bread'; //creating a key
  //console.log(baking[garden['vegetable']])

  let key = 'water';
  Object.keys(garden).forEach(g => {
    //  console.log(g)
  if (key === g) {
      console.log(garden[key]);
  }
})