const subjectCombinations = [
  {
    "code": "AS2009",
    "subjects": [
      "Biology",
      "Geography",
      "Sports & Recreation"
    ],
    "cluster": "Health Sciences"
  },
  {
    "code": "SS1006",
    "subjects": [
      "Arabic",
      "Computer Studies",
      "French"
    ],
    "cluster": "Information and Communication Technology (ICT)"
  },
  {
    "code": "ST2007",
    "subjects": [
      "Business Studies",
      "Computer Studies",
      "Physics"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "ST2045",
    "subjects": [
      "Agriculture",
      "Building & Construction",
      "Business Studies"
    ],
    "cluster": "Business, Finance and Entrepreneurship"
  },
  {
    "code": "AS1021",
    "subjects": [
      "Computer Studies",
      "Fine Arts",
      "Music & Dance"
    ],
    "cluster": "Creative Arts and Entertainment"
  },
  {
    "code": "ST2070",
    "subjects": [
      "Agriculture",
      "Aviation",
      "Geography"
    ],
    "cluster": "Energy and Power"
  },
  {
    "code": "AS2011",
    "subjects": [
      "Biology",
      "History & Citizenship",
      "Sports & Recreation"
    ],
    "cluster": "Health Sciences"
  },
  {
    "code": "ST2067",
    "subjects": [
      "Agriculture",
      "Computer Studies",
      "Physics"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "ST1044",
    "subjects": [
      "Biology",
      "Building & Construction",
      "Chemistry"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "ST2091",
    "subjects": [
      "Advanced Mathematics",
      "Agriculture",
      "Home Science"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "SS2099",
    "subjects": [
      "Business Studies",
      "German",
      "History & Citizenship"
    ],
    "cluster": "Business, Finance and Entrepreneurship"
  },
  {
    "code": "ST2075",
    "subjects": [
      "Agriculture",
      "Geography",
      "Physics"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "SS2061",
    "subjects": [
      "Business Studies",
      "Geography",
      "Literature in English"
    ],
    "cluster": "Creative Arts and Entertainment"
  },
  {
    "code": "ST2019",
    "subjects": [
      "Computer Studies",
      "Home Science",
      "Wood Work"
    ],
    "cluster": "Health Sciences"
  },
  {
    "code": "AS1049",
    "subjects": [
      "Literature in English",
      "Music & Dance",
      "Theatre & Film"
    ],
    "cluster": "Creative Arts and Entertainment"
  },
  {
    "code": "ST2048",
    "subjects": [
      "Agriculture",
      "Business Studies",
      "Electricity"
    ],
    "cluster": "Business, Finance and Entrepreneurship"
  },
  {
    "code": "AS1027",
    "subjects": [
      "Fine Arts",
      "General Science",
      "Music & Dance"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "ST3084",
    "subjects": [
      "Biology",
      "Business Studies",
      "Metal Work"
    ],
    "cluster": "Health Sciences"
  },
  {
    "code": "SS1084",
    "subjects": [
      "Advanced Mathematics",
      "French",
      "Mandarine Chinese"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "ST1042",
    "subjects": [
      "Agriculture",
      "Biology",
      "Chemistry"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "ST3105",
    "subjects": [
      "Geography",
      "Metal Work",
      "Physics"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "SS2118",
    "subjects": [
      "Business Studies",
      "Geography",
      "Kenya Sign Language"
    ],
    "cluster": "Business, Finance and Entrepreneurship"
  },
  {
    "code": "SS2002",
    "subjects": [
      "Business Studies",
      "German",
      "Hindu Religious Education"
    ],
    "cluster": "Business, Finance and Entrepreneurship"
  },
  {
    "code": "AS1038",
    "subjects": [
      "Business Studies",
      "Music & Dance",
      "Theatre & Film"
    ],
    "cluster": "Creative Arts and Entertainment"
  },
  {
    "code": "ST3013",
    "subjects": [
      "Biology",
      "Geography",
      "Power Mechanics"
    ],
    "cluster": "Health Sciences"
  },
  {
    "code": "ST2049",
    "subjects": [
      "Agriculture",
      "Business Studies",
      "General Science"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "AS1007",
    "subjects": [
      "Fine Arts",
      "Hindu Religious Education",
      "Theatre & Film"
    ],
    "cluster": "Creative Arts and Entertainment"
  },
  {
    "code": "SS2024",
    "subjects": [
      "Computer Studies",
      "Geography",
      "History & Citizenship"
    ],
    "cluster": "Information and Communication Technology (ICT)"
  },
  {
    "code": "ST3008",
    "subjects": [
      "Electricity",
      "General Science",
      "Home Science"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "SS2092",
    "subjects": [
      "Geography",
      "History & Citizenship",
      "Mandarine Chinese"
    ],
    "cluster": "Law, Governance and Security"
  },
  {
    "code": "ST2097",
    "subjects": [
      "Biology",
      "Business Studies",
      "Computer Studies"
    ],
    "cluster": "Health Sciences"
  },
  {
    "code": "SS1014",
    "subjects": [
      "Arabic",
      "French",
      "General Science"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "SS1065",
    "subjects": [
      "German",
      "Indigenous Language",
      "Literature in English"
    ],
    "cluster": "Creative Arts and Entertainment"
  },
  {
    "code": "ST3015",
    "subjects": [
      "Chemistry",
      "Geography",
      "Power Mechanics"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "SS2004",
    "subjects": [
      "Geography",
      "History & Citizenship",
      "Literature in English"
    ],
    "cluster": "Creative Arts and Entertainment"
  },
  {
    "code": "SS2065",
    "subjects": [
      "Business Studies",
      "Geography",
      "Indigenous Language"
    ],
    "cluster": "Business, Finance and Entrepreneurship"
  },
  {
    "code": "SS2056",
    "subjects": [
      "Advanced Mathematics",
      "Business Studies",
      "Geography"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "AS1002",
    "subjects": [
      "Biology",
      "Fine Arts",
      "Theatre & Film"
    ],
    "cluster": "Health Sciences"
  },
  {
    "code": "ST1035",
    "subjects": [
      "Advanced Mathematics",
      "Electricity",
      "Physics"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "ST3068",
    "subjects": [
      "Business Studies",
      "Geography",
      "Media Technology"
    ],
    "cluster": "Business, Finance and Entrepreneurship"
  },
  {
    "code": "AS1036",
    "subjects": [
      "Arabic",
      "Music & Dance",
      "Theatre & Film"
    ],
    "cluster": "Creative Arts and Entertainment"
  },
  {
    "code": "ST3065",
    "subjects": [
      "Biology",
      "Business Studies",
      "Media Technology"
    ],
    "cluster": "Health Sciences"
  },
  {
    "code": "AS1048",
    "subjects": [
      "History & Citizenship",
      "Music & Dance",
      "Theatre & Film"
    ],
    "cluster": "Creative Arts and Entertainment"
  },
  {
    "code": "ST3089",
    "subjects": [
      "Business Studies",
      "Marine & Fisheries",
      "Metal Work"
    ],
    "cluster": "Business, Finance and Entrepreneurship"
  },
  {
    "code": "ST2040",
    "subjects": [
      "Advanced Mathematics",
      "Biology",
      "Geography"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "AS1001",
    "subjects": [
      "Arabic",
      "Fine Arts",
      "Theatre & Film"
    ],
    "cluster": "Creative Arts and Entertainment"
  },
  {
    "code": "AS1012",
    "subjects": [
      "Fine Arts",
      "German",
      "Theatre & Film"
    ],
    "cluster": "Creative Arts and Entertainment"
  },
  {
    "code": "ST1039",
    "subjects": [
      "Advanced Mathematics",
      "Metal Work",
      "Physics"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "ST3120",
    "subjects": [
      "Aviation",
      "Geography",
      "Media Technology"
    ],
    "cluster": "Information and Communication Technology (ICT)"
  },
  {
    "code": "ST2056",
    "subjects": [
      "Agriculture",
      "Aviation",
      "Computer Studies"
    ],
    "cluster": "Information and Communication Technology (ICT)"
  },
  {
    "code": "AS1043",
    "subjects": [
      "Fasihi ya Kiswahili",
      "Music & Dance",
      "Theatre & Film"
    ],
    "cluster": "Creative Arts and Entertainment"
  },
  {
    "code": "SS1001",
    "subjects": [
      "French",
      "Indigenous Language",
      "Literature in English"
    ],
    "cluster": "Creative Arts and Entertainment"
  },
  {
    "code": "ST3091",
    "subjects": [
      "Business Studies",
      "Media Technology",
      "Metal Work"
    ],
    "cluster": "Business, Finance and Entrepreneurship"
  },
  {
    "code": "AS2013",
    "subjects": [
      "Biology",
      "Mandarine Chinese",
      "Sports & Recreation"
    ],
    "cluster": "Health Sciences"
  },
  {
    "code": "ST2096",
    "subjects": [
      "Aviation",
      "Business Studies",
      "Computer Studies"
    ],
    "cluster": "Business, Finance and Entrepreneurship"
  },
  {
    "code": "ST2059",
    "subjects": [
      "Agriculture",
      "Chemistry",
      "Computer Studies"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "AS1032",
    "subjects": [
      "Fine Arts",
      "Mandarine Chinese",
      "Music & Dance"
    ],
    "cluster": "Creative Arts and Entertainment"
  },
  {
    "code": "ST1016",
    "subjects": [
      "Advanced Mathematics",
      "Chemistry",
      "Geography"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "SS2013",
    "subjects": [
      "General Science",
      "Geography",
      "History & Citizenship"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "AS1044",
    "subjects": [
      "French",
      "Music & Dance",
      "Theatre & Film"
    ],
    "cluster": "Creative Arts and Entertainment"
  },
  {
    "code": "SS2044",
    "subjects": [
      "Geography",
      "German",
      "Hindu Religious Education"
    ],
    "cluster": "Law, Governance and Security"
  },
  {
    "code": "SS2039",
    "subjects": [
      "French",
      "Geography",
      "Islamic Religious Education"
    ],
    "cluster": "Law, Governance and Security"
  },
  {
    "code": "ST2020",
    "subjects": [
      "Aviation",
      "Computer Studies",
      "Home Science"
    ],
    "cluster": "Health Sciences"
  },
  {
    "code": "AS1029",
    "subjects": [
      "Fine Arts",
      "German",
      "Music & Dance"
    ],
    "cluster": "Creative Arts and Entertainment"
  },
  {
    "code": "ST1043",
    "subjects": [
      "Aviation",
      "Biology",
      "Chemistry"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "ST3024",
    "subjects": [
      "Advanced Mathematics",
      "Electricity",
      "Geography"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "ST3054",
    "subjects": [
      "Chemistry",
      "Geography",
      "Marine & Fisheries"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "ST2092",
    "subjects": [
      "Agriculture",
      "Home Science",
      "Metal Work"
    ],
    "cluster": "Health Sciences"
  },
  {
    "code": "SS1058",
    "subjects": [
      "Arabic",
      "Computer Studies",
      "Kenya Sign Language"
    ],
    "cluster": "Information and Communication Technology (ICT)"
  },
  {
    "code": "ST2017",
    "subjects": [
      "Computer Studies",
      "Geography",
      "Metal Work"
    ],
    "cluster": "Information and Communication Technology (ICT)"
  },
  {
    "code": "ST3022",
    "subjects": [
      "Electricity",
      "Geography",
      "Marine & Fisheries"
    ],
    "cluster": "Marine and Blue Economy"
  },
  {
    "code": "ST1022",
    "subjects": [
      "Advanced Mathematics",
      "Chemistry",
      "Wood Work"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "SS1043",
    "subjects": [
      "Arabic",
      "Fasihi ya Kiswahili",
      "Indigenous Language"
    ],
    "cluster": "Creative Arts and Entertainment"
  },
  {
    "code": "ST2083",
    "subjects": [
      "Agriculture",
      "Building & Construction",
      "Home Science"
    ],
    "cluster": "Health Sciences"
  },
  {
    "code": "ST3053",
    "subjects": [
      "General Science",
      "Media Technology",
      "Wood Work"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "ST2090",
    "subjects": [
      "Agriculture",
      "Home Science",
      "Marine & Fisheries"
    ],
    "cluster": "Health Sciences"
  },
  {
    "code": "ST3006",
    "subjects": [
      "Computer Studies",
      "Electricity",
      "Geography"
    ],
    "cluster": "Information and Communication Technology (ICT)"
  },
  {
    "code": "SS1011",
    "subjects": [
      "Arabic",
      "French",
      "Hindu Religious Education"
    ],
    "cluster": "Law, Governance and Security"
  },
  {
    "code": "ST2024",
    "subjects": [
      "Chemistry",
      "Computer Studies",
      "Home Science"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "ST3082",
    "subjects": [
      "Geography",
      "Media Technology",
      "Physics"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "ST3038",
    "subjects": [
      "Business Studies",
      "Physics",
      "Wood Work"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "ST3107",
    "subjects": [
      "Business Studies",
      "Chemistry",
      "Power Mechanics"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "SS1019",
    "subjects": [
      "Advanced Mathematics",
      "Arabic",
      "French"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "ST1008",
    "subjects": [
      "Advanced Mathematics",
      "Biology",
      "Power Mechanics"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "SS2018",
    "subjects": [
      "Fasihi ya Kiswahili",
      "Geography",
      "History & Citizenship"
    ],
    "cluster": "Creative Arts and Entertainment"
  },
  {
    "code": "ST2095",
    "subjects": [
      "Agriculture",
      "Home Science",
      "Wood Work"
    ],
    "cluster": "Health Sciences"
  },
  {
    "code": "SS1050",
    "subjects": [
      "French",
      "German",
      "Islamic Religious Education"
    ],
    "cluster": "Law, Governance and Security"
  },
  {
    "code": "ST2060",
    "subjects": [
      "Agriculture",
      "Computer Studies",
      "Electricity"
    ],
    "cluster": "Information and Communication Technology (ICT)"
  },
  {
    "code": "ST3085",
    "subjects": [
      "Business Studies",
      "Chemistry",
      "Metal Work"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "SS1064",
    "subjects": [
      "Arabic",
      "French",
      "Kenya Sign Language"
    ],
    "cluster": "Law, Governance and Security"
  },
  {
    "code": "AS1009",
    "subjects": [
      "Fine Arts",
      "French",
      "Theatre & Film"
    ],
    "cluster": "Creative Arts and Entertainment"
  },
  {
    "code": "ST3018",
    "subjects": [
      "Geography",
      "Home Science",
      "Power Mechanics"
    ],
    "cluster": "Health Sciences"
  },
  {
    "code": "ST2009",
    "subjects": [
      "Business Studies",
      "Computer Studies",
      "Wood Work"
    ],
    "cluster": "Business, Finance and Entrepreneurship"
  },
  {
    "code": "ST2047",
    "subjects": [
      "Agriculture",
      "Business Studies",
      "Computer Studies"
    ],
    "cluster": "Business, Finance and Entrepreneurship"
  },
  {
    "code": "ST2043",
    "subjects": [
      "Agriculture",
      "Aviation",
      "Business Studies"
    ],
    "cluster": "Business, Finance and Entrepreneurship"
  },
  {
    "code": "ST3034",
    "subjects": [
      "Business Studies",
      "Home Science",
      "Wood Work"
    ],
    "cluster": "Health Sciences"
  },
  {
    "code": "SS1074",
    "subjects": [
      "Advanced Mathematics",
      "Arabic",
      "Kenya Sign Language"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "ST1015",
    "subjects": [
      "Advanced Mathematics",
      "Chemistry",
      "Electricity"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "ST1007",
    "subjects": [
      "Advanced Mathematics",
      "Biology",
      "Physics"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "AS2003",
    "subjects": [
      "Biology",
      "Computer Studies",
      "Sports & Recreation"
    ],
    "cluster": "Health Sciences"
  },
  {
    "code": "AS1019",
    "subjects": [
      "Biology",
      "Fine Arts",
      "Music & Dance"
    ],
    "cluster": "Health Sciences"
  },
  {
    "code": "ST2028",
    "subjects": [
      "Computer Studies",
      "Home Science",
      "Marine & Fisheries"
    ],
    "cluster": "Health Sciences"
  },
  {
    "code": "ST1024",
    "subjects": [
      "Advanced Mathematics",
      "Aviation",
      "General Science"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "ST1034",
    "subjects": [
      "Advanced Mathematics",
      "Computer Studies",
      "Physics"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "SS2094",
    "subjects": [
      "Arabic",
      "Business Studies",
      "History & Citizenship"
    ],
    "cluster": "Business, Finance and Entrepreneurship"
  },
  {
    "code": "SS1025",
    "subjects": [
      "Fasihi ya Kiswahili",
      "German",
      "Indigenous Language"
    ],
    "cluster": "Creative Arts and Entertainment"
  },
  {
    "code": "SS2026",
    "subjects": [
      "Arabic",
      "Geography",
      "History & Citizenship"
    ],
    "cluster": "Law, Governance and Security"
  },
  {
    "code": "SS2097",
    "subjects": [
      "Business Studies",
      "French",
      "History & Citizenship"
    ],
    "cluster": "Business, Finance and Entrepreneurship"
  },
  {
    "code": "ST3103",
    "subjects": [
      "Advanced Mathematics",
      "Geography",
      "Metal Work"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "ST3079",
    "subjects": [
      "Computer Studies",
      "Geography",
      "Media Technology"
    ],
    "cluster": "Information and Communication Technology (ICT)"
  },
  {
    "code": "ST3099",
    "subjects": [
      "Chemistry",
      "Geography",
      "Metal Work"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "ST3017",
    "subjects": [
      "Chemistry",
      "Electricity",
      "Geography"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "ST2078",
    "subjects": [
      "Agriculture",
      "Geography",
      "Wood Work"
    ],
    "cluster": "Construction and Built Environment"
  },
  {
    "code": "ST3060",
    "subjects": [
      "Geography",
      "Home Science",
      "Wood Work"
    ],
    "cluster": "Health Sciences"
  },
  {
    "code": "ST3014",
    "subjects": [
      "Biology",
      "Electricity",
      "Geography"
    ],
    "cluster": "Health Sciences"
  },
  {
    "code": "ST3086",
    "subjects": [
      "Business Studies",
      "General Science",
      "Metal Work"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "SS1055",
    "subjects": [
      "French",
      "Geography",
      "Mandarine Chinese"
    ],
    "cluster": "Hospitality, Tourism and Foreign Languages"
  },
  {
    "code": "ST3016",
    "subjects": [
      "Computer Studies",
      "Geography",
      "Power Mechanics"
    ],
    "cluster": "Information and Communication Technology (ICT)"
  },
  {
    "code": "ST1023",
    "subjects": [
      "Advanced Mathematics",
      "Agriculture",
      "General Science"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "ST2010",
    "subjects": [
      "Aviation",
      "Computer Studies",
      "Geography"
    ],
    "cluster": "Information and Communication Technology (ICT)"
  },
  {
    "code": "ST3083",
    "subjects": [
      "Aviation",
      "Business Studies",
      "Metal Work"
    ],
    "cluster": "Business, Finance and Entrepreneurship"
  },
  {
    "code": "AS2001",
    "subjects": [
      "Arabic",
      "Biology",
      "Sports & Recreation"
    ],
    "cluster": "Health Sciences"
  },
  {
    "code": "AS1011",
    "subjects": [
      "Fine Arts",
      "Geography",
      "Theatre & Film"
    ],
    "cluster": "Creative Arts and Entertainment"
  },
  {
    "code": "AS1030",
    "subjects": [
      "Fine Arts",
      "History & Citizenship",
      "Music & Dance"
    ],
    "cluster": "Creative Arts and Entertainment"
  },
  {
    "code": "ST3046",
    "subjects": [
      "General Science",
      "Geography",
      "Wood Work"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "AS1039",
    "subjects": [
      "Computer Studies",
      "Music & Dance",
      "Theatre & Film"
    ],
    "cluster": "Creative Arts and Entertainment"
  },
  {
    "code": "ST3097",
    "subjects": [
      "General Science",
      "Media Technology",
      "Metal Work"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "ST2055",
    "subjects": [
      "Agriculture",
      "Business Studies",
      "Wood Work"
    ],
    "cluster": "Business, Finance and Entrepreneurship"
  },
  {
    "code": "ST2001",
    "subjects": [
      "Business Studies",
      "Computer Studies",
      "Electricity"
    ],
    "cluster": "Business, Finance and Entrepreneurship"
  },
  {
    "code": "ST2025",
    "subjects": [
      "Computer Studies",
      "Electricity",
      "Home Science"
    ],
    "cluster": "Health Sciences"
  },
  {
    "code": "ST1033",
    "subjects": [
      "Advanced Mathematics",
      "Business Studies",
      "Physics"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "SS1057",
    "subjects": [
      "Arabic",
      "Business Studies",
      "Kenya Sign Language"
    ],
    "cluster": "Business, Finance and Entrepreneurship"
  },
  {
    "code": "ST2093",
    "subjects": [
      "Agriculture",
      "Home Science",
      "Physics"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "AS1018",
    "subjects": [
      "Arabic",
      "Fine Arts",
      "Music & Dance"
    ],
    "cluster": "Creative Arts and Entertainment"
  },
  {
    "code": "AS1023",
    "subjects": [
      "Fine Arts",
      "Islamic Religious Education",
      "Music & Dance"
    ],
    "cluster": "Creative Arts and Entertainment"
  },
  {
    "code": "ST3032",
    "subjects": [
      "Business Studies",
      "Geography",
      "Wood Work"
    ],
    "cluster": "Business, Finance and Entrepreneurship"
  },
  {
    "code": "ST3061",
    "subjects": [
      "Geography",
      "Marine & Fisheries",
      "Media Technology"
    ],
    "cluster": "Marine and Blue Economy"
  },
  {
    "code": "ST3104",
    "subjects": [
      "Geography",
      "Media Technology",
      "Metal Work"
    ],
    "cluster": "Information and Communication Technology (ICT)"
  },
  {
    "code": "ST3027",
    "subjects": [
      "Biology",
      "Business Studies",
      "Wood Work"
    ],
    "cluster": "Health Sciences"
  },
  {
    "code": "SS1046",
    "subjects": [
      "Advanced Mathematics",
      "French",
      "German"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "ST3051",
    "subjects": [
      "Advanced Mathematics",
      "General Science",
      "Wood Work"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "ST3035",
    "subjects": [
      "Business Studies",
      "Marine & Fisheries",
      "Wood Work"
    ],
    "cluster": "Business, Finance and Entrepreneurship"
  },
  {
    "code": "ST1010",
    "subjects": [
      "Advanced Mathematics",
      "Agriculture",
      "Chemistry"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "SS1051",
    "subjects": [
      "French",
      "Geography",
      "German"
    ],
    "cluster": "Hospitality, Tourism and Foreign Languages"
  },
  {
    "code": "SS2010",
    "subjects": [
      "Geography",
      "German",
      "History & Citizenship"
    ],
    "cluster": "Law, Governance and Security"
  },
  {
    "code": "ST3071",
    "subjects": [
      "Geography",
      "Physics",
      "Wood Work"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "SS2029",
    "subjects": [
      "Arabic",
      "Christian Religious Education",
      "Geography"
    ],
    "cluster": "Law, Governance and Security"
  },
  {
    "code": "ST2069",
    "subjects": [
      "Agriculture",
      "Computer Studies",
      "Wood Work"
    ],
    "cluster": "Construction and Built Environment"
  },
  {
    "code": "AS1037",
    "subjects": [
      "Biology",
      "Music & Dance",
      "Theatre & Film"
    ],
    "cluster": "Health Sciences"
  },
  {
    "code": "AS1047",
    "subjects": [
      "German",
      "Music & Dance",
      "Theatre & Film"
    ],
    "cluster": "Creative Arts and Entertainment"
  },
  {
    "code": "ST2076",
    "subjects": [
      "Agriculture",
      "Geography",
      "Power Mechanics"
    ],
    "cluster": "Energy and Power"
  },
  {
    "code": "ST3073",
    "subjects": [
      "Business Studies",
      "Media Technology",
      "Physics"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "ST3031",
    "subjects": [
      "Business Studies",
      "General Science",
      "Wood Work"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "SS2025",
    "subjects": [
      "Business Studies",
      "Geography",
      "History & Citizenship"
    ],
    "cluster": "Business, Finance and Entrepreneurship"
  },
  {
    "code": "ST1006",
    "subjects": [
      "Advanced Mathematics",
      "Biology",
      "Metal Work"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "AS1024",
    "subjects": [
      "Fine Arts",
      "Hindu Religious Education",
      "Music & Dance"
    ],
    "cluster": "Creative Arts and Entertainment"
  },
  {
    "code": "AS1050",
    "subjects": [
      "Mandarine Chinese",
      "Music & Dance",
      "Theatre & Film"
    ],
    "cluster": "Creative Arts and Entertainment"
  },
  {
    "code": "ST1011",
    "subjects": [
      "Advanced Mathematics",
      "Aviation",
      "Chemistry"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "AS1015",
    "subjects": [
      "Fine Arts",
      "Mandarine Chinese",
      "Theatre & Film"
    ],
    "cluster": "Creative Arts and Entertainment"
  },
  {
    "code": "AS1026",
    "subjects": [
      "Fine Arts",
      "French",
      "Music & Dance"
    ],
    "cluster": "Creative Arts and Entertainment"
  },
  {
    "code": "ST3029",
    "subjects": [
      "Business Studies",
      "Chemistry",
      "Wood Work"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "ST1004",
    "subjects": [
      "Advanced Mathematics",
      "Biology",
      "Chemistry"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "ST3062",
    "subjects": [
      "Geography",
      "Marine & Fisheries",
      "Physics"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "ST1038",
    "subjects": [
      "Advanced Mathematics",
      "Marine & Fisheries",
      "Physics"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "SS1070",
    "subjects": [
      "Arabic",
      "Geography",
      "Kenya Sign Language"
    ],
    "cluster": "Law, Governance and Security"
  },
  {
    "code": "ST3095",
    "subjects": [
      "General Science",
      "Marine & Fisheries",
      "Metal Work"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "SS2105",
    "subjects": [
      "Arabic",
      "Business Studies",
      "Hindu Religious Education"
    ],
    "cluster": "Business, Finance and Entrepreneurship"
  },
  {
    "code": "ST2053",
    "subjects": [
      "Agriculture",
      "Business Studies",
      "Physics"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "ST2063",
    "subjects": [
      "Agriculture",
      "Computer Studies",
      "Home Science"
    ],
    "cluster": "Health Sciences"
  },
  {
    "code": "ST3066",
    "subjects": [
      "Business Studies",
      "Chemistry",
      "Media Technology"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "AS2014",
    "subjects": [
      "Advanced Mathematics",
      "Biology",
      "Sports & Recreation"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "SS2031",
    "subjects": [
      "Arabic",
      "Geography",
      "Hindu Religious Education"
    ],
    "cluster": "Law, Governance and Security"
  },
  {
    "code": "SS1039",
    "subjects": [
      "Fasihi ya Kiswahili",
      "Geography",
      "Kenya Sign Language"
    ],
    "cluster": "Creative Arts and Entertainment"
  },
  {
    "code": "ST1041",
    "subjects": [
      "Advanced Mathematics",
      "Physics",
      "Wood Work"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "ST3096",
    "subjects": [
      "Advanced Mathematics",
      "General Science",
      "Metal Work"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "SS1049",
    "subjects": [
      "French",
      "German",
      "History & Citizenship"
    ],
    "cluster": "Law, Governance and Security"
  },
  {
    "code": "SS1047",
    "subjects": [
      "Computer Studies",
      "French",
      "German"
    ],
    "cluster": "Information and Communication Technology (ICT)"
  },
  {
    "code": "AS1045",
    "subjects": [
      "General Science",
      "Music & Dance",
      "Theatre & Film"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "ST2085",
    "subjects": [
      "Agriculture",
      "Business Studies",
      "Home Science"
    ],
    "cluster": "Health Sciences"
  },
  {
    "code": "ST1031",
    "subjects": [
      "Advanced Mathematics",
      "Aviation",
      "Physics"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "ST3043",
    "subjects": [
      "Computer Studies",
      "General Science",
      "Wood Work"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "ST2030",
    "subjects": [
      "Computer Studies",
      "Home Science",
      "Metal Work"
    ],
    "cluster": "Health Sciences"
  },
  {
    "code": "ST3023",
    "subjects": [
      "Geography",
      "Physics",
      "Power Mechanics"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "ST3078",
    "subjects": [
      "Chemistry",
      "Geography",
      "Media Technology"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "ST3055",
    "subjects": [
      "Biology",
      "Geography",
      "Wood Work"
    ],
    "cluster": "Health Sciences"
  },
  {
    "code": "ST2046",
    "subjects": [
      "Agriculture",
      "Business Studies",
      "Chemistry"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "ST1047",
    "subjects": [
      "Advanced Mathematics",
      "Biology",
      "Marine & Fisheries"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "ST3094",
    "subjects": [
      "General Science",
      "Home Science",
      "Metal Work"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "SS1067",
    "subjects": [
      "History & Citizenship",
      "Indigenous Language",
      "Literature"
    ],
    "cluster": "Law, Governance and Security"
  },
  {
    "code": "AS1003",
    "subjects": [
      "Business Studies",
      "Fine Arts",
      "Theatre & Film"
    ],
    "cluster": "Creative Arts and Entertainment"
  },
  {
    "code": "SS1009",
    "subjects": [
      "Arabic",
      "French",
      "Islamic Religious Education"
    ],
    "cluster": "Law, Governance and Security"
  },
  {
    "code": "AS1016",
    "subjects": [
      "Advanced Mathematics",
      "Fine Arts",
      "Theatre & Film"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "ST2051",
    "subjects": [
      "Agriculture",
      "Business Studies",
      "Marine & Fisheries"
    ],
    "cluster": "Business, Finance and Entrepreneurship"
  },
  {
    "code": "ST2087",
    "subjects": [
      "Agriculture",
      "Electricity",
      "Home Science"
    ],
    "cluster": "Health Sciences"
  },
  {
    "code": "ST2015",
    "subjects": [
      "Computer Studies",
      "Geography",
      "Marine & Fisheries"
    ],
    "cluster": "Marine and Blue Economy"
  },
  {
    "code": "ST1009",
    "subjects": [
      "Advanced Mathematics",
      "Biology",
      "Wood Work"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "ST2081",
    "subjects": [
      "Agriculture",
      "Biology",
      "Home Science"
    ],
    "cluster": "Health Sciences"
  },
  {
    "code": "ST3042",
    "subjects": [
      "Business Studies",
      "Marine & Fisheries",
      "Physics"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "ST2066",
    "subjects": [
      "Agriculture",
      "Computer Studies",
      "Metal Work"
    ],
    "cluster": "Information and Communication Technology (ICT)"
  },
  {
    "code": "ST2014",
    "subjects": [
      "Computer Studies",
      "General Science",
      "Geography"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "ST1028",
    "subjects": [
      "Advanced Mathematics",
      "General Science",
      "Geography"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "ST3115",
    "subjects": [
      "Business Studies",
      "Physics",
      "Power Mechanics"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "ST3117",
    "subjects": [
      "General Science",
      "Home Science",
      "Power Mechanics"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "ST1030",
    "subjects": [
      "Advanced Mathematics",
      "Agriculture",
      "Physics"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "AS2002",
    "subjects": [
      "Biology",
      "Business Studies",
      "Sports & Recreation"
    ],
    "cluster": "Health Sciences"
  },
  {
    "code": "SS1017",
    "subjects": [
      "Arabic",
      "French",
      "Mandarine Chinese"
    ],
    "cluster": "Law, Governance and Security"
  },
  {
    "code": "ST3110",
    "subjects": [
      "Business Studies",
      "Geography",
      "Power Mechanics"
    ],
    "cluster": "Business, Finance and Entrepreneurship"
  },
  {
    "code": "AS2024",
    "subjects": [
      "General Science",
      "Geography",
      "Sports & Recreation"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "ST2011",
    "subjects": [
      "Biology",
      "Computer Studies",
      "Geography"
    ],
    "cluster": "Health Sciences"
  },
  {
    "code": "SS1075",
    "subjects": [
      "Business Studies",
      "French",
      "Mandarine Chinese"
    ],
    "cluster": "Business, Finance and Entrepreneurship"
  },
  {
    "code": "ST3063",
    "subjects": [
      "Geography",
      "Marine & Fisheries",
      "Wood Work"
    ],
    "cluster": "Marine and Blue Economy"
  },
  {
    "code": "AS1017",
    "subjects": [
      "Fine Arts",
      "Sports & Recreation",
      "Theatre & Film"
    ],
    "cluster": "Creative Arts and Entertainment"
  },
  {
    "code": "SS1052",
    "subjects": [
      "French",
      "German",
      "Hindu Religious Education"
    ],
    "cluster": "Law, Governance and Security"
  },
  {
    "code": "SS1016",
    "subjects": [
      "Arabic",
      "French",
      "History & Citizenship"
    ],
    "cluster": "Law, Governance and Security"
  },
  {
    "code": "ST2052",
    "subjects": [
      "Agriculture",
      "Business Studies",
      "Metal Work"
    ],
    "cluster": "Business, Finance and Entrepreneurship"
  },
  {
    "code": "ST3010",
    "subjects": [
      "Advanced Mathematics",
      "Electricity",
      "General Science"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "SS2038",
    "subjects": [
      "French",
      "Geography",
      "Hindu Religious Education"
    ],
    "cluster": "Law, Governance and Security"
  },
  {
    "code": "ST3026",
    "subjects": [
      "Electricity",
      "Geography",
      "Physics"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "ST1045",
    "subjects": [
      "Biology",
      "Business Studies",
      "Chemistry"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "ST3109",
    "subjects": [
      "Business Studies",
      "General Science",
      "Power Mechanics"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "AS1010",
    "subjects": [
      "Fine Arts",
      "General Science",
      "Theatre & Film"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "ST2086",
    "subjects": [
      "Agriculture",
      "Chemistry",
      "Home Science"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "AS1046",
    "subjects": [
      "Geography",
      "Music & Dance",
      "Theatre & Film"
    ],
    "cluster": "Creative Arts and Entertainment"
  },
  {
    "code": "SS2046",
    "subjects": [
      "Christian Religious Education",
      "Geography",
      "German"
    ],
    "cluster": "Law, Governance and Security"
  },
  {
    "code": "AS1028",
    "subjects": [
      "Fine Arts",
      "Geography",
      "Music & Dance"
    ],
    "cluster": "Creative Arts and Entertainment"
  },
  {
    "code": "SS1032",
    "subjects": [
      "Fasihi ya Kiswahili",
      "French",
      "Indigenous Language"
    ],
    "cluster": "Creative Arts and Entertainment"
  },
  {
    "code": "ST1014",
    "subjects": [
      "Advanced Mathematics",
      "Chemistry",
      "Computer Studies"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "ST3045",
    "subjects": [
      "General Science",
      "Home Science",
      "Marine & Fisheries"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "AS2007",
    "subjects": [
      "Biology",
      "Fasihi ya Kiswahili",
      "Sports & Recreation"
    ],
    "cluster": "Health Sciences"
  },
  {
    "code": "ST2089",
    "subjects": [
      "Agriculture",
      "Geography",
      "Home Science"
    ],
    "cluster": "Health Sciences"
  },
  {
    "code": "ST3075",
    "subjects": [
      "General Science",
      "Home Science",
      "Media Technology"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "ST1002",
    "subjects": [
      "Advanced Mathematics",
      "Aviation",
      "Biology"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "AS1052",
    "subjects": [
      "Music & Dance",
      "Sports & Recreation",
      "Theatre & Film"
    ],
    "cluster": "Creative Arts and Entertainment"
  },
  {
    "code": "ST2038",
    "subjects": [
      "Advanced Mathematics",
      "Biology",
      "Computer Studies"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "ST3106",
    "subjects": [
      "Biology",
      "Business Studies",
      "Power Mechanics"
    ],
    "cluster": "Health Sciences"
  },
  {
    "code": "ST3101",
    "subjects": [
      "Geography",
      "Home Science",
      "Metal Work"
    ],
    "cluster": "Health Sciences"
  },
  {
    "code": "ST3007",
    "subjects": [
      "Electricity",
      "Geography",
      "Home Science"
    ],
    "cluster": "Health Sciences"
  },
  {
    "code": "ST3056",
    "subjects": [
      "Chemistry",
      "Geography",
      "Wood Work"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "ST1001",
    "subjects": [
      "Advanced Mathematics",
      "Agriculture",
      "Biology"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "ST3009",
    "subjects": [
      "Electricity",
      "General Science",
      "Marine & Fisheries"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "AS2012",
    "subjects": [
      "Biology",
      "Literature in English",
      "Sports & Recreation"
    ],
    "cluster": "Health Sciences"
  },
  {
    "code": "ST1021",
    "subjects": [
      "Advanced Mathematics",
      "Chemistry",
      "Power Mechanics"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "AS1008",
    "subjects": [
      "Fasihi ya Kiswahili",
      "Fine Arts",
      "Theatre & Film"
    ],
    "cluster": "Creative Arts and Entertainment"
  },
  {
    "code": "ST2018",
    "subjects": [
      "Computer Studies",
      "Geography",
      "Physics"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "SS1076",
    "subjects": [
      "Computer Studies",
      "French",
      "Mandarine Chinese"
    ],
    "cluster": "Information and Communication Technology (ICT)"
  },
  {
    "code": "ST2064",
    "subjects": [
      "Agriculture",
      "Computer Studies",
      "Marine & Fisheries"
    ],
    "cluster": "Marine and Blue Economy"
  },
  {
    "code": "SS1066",
    "subjects": [
      "Arabic",
      "General Science",
      "Kenya Sign Language"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "ST2071",
    "subjects": [
      "Agriculture",
      "Biology",
      "Geography"
    ],
    "cluster": "Health Sciences"
  },
  {
    "code": "ST2062",
    "subjects": [
      "Agriculture",
      "Computer Studies",
      "Geography"
    ],
    "cluster": "Information and Communication Technology (ICT)"
  },
  {
    "code": "ST2080",
    "subjects": [
      "Agriculture",
      "Electricity",
      "Geography"
    ],
    "cluster": "Energy and Power"
  },
  {
    "code": "SS1045",
    "subjects": [
      "Business Studies",
      "French",
      "German"
    ],
    "cluster": "Business, Finance and Entrepreneurship"
  },
  {
    "code": "ST2039",
    "subjects": [
      "Advanced Mathematics",
      "Biology",
      "Electricity"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "AS2025",
    "subjects": [
      "General Science",
      "German",
      "Sports & Recreation"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "ST1046",
    "subjects": [
      "Biology",
      "Chemistry",
      "Computer Studies"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "ST3080",
    "subjects": [
      "Geography",
      "Home Science",
      "Media Technology"
    ],
    "cluster": "Health Sciences"
  },
  {
    "code": "AS2010",
    "subjects": [
      "Biology",
      "German",
      "Sports & Recreation"
    ],
    "cluster": "Health Sciences"
  },
  {
    "code": "ST2023",
    "subjects": [
      "Business Studies",
      "Computer Studies",
      "Home Science"
    ],
    "cluster": "Health Sciences"
  },
  {
    "code": "ST3057",
    "subjects": [
      "Computer Studies",
      "Geography",
      "Wood Work"
    ],
    "cluster": "Construction and Built Environment"
  },
  {
    "code": "ST2006",
    "subjects": [
      "Business Studies",
      "Computer Studies",
      "Metal Work"
    ],
    "cluster": "Business, Finance and Entrepreneurship"
  },
  {
    "code": "ST1019",
    "subjects": [
      "Advanced Mathematics",
      "Chemistry",
      "Metal Work"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "AS2008",
    "subjects": [
      "Biology",
      "French",
      "Sports & Recreation"
    ],
    "cluster": "Health Sciences"
  },
  {
    "code": "ST2094",
    "subjects": [
      "Agriculture",
      "Home Science",
      "Power Mechanics"
    ],
    "cluster": "Health Sciences"
  },
  {
    "code": "ST3021",
    "subjects": [
      "Geography",
      "Media Technology",
      "Power Mechanics"
    ],
    "cluster": "Information and Communication Technology (ICT)"
  },
  {
    "code": "ST3058",
    "subjects": [
      "Geography",
      "Home Science",
      "Marine & Fisheries"
    ],
    "cluster": "Health Sciences"
  },
  {
    "code": "SS2113",
    "subjects": [
      "Business Studies",
      "French",
      "Islamic Religious Education"
    ],
    "cluster": "Business, Finance and Entrepreneurship"
  },
  {
    "code": "SS2068",
    "subjects": [
      "Business Studies",
      "French",
      "Geography"
    ],
    "cluster": "Business, Finance and Entrepreneurship"
  },
  {
    "code": "AS2015",
    "subjects": [
      "Biology",
      "Media Technology",
      "Sports & Recreation"
    ],
    "cluster": "Health Sciences"
  },
  {
    "code": "ST1040",
    "subjects": [
      "Advanced Mathematics",
      "Physics",
      "Power Mechanics"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "ST2031",
    "subjects": [
      "Computer Studies",
      "Home Science",
      "Physics"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "ST3048",
    "subjects": [
      "General Science",
      "Home Science",
      "Wood Work"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "ST2013",
    "subjects": [
      "Chemistry",
      "Computer Studies",
      "Geography"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "ST3064",
    "subjects": [
      "Advanced Mathematics",
      "Geography",
      "Wood Work"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "ST3019",
    "subjects": [
      "Geography",
      "Marine & Fisheries",
      "Power Mechanics"
    ],
    "cluster": "Marine and Blue Economy"
  },
  {
    "code": "ST2084",
    "subjects": [
      "Agriculture",
      "Geography",
      "Marine & Fisheries"
    ],
    "cluster": "Marine and Blue Economy"
  },
  {
    "code": "SS2104",
    "subjects": [
      "Arabic",
      "Business Studies",
      "Islamic Religious Education"
    ],
    "cluster": "Business, Finance and Entrepreneurship"
  },
  {
    "code": "ST3098",
    "subjects": [
      "Biology",
      "Geography",
      "Metal Work"
    ],
    "cluster": "Health Sciences"
  },
  {
    "code": "ST3049",
    "subjects": [
      "General Science",
      "Marine & Fisheries",
      "Wood Work"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "ST2088",
    "subjects": [
      "Agriculture",
      "General Science",
      "Home Science"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "ST3092",
    "subjects": [
      "Business Studies",
      "Metal Work",
      "Physics"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "SS2030",
    "subjects": [
      "Arabic",
      "Geography",
      "Islamic Religious Education"
    ],
    "cluster": "Law, Governance and Security"
  },
  {
    "code": "SS2066",
    "subjects": [
      "Business Studies",
      "Geography",
      "German"
    ],
    "cluster": "Business, Finance and Entrepreneurship"
  },
  {
    "code": "ST1013",
    "subjects": [
      "Advanced Mathematics",
      "Business Studies",
      "Chemistry"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "AS1020",
    "subjects": [
      "Business Studies",
      "Fine Arts",
      "Music & Dance"
    ],
    "cluster": "Creative Arts and Entertainment"
  },
  {
    "code": "SS1056",
    "subjects": [
      "French",
      "History & Citizenship",
      "Mandarine Chinese"
    ],
    "cluster": "Law, Governance and Security"
  },
  {
    "code": "SS2084",
    "subjects": [
      "Arabic",
      "Business Studies",
      "Geography"
    ],
    "cluster": "Business, Finance and Entrepreneurship"
  },
  {
    "code": "SS1072",
    "subjects": [
      "Arabic",
      "History & Citizenship",
      "Kenya Sign Language"
    ],
    "cluster": "Law, Governance and Security"
  },
  {
    "code": "ST2032",
    "subjects": [
      "Computer Studies",
      "Home Science",
      "Power Mechanics"
    ],
    "cluster": "Health Sciences"
  },
  {
    "code": "SS1004",
    "subjects": [
      "Arabic",
      "Business Studies",
      "French"
    ],
    "cluster": "Business, Finance and Entrepreneurship"
  },
  {
    "code": "ST2054",
    "subjects": [
      "Agriculture",
      "Business Studies",
      "Power Mechanics"
    ],
    "cluster": "Business, Finance and Entrepreneurship"
  },
  {
    "code": "AS1004",
    "subjects": [
      "Computer Studies",
      "Fine Arts",
      "Theatre & Film"
    ],
    "cluster": "Creative Arts and Entertainment"
  },
  {
    "code": "SS2040",
    "subjects": [
      "Christian Religious Education",
      "French",
      "Geography"
    ],
    "cluster": "Law, Governance and Security"
  },
  {
    "code": "SS2067",
    "subjects": [
      "Business Studies",
      "General Science",
      "Geography"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "ST3025",
    "subjects": [
      "Electricity",
      "Geography",
      "Media Technology"
    ],
    "cluster": "Information and Communication Technology (ICT)"
  },
  {
    "code": "SS2016",
    "subjects": [
      "French",
      "Geography",
      "History & Citizenship"
    ],
    "cluster": "Law, Governance and Security"
  },
  {
    "code": "ST3087",
    "subjects": [
      "Business Studies",
      "Geography",
      "Metal Work"
    ],
    "cluster": "Business, Finance and Entrepreneurship"
  },
  {
    "code": "ST2079",
    "subjects": [
      "Agriculture",
      "Aviation",
      "Home Science"
    ],
    "cluster": "Health Sciences"
  },
  {
    "code": "SS2073",
    "subjects": [
      "Business Studies",
      "Fasihi ya Kiswahili",
      "Geography"
    ],
    "cluster": "Creative Arts and Entertainment"
  },
  {
    "code": "SS1015",
    "subjects": [
      "Arabic",
      "French",
      "Geography"
    ],
    "cluster": "Law, Governance and Security"
  },
  {
    "code": "SS2114",
    "subjects": [
      "Business Studies",
      "French",
      "Hindu Religious Education"
    ],
    "cluster": "Business, Finance and Entrepreneurship"
  },
  {
    "code": "ST1036",
    "subjects": [
      "Advanced Mathematics",
      "Geography",
      "Physics"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "SS1054",
    "subjects": [
      "French",
      "General Science",
      "Mandarine Chinese"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "AS1014",
    "subjects": [
      "Fine Arts",
      "Literature in English",
      "Theatre & Film"
    ],
    "cluster": "Creative Arts and Entertainment"
  },
  {
    "code": "ST2044",
    "subjects": [
      "Agriculture",
      "Biology",
      "Business Studies"
    ],
    "cluster": "Health Sciences"
  },
  {
    "code": "AS1013",
    "subjects": [
      "Fine Arts",
      "History & Citizenship",
      "Theatre & Film"
    ],
    "cluster": "Creative Arts and Entertainment"
  },
  {
    "code": "SS1035",
    "subjects": [
      "Fasihi ya Kiswahili",
      "French",
      "Kenya Sign Language"
    ],
    "cluster": "Creative Arts and Entertainment"
  },
  {
    "code": "ST3088",
    "subjects": [
      "Business Studies",
      "Home Science",
      "Metal Work"
    ],
    "cluster": "Health Sciences"
  },
  {
    "code": "ST1017",
    "subjects": [
      "Advanced Mathematics",
      "Chemistry",
      "Home Science"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "ST2003",
    "subjects": [
      "Business Studies",
      "Computer Studies",
      "Geography"
    ],
    "cluster": "Business, Finance and Entrepreneurship"
  },
  {
    "code": "ST2041",
    "subjects": [
      "Advanced Mathematics",
      "Biology",
      "Home Science"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "SS1021",
    "subjects": [
      "Arabic",
      "Fasihi ya Kiswahili",
      "Kenya Sign Language"
    ],
    "cluster": "Creative Arts and Entertainment"
  },
  {
    "code": "ST2057",
    "subjects": [
      "Agriculture",
      "Biology",
      "Computer Studies"
    ],
    "cluster": "Health Sciences"
  },
  {
    "code": "ST1037",
    "subjects": [
      "Advanced Mathematics",
      "Home Science",
      "Physics"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "ST2082",
    "subjects": [
      "Agriculture",
      "General Science",
      "Geography"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "ST3102",
    "subjects": [
      "Geography",
      "Marine & Fisheries",
      "Metal Work"
    ],
    "cluster": "Marine and Blue Economy"
  },
  {
    "code": "ST2068",
    "subjects": [
      "Agriculture",
      "Computer Studies",
      "Power Mechanics"
    ],
    "cluster": "Information and Communication Technology (ICT)"
  },
  {
    "code": "AS1034",
    "subjects": [
      "Fine Arts",
      "Music & Dance",
      "Sports & Recreation"
    ],
    "cluster": "Creative Arts and Entertainment"
  },
  {
    "code": "AS2023",
    "subjects": [
      "French",
      "General Science",
      "Sports & Recreation"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "AS1035",
    "subjects": [
      "Fine Arts",
      "Music & Dance",
      "Theatre & Film"
    ],
    "cluster": "Creative Arts and Entertainment"
  },
  {
    "code": "AS1006",
    "subjects": [
      "Fine Arts",
      "Islamic Religious Education",
      "Theatre & Film"
    ],
    "cluster": "Creative Arts and Entertainment"
  },
  {
    "code": "AS1025",
    "subjects": [
      "Fasihi ya Kiswahili",
      "Fine Arts",
      "Music & Dance"
    ],
    "cluster": "Creative Arts and Entertainment"
  },
  {
    "code": "AS1031",
    "subjects": [
      "Fine Arts",
      "Literature in English",
      "Music & Dance"
    ],
    "cluster": "Creative Arts and Entertainment"
  },
  {
    "code": "ST3100",
    "subjects": [
      "General Science",
      "Geography",
      "Metal Work"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "ST2074",
    "subjects": [
      "Agriculture",
      "Building & Construction",
      "Geography"
    ],
    "cluster": "Construction and Built Environment"
  },
  {
    "code": "SS1053",
    "subjects": [
      "French",
      "General Science",
      "German"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "ST2073",
    "subjects": [
      "Agriculture",
      "Geography",
      "Metal Work"
    ],
    "cluster": "Agriculture, Food and Natural Resources"
  },
  {
    "code": "ST3037",
    "subjects": [
      "Business Studies",
      "Geography",
      "Marine & Fisheries"
    ],
    "cluster": "Business, Finance and Entrepreneurship"
  },
  {
    "code": "AS2016",
    "subjects": [
      "Arabic",
      "General Science",
      "Sports & Recreation"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "ST2050",
    "subjects": [
      "Agriculture",
      "Business Studies",
      "Geography"
    ],
    "cluster": "Business, Finance and Entrepreneurship"
  },
  {
    "code": "SS2060",
    "subjects": [
      "Business Studies",
      "Geography",
      "Mandarine Chinese"
    ],
    "cluster": "Business, Finance and Entrepreneurship"
  },
  {
    "code": "ST2061",
    "subjects": [
      "Agriculture",
      "Computer Studies",
      "General Science"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "ST3030",
    "subjects": [
      "Business Studies",
      "Chemistry",
      "Marine & Fisheries"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "ST2027",
    "subjects": [
      "Computer Studies",
      "Geography",
      "Home Science"
    ],
    "cluster": "Health Sciences"
  },
  {
    "code": "SS2045",
    "subjects": [
      "Geography",
      "German",
      "Islamic Religious Education"
    ],
    "cluster": "Law, Governance and Security"
  },
  {
    "code": "SS1048",
    "subjects": [
      "Christian Religious Education",
      "French",
      "German"
    ],
    "cluster": "Law, Governance and Security"
  },
  {
    "code": "SS1027",
    "subjects": [
      "Fasihi ya Kiswahili",
      "Geography",
      "Indigenous Language"
    ],
    "cluster": "Creative Arts and Entertainment"
  },
  {
    "code": "ST3077",
    "subjects": [
      "Biology",
      "Geography",
      "Media Technology"
    ],
    "cluster": "Health Sciences"
  },
  {
    "code": "ST2072",
    "subjects": [
      "Advanced Mathematics",
      "Agriculture",
      "Geography"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "ST3039",
    "subjects": [
      "Business Studies",
      "Home Science",
      "Marine & Fisheries"
    ],
    "cluster": "Health Sciences"
  },
  {
    "code": "SS1073",
    "subjects": [
      "Arabic",
      "Kenya Sign Language",
      "Mandarine Chinese"
    ],
    "cluster": "Law, Governance and Security"
  },
  {
    "code": "ST3111",
    "subjects": [
      "Business Studies",
      "Home Science",
      "Power Mechanics"
    ],
    "cluster": "Health Sciences"
  },
  {
    "code": "AS1033",
    "subjects": [
      "Advanced Mathematics",
      "Fine Arts",
      "Music & Dance"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "ST3069",
    "subjects": [
      "Geography",
      "Media Technology",
      "Wood Work"
    ],
    "cluster": "Construction and Built Environment"
  },
  {
    "code": "SS1013",
    "subjects": [
      "Arabic",
      "Indigenous Language",
      "Literature in English"
    ],
    "cluster": "Creative Arts and Entertainment"
  },
  {
    "code": "ST2099",
    "subjects": [
      "Business Studies",
      "Chemistry",
      "Computer Studies"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "ST1020",
    "subjects": [
      "Advanced Mathematics",
      "Chemistry",
      "Physics"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "ST1003",
    "subjects": [
      "Advanced Mathematics",
      "Biology",
      "Business Studies"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "ST3012",
    "subjects": [
      "Electricity",
      "General Science",
      "Media Technology"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "SS1008",
    "subjects": [
      "Arabic",
      "Christian Religious Education",
      "French"
    ],
    "cluster": "Law, Governance and Security"
  },
  {
    "code": "ST3070",
    "subjects": [
      "Business Studies",
      "Home Science",
      "Media Technology"
    ],
    "cluster": "Health Sciences"
  },
  {
    "code": "ST3093",
    "subjects": [
      "Computer Studies",
      "General Science",
      "Metal Work"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "ST2026",
    "subjects": [
      "Computer Studies",
      "General Science",
      "Home Science"
    ],
    "cluster": "Science, Technology, Engineering and Mathematics (STEM)"
  },
  {
    "code": "ST3028",
    "subjects": [
      "Biology",
      "Business Studies",
      "Marine & Fisheries"
    ],
    "cluster": "Health Sciences"
  },
  {
    "code": "ST3052",
    "subjects": [
      "Biology",
      "Geography",
      "Marine & Fisheries"
    ],
    "cluster": "Health Sciences"
  }
];