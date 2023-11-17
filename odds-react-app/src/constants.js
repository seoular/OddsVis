const Positions = {
  QB: 0,
  RB: 1,
  WR: 2,
  TE: 3,
  K: 4
 };

 export const slotcodes = {
  0: 'QB',   // Quarterback
  2: 'RB',   // Running Back
  4: 'WR',   // Wide Receiver
  16: 'DST',  // Defense/Special Teams
  6: 'TE',
  23: 'FLEX',
  17: 'K',
  20: 'BENCH'

  // Add more mappings as needed based on your specific data structure
};
 export const PlayerPosMap = new Map([
  ["Josh Allen", Positions.QB],
  ["Lamar Jackson", Positions.QB],
  ["Justin Herbert", Positions.QB],
  ["Sam Howell", Positions.QB],
  ["Geno Smith", Positions.QB],
  ["Trevor Lawrence", Positions.QB],
  ["Joe Burrow", Positions.QB],
  ["Dak Prescott", Positions.QB],
  ["Jared Goff", Positions.QB],
  ["Brock Purdy", Positions.QB],
  ["Baker Mayfield", Positions.QB],
  ["Kyler Murray", Positions.QB],
  ["Jordan Love", Positions.QB],
  ["Christian McCaffrey", Positions.RB],
  ["Will Levis", Positions.QB],
  ["C.J. Stroud", Positions.QB],
  ["Zach Wilson", Positions.QB],
  ["Taylor Heinicke", Positions.QB],
  ["Mac Jones", Positions.QB],
  ["Stefon Diggs", Positions.WR],
  ["Gardner Minshew II", Positions.QB],
  ["Kenny Pickett", Positions.QB],
  ["Austin Ekeler", Positions.RB],
  ["Aidan O'Connell", Positions.QB],
  ["Keenan Allen", Positions.WR],
  ["Tony Pollard", Positions.RB],
  ["CeeDee Lamb", Positions.WR],
  ["Jonathan Taylor", Positions.RB],
  ["Breece Hall", Positions.RB],
  ["Saquon Barkley", Positions.RB],
  ["Rachaad White", Positions.RB],
  ["Aaron Jones", Positions.RB],
  ["Amon-Ra St. Brown", Positions.WR],
  ["Josh Jacobs", Positions.RB],
  ["Garrett Wilson", Positions.WR],
  ["Michael Pittman Jr.", Positions.WR],
  ["Rhamondre Stevenson", Positions.RB],
  ["Alvin Kamara", Positions.RB],
  ["Derrick Henry", Positions.RB],
  ["Deshaun Watson", Positions.QB],
  ["James Cook", Positions.RB],
  ["Kenneth Walker III", Positions.RB],
  ["Terry McLaurin", Positions.WR],
  ["Tyler Lockett", Positions.WR],
  ["Brandon Aiyuk ", Positions.WR],
  ["Diontae Johnson", Positions.WR],
  ["DeAndre Hopkins", Positions.WR],
  ["Mike Evans", Positions.WR],
  ["Travis Etienne Jr.", Positions.RB],
  ["Najee Harris", Positions.RB],
  ["Chris Godwin", Positions.WR],
  ["Deebo Samuel", Positions.WR],
  ["Dalton Kincaid", Positions.TE],
  ["Calvin Ridley", Positions.WR],
  ["Jahmyr Gibbs", Positions.RB],
  ["David Montgomery", Positions.RB],
  ["Javonte Williams", Positions.RB],
  ["Christian Kirk", Positions.WR],
  ["Bijan Robinson", Positions.RB],
  ["DK Metcalf", Positions.WR],
  ["Jaylen Warren", Positions.RB],
  ["Tommy DeVito", Positions.QB],
  ["Evan Engram", Positions.TE],
  ["Mark Andrews", Positions.TE],
  ["Sam LaPorta", Positions.TE],
  ["Amari Cooper", Positions.WR],
  ["Demario Douglas", Positions.WR],
  ["Jerome Ford", Positions.RB],
  ["George Pickens", Positions.WR],
  ["Zay Flowers", Positions.WR],
  ["Jahan Dotson", Positions.WR],
  ["George Kittle ", Positions.TE],
  ["Davante Adams", Positions.WR],
  ["Jake Ferguson", Positions.TE],
  ["Marquise Brown", Positions.WR],
  ["Jaxon Smith-Njigba", Positions.WR],
  ["Gus Edwards", Positions.RB],
  ["Khalil Shakir", Positions.WR],
  ["Christian Watson", Positions.WR],
  ["Jerry Jeudy", Positions.WR],
  ["Romeo Doubs", Positions.WR],
  ["Joe Mixon", Positions.RB],
  ["Brandin Cooks", Positions.WR],
  ["Logan Thomas", Positions.TE],
  ["Tyjae Spears", Positions.RB],
  ["Drake London", Positions.WR],
  ["Courtland Sutton", Positions.WR],
  ["Ezekiel Elliott", Positions.RB],
  ["Trey McBride", Positions.TE],
  ["Brian Robinson Jr.", Positions.RB],
  ["David Njoku", Positions.TE],
  ["Hunter Henry", Positions.TE],
  ["Devin Singletary", Positions.RB],
  ["Cade Otton", Positions.TE],
  ["Quentin Johnston", Positions.WR],
  ["Jakobi Meyers", Positions.WR],
  ["Wan'Dale Robinson", Positions.WR],
  ["Elijah Moore", Positions.WR],
  ["Zach Charbonnet", Positions.RB],
  ["Tank Dell", Positions.WR],
  ["Gerald Everett", Positions.TE],
  ["Allen Lazard", Positions.WR],
  ["Josh Reynolds", Positions.WR],
  ["Kyle Pitts", Positions.TE],
  ["Jayden Reed", Positions.WR],
  ["Michael Wilson", Positions.WR],
  ["James Conner", Positions.RB],
  ["Gabe Davis", Positions.WR],
  ["Tyler Conklin", Positions.TE],
  ["Dalton Schultz", Positions.TE],
  ["Zack Moss", Positions.RB],
  ["Kareem Hunt", Positions.RB],
  ["Luke Musgrave", Positions.TE],
  ["Chig Okonkwo", Positions.TE],
  ["Darius Slayton", Positions.WR],
  ["Mike Gesicki", Positions.TE],
  ["Connor Heyward", Positions.TE],
  ["Taysom Hill", Positions.TE],
  ["Kyle Philips", Positions.WR],
  ["Joshua Kelley", Positions.RB],
  ["JuJu Smith-Schuster", Positions.WR],
  ["Odell Beckham Jr.", Positions.WR],
  ["Nick Westbrook-Ikhine", Positions.WR],
  ["Noah Brown", Positions.WR],
  ["Joshua Dobbs", Positions.QB],
  ["Jonnu Smith", Positions.TE],
  ["Antonio Gibson", Positions.RB],
  ["AJ Dillon", Positions.RB],
  ["Tyler Allgeier", Positions.RB],
  ["Trey Palmer", Positions.TE],
  ["Jameson Williams", Positions.WR],
  ["Rico Dowdle", Positions.RB],
  ["Jauan Jennings", Positions.WR],
  ["Rashod Bateman", Positions.WR],
  ["Jalen Reagor", Positions.WR],
  ["Keaton Mitchell", Positions.RB],
  ["Robert Woods", Positions.WR],
  ["Jalen Guyton", Positions.WR],
  ["Noah Fant", Positions.TE],
  ["Travis Etienne", Positions.RB],
  ["Daniel Bellinger", Positions.TE],
  ["Jalin Hyatt", Positions.WR],
  ["Justin Jefferson", Positions.WR],
  ["Amon-Ra St.Brown", Positions.WR],
  ["Samaje Perine", Positions.RB],
  ["Donald Parham Jr.", Positions.TE],
  ["Brian Robinson", Positions.RB],
  ["Dontayvion Wicks", Positions.WR],
  ["D.K Metcalf", Positions.WR],
  ["Alexander Mattison", Positions.RB],
  ["Gabriel Davis", Positions.WR],
  ["Kalif Raymond", Positions.WR],
  ["Chris Olave", Positions.WR],
  ["Jordan Addison", Positions.WR],
  ["K.J Osborn", Positions.WR],
  ["T.J. Hockenson", Positions.TE],
  ["Michael Thomas", Positions.WR],
  ["Jaleel McLaughlin", Positions.RB],
  ["A.J Dillon", Positions.RB],
  ["Alec Pierce", Positions.WR],
  ["Josh Downs", Positions.WR],
  ["Michael Gallup", Positions.WR],
  ["Latavius Murray", Positions.RB],
  ["Donald Parham", Positions.TE],
  ["Jamal Agnew", Positions.WR],
  ["Tank Bigsby", Positions.WR],
  ["Zay Jones", Positions.WR],
  ["Allen Robinson", Positions.WR],
  ["Jamaal Williams", Positions.RB],
  ["Juwan Johnson", Positions.WR],
  ["Chris Moore", Positions.WR],
  ["Curtis Samuel", Positions.WR],
  ["Kylen Granson", Positions.TE],
  ["Justice Hill", Positions.RB],
  ["Odell Beckham", Positions.WR],
  ["Jake Bobo", Positions.WR],
  ["Rashid Shaheed", Positions.WR],
  ["Elijah Mitchell", Positions.RB],
  ["Chigoziem Okonkwo", Positions.WR],
  ["Marvin Mims", Positions.WR],
  ["Brock Wright", Positions.TE],
  ["Gardner Minshew", Positions.QB],
  ["Brandon Powell", Positions.WR],
  ["Ty Chandler", Positions.RB],
  ["Chase Edmonds", Positions.RB],
  ["Donovan Peoples-Jones", Positions.WR],
  ["Xavier Gipson", Positions.WR],
  ["Michael Mayer", Positions.TE],
  ["Calvin Austin III", Positions.WR],
  ["Jordan Mason", Positions.RB],
  ["Andrew Ogletree", Positions.TE],
  ["Isaiah McKenzie", Positions.RB],
  ["Nelson Agholor", Positions.WR],
  ["Foster Moreau", Positions.TE],
  ["Trishton Jackson", Positions.WR],
  ["Antoine Green", Positions.WR],
  ["Craig Reynolds", Positions.RB],
  ["Devine Ozigbo", Positions.RB],
  ["Jalen Tolbert", Positions.RB],
  ["Kavontae Turpin", Positions.RB],
  ["Colby Parkinson", Positions.TE],
  ["DeeJay Dallas", Positions.RB],
  ["Jamison Crowder", Positions.WR],
  ["Deonte Harty", Positions.WR],
  ["Quintin Morris", Positions.TE],
  ["Adam Trautman", Positions.TE],
  ["Russell Wilson", Positions.QB],
  ["Harrison Bryant", Positions.WR],
  ["Tim Jones", Positions.WR],
  ["Ray-Ray McCloud", Positions.WR],
  ["Dalvin Cook", Positions.RB],
  ["Michael Carter", Positions.RB],
  ["Josh Oliver", Positions.TE],
  ["Ja'Marr Chase", Positions.WR],
  ["Tyler Boyd", Positions.WR], 
  ["Trenton Irwin", Positions.WR],
  ["A.J. Brown ", Positions.WR],
  ["DeVonta Smith", Positions.WR],
  ["Rashee Rice", Positions.WR],
  // need to add chiefs and dolphins players / week 10 byes


 ]);
 // [
 //   "Deven Thompkins",
 //   0.8
 // ],
 // [
 //   "Derius Davis",
 //   0.8
 // ],
 // [
 //   "Nick Vannett",
 //   0.8
 // ],
 // [
 //   "Matt Breida",
 //   0.8
 // ],
 // [
 //   "Dyami Brown",
 //   0.8
 // ],
 // [
 //   "Lil'Jordan Humphrey",
 //   0.8
 // ],
 // [
 //   "Juwann Winfree",
 //   0.75
 // ],
 // [
 //   "Mo Alie-Cox",
 //   0.75
 // ],
 // [
 //   "Marquise Goodwin",
 //   0.75
 // ],
 // [
 //   "Pierre Strong",
 //   0.75
 // ],
 // [
 //   "Luke Schoonmaker",
 //   0.75
 // ],
 // [
 //   "Austin Hooper",
 //   0.75
 // ],
 // [
 //   "Hunter Renfrow",
 //   0.75
 // ],
 // [
 //   "Trent Sherfield",
 //   0.75
 // ],
 // [
 //   "Tyquan Thornton",
 //   0.7058823529411764
 // ],
 // [
 //   "Will Dissly",
 //   0.7058823529411764
 // ],
 // [
 //   "Jalen Nailor",
 //   0.6666666666666666
 // ],
 // [
 //   "Kyle Juszczyk",
 //   0.6666666666666666
 // ],
 // [
 //   "Ronnie Bell",
 //   0.6666666666666666
 // ],
 // [
 //   "Ke'Shawn Vaughn",
 //   0.6666666666666666
 // ],
 // [
 //   "Payne Durham",
 //   0.6666666666666666
 // ],
 // [
 //   "Rakim Jarrett",
 //   0.6666666666666666
 // ],
 // [
 //   "David Bell",
 //   0.631578947368421
 // ],
 // [
 //   "Simi Fehoko",
 //   0.631578947368421
 // ],
 // [
 //   "Stone Smartt",
 //   0.631578947368421
 // ],
 // [
 //   "Chris Rodriguez Jr.",
 //   0.631578947368421
 // ],
 // [
 //   "Josiah Deguara",
 //   0.6000000000000001
 // ],
 // [
 //   "Derek Carr",
 //   0.6000000000000001
 // ],
 // [
 //   "Kendre Miller",
 //   0.6000000000000001
 // ],
 // [
 //   "Isaiah Hodgins",
 //   0.6000000000000001
 // ],
 // [
 //   "C.J Uzomah",
 //   0.6000000000000001
 // ],
 // [
 //   "Ameer Abdullah",
 //   0.6000000000000001
 // ],
 // [
 //   "Tre Tucker",
 //   0.6000000000000001
 // ],
 // [
 //   "Pharaoh Brown",
 //   0.5454545454545454
 // ],
 // [
 //   "Ty Montgomery",
 //   0.5454545454545454
 // ],
 // [
 //   "Darnell Washington",
 //   0.5454545454545454
 // ],
 // [
 //   "Brenton Strange",
 //   0.5454545454545454
 // ],
 // [
 //   "Luke Farrell",
 //   0.5454545454545454
 // ],
 // [
 //   "Cedric Tillman",
 //   0.5
 // ],
 // [
 //   "James Proche",
 //   0.5
 // ],
 // [
 //   "N'Keal Harry",
 //   0.5
 // ],
 // [
 //   "James Mitchell",
 //   0.5
 // ],
 // [
 //   "Hunter Luepke",
 //   0.5
 // ],
 // [
 //   "Sean McKeon",
 //   0.5
 // ],
 // [
 //   "Byron Pringle",
 //   0.5
 // ],
 // [
 //   "Cole Turner",
 //   0.5
 // ],
 // [
 //   "John Bates",
 //   0.5
 // ],
 // [
 //   "Reggie Gilliam",
 //   0.5
 // ],
 // [
 //   "Chris Manhertz",
 //   0.5
 // ],
 // [
 //   "Malik Heath",
 //   0.46153846153846156
 // ],
 // [
 //   "Tucker Kraft",
 //   0.46153846153846156
 // ],
 // [
 //   "Charlie Woerner",
 //   0.46153846153846156
 // ],
 // [
 //   "Deandre Carter",
 //   0.46153846153846156
 // ],
 // [
 //   "Will Mallory",
 //   0.4
 // ],
 // [
 //   "Devin Duvernay",
 //   0.4
 // ],
 // [
 //   "Isaiah Likely",
 //   0.4
 // ],
 // [
 //   "Patrick Ricard",
 //   0.4
 // ],
 // [
 //   "Jordan Akins",
 //   0.4
 // ],
 // [
 //   "Lynn Bowden Jr.",
 //   0.4
 // ],
 // [
 //   "C.J Ham",
 //   0.3529411764705882
 // ],
 // [
 //   "Johnny Mundt",
 //   0.3529411764705882
 // ],
 // [
 //   "Ko Kieft",
 //   0.3529411764705882
 // ],
 // [
 //   "Trevon Wesco",
 //   0.3529411764705882
 // ],
 // [
 //   "Sterling Shepard",
 //   0.3529411764705882
 // ],
 // [
 //   "Michael Burton",
 //   0.3529411764705882
 // ],
 // [
 //   "Jeremy Ruckert",
 //   0.3157894736842105
 // ],
 // [
 //   "Malik Taylor",
 //   0.3157894736842105
 // ],
 // [
 //   "Jakob Johnson",
 //   0.3157894736842105
 // ],
 // [
 //   "Zamir White",
 //   0.3157894736842105
 // ],
 // [
 //   "Lawrence Cager",
 //   0.2857142857142857
 // ],
 // [
 //   "Parris Campbell",
 //   0.2857142857142857
 // ]
 
