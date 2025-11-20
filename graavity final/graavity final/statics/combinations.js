const subjectCombinations = [
  {
    "code": "AS2009",
    "subjects": [
      "Biology",
      "Geography",
      "Sports & Recreation"
    ]
  },
  {
    "code": "SS1006",
    "subjects": [
      "Arabic",
      "Computer Studies",
      "French"
    ]
  },
  {
    "code": "ST2007",
    "subjects": [
      "Business Studies",
      "Computer Studies",
      "Physics"
    ]
  },
  {
    "code": "ST2045",
    "subjects": [
      "Agriculture",
      "Building & Construction",
      "Business Studies"
    ]
  },
  {
    "code": "AS1021",
    "subjects": [
      "Computer Studies",
      "Fine Arts",
      "Music & Dance"
    ]
  },
  {
    "code": "ST2070",
    "subjects": [
      "Agriculture",
      "Aviation",
      "Geography"
    ]
  },
  {
    "code": "AS2011",
    "subjects": [
      "Biology",
      "History & Citizenship",
      "Sports & Recreation"
    ]
  },
  {
    "code": "ST2067",
    "subjects": [
      "Agriculture",
      "Computer Studies",
      "Physics"
    ]
  },
  {
    "code": "ST1044",
    "subjects": [
      "Biology",
      "Building & Construction",
      "Chemistry"
    ]
  },
  {
    "code": "ST2091",
    "subjects": [
      "Advanced Mathematics",
      "Agriculture",
      "Home Science"
    ]
  },
  {
    "code": "SS2099",
    "subjects": [
      "Business Studies",
      "German",
      "History & Citizenship"
    ]
  },
  {
    "code": "ST2075",
    "subjects": [
      "Agriculture",
      "Geography",
      "Physics"
    ]
  },
  {
    "code": "SS2061",
    "subjects": [
      "Business Studies",
      "Geography",
      "Literature in English"
    ]
  },
  {
    "code": "ST2019",
    "subjects": [
      "Computer Studies",
      "Home Science",
      "Wood Work"
    ]
  },
  {
    "code": "AS1049",
    "subjects": [
      "Literature in English",
      "Music & Dance",
      "Theatre & Film"
    ]
  },
  {
    "code": "ST2048",
    "subjects": [
      "Agriculture",
      "Business Studies",
      "Electricity"
    ]
  },
  {
    "code": "AS1027",
    "subjects": [
      "Fine Arts",
      "General Science",
      "Music & Dance"
    ]
  },
  {
    "code": "ST3084",
    "subjects": [
      "Biology",
      "Business Studies",
      "Metal Work"
    ]
  },
  {
    "code": "SS1084",
    "subjects": [
      "Advanced Mathematics",
      "French",
      "Mandarine Chinese"
    ]
  },
  {
    "code": "ST1042",
    "subjects": [
      "Agriculture",
      "Biology",
      "Chemistry"
    ]
  },
  {
    "code": "ST3105",
    "subjects": [
      "Geography",
      "Metal Work",
      "Physics"
    ]
  },
  {
    "code": "SS2118",
    "subjects": [
      "Business Studies",
      "Geography",
      "Kenya Sign Language"
    ]
  },
  {
    "code": "SS2002",
    "subjects": [
      "Business Studies",
      "German",
      "Hindu Religious Education"
    ]
  },
  {
    "code": "AS1038",
    "subjects": [
      "Business Studies",
      "Music & Dance",
      "Theatre & Film"
    ]
  },
  {
    "code": "ST3013",
    "subjects": [
      "Biology",
      "Geography",
      "Power Mechanics"
    ]
  },
  {
    "code": "ST2049",
    "subjects": [
      "Agriculture",
      "Business Studies",
      "General Science"
    ]
  },
  {
    "code": "AS1007",
    "subjects": [
      "Fine Arts",
      "Hindu Religious Education",
      "Theatre & Film"
    ]
  },
  {
    "code": "SS2024",
    "subjects": [
      "Computer Studies",
      "Geography",
      "History & Citizenship"
    ]
  },
  {
    "code": "ST3008",
    "subjects": [
      "Electricity",
      "General Science",
      "Home Science"
    ]
  },
  {
    "code": "SS2092",
    "subjects": [
      "Geography",
      "History & Citizenship",
      "Mandarine Chinese"
    ]
  },
  {
    "code": "ST2097",
    "subjects": [
      "Biology",
      "Business Studies",
      "Computer Studies"
    ]
  },
  {
    "code": "SS1014",
    "subjects": [
      "Arabic",
      "French",
      "General Science"
    ]
  },
  {
    "code": "SS1065",
    "subjects": [
      "German",
      "Indigenous Language",
      "Literature in English"
    ]
  },
  {
    "code": "ST3015",
    "subjects": [
      "Chemistry",
      "Geography",
      "Power Mechanics"
    ]
  },
  {
    "code": "SS2004",
    "subjects": [
      "Geography",
      "History & Citizenship",
      "Literature in English"
    ]
  },
  {
    "code": "SS2065",
    "subjects": [
      "Business Studies",
      "Geography",
      "Indigenous Language"
    ]
  },
  {
    "code": "SS2056",
    "subjects": [
      "Advanced Mathematics",
      "Business Studies",
      "Geography"
    ]
  },
  {
    "code": "AS1002",
    "subjects": [
      "Biology",
      "Fine Arts",
      "Theatre & Film"
    ]
  },
  {
    "code": "ST1035",
    "subjects": [
      "Advanced Mathematics",
      "Electricity",
      "Physics"
    ]
  },
  {
    "code": "ST3068",
    "subjects": [
      "Business Studies",
      "Geography",
      "Media Technology"
    ]
  },
  {
    "code": "AS1036",
    "subjects": [
      "Arabic",
      "Music & Dance",
      "Theatre & Film"
    ]
  },
  {
    "code": "ST3065",
    "subjects": [
      "Biology",
      "Business Studies",
      "Media Technology"
    ]
  },
  {
    "code": "AS1048",
    "subjects": [
      "History & Citizenship",
      "Music & Dance",
      "Theatre & Film"
    ]
  },
  {
    "code": "ST3089",
    "subjects": [
      "Business Studies",
      "Marine & Fisheries",
      "Metal Work"
    ]
  },
  {
    "code": "ST2040",
    "subjects": [
      "Advanced Mathematics",
      "Biology",
      "Geography"
    ]
  },
  {
    "code": "AS1001",
    "subjects": [
      "Arabic",
      "Fine Arts",
      "Theatre & Film"
    ]
  },
  {
    "code": "AS1012",
    "subjects": [
      "Fine Arts",
      "German",
      "Theatre & Film"
    ]
  },
  {
    "code": "ST1039",
    "subjects": [
      "Advanced Mathematics",
      "Metal Work",
      "Physics"
    ]
  },
  {
    "code": "ST3120",
    "subjects": [
      "Aviation",
      "Geography",
      "Media Technology"
    ]
  },
  {
    "code": "ST2056",
    "subjects": [
      "Agriculture",
      "Aviation",
      "Computer Studies"
    ]
  },
  {
    "code": "AS1043",
    "subjects": [
      "Fasihi ya Kiswahili",
      "Music & Dance",
      "Theatre & Film"
    ]
  },
  {
    "code": "SS1001",
    "subjects": [
      "French",
      "Indigenous Language",
      "Literature in English"
    ]
  },
  {
    "code": "ST3091",
    "subjects": [
      "Business Studies",
      "Media Technology",
      "Metal Work"
    ]
  },
  {
    "code": "AS2013",
    "subjects": [
      "Biology",
      "Mandarine Chinese",
      "Sports & Recreation"
    ]
  },
  {
    "code": "ST2096",
    "subjects": [
      "Aviation",
      "Business Studies",
      "Computer Studies"
    ]
  },
  {
    "code": "ST2059",
    "subjects": [
      "Agriculture",
      "Chemistry",
      "Computer Studies"
    ]
  },
  {
    "code": "AS1032",
    "subjects": [
      "Fine Arts",
      "Mandarine Chinese",
      "Music & Dance"
    ]
  },
  {
    "code": "ST1016",
    "subjects": [
      "Advanced Mathematics",
      "Chemistry",
      "Geography"
    ]
  },
  {
    "code": "SS2013",
    "subjects": [
      "General Science",
      "Geography",
      "History & Citizenship"
    ]
  },
  {
    "code": "AS1044",
    "subjects": [
      "French",
      "Music & Dance",
      "Theatre & Film"
    ]
  },
  {
    "code": "SS2044",
    "subjects": [
      "Geography",
      "German",
      "Hindu Religious Education"
    ]
  },
  {
    "code": "SS2039",
    "subjects": [
      "French",
      "Geography",
      "Islamic Religious Education"
    ]
  },
  {
    "code": "ST2020",
    "subjects": [
      "Aviation",
      "Computer Studies",
      "Home Science"
    ]
  },
  {
    "code": "AS1029",
    "subjects": [
      "Fine Arts",
      "German",
      "Music & Dance"
    ]
  },
  {
    "code": "ST1043",
    "subjects": [
      "Aviation",
      "Biology",
      "Chemistry"
    ]
  },
  {
    "code": "ST3024",
    "subjects": [
      "Advanced Mathematics",
      "Electricity",
      "Geography"
    ]
  },
  {
    "code": "ST3054",
    "subjects": [
      "Chemistry",
      "Geography",
      "Marine & Fisheries"
    ]
  },
  {
    "code": "ST2092",
    "subjects": [
      "Agriculture",
      "Home Science",
      "Metal Work"
    ]
  },
  {
    "code": "SS1058",
    "subjects": [
      "Arabic",
      "Computer Studies",
      "Kenya Sign Language"
    ]
  },
  {
    "code": "ST2017",
    "subjects": [
      "Computer Studies",
      "Geography",
      "Metal Work"
    ]
  },
  {
    "code": "ST3022",
    "subjects": [
      "Electricity",
      "Geography",
      "Marine & Fisheries"
    ]
  },
  {
    "code": "ST1022",
    "subjects": [
      "Advanced Mathematics",
      "Chemistry",
      "Wood Work"
    ]
  },
  {
    "code": "SS1043",
    "subjects": [
      "Arabic",
      "Fasihi ya Kiswahili",
      "Indigenous Language"
    ]
  },
  {
    "code": "ST2083",
    "subjects": [
      "Agriculture",
      "Building & Construction",
      "Home Science"
    ]
  },
  {
    "code": "ST3053",
    "subjects": [
      "General Science",
      "Media Technology",
      "Wood Work"
    ]
  },
  {
    "code": "ST2090",
    "subjects": [
      "Agriculture",
      "Home Science",
      "Marine & Fisheries"
    ]
  },
  {
    "code": "ST3006",
    "subjects": [
      "Computer Studies",
      "Electricity",
      "Geography"
    ]
  },
  {
    "code": "SS1011",
    "subjects": [
      "Arabic",
      "French",
      "Hindu Religious Education"
    ]
  },
  {
    "code": "ST2024",
    "subjects": [
      "Chemistry",
      "Computer Studies",
      "Home Science"
    ]
  },
  {
    "code": "ST3082",
    "subjects": [
      "Geography",
      "Media Technology",
      "Physics"
    ]
  },
  {
    "code": "ST3038",
    "subjects": [
      "Business Studies",
      "Physics",
      "Wood Work"
    ]
  },
  {
    "code": "ST3107",
    "subjects": [
      "Business Studies",
      "Chemistry",
      "Power Mechanics"
    ]
  },
  {
    "code": "SS1019",
    "subjects": [
      "Advanced Mathematics",
      "Arabic",
      "French"
    ]
  },
  {
    "code": "ST1008",
    "subjects": [
      "Advanced Mathematics",
      "Biology",
      "Power Mechanics"
    ]
  },
  {
    "code": "SS2018",
    "subjects": [
      "Fasihi ya Kiswahili",
      "Geography",
      "History & Citizenship"
    ]
  },
  {
    "code": "ST2095",
    "subjects": [
      "Agriculture",
      "Home Science",
      "Wood Work"
    ]
  },
  {
    "code": "SS1050",
    "subjects": [
      "French",
      "German",
      "Islamic Religious Education"
    ]
  },
  {
    "code": "ST2060",
    "subjects": [
      "Agriculture",
      "Computer Studies",
      "Electricity"
    ]
  },
  {
    "code": "ST3085",
    "subjects": [
      "Business Studies",
      "Chemistry",
      "Metal Work"
    ]
  },
  {
    "code": "SS1064",
    "subjects": [
      "Arabic",
      "French",
      "Kenya Sign Language"
    ]
  },
  {
    "code": "AS1009",
    "subjects": [
      "Fine Arts",
      "French",
      "Theatre & Film"
    ]
  },
  {
    "code": "ST3018",
    "subjects": [
      "Geography",
      "Home Science",
      "Power Mechanics"
    ]
  },
  {
    "code": "ST2009",
    "subjects": [
      "Business Studies",
      "Computer Studies",
      "Wood Work"
    ]
  },
  {
    "code": "ST2047",
    "subjects": [
      "Agriculture",
      "Business Studies",
      "Computer Studies"
    ]
  },
  {
    "code": "ST2043",
    "subjects": [
      "Agriculture",
      "Aviation",
      "Business Studies"
    ]
  },
  {
    "code": "ST3034",
    "subjects": [
      "Business Studies",
      "Home Science",
      "Wood Work"
    ]
  },
  {
    "code": "SS1074",
    "subjects": [
      "Advanced Mathematics",
      "Arabic",
      "Kenya Sign Language"
    ]
  },
  {
    "code": "ST1015",
    "subjects": [
      "Advanced Mathematics",
      "Chemistry",
      "Electricity"
    ]
  },
  {
    "code": "ST1007",
    "subjects": [
      "Advanced Mathematics",
      "Biology",
      "Physics"
    ]
  },
  {
    "code": "AS2003",
    "subjects": [
      "Biology",
      "Computer Studies",
      "Sports & Recreation"
    ]
  },
  {
    "code": "AS1019",
    "subjects": [
      "Biology",
      "Fine Arts",
      "Music & Dance"
    ]
  },
  {
    "code": "ST2028",
    "subjects": [
      "Computer Studies",
      "Home Science",
      "Marine & Fisheries"
    ]
  },
  {
    "code": "ST1024",
    "subjects": [
      "Advanced Mathematics",
      "Aviation",
      "General Science"
    ]
  },
  {
    "code": "ST1034",
    "subjects": [
      "Advanced Mathematics",
      "Computer Studies",
      "Physics"
    ]
  },
  {
    "code": "SS2094",
    "subjects": [
      "Arabic",
      "Business Studies",
      "History & Citizenship"
    ]
  },
  {
    "code": "SS1025",
    "subjects": [
      "Fasihi ya Kiswahili",
      "German",
      "Indigenous Language"
    ]
  },
  {
    "code": "SS2026",
    "subjects": [
      "Arabic",
      "Geography",
      "History & Citizenship"
    ]
  },
  {
    "code": "SS2097",
    "subjects": [
      "Business Studies",
      "French",
      "History & Citizenship"
    ]
  },
  {
    "code": "ST3103",
    "subjects": [
      "Advanced Mathematics",
      "Geography",
      "Metal Work"
    ]
  },
  {
    "code": "ST3079",
    "subjects": [
      "Computer Studies",
      "Geography",
      "Media Technology"
    ]
  },
  {
    "code": "ST3099",
    "subjects": [
      "Chemistry",
      "Geography",
      "Metal Work"
    ]
  },
  {
    "code": "ST3017",
    "subjects": [
      "Chemistry",
      "Electricity",
      "Geography"
    ]
  },
  {
    "code": "ST2078",
    "subjects": [
      "Agriculture",
      "Geography",
      "Wood Work"
    ]
  },
  {
    "code": "ST3060",
    "subjects": [
      "Geography",
      "Home Science",
      "Wood Work"
    ]
  },
  {
    "code": "ST3014",
    "subjects": [
      "Biology",
      "Electricity",
      "Geography"
    ]
  },
  {
    "code": "ST3086",
    "subjects": [
      "Business Studies",
      "General Science",
      "Metal Work"
    ]
  },
  {
    "code": "SS1055",
    "subjects": [
      "French",
      "Geography",
      "Mandarine Chinese"
    ]
  },
  {
    "code": "ST3016",
    "subjects": [
      "Computer Studies",
      "Geography",
      "Power Mechanics"
    ]
  },
  {
    "code": "ST1023",
    "subjects": [
      "Advanced Mathematics",
      "Agriculture",
      "General Science"
    ]
  },
  {
    "code": "ST2010",
    "subjects": [
      "Aviation",
      "Computer Studies",
      "Geography"
    ]
  },
  {
    "code": "ST3083",
    "subjects": [
      "Aviation",
      "Business Studies",
      "Metal Work"
    ]
  },
  {
    "code": "AS2001",
    "subjects": [
      "Arabic",
      "Biology",
      "Sports & Recreation"
    ]
  },
  {
    "code": "AS1011",
    "subjects": [
      "Fine Arts",
      "Geography",
      "Theatre & Film"
    ]
  },
  {
    "code": "AS1030",
    "subjects": [
      "Fine Arts",
      "History & Citizenship",
      "Music & Dance"
    ]
  },
  {
    "code": "ST3046",
    "subjects": [
      "General Science",
      "Geography",
      "Wood Work"
    ]
  },
  {
    "code": "AS1039",
    "subjects": [
      "Computer Studies",
      "Music & Dance",
      "Theatre & Film"
    ]
  },
  {
    "code": "ST3097",
    "subjects": [
      "General Science",
      "Media Technology",
      "Metal Work"
    ]
  },
  {
    "code": "ST2055",
    "subjects": [
      "Agriculture",
      "Business Studies",
      "Wood Work"
    ]
  },
  {
    "code": "ST2001",
    "subjects": [
      "Business Studies",
      "Computer Studies",
      "Electricity"
    ]
  },
  {
    "code": "ST2025",
    "subjects": [
      "Computer Studies",
      "Electricity",
      "Home Science"
    ]
  },
  {
    "code": "ST1033",
    "subjects": [
      "Advanced Mathematics",
      "Business Studies",
      "Physics"
    ]
  },
  {
    "code": "SS1057",
    "subjects": [
      "Arabic",
      "Business Studies",
      "Kenya Sign Language"
    ]
  },
  {
    "code": "ST2093",
    "subjects": [
      "Agriculture",
      "Home Science",
      "Physics"
    ]
  },
  {
    "code": "AS1018",
    "subjects": [
      "Arabic",
      "Fine Arts",
      "Music & Dance"
    ]
  },
  {
    "code": "AS1023",
    "subjects": [
      "Fine Arts",
      "Islamic Religious Education",
      "Music & Dance"
    ]
  },
  {
    "code": "ST3032",
    "subjects": [
      "Business Studies",
      "Geography",
      "Wood Work"
    ]
  },
  {
    "code": "ST3061",
    "subjects": [
      "Geography",
      "Marine & Fisheries",
      "Media Technology"
    ]
  },
  {
    "code": "ST3104",
    "subjects": [
      "Geography",
      "Media Technology",
      "Metal Work"
    ]
  },
  {
    "code": "ST3027",
    "subjects": [
      "Biology",
      "Business Studies",
      "Wood Work"
    ]
  },
  {
    "code": "SS1046",
    "subjects": [
      "Advanced Mathematics",
      "French",
      "German"
    ]
  },
  {
    "code": "ST3051",
    "subjects": [
      "Advanced Mathematics",
      "General Science",
      "Wood Work"
    ]
  },
  {
    "code": "ST3035",
    "subjects": [
      "Business Studies",
      "Marine & Fisheries",
      "Wood Work"
    ]
  },
  {
    "code": "ST1010",
    "subjects": [
      "Advanced Mathematics",
      "Agriculture",
      "Chemistry"
    ]
  },
  {
    "code": "SS1051",
    "subjects": [
      "French",
      "Geography",
      "German"
    ]
  },
  {
    "code": "SS2010",
    "subjects": [
      "Geography",
      "German",
      "History & Citizenship"
    ]
  },
  {
    "code": "ST3071",
    "subjects": [
      "Geography",
      "Physics",
      "Wood Work"
    ]
  },
  {
    "code": "SS2029",
    "subjects": [
      "Arabic",
      "Christian Religious Education",
      "Geography"
    ]
  },
  {
    "code": "ST2069",
    "subjects": [
      "Agriculture",
      "Computer Studies",
      "Wood Work"
    ]
  },
  {
    "code": "AS1037",
    "subjects": [
      "Biology",
      "Music & Dance",
      "Theatre & Film"
    ]
  },
  {
    "code": "AS1047",
    "subjects": [
      "German",
      "Music & Dance",
      "Theatre & Film"
    ]
  },
  {
    "code": "ST2076",
    "subjects": [
      "Agriculture",
      "Geography",
      "Power Mechanics"
    ]
  },
  {
    "code": "ST3073",
    "subjects": [
      "Business Studies",
      "Media Technology",
      "Physics"
    ]
  },
  {
    "code": "ST3031",
    "subjects": [
      "Business Studies",
      "General Science",
      "Wood Work"
    ]
  },
  {
    "code": "SS2025",
    "subjects": [
      "Business Studies",
      "Geography",
      "History & Citizenship"
    ]
  },
  {
    "code": "ST1006",
    "subjects": [
      "Advanced Mathematics",
      "Biology",
      "Metal Work"
    ]
  },
  {
    "code": "AS1024",
    "subjects": [
      "Fine Arts",
      "Hindu Religious Education",
      "Music & Dance"
    ]
  },
  {
    "code": "AS1050",
    "subjects": [
      "Mandarine Chinese",
      "Music & Dance",
      "Theatre & Film"
    ]
  },
  {
    "code": "ST1011",
    "subjects": [
      "Advanced Mathematics",
      "Aviation",
      "Chemistry"
    ]
  },
  {
    "code": "AS1015",
    "subjects": [
      "Fine Arts",
      "Mandarine Chinese",
      "Theatre & Film"
    ]
  },
  {
    "code": "AS1026",
    "subjects": [
      "Fine Arts",
      "French",
      "Music & Dance"
    ]
  },
  {
    "code": "ST3029",
    "subjects": [
      "Business Studies",
      "Chemistry",
      "Wood Work"
    ]
  },
  {
    "code": "ST1004",
    "subjects": [
      "Advanced Mathematics",
      "Biology",
      "Chemistry"
    ]
  },
  {
    "code": "ST3062",
    "subjects": [
      "Geography",
      "Marine & Fisheries",
      "Physics"
    ]
  },
  {
    "code": "ST1038",
    "subjects": [
      "Advanced Mathematics",
      "Marine & Fisheries",
      "Physics"
    ]
  },
  {
    "code": "SS1070",
    "subjects": [
      "Arabic",
      "Geography",
      "Kenya Sign Language"
    ]
  },
  {
    "code": "ST3095",
    "subjects": [
      "General Science",
      "Marine & Fisheries",
      "Metal Work"
    ]
  },
  {
    "code": "SS2105",
    "subjects": [
      "Arabic",
      "Business Studies",
      "Hindu Religious Education"
    ]
  },
  {
    "code": "ST2053",
    "subjects": [
      "Agriculture",
      "Business Studies",
      "Physics"
    ]
  },
  {
    "code": "ST2063",
    "subjects": [
      "Agriculture",
      "Computer Studies",
      "Home Science"
    ]
  },
  {
    "code": "ST3066",
    "subjects": [
      "Business Studies",
      "Chemistry",
      "Media Technology"
    ]
  },
  {
    "code": "AS2014",
    "subjects": [
      "Advanced Mathematics",
      "Biology",
      "Sports & Recreation"
    ]
  },
  {
    "code": "SS2031",
    "subjects": [
      "Arabic",
      "Geography",
      "Hindu Religious Education"
    ]
  },
  {
    "code": "SS1039",
    "subjects": [
      "Fasihi ya Kiswahili",
      "Geography",
      "Kenya Sign Language"
    ]
  },
  {
    "code": "ST1041",
    "subjects": [
      "Advanced Mathematics",
      "Physics",
      "Wood Work"
    ]
  },
  {
    "code": "ST3096",
    "subjects": [
      "Advanced Mathematics",
      "General Science",
      "Metal Work"
    ]
  },
  {
    "code": "SS1049",
    "subjects": [
      "French",
      "German",
      "History & Citizenship"
    ]
  },
  {
    "code": "SS1047",
    "subjects": [
      "Computer Studies",
      "French",
      "German"
    ]
  },
  {
    "code": "AS1045",
    "subjects": [
      "General Science",
      "Music & Dance",
      "Theatre & Film"
    ]
  },
  {
    "code": "ST2085",
    "subjects": [
      "Agriculture",
      "Business Studies",
      "Home Science"
    ]
  },
  {
    "code": "ST1031",
    "subjects": [
      "Advanced Mathematics",
      "Aviation",
      "Physics"
    ]
  },
  {
    "code": "ST3043",
    "subjects": [
      "Computer Studies",
      "General Science",
      "Wood Work"
    ]
  },
  {
    "code": "ST2030",
    "subjects": [
      "Computer Studies",
      "Home Science",
      "Metal Work"
    ]
  },
  {
    "code": "ST3023",
    "subjects": [
      "Geography",
      "Physics",
      "Power Mechanics"
    ]
  },
  {
    "code": "ST3078",
    "subjects": [
      "Chemistry",
      "Geography",
      "Media Technology"
    ]
  },
  {
    "code": "ST3055",
    "subjects": [
      "Biology",
      "Geography",
      "Wood Work"
    ]
  },
  {
    "code": "ST2046",
    "subjects": [
      "Agriculture",
      "Business Studies",
      "Chemistry"
    ]
  },
  {
    "code": "ST1047",
    "subjects": [
      "Advanced Mathematics",
      "Biology",
      "Marine & Fisheries"
    ]
  },
  {
    "code": "ST3094",
    "subjects": [
      "General Science",
      "Home Science",
      "Metal Work"
    ]
  },
  {
    "code": "SS1067",
    "subjects": [
      "History & Citizenship",
      "Indigenous Language",
      "Literature"
    ]
  },
  {
    "code": "AS1003",
    "subjects": [
      "Business Studies",
      "Fine Arts",
      "Theatre & Film"
    ]
  },
  {
    "code": "SS1009",
    "subjects": [
      "Arabic",
      "French",
      "Islamic Religious Education"
    ]
  },
  {
    "code": "AS1016",
    "subjects": [
      "Advanced Mathematics",
      "Fine Arts",
      "Theatre & Film"
    ]
  },
  {
    "code": "ST2051",
    "subjects": [
      "Agriculture",
      "Business Studies",
      "Marine & Fisheries"
    ]
  },
  {
    "code": "ST2087",
    "subjects": [
      "Agriculture",
      "Electricity",
      "Home Science"
    ]
  },
  {
    "code": "ST2015",
    "subjects": [
      "Computer Studies",
      "Geography",
      "Marine & Fisheries"
    ]
  },
  {
    "code": "ST1009",
    "subjects": [
      "Advanced Mathematics",
      "Biology",
      "Wood Work"
    ]
  },
  {
    "code": "ST2081",
    "subjects": [
      "Agriculture",
      "Biology",
      "Home Science"
    ]
  },
  {
    "code": "ST3042",
    "subjects": [
      "Business Studies",
      "Marine & Fisheries",
      "Physics"
    ]
  },
  {
    "code": "ST2066",
    "subjects": [
      "Agriculture",
      "Computer Studies",
      "Metal Work"
    ]
  },
  {
    "code": "ST2014",
    "subjects": [
      "Computer Studies",
      "General Science",
      "Geography"
    ]
  },
  {
    "code": "ST1028",
    "subjects": [
      "Advanced Mathematics",
      "General Science",
      "Geography"
    ]
  },
  {
    "code": "ST3115",
    "subjects": [
      "Business Studies",
      "Physics",
      "Power Mechanics"
    ]
  },
  {
    "code": "ST3117",
    "subjects": [
      "General Science",
      "Home Science",
      "Power Mechanics"
    ]
  },
  {
    "code": "ST1030",
    "subjects": [
      "Advanced Mathematics",
      "Agriculture",
      "Physics"
    ]
  },
  {
    "code": "AS2002",
    "subjects": [
      "Biology",
      "Business Studies",
      "Sports & Recreation"
    ]
  },
  {
    "code": "SS1017",
    "subjects": [
      "Arabic",
      "French",
      "Mandarine Chinese"
    ]
  },
  {
    "code": "ST3110",
    "subjects": [
      "Business Studies",
      "Geography",
      "Power Mechanics"
    ]
  },
  {
    "code": "AS2024",
    "subjects": [
      "General Science",
      "Geography",
      "Sports & Recreation"
    ]
  },
  {
    "code": "ST2011",
    "subjects": [
      "Biology",
      "Computer Studies",
      "Geography"
    ]
  },
  {
    "code": "SS1075",
    "subjects": [
      "Business Studies",
      "French",
      "Mandarine Chinese"
    ]
  },
  {
    "code": "ST3063",
    "subjects": [
      "Geography",
      "Marine & Fisheries",
      "Wood Work"
    ]
  },
  {
    "code": "AS1017",
    "subjects": [
      "Fine Arts",
      "Sports & Recreation",
      "Theatre & Film"
    ]
  },
  {
    "code": "SS1052",
    "subjects": [
      "French",
      "German",
      "Hindu Religious Education"
    ]
  },
  {
    "code": "SS1016",
    "subjects": [
      "Arabic",
      "French",
      "History & Citizenship"
    ]
  },
  {
    "code": "ST2052",
    "subjects": [
      "Agriculture",
      "Business Studies",
      "Metal Work"
    ]
  },
  {
    "code": "ST3010",
    "subjects": [
      "Advanced Mathematics",
      "Electricity",
      "General Science"
    ]
  },
  {
    "code": "SS2038",
    "subjects": [
      "French",
      "Geography",
      "Hindu Religious Education"
    ]
  },
  {
    "code": "ST3026",
    "subjects": [
      "Electricity",
      "Geography",
      "Physics"
    ]
  },
  {
    "code": "ST1045",
    "subjects": [
      "Biology",
      "Business Studies",
      "Chemistry"
    ]
  },
  {
    "code": "ST3109",
    "subjects": [
      "Business Studies",
      "General Science",
      "Power Mechanics"
    ]
  },
  {
    "code": "AS1010",
    "subjects": [
      "Fine Arts",
      "General Science",
      "Theatre & Film"
    ]
  },
  {
    "code": "ST2086",
    "subjects": [
      "Agriculture",
      "Chemistry",
      "Home Science"
    ]
  },
  {
    "code": "AS1046",
    "subjects": [
      "Geography",
      "Music & Dance",
      "Theatre & Film"
    ]
  },
  {
    "code": "SS2046",
    "subjects": [
      "Christian Religious Education",
      "Geography",
      "German"
    ]
  },
  {
    "code": "AS1028",
    "subjects": [
      "Fine Arts",
      "Geography",
      "Music & Dance"
    ]
  },
  {
    "code": "SS1032",
    "subjects": [
      "Fasihi ya Kiswahili",
      "French",
      "Indigenous Language"
    ]
  },
  {
    "code": "ST1014",
    "subjects": [
      "Advanced Mathematics",
      "Chemistry",
      "Computer Studies"
    ]
  },
  {
    "code": "ST3045",
    "subjects": [
      "General Science",
      "Home Science",
      "Marine & Fisheries"
    ]
  },
  {
    "code": "AS2007",
    "subjects": [
      "Biology",
      "Fasihi ya Kiswahili",
      "Sports & Recreation"
    ]
  },
  {
    "code": "ST2089",
    "subjects": [
      "Agriculture",
      "Geography",
      "Home Science"
    ]
  },
  {
    "code": "ST3075",
    "subjects": [
      "General Science",
      "Home Science",
      "Media Technology"
    ]
  },
  {
    "code": "ST1002",
    "subjects": [
      "Advanced Mathematics",
      "Aviation",
      "Biology"
    ]
  },
  {
    "code": "AS1052",
    "subjects": [
      "Music & Dance",
      "Sports & Recreation",
      "Theatre & Film"
    ]
  },
  {
    "code": "ST2038",
    "subjects": [
      "Advanced Mathematics",
      "Biology",
      "Computer Studies"
    ]
  },
  {
    "code": "ST3106",
    "subjects": [
      "Biology",
      "Business Studies",
      "Power Mechanics"
    ]
  },
  {
    "code": "ST3101",
    "subjects": [
      "Geography",
      "Home Science",
      "Metal Work"
    ]
  },
  {
    "code": "ST3007",
    "subjects": [
      "Electricity",
      "Geography",
      "Home Science"
    ]
  },
  {
    "code": "ST3056",
    "subjects": [
      "Chemistry",
      "Geography",
      "Wood Work"
    ]
  },
  {
    "code": "ST1001",
    "subjects": [
      "Advanced Mathematics",
      "Agriculture",
      "Biology"
    ]
  },
  {
    "code": "ST3009",
    "subjects": [
      "Electricity",
      "General Science",
      "Marine & Fisheries"
    ]
  },
  {
    "code": "AS2012",
    "subjects": [
      "Biology",
      "Literature in English",
      "Sports & Recreation"
    ]
  },
  {
    "code": "ST1021",
    "subjects": [
      "Advanced Mathematics",
      "Chemistry",
      "Power Mechanics"
    ]
  },
  {
    "code": "AS1008",
    "subjects": [
      "Fasihi ya Kiswahili",
      "Fine Arts",
      "Theatre & Film"
    ]
  },
  {
    "code": "ST2018",
    "subjects": [
      "Computer Studies",
      "Geography",
      "Physics"
    ]
  },
  {
    "code": "SS1076",
    "subjects": [
      "Computer Studies",
      "French",
      "Mandarine Chinese"
    ]
  },
  {
    "code": "ST2064",
    "subjects": [
      "Agriculture",
      "Computer Studies",
      "Marine & Fisheries"
    ]
  },
  {
    "code": "SS1066",
    "subjects": [
      "Arabic",
      "General Science",
      "Kenya Sign Language"
    ]
  },
  {
    "code": "ST2071",
    "subjects": [
      "Agriculture",
      "Biology",
      "Geography"
    ]
  },
  {
    "code": "ST2062",
    "subjects": [
      "Agriculture",
      "Computer Studies",
      "Geography"
    ]
  },
  {
    "code": "ST2080",
    "subjects": [
      "Agriculture",
      "Electricity",
      "Geography"
    ]
  },
  {
    "code": "SS1045",
    "subjects": [
      "Business Studies",
      "French",
      "German"
    ]
  },
  {
    "code": "ST2039",
    "subjects": [
      "Advanced Mathematics",
      "Biology",
      "Electricity"
    ]
  },
  {
    "code": "AS2025",
    "subjects": [
      "General Science",
      "German",
      "Sports & Recreation"
    ]
  },
  {
    "code": "ST1046",
    "subjects": [
      "Biology",
      "Chemistry",
      "Computer Studies"
    ]
  },
  {
    "code": "ST3080",
    "subjects": [
      "Geography",
      "Home Science",
      "Media Technology"
    ]
  },
  {
    "code": "AS2010",
    "subjects": [
      "Biology",
      "German",
      "Sports & Recreation"
    ]
  },
  {
    "code": "ST2023",
    "subjects": [
      "Business Studies",
      "Computer Studies",
      "Home Science"
    ]
  },
  {
    "code": "ST3057",
    "subjects": [
      "Computer Studies",
      "Geography",
      "Wood Work"
    ]
  },
  {
    "code": "ST2006",
    "subjects": [
      "Business Studies",
      "Computer Studies",
      "Metal Work"
    ]
  },
  {
    "code": "ST1019",
    "subjects": [
      "Advanced Mathematics",
      "Chemistry",
      "Metal Work"
    ]
  },
  {
    "code": "AS2008",
    "subjects": [
      "Biology",
      "French",
      "Sports & Recreation"
    ]
  },
  {
    "code": "ST2094",
    "subjects": [
      "Agriculture",
      "Home Science",
      "Power Mechanics"
    ]
  },
  {
    "code": "ST3021",
    "subjects": [
      "Geography",
      "Media Technology",
      "Power Mechanics"
    ]
  },
  {
    "code": "ST3058",
    "subjects": [
      "Geography",
      "Home Science",
      "Marine & Fisheries"
    ]
  },
  {
    "code": "SS2113",
    "subjects": [
      "Business Studies",
      "French",
      "Islamic Religious Education"
    ]
  },
  {
    "code": "SS2068",
    "subjects": [
      "Business Studies",
      "French",
      "Geography"
    ]
  },
  {
    "code": "AS2015",
    "subjects": [
      "Biology",
      "Media Technology",
      "Sports & Recreation"
    ]
  },
  {
    "code": "ST1040",
    "subjects": [
      "Advanced Mathematics",
      "Physics",
      "Power Mechanics"
    ]
  },
  {
    "code": "ST2031",
    "subjects": [
      "Computer Studies",
      "Home Science",
      "Physics"
    ]
  },
  {
    "code": "ST3048",
    "subjects": [
      "General Science",
      "Home Science",
      "Wood Work"
    ]
  },
  {
    "code": "ST2013",
    "subjects": [
      "Chemistry",
      "Computer Studies",
      "Geography"
    ]
  },
  {
    "code": "ST3064",
    "subjects": [
      "Advanced Mathematics",
      "Geography",
      "Wood Work"
    ]
  },
  {
    "code": "ST3019",
    "subjects": [
      "Geography",
      "Marine & Fisheries",
      "Power Mechanics"
    ]
  },
  {
    "code": "ST2084",
    "subjects": [
      "Agriculture",
      "Geography",
      "Marine & Fisheries"
    ]
  },
  {
    "code": "SS2104",
    "subjects": [
      "Arabic",
      "Business Studies",
      "Islamic Religious Education"
    ]
  },
  {
    "code": "ST3098",
    "subjects": [
      "Biology",
      "Geography",
      "Metal Work"
    ]
  },
  {
    "code": "ST3049",
    "subjects": [
      "General Science",
      "Marine & Fisheries",
      "Wood Work"
    ]
  },
  {
    "code": "ST2088",
    "subjects": [
      "Agriculture",
      "General Science",
      "Home Science"
    ]
  },
  {
    "code": "ST3092",
    "subjects": [
      "Business Studies",
      "Metal Work",
      "Physics"
    ]
  },
  {
    "code": "SS2030",
    "subjects": [
      "Arabic",
      "Geography",
      "Islamic Religious Education"
    ]
  },
  {
    "code": "SS2066",
    "subjects": [
      "Business Studies",
      "Geography",
      "German"
    ]
  },
  {
    "code": "ST1013",
    "subjects": [
      "Advanced Mathematics",
      "Business Studies",
      "Chemistry"
    ]
  },
  {
    "code": "AS1020",
    "subjects": [
      "Business Studies",
      "Fine Arts",
      "Music & Dance"
    ]
  },
  {
    "code": "SS1056",
    "subjects": [
      "French",
      "History & Citizenship",
      "Mandarine Chinese"
    ]
  },
  {
    "code": "SS2084",
    "subjects": [
      "Arabic",
      "Business Studies",
      "Geography"
    ]
  },
  {
    "code": "SS1072",
    "subjects": [
      "Arabic",
      "History & Citizenship",
      "Kenya Sign Language"
    ]
  },
  {
    "code": "ST2032",
    "subjects": [
      "Computer Studies",
      "Home Science",
      "Power Mechanics"
    ]
  },
  {
    "code": "SS1004",
    "subjects": [
      "Arabic",
      "Business Studies",
      "French"
    ]
  },
  {
    "code": "ST2054",
    "subjects": [
      "Agriculture",
      "Business Studies",
      "Power Mechanics"
    ]
  },
  {
    "code": "AS1004",
    "subjects": [
      "Computer Studies",
      "Fine Arts",
      "Theatre & Film"
    ]
  },
  {
    "code": "SS2040",
    "subjects": [
      "Christian Religious Education",
      "French",
      "Geography"
    ]
  },
  {
    "code": "SS2067",
    "subjects": [
      "Business Studies",
      "General Science",
      "Geography"
    ]
  },
  {
    "code": "ST3025",
    "subjects": [
      "Electricity",
      "Geography",
      "Media Technology"
    ]
  },
  {
    "code": "SS2016",
    "subjects": [
      "French",
      "Geography",
      "History & Citizenship"
    ]
  },
  {
    "code": "ST3087",
    "subjects": [
      "Business Studies",
      "Geography",
      "Metal Work"
    ]
  },
  {
    "code": "ST2079",
    "subjects": [
      "Agriculture",
      "Aviation",
      "Home Science"
    ]
  },
  {
    "code": "SS2073",
    "subjects": [
      "Business Studies",
      "Fasihi ya Kiswahili",
      "Geography"
    ]
  },
  {
    "code": "SS1015",
    "subjects": [
      "Arabic",
      "French",
      "Geography"
    ]
  },
  {
    "code": "SS2114",
    "subjects": [
      "Business Studies",
      "French",
      "Hindu Religious Education"
    ]
  },
  {
    "code": "ST1036",
    "subjects": [
      "Advanced Mathematics",
      "Geography",
      "Physics"
    ]
  },
  {
    "code": "SS1054",
    "subjects": [
      "French",
      "General Science",
      "Mandarine Chinese"
    ]
  },
  {
    "code": "AS1014",
    "subjects": [
      "Fine Arts",
      "Literature in English",
      "Theatre & Film"
    ]
  },
  {
    "code": "ST2044",
    "subjects": [
      "Agriculture",
      "Biology",
      "Business Studies"
    ]
  },
  {
    "code": "AS1013",
    "subjects": [
      "Fine Arts",
      "History & Citizenship",
      "Theatre & Film"
    ]
  },
  {
    "code": "SS1035",
    "subjects": [
      "Fasihi ya Kiswahili",
      "French",
      "Kenya Sign Language"
    ]
  },
  {
    "code": "ST3088",
    "subjects": [
      "Business Studies",
      "Home Science",
      "Metal Work"
    ]
  },
  {
    "code": "ST1017",
    "subjects": [
      "Advanced Mathematics",
      "Chemistry",
      "Home Science"
    ]
  },
  {
    "code": "ST2003",
    "subjects": [
      "Business Studies",
      "Computer Studies",
      "Geography"
    ]
  },
  {
    "code": "ST2041",
    "subjects": [
      "Advanced Mathematics",
      "Biology",
      "Home Science"
    ]
  },
  {
    "code": "SS1021",
    "subjects": [
      "Arabic",
      "Fasihi ya Kiswahili",
      "Kenya Sign Language"
    ]
  },
  {
    "code": "ST2057",
    "subjects": [
      "Agriculture",
      "Biology",
      "Computer Studies"
    ]
  },
  {
    "code": "ST1037",
    "subjects": [
      "Advanced Mathematics",
      "Home Science",
      "Physics"
    ]
  },
  {
    "code": "ST2082",
    "subjects": [
      "Agriculture",
      "General Science",
      "Geography"
    ]
  },
  {
    "code": "ST3102",
    "subjects": [
      "Geography",
      "Marine & Fisheries",
      "Metal Work"
    ]
  },
  {
    "code": "ST2068",
    "subjects": [
      "Agriculture",
      "Computer Studies",
      "Power Mechanics"
    ]
  },
  {
    "code": "AS1034",
    "subjects": [
      "Fine Arts",
      "Music & Dance",
      "Sports & Recreation"
    ]
  },
  {
    "code": "AS2023",
    "subjects": [
      "French",
      "General Science",
      "Sports & Recreation"
    ]
  },
  {
    "code": "AS1035",
    "subjects": [
      "Fine Arts",
      "Music & Dance",
      "Theatre & Film"
    ]
  },
  {
    "code": "AS1006",
    "subjects": [
      "Fine Arts",
      "Islamic Religious Education",
      "Theatre & Film"
    ]
  },
  {
    "code": "AS1025",
    "subjects": [
      "Fasihi ya Kiswahili",
      "Fine Arts",
      "Music & Dance"
    ]
  },
  {
    "code": "AS1031",
    "subjects": [
      "Fine Arts",
      "Literature in English",
      "Music & Dance"
    ]
  },
  {
    "code": "ST3100",
    "subjects": [
      "General Science",
      "Geography",
      "Metal Work"
    ]
  },
  {
    "code": "ST2074",
    "subjects": [
      "Agriculture",
      "Building & Construction",
      "Geography"
    ]
  },
  {
    "code": "SS1053",
    "subjects": [
      "French",
      "General Science",
      "German"
    ]
  },
  {
    "code": "ST2073",
    "subjects": [
      "Agriculture",
      "Geography",
      "Metal Work"
    ]
  },
  {
    "code": "ST3037",
    "subjects": [
      "Business Studies",
      "Geography",
      "Marine & Fisheries"
    ]
  },
  {
    "code": "AS2016",
    "subjects": [
      "Arabic",
      "General Science",
      "Sports & Recreation"
    ]
  },
  {
    "code": "ST2050",
    "subjects": [
      "Agriculture",
      "Business Studies",
      "Geography"
    ]
  },
  {
    "code": "SS2060",
    "subjects": [
      "Business Studies",
      "Geography",
      "Mandarine Chinese"
    ]
  },
  {
    "code": "ST2061",
    "subjects": [
      "Agriculture",
      "Computer Studies",
      "General Science"
    ]
  },
  {
    "code": "ST3030",
    "subjects": [
      "Business Studies",
      "Chemistry",
      "Marine & Fisheries"
    ]
  },
  {
    "code": "ST2027",
    "subjects": [
      "Computer Studies",
      "Geography",
      "Home Science"
    ]
  },
  {
    "code": "SS2045",
    "subjects": [
      "Geography",
      "German",
      "Islamic Religious Education"
    ]
  },
  {
    "code": "SS1048",
    "subjects": [
      "Christian Religious Education",
      "French",
      "German"
    ]
  },
  {
    "code": "SS1027",
    "subjects": [
      "Fasihi ya Kiswahili",
      "Geography",
      "Indigenous Language"
    ]
  },
  {
    "code": "ST3077",
    "subjects": [
      "Biology",
      "Geography",
      "Media Technology"
    ]
  },
  {
    "code": "ST2072",
    "subjects": [
      "Advanced Mathematics",
      "Agriculture",
      "Geography"
    ]
  },
  {
    "code": "ST3039",
    "subjects": [
      "Business Studies",
      "Home Science",
      "Marine & Fisheries"
    ]
  },
  {
    "code": "SS1073",
    "subjects": [
      "Arabic",
      "Kenya Sign Language",
      "Mandarine Chinese"
    ]
  },
  {
    "code": "ST3111",
    "subjects": [
      "Business Studies",
      "Home Science",
      "Power Mechanics"
    ]
  },
  {
    "code": "AS1033",
    "subjects": [
      "Advanced Mathematics",
      "Fine Arts",
      "Music & Dance"
    ]
  },
  {
    "code": "ST3069",
    "subjects": [
      "Geography",
      "Media Technology",
      "Wood Work"
    ]
  },
  {
    "code": "SS1013",
    "subjects": [
      "Arabic",
      "Indigenous Language",
      "Literature in English"
    ]
  },
  {
    "code": "ST2099",
    "subjects": [
      "Business Studies",
      "Chemistry",
      "Computer Studies"
    ]
  },
  {
    "code": "ST1020",
    "subjects": [
      "Advanced Mathematics",
      "Chemistry",
      "Physics"
    ]
  },
  {
    "code": "ST1003",
    "subjects": [
      "Advanced Mathematics",
      "Biology",
      "Business Studies"
    ]
  },
  {
    "code": "ST3012",
    "subjects": [
      "Electricity",
      "General Science",
      "Media Technology"
    ]
  },
  {
    "code": "SS1008",
    "subjects": [
      "Arabic",
      "Christian Religious Education",
      "French"
    ]
  },
  {
    "code": "ST3070",
    "subjects": [
      "Business Studies",
      "Home Science",
      "Media Technology"
    ]
  },
  {
    "code": "ST3093",
    "subjects": [
      "Computer Studies",
      "General Science",
      "Metal Work"
    ]
  },
  {
    "code": "ST2026",
    "subjects": [
      "Computer Studies",
      "General Science",
      "Home Science"
    ]
  },
  {
    "code": "ST3028",
    "subjects": [
      "Biology",
      "Business Studies",
      "Marine & Fisheries"
    ]
  },
  {
    "code": "ST3052",
    "subjects": [
      "Biology",
      "Geography",
      "Marine & Fisheries"
    ]
  }
];