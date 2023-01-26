

 // Array of Objects
 const quiz = [
  {
    q:'The GMDSS operates over 4 sea areas of coverage from shore to ship. The 4 sea areas are classified as: A1, A2, A3 and A4. How do you define Sea A3?',
    options:['Covered by MF radio also enabling DSC and RT. Determined range up to 150 nautical miles.','Covered by VHF radio enabling Digital Selective Calling (DSC) and Radio Telephone (RT). Determined range of approximately 20-30 nautical miles.','Categorized as the polar regions above 70\u00B0N and below 70\u00B0S. This area requires HF radio with DSC.','Covered by HF radio and Inmarsat geostationary satellite enabling DSC and satellite communication 70\u00B0N and below 70\u00B0S.'],
    answer:3
  },
  {
    q:'For the sake of maintaining uniformity in buoyage system worldwide, "_______" divided the world into two regions: Region A and Region B.',
    options:['International Association of Lights Authorities','International Association of Marine Aids to Navigation and Lighthouse Authorities','International Association of Navigation and Lighthouse Authorities','International Association of Maritime Aids to Lighthouse Authorities'],
    answer:1
  },
  {
    q:'According to IALA Maritime Buoyage Systems, Region A includes which countries?',
    options:['Europe, Australia, New Zealand, Philippines, Africa, the Gulf and some Asian countries','North, South, Central America, Japan, Korea and the Philippines','North, South, Central America, Japan, North Korea and the Philippines','Europe, Australia, New Zealand, Africa, the Gulf and some Asian countries'],
    answer:3
  },
  {
    q:'IALA buoyage system provides how many types of marks?',
    options:['5','6','7','8'],
    answer:1
  },
  {
    q:'It is used in conjunction with the compass to indicate where the mariner may find the best navigable water.',
    options:['Lateral Marks','Safe Water Marks','Cardinal Marks','Isolated Danger Marks'],
    answer:2
  },
  {
    q:'This is the only mark to use vertical stripes and does not point to any danger but specifies that safe navigable water is all around the mark.',
    options:['Safe Water Marks','Lateral Marks','Cardinal Marks','Isolated Danger Marks'],
    answer:0,
    img:'img/Safe-water-mark.png'
  },
  {
    q:'These marks highlight and bring to the attention of mariners any hazards or dangers to safe navigation.',
    options:['Lateral Marks','Safe Water Marks','Cardinal Marks','Isolated Danger Marks'],
    answer:3,
    img:'img/Isolated-danger-marks.png'
  },
  {
    q:'_______ are used to denote mariners areas with special features. They do not play any major role in facilitating mariners in safe navigation.',
    options:['Emergency Wreck Marking Buoy','Safe Water Marks','Special Marks','Isolated Danger Marks'],
    answer:2,
  },
  {
    q:'You are proceeding to a distress site where the survivors are in a liferaft. Which action will assist in making your vessel more visible to the survivors?',
    options:['Making smoke in a daylight.','Steering a sinouos course.','Steering a zigzag course with the 5 to 10 minutes on each leg.'],
    answer:0,
  },
  {
    q:'Isolated Danger Marks are distinguished by which of the following top marks?',
    options:['2 Single Red Sphere','2 Black Spheres, Disposed of Vertically','Upright yelow cross (+)','Single yellow cross - (x) shaped'],
    answer:1,
  },
  {
    q:'South Cardinal Marks are distinguished by which of the following top marks?',
    options:['2 Black cones pointing upwards','2 Black cones, base to base','2 Black cones pointing towards each other','2 Black cones pointing downwards'],
    answer:3,
  },
  {
    q:'Which statement about the Williamson turn is FALSE?',
    options:['It is the slowest of the methods used in turning the vessel.','It is the best turn to use when the victim is not in sight due to reduced visibility.','It requires the highest degree of shiphandling skills to accomplish.','It returns the vessel to the original track-line on a reciprocal course.'],
    answer:2,
  },
  {
    q:'Which of the following signals listed is required to be displayed during the day while bunkering?',
    options:['A yellow flag','A red flag','A red light','A red and yellow flag'],
    answer:1,
  },
  {
    q:'Channel 70 for digital selective calling for Distress, Safety and Calling frequesncy operates at:',
    options:['157.526 MHz','158.526 MHz','159.526 MHz','156.526 MHz'],
    answer:3,
  },
  {
    q:'One major advantage of the round turn maneuver in a man overboard situation is that it:',
    options:['is the easy for a single-screw vessel to perform','is the fastest method','requires the least shiphandling skills to perform','can be used in reduced visibility'],
    answer:1,
  },
  {
    q:'What would most likely prevent a SART signal from being detected?',
    options:['Signal absorption by the ionosphere','The rescue personnel were monitoring the 10-cm radar','Heavy sea swells','The rescue personnel were monitoring the 3-cm radar'],
    answer:1,
  },
  {
    q:'A vessel using a traffic separation scheme shall normally join or leave a traffic lane at the termination of the lane, but when joining or leaving from either side shall do so at ________ to the general direction of traffic flow as practicable.',
    options:['a right angle','as a small angle','an acute angle','an obtuse angle'],
    answer:1,
  },
  {
    q:'A power-driven vessel making way through the water shall sound at intervals of not more than ________.',
    options:['2 minutes two short blast','2 minutes one short blast','2 minutes one prolonged blast','2 minutes two prolonged blast'],
    answer:2,
  },
  {
    q:'The term _________ means a blast of about one second duration.',
    options:['two short blast','short blast','prolonged blast','series of short blast'],
    answer:1,
  },
  {
    q:'The term _________ means a blast of from four to six seconds duration.',
    options:['two short blast','short blast','prolonged blast','series of short blast'],
    answer:2,
  },
  {
    q:'A power-driven vessel underway but stopped and making no way through the water shall sound at intervals of not more than ________.',
    options:['2 minutes two short blasts in succession with an interval of about 2 seconds between them','2 minutes one short blasts in succession with an interval of about 2 seconds between them','2 minutes one prolonged blasts in succession with an interval of about 2 seconds between them','2 minutes two prolonged blasts in succession with an interval of about 2 seconds between them'],
    answer:3,
  },
  {
    q:'In radiotelephone communications, the prefix PAN-PAN indicates that',
    options:['the message following the prefix will be about the safety of navigation','a ship is threatened by grave and imminent danger and request immediate assistance','the message following is a meteorological warning','a calling station has an urgent message about safety of a person'],
    answer:3,
  },
  {
    q:'Heave is the motion of a vessel along the:',
    options:['longitudinal axis','centerline axis','transverse axis','vertical axis'],
    answer:3,
  },
  {
    q:'What signal flag is the Pilot Flag (I have a pilot on board)?',
    options:['Z','P','H','C'],
    answer:2,
  },
  {
    q:'What is the equivalent fog signal of a power-driven vessel, making way in the International Code single-letter Signal',
    options:['MIKE','DELTA','TANGO','ROMEO'],
    answer:2,
  },
  {
    q:'Genaraly speaking, the most favorable bottom for anchoring is _______?',
    options:['loose sand','a mixture of clay and mud','rocky','very soft mud'],
    answer:1,
  },
  {
    q:'A bow thruster ________ ? I. is effective in slowing down a vessel. II. Loses effectiveness when the vessels speed exceeds 3 knots. III. Provides lateral control without affecting headway.',
    options:['I and II only','I and III only','I, II, and III','II and III only'],
    answer:3,
  },
  {
    q:'It is a protective suit which reduces the body heat loss of a person wearing it in cold water.',
    options:['Immersion suit','Thermal Protective aid','Chemical Protection Suit','Winter Overall'],
    answer:0,
  },
  {
    q:'What type of NAVTEX messages represents the letter "A"?',
    options:['Meteorological warnings','Navigational warnings','Ice Reports','Meteorological forecasts'],
    answer:1,
  },
  {
    q:'You received a NAVTEX Message showing "ZCZC XZ28". What does the letter "Z" on "XZ28" denotes?',
    options:['Coast Station ID','Message Type','Serial Number of message','End of message'],
    answer:1,
  },
  {
    q:'You received a NAVTEX Message showing "ZCZC XZ28". What does the letter "X" on "XZ28" denotes?',
    options:['Coast Station ID','Message Type','Serial Number of message','End of message'],
    answer:0,
  },
  {
    q:'You received a NAVTEX Message showing "ZCZC XZ28". What does the letters "ZCZC" denotes?',
    options:['Coast Station ID','Message Type','Start of message','End of message'],
    answer:2,
  },
  {
    q:'It is a system intended to perform the following functions: alerting, search and rescue coordination, locating, maritime safety information broadcasts, general communication and bridge-to-bridge communication.',
    options:['GMDSS','GPS','GNSS','INS'],
    answer:0,
  },
  {
    q:'What is a nautical mile?',
    options:['A nautical mile is the length of one minute of latitude','A nautical mile is 8,232 feet','A nautical mile is the length of one minute of longitude','A nautical mile is the lengthof one minute of latitude added to one minute of longitude'],
    answer:0
  },
  {
    q:'What are the 3 frequencies we can use in receiving NAVTEX messages?',
    options:['4209.5kHz, 490kHz, 518kHz','4208.5kHz, 492kHz, 518kHz','4210.5kHz, 495kHz, 518kHz','156.8kHz, 406.5kHz, 518kHz'],
    answer:0,
  },
  {
    q:"Calculate the Rhumb Line Course from Lat 18\u00B0 25' N ; Long 060\u00B0 41' W to Lat 50\u00B0 17' N ; Long 007\u00B0 14' W.",
    options:['080.0\u00B0 T','053.6\u00B0 T','120.0\u00B0 T','270.0\u00B0 T'],
    answer:1,
  },
  {
    q:'It is a maritime mobile system broadcasting on VHF band which can automatically exchange static, dynamic and voyage data on a ship-to-ship and ship-to-shore basis.',
    options:['VHF','MF/HF','AIS SART','AIS'],
    answer:3,
  },
  {
    q:'AIS is transmitting Dynamic data such as Draught, Destination, ETA and Hazardous Cargo.',
    options:['True','False'],
    answer:1,
  },
  {
    q:'AIS is transmitting Static data such as Postition, Course, Speed, and Navigational Status.',
    options:['True','False'],
    answer:1,
  },
  {
    q:'AIS is transmitting Static data such as MMSI, IMO number, Call Sign, Length, Beam and Ship Type.',
    options:['True','False'],
    answer:0,
  },
  {
    q:'AIS is transmitting Dynamic data such as Postition, Course, Speed, and Navigational Status.',
    options:['True','False'],
    answer:0,
  },
  {
    q:'AIS is transmitting Voyage data such as Draught, Destination, ETA and Hazardous Cargo.',
    options:['True','False'],
    answer:0,
  },
  {
    q:'In the following case, please find your final position using plane sailing:',
    options:['Lat 08\u00B0 04N ; Long 002\u00B0 08E','Lat 05\u00B0 48.1N ; Long 062\u00B0 28E','Lat 04\u00B0 31.9S ; Long 002\u00B0 08E','Lat 11\u00B0 31S ; Long 007\u00B0 39W'],
    answer:1,
    img: 'img/planesailing1.png'
  },
  {
    q:'Find the GCD, I.Co., and F.Co., from 10\u00B0 25S, 90\u00B0 12E to 39\u00B0 27N, 55\u00B0 10E, in which the GC track crosses the Equator and the course then.',
    options:['GCD=3572.3nm, I.Co=329\u00B0 T, F.Co=319\u00B0 T','GCD=1126.1nm, I.Co=319\u00B0 T, F.Co=329\u00B0 T','GCD=4292.5nm, I.Co=102\u00B0 T, F.Co=59\u00B0 T','GCD=3112.1nm, I.Co=319\u00B0 T, F.Co=329\u00B0 T'],
    answer:0,
  },
  {
    q:'What do we mean by the following navigational chart symbol?',
    options:['Wreck, depth unknown, which is considered dangerous to surface navigation','Wreck','Wreck, depth unknown, which is not considered dangerous to surface navigation','Wreck which has been swept by the wire to the depth shown'],
    answer:0,
    img: 'img/wreckdepthunknown.png'
  },
  {
    q:'What do we mean by the following navigational chart symbol?',
    options:['Wreck, depth unknown, which is considered dangerous to surface navigation','Wreck','Wreck, depth unknown, which is not considered dangerous to surface navigation','Wreck which has been swept by the wire to the depth shown'],
    answer:2,
    img: 'img/wreckunknownnotdanger.png'
  },
  {
    q:'_______ means the lowest temperature of a liquid at which its vapour forms an ignitable mixture with air.',
    options:['Ignition Point','Freezing point','Flashpoint','Boiling point'],
    answer:2,
  },
  {
    q:'_______ means substances which, by chemical action, will cause severe damage when in contact with living tissue or, in the case of leakage, will materially damage, or even destroy, other goods or the means of transport.',
    options:['Class 6','Class 8','Class 9','Class 5'],
    answer:1,
  },
  {
    q:'Which of the following IMDG class represents the following label below?',
    options:['Class 2','Class 1','Class 3','Class 4'],
    answer:1,
    img: 'img/class1.png'
  },
  {
    q:'Which of the following IMDG class represents the following label below?',
    options:['Class 2.1','Class 1','Class 3','Class 2.2'],
    answer:0,
    img: 'img/class2black.png'
  },
  {
    q:'Which of the following IMDG class represents the following label below?',
    options:['Class 2.1','Class 2.2','Class 3','Class 4'],
    answer:0,
    img: 'img/class2white.png'
  },
  {
    q:'Which of the following IMDG class represents the following label below?',
    options:['Class 2.2','Class 2.1','Class 3','Class 4'],
    answer:0,
    img: 'img/class2.2black.png'
  },
  {
    q:'Which of the following IMDG class represents the following label below?',
    options:['Class 4.2','Class 4.1','Class 4.3','Class 4.4'],
    answer:0,
    img: 'img/class4.2.png'
  },
  {
    q:'Which of the following IMDG class represents the following label below?',
    options:['Class 4.2','Class 4.1','Class 4.3','Class 4.4'],
    answer:1,
    img: 'img/class4.1.png'
  },
  {
    q:'Which of the following IMDG class represents the following label below?',
    options:['Substances liable to spontaneous combustion','Flammable Solids','Flammable Liquids','Flammable Gases'],
    answer:1,
    img: 'img/class4.1.png'
  },
  {
    q:'Which of the following IMDG class represents the following label below?',
    options:['Substances liable to spontaneous combustion','Flammable Solids','Flammable Liquids','Flammable Gases'],
    answer:0,
    img: 'img/class4.2.png'
  },
  {
    q:'Which of the following IMDG class represents the following label below?',
    options:['Substances which, in contact with water, emit flammable gases','Flammable Solids','Flammable Liquids','Flammable Gases'],
    answer:0,
    img: 'img/class4.3black.png'
  },
  {
    q:'By using segregration table, Class 2.1 & Class 4.2 should be away from each other.',
    options:['False','True',],
    answer:0,
  },
  {
    q:'By using segregration table, Class 6.1 & Class 4.2 should be away from each other.',
    options:['False','True',],
    answer:1,
  },
  {
    q:'By using segregration table, Class 7 & Class 4.2 should be away from each other.',
    options:['False','True',],
    answer:0,
  },
  {
    q:'By using segregration table, Class 2.3 & Class 5.2 should be separated from each other.',
    options:['False','True',],
    answer:1,
  },
  {
    q:'By using segregration table, Class 1.2 & Class 4.3 should be separated by a complete compartment or hold from each other.',
    options:['False','True',],
    answer:0,
  },
  {
    q:'By using segregration table, Class 1.5 & Class 2.1 should be separated longitudinally by an intervening complete compartment or hold from each other.',
    options:['False','True',],
    answer:1,
  },
  {
    q:'By using segregration table, Class 1.4 & Class 2.2 should be away from each other.',
    options:['False','True',],
    answer:1,
  },
  {
    q:'This is a type of segregating IMO classes from each other.',
    options:['Away from','Separated from','Separated by a complete compartment or hold from','Separated longitudinally by an intervening complete compartment or hold from'],
    answer:0,
    img: 'img/awayfrom.png'
  },
  {
    q:'This is a type of segregating IMO classes from each other.',
    options:['Away from','Separated from','Separated by a complete compartment or hold from','Separated longitudinally by an intervening complete compartment or hold from'],
    answer:1,
    img: 'img/sepfrom.png'
  },
  {
    q:'This is a type of segregating IMO classes from each other.',
    options:['Away from','Separated from','Separated by a complete compartment or hold from','Separated longitudinally by an intervening complete compartment or hold from'],
    answer:2,
    img: 'img/sepcomp.png'
  },
  {
    q:'This is a type of segregating IMO classes from each other.',
    options:['Away from','Separated from','Separated by a complete compartment or hold from','Separated longitudinally by an intervening complete compartment or hold from'],
    answer:3,
    img: 'img/seplong.png'
  },
  {
    q:'Which of the following IMDG class represents the following label below?',
    options:['Class 4.2','Class 4.1','Class 4.3','Class 4.4'],
    answer:2,
    img: 'img/class4.3black.png'
  },
  {
    q:'Which of the following IMDG class represents the following label below?',
    options:['Organic Peroxides','Oxidizing Substances','Infectious Substances','Toxic Substances'],
    answer:1,
    img: 'img/class5.1ox.png'
  },
  {
    q:'Which of the following IMDG class represents the following label below?',
    options:['Organic Peroxides','Oxidizing Substances','Infectious Substances','Toxic Substances'],
    answer:0,
    img: 'img/class5.2or.png'
  },
  {
    q:'Which of the following IMDG class represents the following label below?',
    options:['Class 4.2','Class 4.1','Class 4.3','Class 4.4'],
    answer:2,
    img: 'img/class4.3white.png'
  },
  {
    q:'Which of the following IMDG class represents the following label below?',
    options:['Class 3.2','Class 3.1','Class 3','Class 4'],
    answer:2,
    img: 'img/class3black.png'
  },
  {
    q:'Class 6 of IMDG Code is subdivided into two classes.',
    options:['False','True',],
    answer:1,
  },
  {
    q:'Toxic substances have for packing purposes been apportioned among packing groups according to the degree of their toxic hazards in transport, Packing group II: substances and preparations presenting a medium toxicity risk',
    options:['False','True',],
    answer:1,
  },
  {
    q:'Toxic substances have for packing purposes been apportioned among packing groups according to the degree of their toxic hazards in transport, Packing group I: substances and preparations presenting a low toxicity risk',
    options:['False','True',],
    answer:0,
  },
  {
    q:'Enclosed space entry and rescue drill shall be held on board at least how many months?',
    options:['once every four(4) months','twice every three(3) months','once every two(2) months','once every month'],
    answer:2,
  },
  {
    q:'Using mean latitude and middle latitude to find the course and distance between:35\u00B015N 62\u00B023W B: 30\u00B025N 70\u00B018W',
    options:['234.1\u00B0T; 494.8mi','231\u00B0T; 494.8mi','231\u00B0; 489.8mi','234.1\u00B0; 949.8mi'],
    answer:0,
  },
  {
    q:'A vessel steams a course 050\u00B0T, distance 500 miles, from position 40\u00B025S 175\u00B050E. Find final position:',
    options:['35\u00B003.61S ; 176\u00B005.66W','36\u00B003.61S ; 176\u00B005.66W','35\u00B003.61S ; 175\u00B005.66W','35\u00B015.61S ; 176\u00B005.66W'],
    answer:0,
  },
  {
    q:'You made a route from the positions: WP1-59\u00B013.956N;019\u00B004.161E WP2-59\u00B012.486N;019\u00B007.926E , WP 3-59\u00B009.3N;019\u00B013.288E. On reaching WP3, you saw a light on a bearing 263.7\u00B0T / 2.7nm range. What is the name of that light?',
    options:['Almagrundet','Prejaren','Sodergrundan','Revengegrundet'],
    answer:0,
  },
  {
    q:'You made a route from the positions: WP1-59\u00B013.956N;019\u00B004.161E WP2-59\u00B012.486N;019\u00B007.926E , WP3-59\u00B009.3N;019\u00B013.288E. On reaching WP3, you saw a light on a bearing 263.7\u00B0T / 2.7nm range. What is the characteristic of that light?',
    options:['Fl(4) WR 12s','FL(4) WR 18s','F W 3 nM','LFl(2) WRG 16nM'],
    answer:0,
  },
  {
    q:'You made a route from the positions: WP1-59\u00B013.956N;019\u00B004.161E WP 2-59\u00B012.486N;019\u00B007.926E , WP3-59\u00B009.3N;019\u00B013.288E. On reaching WP3, you saw a light on a bearing 263.7\u00B0T / 2.7nm range. What is the Intensity of that light?',
    options:['5,900cd','4,900cd','3200cd','8900cd'],
    answer:0,
  },
  {
    q:'You made a route from the positions: WP1-59\u00B013.956N;019\u00B004.161E WP2-59\u00B012.486N;019\u00B007.926E , WP3-59\u00B009.3N;019\u00B013.288E. On reaching WP3, you saw a light on a bearing 263.7\u00B0T / 2.7nm range. What is the Nominal Range of that light?',
    options:['W13 nM, R13 nM','W12 nM, R12 nM','W11 nM, R11 nM','W14 nM, R14 nM'],
    answer:0,
  },
  {
    q:'You made a route from the positions: WP1-59\u00B013.956N;019\u00B004.161E WP2-59\u00B012.486N;019\u00B007.926E , WP3-59\u00B009.3N;019\u00B013.288E. On reaching WP3, you saw a light on a bearing 263.7\u00B0T / 2.7nm range. What is the Geographical Range of that light?',
    options:['12nM','10nM','11nM','14nM'],
    answer:2,
  },
  {
    q:'You made a route from the ff. positions: WP1-59\u00B013.956N;019\u00B004.161E WP2-59\u00B012.486N;019\u00B007.926E , WP3-59\u00B009.3N;019\u00B013.288E. On reaching WP3, you saw a light on a bearing 263.7\u00B0T / 2.7nm range. You can say that the light is not a RACON light.',
    options:['True','False'],
    answer:1,
  },
  {
    q:'A vessel or object being towed, other than those mentioned in paragraph (g) of this Rule, shall exhibit the following except:',
    options:['sidelight','sternlight','when the length of the tow exceeds 200 meters, a diamond shape where it can best be seen','a second masthead light abaft or higher than the forward one'],
    answer:3,
  },
  {
    q:'For a vessels of less than 12 meters in length, a sidelight can be seen at a minimun range of how many miles?',
    options:['2 miles','1 mile','3 miles','6 miles'],
    answer:1,
  },
  {
    q:'For a vessels of less than 12 meters in length, a masthead light can be seen at a minimun range of how many miles?',
    options:['2 miles','1 mile','3 miles','6 miles'],
    answer:0,
  },
  {
    q:'For a vessels of less than 12 meters in length, a stern light can be seen at a minimun range of how many miles?',
    options:['2 miles','1 mile','3 miles','6 miles'],
    answer:0,
  },
  {
    q:'For a vessels of less than 12 meters in length, a towing light can be seen at a minimun range of how many miles?',
    options:['2 miles','1 mile','3 miles','6 miles'],
    answer:0,
  },
  {
    q:'For a vessels of less than 12 meters in length, an all-round light can be seen at a minimun range of how many miles?',
    options:['2 miles','1 mile','3 miles','6 miles'],
    answer:0,
  },
  {
    q:'For a vessels of less than 12 meters or more in length but less than 50 meters in length, an all-round light can be seen at a minimun range of how many miles?',
    options:['2 miles','1 mile','3 miles','6 miles'],
    answer:0,
  },
  {
    q:'For a vessels of less than 12 meters or more in length but less than 50 meters in length, a side light can be seen at a minimun range of how many miles?',
    options:['2 miles','1 mile','3 miles','6 miles'],
    answer:0,
  },
  {
    q:'For a vessels of less than 12 meters or more in length but less than 50 meters in length, a towing light can be seen at a minimun range of how many miles?',
    options:['2 miles','1 mile','3 miles','6 miles'],
    answer:0,
  },
  {
    q:'For a vessels of less than 50 meters or more in length, a towing light can be seen at a minimun range of how many miles?',
    options:['2 miles','1 mile','3 miles','6 miles'],
    answer:2,
  },
  {
    q:'For a vessels of less than 50 meters or more in length, a sidelight light can be seen at a minimun range of how many miles?',
    options:['2 miles','1 mile','3 miles','6 miles'],
    answer:2,
  },
  {
    q:'For a vessels of less than 50 meters or more in length, a masthead light can be seen at a minimun range of how many miles?',
    options:['2 miles','1 mile','3 miles','6 miles'],
    answer:3,
  },
  {
    q:'For a vessels of less than 50 meters or more in length, an all-round light can be seen at a minimun range of how many miles?',
    options:['2 miles','1 mile','3 miles','6 miles'],
    answer:2,
  },
  {
    q:'For a vessels of less than 12 meters or more in length but less than 50 meters in length, a masthead light can be seen at a minimun range of how many miles?',
    options:['6 miles except that where the length of the vessel is less than 20 meters, 4 miles','5 miles except that where the length of the vessel is less than 20 meters, 3 miles','6 miles except that where the length of the vessel is less than 20 meters, 3 miles','12 miles except that where the length of the vessel is less than 20 meters, 6 miles'],
    answer:1,
  },
  {
    q:'Means a white light placed over the fore and aft centerline of the vessel showing an unbroken light over an arc of the horizon of 225\u00B0 and so fixed as to show the light from right ahead to 22.5\u00B0 abaft the beam on either side of the vessel.',
    options:['Sidelights','Sternlights','Masthead Lights','All-round lights'],
    answer:2,
  },
  {
    q:'is that method of launching a survival craft whereby the craft with its complement of persons and equipment on board is released and allowed to fall into the sea without any restraining apparatus.',
    options:['Free-fall launching','Float-free launching','Marine evacuation system launching','Survival craft launching'],
    answer:0,
  },
  {
    q:' is a material which reflects in the opposite direction a beam of light directed on it.',
    options:['Retro-reflective material','Index Mirror','Radar-reflector','Horizon Mirror'],
    answer:0,
  },
  {
    q:'Digital Selective Calling for Distress, Safety and Calling.',
    options:['Channel 16','Channel 70','Channel 69','Channel 13'],
    answer:1,
  }
 ] 
questionText += '<img class="question-img" src="'+ questions[currentQuestion].img +'" alt="question image">';

