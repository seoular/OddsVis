const Positions = {
  QB: 0,
  RB: 1,
  WR: 2,
  TE: 3,
  K: 4,
};

export const UNIVERSAL_VIG = 1.0623;

export const DataPoints = {
  AnyTD: 0,
  RushYds: 1,
  RecYds: 2,
  Recs: 3,
  PassTD: 4,
  PassYds: 5,
  Ints: 6,
};

export const slotcodes = {
  0: "QB", // Quarterback
  2: "RB", // Running Back
  4: "WR", // Wide Receiver
  16: "DST", // Defense/Special Teams
  6: "TE",
  23: "FLEX",
  17: "K",
  20: "BENCH",

  // Add more mappings as needed based on your specific data structure
};
export const PlayerPosMap = new Map([
  ["Nick Mullens", Positions.QB],
  ["Joshua Palmer", Positions.WR],
  ["Joe Flacco", Positions.QB],
  ["Jake Browning", Positions.QB],
  ["Desmond Ridder", Positions.QB],
  ["Isaiah Likely", Positions.TE],
  ["Tee Higgins", Positions.WR],
  ["Dallas Goedert", Positions.TE],
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
  ["CJ Stroud", Positions.QB],
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
  // ["Amon-Ra St Brown", Positions.WR],
  ["Josh Jacobs", Positions.RB],
  ["Garrett Wilson", Positions.WR],
  ["Michael Pittman", Positions.WR],
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
  ["Travis Etienne Jr", Positions.RB],
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
  ["Brian Robinson Jr", Positions.RB],
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
  ["Odell Beckham Jr", Positions.WR],
  ["Nick Westbrook-Ikhine", Positions.WR],
  ["Noah Brown", Positions.WR],
  ["Joshua Dobbs", Positions.QB],
  ["Jonnu Smith", Positions.TE],
  ["Antonio Gibson", Positions.RB],
  ["AJ Dillon", Positions.RB],
  ["Tyler Allgeier", Positions.RB],
  ["Trey Palmer", Positions.WR],
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
  ["Amon-Ra St Brown", Positions.WR],
  ["Samaje Perine", Positions.RB],
  ["Donald Parham Jr", Positions.TE],
  ["Brian Robinson", Positions.RB],
  ["Dontayvion Wicks", Positions.WR],
  ["DK Metcalf", Positions.WR],
  ["Alexander Mattison", Positions.RB],
  ["Gabriel Davis", Positions.WR],
  ["Kalif Raymond", Positions.WR],
  ["Chris Olave", Positions.WR],
  ["Jordan Addison", Positions.WR],
  ["KJ Osborn", Positions.WR],
  ["TJ Hockenson", Positions.TE],
  ["Michael Thomas", Positions.WR],
  ["Jaleel McLaughlin", Positions.RB],
  ["AJ Dillon", Positions.RB],
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
  ["Juwan Johnson", Positions.TE],
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
  ["Jalen Tolbert", Positions.WR],
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
  ["AJ Brown", Positions.WR],
  ["DeVonta Smith", Positions.WR],
  ["Rashee Rice", Positions.WR],
  ["Nico Collins", Positions.WR],
  ["Mike Boone", Positions.RB],
  ["Rondale Moore", Positions.WR],
  ["John Metchie III", Positions.WR],
  ["CJ Stroud", Positions.QB],
  ["Keaontay Ingram", Positions.RB],
  ["Xavier Hutchinson", Positions.WR],
  ["Brevin Jordan", Positions.TE],
  ["Geoff Swaim", Positions.TE],
  ["Greg Dortch", Positions.WR],
  ["D'Onta Foreman", Positions.RB],
  ["Justin Fields", Positions.QB],
  ["Khalil Herbert", Positions.RB],
  ["DJ Moore", Positions.WR],
  ["Cole Kmet", Positions.TE],
  ["Roschon Johnson", Positions.RB],
  ["Darnell Mooney", Positions.WR],
  ["Tyler Scott", Positions.DE],
  ["Equanimeous St Brown", Positions.WR],
  ["Travis Homer", Positions.RB],
  ["Robert Tonyan Jr", Positions.TE],
  ["Marcedes Lewis", Positions.TE],
  ["Trent Taylor", Positions.WR],
  ["Chuba Hubbard", Positions.RB],
  ["Adam Thielen", Positions.WR],
  ["Miles Sanders", Positions.RB],
  ["DJ Chark", Positions.WR],
  ["Jonathan Mingo", Positions.WR],
  ["Terrace Marshall Jr", Positions.WR],
  ["Jalen Brooks", Positions.WR],
  ["Bryce Young", Positions.QB],
  ["Tommy Tremble", Positions.TE],
  ["Luke Schoonmaker", Positions.TE],
  ["Peyton Hendershot", Positions.TE],
  ["Laviska Shenault Jr", Positions.WR],
  ["Hunter Luepke", Positions.FB],
  ["Sean McKeon", Positions.TE],
  ["Ian Thomas", Positions.TE],
  ["DJ Chark Jr", Positions.WR],
  ["Stephen Sullivan", Positions.TE],
  ["Tyreek Hill", Positions.WR],
  ["Raheem Mostert", Positions.RB],
  ["De'Von Achane", Positions.RB],
  ["Jaylen Waddle", Positions.WR],
  ["Jeff Wilson Jr", Positions.RB],
  ["Cedrick Wilson", Positions.WR],
  ["Durham Smythe", Positions.TE],
  ["Salvon Ahmed", Positions.RB],
  ["Tua Tagovailoa", Positions.QB],
  ["Braxton Berrios", Positions.WR],
  ["Julian Hill", Positions.WR],
  ["Austin Hooper", Positions.TE],
  ["Hunter Renfrow", Positions.WR],
  ["Alec Ingold", Positions.FB],
  ["Ameer Abdullah", Positions.RB],
  ["Deandre Carter", Positions.WR],
  ["Tre Tucker", Positions.WR],
  ["Zamir White", Positions.RB],
  ["Devon Achane", Positions.RB],
  ["Derius Davis", Positions.WR],
  ["Tucker Kraft", Positions.TE],
  ["Stone Smartt", Positions.QB],
  ["Malik Heath", Positions.WR],
  ["Nick Vannett", Positions.TE],
  ["Simi Fehoko", Positions.WR],
  ["Josiah Deguara", Positions.TE],
  ["Matt Breida", Positions.RB],
  ["Chris Rodriguez Jr", Positions.RB],
  ["Jashaun Corbin", Positions.RB],
  ["Dyami Brown", Positions.WR],
  ["Isaiah Hodgins", Positions.WR],
  ["Byron Pringle", Positions.WR],
  ["John Bates", Positions.TE],
  ["Sterling Shepard", Positions.WR],
  ["Deon Jackson", Positions.RB],
  ["Lawrence Cager", Positions.WR],
  ["Parris Campbell", Positions.WR],
  ["Pat Freiermuth", Positions.TE],
  ["Dorian Thompson-Robinson", Positions.QB],
  ["Cedric Tillman", Positions.WR],
  ["David Bell", Positions.WR],
  ["Pierre Strong", Positions.RB],
  ["Miles Boykin", Positions.WR],
  ["James Proche", Positions.WR],
  ["Darnell Washington", Positions.TE],
  ["Jordan Akins", Positions.TE],
  ["Elijah Cooks", Positions.WR],
  ["Brenton Strange", Positions.TE],
  ["Luke Farrell", Positions.TE],
  ["Parker Washington", Positions.WR],
  ["Josh Whyle", Positions.TE],
  ["Trevon Wesco", Positions.TE],
  ["Kyle Juszczyk", Positions.FB],
  ["Deven Thompkins", Positions.WR],
  ["Ronnie Bell", Positions.WR],
  ["Rakim Jarrett", Positions.WR],
  ["Ke'Shawn Vaughn", Positions.RB],
  ["Ko Kieft", Positions.TE],
  ["Payne Durham", Positions.TE],
  ["Israel Abanikanda", Positions.RB],
  ["Malik Taylor", Positions.WR],
  ["Randall Cobb", Positions.WR],
  ["Trent Sherfield", Positions.WR],
  ["CJ Uzomah", Positions.TE],
  ["Reggie Gilliam", Positions.FB],
  ["Irvin Charles", Positions.WR],
  ["Jeremy Ruckert", Positions.TE],
  ["Cooper Kupp", Positions.WR],
  ["Darrell Henderson", Positions.RB],
  ["Puka Nacua", Positions.WR],
  ["Royce Freeman", Positions.RB],
  ["Tutu Atwell", Positions.WR],
  ["Tyler Higbee", Positions.TE],
  ["Ben Skowronek", Positions.WR],
  ["Matthew Stafford", Positions.QB],
  ["Will Dissly", Positions.TE],
  ["Demarcus Robinson", Positions.WR],
  ["Brycen Hopkins", Positions.TE],
  ["Davis Allen", Positions.TE],
  ["Darrell Henderson Jr", Positions.RB],
  ["Kene Nwangwu", Positions.RB],
  ["Lil'Jordan Humphrey", Positions.WR],
  ["Myles Gaskin", Positions.RB],
  ["Jalen Nailor", Positions.WR],
  ["Chris Manhertz", Positions.TE],
  ["N'Keal Harry", Positions.WR],
  ["Johnny Mundt", Positions.TE],
  ["KJ Osborn", Positions.WR],
  ["Marvin Mims Jr", Positions.WR],
  ["Travis Kelce", Positions.TE],
  ["Isiah Pacheco", Positions.RB],
  ["Jalen Hurts", Positions.QB],
  ["Patrick Mahomes", Positions.QB],
  ["D'Andre Swift", Positions.RB],
  ["Jerick McKinnon", Positions.RB],
  ["Justin Watson", Positions.WR],
  ["Kadarius Toney", Positions.WR],
  ["Marquez Valdes-Scantling", Positions.WR],
  ["Skyy Moore", Positions.WR],
  ["Clyde Edwards-Helaire", Positions.RB],
  ["Mecole Hardman", Positions.WR],
  ["Noah Gray", Positions.TE],
  ["Kyren Williams", Positions.RB],
  ["Gardner Minshew", Positions.QB],
  ["Derek Carr", Positions.QB],

  // need to add chiefs and dolphins players / week 10 byes
]);
