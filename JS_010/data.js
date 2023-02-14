// https://dev-gang.ru/article/xmlhttprequest-protiv-fetch-api-czto-luczshe-dlja-otpravki-ajax-v-2019-godu-vd0qcrgiq5/
// https://learn.javascript.ru/fetch
// https://habr.com/ru/post/252941/
// https://evilinsult.com/generate_insult.php?lang=en&type=json
const dataApi = `
[
  {
    "number": "2020",
    "language": "en",
    "insult": "You run against God with the horns of your pride up in the air and thus plunge into the abyss of hell. Woe unto you, Antichrist!",
    "created": "2023-02-14 19:09:37",
    "shown": "3397",
    "createdby": "Martin Luther",
    "active": "1",
    "comment": "https://github.com/stechstudio/insult-service"
  },
  {
    "number": "2017",
    "language": "en",
    "insult": "What happened to the house built on sand in Matthew 7 will also happen to you.",
    "created": "2023-02-14 15:51:06",
    "shown": "3398",
    "createdby": "Martin Luther",
    "active": "1",
    "comment": "https://github.com/stechstudio/insult-service/"
  },
  {
    "number": "227",
    "language": "en",
    "insult": "You've got a face like a burst haggis.",
    "created": "2023-02-14 16:35:18",
    "shown": "3659",
    "createdby": "",
    "active": "1",
    "comment": ""
  },
  {
    "number": "2469",
    "language": "en",
    "insult": "You are like the end piece of bread in a loaf, everyone touches you but no one wants you.",
    "created": "2023-02-14 18:12:07",
    "shown": "3497",
    "createdby": "Reddit",
    "active": "1",
    "comment": ""
  },
  {
    "number": "203",
    "language": "en",
    "insult": "You so ugly you made Frankenstein look dreamy",
    "created": "2023-02-14 11:10:05",
    "shown": "4930",
    "createdby": "",
    "active": "1",
    "comment": ""
  },
  {
    "number": "2465",
    "language": "en",
    "insult": "God ruined a perfectly good asshole when he put teeth in your mouth.",
    "created": "2023-02-14 19:32:43",
    "shown": "3348",
    "createdby": "",
    "active": "1",
    "comment": ""
  },
  {
    "number": "1979",
    "language": "en",
    "insult": "Your sin smells to high heaven.",
    "created": "2023-02-14 16:59:19",
    "shown": "3374",
    "createdby": "Martin Luther",
    "active": "1",
    "comment": "https://github.com/stechstudio/insult-service/"
  },
  {
    "number": "2660",
    "language": "en",
    "insult": "Your father is so ugly, if he were muslim he would have to wear a burka.",
    "created": "2023-02-14 19:30:18",
    "shown": "3452",
    "createdby": "",
    "active": "1",
    "comment": ""
  },
  {
    "number": "2042",
    "language": "en",
    "insult": "In appearance and words you simulate modesty, but you are so swollen with haughtiness, arrogance, pride, malice, villainy, rashness, superciliousness, ignorance, and stupidity that there is nothing to surpass you.",
    "created": "2023-02-14 18:15:07",
    "shown": "3441",
    "createdby": "Martin Luther",
    "active": "1",
    "comment": "https://github.com/stechstudio/insult-service"
  }
]
`