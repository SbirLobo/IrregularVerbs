const verbsByCommon = [
  {
    base_form: "to be",
    past_simple: "was, were",
    past_participle: "been",
    french: "être",
  },
  {
    base_form: "to have",
    past_simple: "had",
    past_participle: "had",
    french: "avoir",
  },
  {
    base_form: "to do",
    past_simple: "did",
    past_participle: "done",
    french: "faire",
  },
  {
    base_form: "to say",
    past_simple: "said",
    past_participle: "said",
    french: "dire",
  },
  {
    base_form: "to go",
    past_simple: "went",
    past_participle: "gone",
    french: "aller",
  },
  {
    base_form: "to get",
    past_simple: "got",
    past_participle: "got, gotten",
    french: "obtenir",
  },
  {
    base_form: "to make",
    past_simple: "made",
    past_participle: "made",
    french: "fabriquer",
  },
  {
    base_form: "to know",
    past_simple: "knew",
    past_participle: "known",
    french: "connaître, savoir",
  },
  {
    base_form: "to think",
    past_simple: "thought",
    past_participle: "thought",
    french: "penser",
  },
  {
    base_form: "to take",
    past_simple: "took",
    past_participle: "taken",
    french: "prendre",
  },
  {
    base_form: "to see",
    past_simple: "saw",
    past_participle: "seen",
    french: "voir",
  },
  {
    base_form: "to come",
    past_simple: "came",
    past_participle: "come",
    french: "venir",
  },
  {
    base_form: "to find",
    past_simple: "found",
    past_participle: "found",
    french: "trouver",
  },
  {
    base_form: "to give",
    past_simple: "gave",
    past_participle: "given",
    french: "donner",
  },
  {
    base_form: "to tell",
    past_simple: "told",
    past_participle: "told",
    french: "dire, raconter",
  },
  {
    base_form: "to feel",
    past_simple: "felt",
    past_participle: "felt",
    french: "se sentir, ressentir",
  },
  {
    base_form: "to become",
    past_simple: "became",
    past_participle: "become",
    french: "devenir",
  },
  {
    base_form: "to leave",
    past_simple: "left",
    past_participle: "left",
    french: "laisser, quitter, partir",
  },
  {
    base_form: "to put",
    past_simple: "put",
    past_participle: "put",
    french: "mettre",
  },
  {
    base_form: "to mean",
    past_simple: "meant",
    past_participle: "meant",
    french: "signifier",
  },
  {
    base_form: "to keep",
    past_simple: "kept",
    past_participle: "kept",
    french: "garder",
  },
  {
    base_form: "to let",
    past_simple: "let",
    past_participle: "let",
    french: "permettre, louer",
  },
  {
    base_form: "to begin",
    past_simple: "began",
    past_participle: "begun",
    french: "commencer",
  },
  {
    base_form: "to show",
    past_simple: "showed",
    past_participle: "shown",
    french: "montrer",
  },
  {
    base_form: "to hear",
    past_simple: "heard",
    past_participle: "heard",
    french: "entendre",
  },
  {
    base_form: "to run",
    past_simple: "ran",
    past_participle: "run",
    french: "courir",
  },
  {
    base_form: "to hold",
    past_simple: "held",
    past_participle: "held",
    french: "tenir",
  },
  {
    base_form: "to bring",
    past_simple: "brought",
    past_participle: "brought",
    french: "apporter",
  },
  {
    base_form: "to write",
    past_simple: "wrote",
    past_participle: "written",
    french: "écrire",
  },
  {
    base_form: "to sit",
    past_simple: "sat",
    past_participle: "sat",
    french: "s'assoir",
  },
  {
    base_form: "to stand",
    past_simple: "stood",
    past_participle: "stood",
    french: "se lever, être debout",
  },
  {
    base_form: "to lose",
    past_simple: "lost",
    past_participle: "lost",
    french: "perdre",
  },
  {
    base_form: "to pay",
    past_simple: "paid",
    past_participle: "paid",
    french: "payer",
  },
  {
    base_form: "to meet",
    past_simple: "met",
    past_participle: "met",
    french: "rencontrer",
  },
  {
    base_form: "to set",
    past_simple: "set",
    past_participle: "set",
    french: "fixer",
  },
  {
    base_form: "to learn",
    past_simple: "learnt, learned",
    past_participle: "learnt, learned",
    french: "apprendre",
  },
  {
    base_form: "to lead",
    past_simple: "led",
    past_participle: "led",
    french: "mener, guider",
  },
  {
    base_form: "to understand",
    past_simple: "understood",
    past_participle: "understood",
    french: "comprendre",
  },
  {
    base_form: "to speak",
    past_simple: "spoke",
    past_participle: "spoken",
    french: "parler",
  },
  {
    base_form: "to read",
    past_simple: "read",
    past_participle: "read",
    french: "lire",
  },
  {
    base_form: "to spend",
    past_simple: "spent",
    past_participle: "spent",
    french: "dépenser, passer du temps",
  },
  {
    base_form: "to grow",
    past_simple: "grew",
    past_participle: "grown",
    french: "grandir, pousser",
  },
  {
    base_form: "to win",
    past_simple: "won",
    past_participle: "won",
    french: "gagner",
  },
  {
    base_form: "to buy",
    past_simple: "bought",
    past_participle: "bought",
    french: "acheter",
  },
  {
    base_form: "to send",
    past_simple: "sent",
    past_participle: "sent",
    french: "envoyer",
  },
  {
    base_form: "to build",
    past_simple: "built",
    past_participle: "built",
    french: "construire",
  },
  {
    base_form: "to fall",
    past_simple: "fell",
    past_participle: "fallen",
    french: "tomber",
  },
  {
    base_form: "to cut",
    past_simple: "cut",
    past_participle: "cut",
    french: "couper",
  },
  {
    base_form: "to sell",
    past_simple: "sold",
    past_participle: "sold",
    french: "vendre",
  },
  {
    base_form: "to light",
    past_simple: "lit",
    past_participle: "lit",
    french: "allumer",
  },
  {
    base_form: "to drive",
    past_simple: "drove",
    past_participle: "driven",
    french: "conduire",
  },
  {
    base_form: "to break",
    past_simple: "broke",
    past_participle: "broken",
    french: "casser",
  },
  {
    base_form: "to wear",
    past_simple: "wore",
    past_participle: "worn",
    french: "porter (avoir sur soi)",
  },
  {
    base_form: "to hit",
    past_simple: "hit",
    past_participle: "hit",
    french: "frapper",
  },
  {
    base_form: "to eat",
    past_simple: "ate",
    past_participle: "eaten",
    french: "manger",
  },
  {
    base_form: "to teach",
    past_simple: "taught",
    past_participle: "taught",
    french: "enseigner",
  },
  {
    base_form: "to cost",
    past_simple: "cost",
    past_participle: "cost",
    french: "coûter",
  },
  {
    base_form: "to catch",
    past_simple: "caught",
    past_participle: "caught",
    french: "attraper",
  },
  {
    base_form: "to draw",
    past_simple: "drew",
    past_participle: "drawn",
    french: "dessiner, tirer",
  },
  {
    base_form: "to choose",
    past_simple: "chose",
    past_participle: "chosen",
    french: "choisir",
  },
  {
    base_form: "to seek",
    past_simple: "sought",
    past_participle: "sought",
    french: "chercher",
  },
  {
    base_form: "to deal",
    past_simple: "dealt",
    past_participle: "dealt",
    french: "distribuer",
  },
  {
    base_form: "to fight",
    past_simple: "fought",
    past_participle: "fought",
    french: "se battre, combattre",
  },
  {
    base_form: "to throw",
    past_simple: "threw",
    past_participle: "thrown",
    french: "jeter",
  },
  {
    base_form: "to rise",
    past_simple: "rose",
    past_participle: "risen",
    french: "lever",
  },
  {
    base_form: "to shoot",
    past_simple: "shot",
    past_participle: "shot",
    french: "tirer, fusiller",
  },
  {
    base_form: "to lie",
    past_simple: "lay",
    past_participle: "lain",
    french: "s'allonger",
  },
  {
    base_form: "to lay",
    past_simple: "laid",
    past_participle: "laid",
    french: "poser",
  },
  {
    base_form: "to prove",
    past_simple: "proved",
    past_participle: "proven, proved",
    french: "prouver",
  },
  {
    base_form: "to hang",
    past_simple: "hung, hanged",
    past_participle: "hung, hanged",
    french: "tenir, pendre",
  },
  {
    base_form: "to forget",
    past_simple: "forgot",
    past_participle: "forgotten",
    french: "oublier",
  },
  {
    base_form: "to spring",
    past_simple: "sprang",
    past_participle: "sprung",
    french: "surgir, jaillir, bondir",
  },
  {
    base_form: "to shake",
    past_simple: "shook",
    past_participle: "shaken",
    french: "secouer",
  },
  {
    base_form: "to fly",
    past_simple: "flew",
    past_participle: "flown",
    french: "voler",
  },
  {
    base_form: "to dream",
    past_simple: "dreamt, dreamed",
    past_participle: "dreamt, dreamed",
    french: "rêver",
  },
  {
    base_form: "to sing",
    past_simple: "sang",
    past_participle: "sung",
    french: "chanter",
  },
  {
    base_form: "to beat",
    past_simple: "beat",
    past_participle: "beaten",
    french: "battre",
  },
  {
    base_form: "to wind",
    past_simple: "wound",
    past_participle: "wound",
    french: "enrouler, remonter",
  },
  {
    base_form: "to hurt",
    past_simple: "hurt",
    past_participle: "hurt",
    french: "blesser",
  },
  {
    base_form: "to strike",
    past_simple: "struck",
    past_participle: "struck, stricken",
    french: "frapper",
  },
  {
    base_form: "to sleep",
    past_simple: "slept",
    past_participle: "slept",
    french: "dormir",
  },
  {
    base_form: "to stick",
    past_simple: "stuck",
    past_participle: "stuck",
    french: "coller",
  },
  {
    base_form: "to drink",
    past_simple: "drank",
    past_participle: "drunk",
    french: "boire",
  },
  {
    base_form: "to hide",
    past_simple: "hid",
    past_participle: "hidden",
    french: "cacher",
  },
  {
    base_form: "to ride",
    past_simple: "rode",
    past_participle: "ridden",
    french: "monter (vélo, cheval)",
  },
  {
    base_form: "to feed",
    past_simple: "fed",
    past_participle: "fed",
    french: "nourrir",
  },
  {
    base_form: "to fit",
    past_simple: "fit, fitted",
    past_participle: "fit, fitted",
    french: "s'adapter, ajuster, aller (vêtement)",
  },
  {
    base_form: "to spread",
    past_simple: "spread",
    past_participle: "spread",
    french: "répandre",
  },
  {
    base_form: "to speed",
    past_simple: "sped, speeded",
    past_participle: "sped, speeded",
    french: "aller vite",
  },
  {
    base_form: "to blow",
    past_simple: "blew",
    past_participle: "blown",
    french: "souffler, gonfler",
  },
  {
    base_form: "to burn",
    past_simple: "burnt, burned",
    past_participle: "burnt, burned",
    french: "brûler",
  },
  {
    base_form: "to lean",
    past_simple: "leant, leaned",
    past_participle: "leant, leaned",
    french: "s'incliner, se pencher",
  },
  {
    base_form: "to shut",
    past_simple: "shut",
    past_participle: "shut",
    french: "fermer",
  },
  {
    base_form: "to bear",
    past_simple: "bore",
    past_participle: "born, borne",
    french: "porter, supporter, naître",
  },
  {
    base_form: "to ring",
    past_simple: "rang",
    past_participle: "rung",
    french: "sonner, téléphoner",
  },
  {
    base_form: "to wake",
    past_simple: "woke",
    past_participle: "woken",
    french: "réveiller",
  },
  {
    base_form: "to steal",
    past_simple: "stole",
    past_participle: "stolen",
    french: "voler, dérober",
  },
  {
    base_form: "to tear",
    past_simple: "tore",
    past_participle: "torn",
    french: "déchirer",
  },
  {
    base_form: "to cast",
    past_simple: "cast",
    past_participle: "cast",
    french: "jeter, distribuer (rôles)",
  },
  {
    base_form: "to slide",
    past_simple: "slid",
    past_participle: "slid, slidden",
    french: "glisser",
  },
  {
    base_form: "to bend",
    past_simple: "bent",
    past_participle: "bent",
    french: "plier, se courber",
  },
  {
    base_form: "to smell",
    past_simple: "smelt, smelled",
    past_participle: "smelt, smelled",
    french: "sentir",
  },
  {
    base_form: "to swing",
    past_simple: "swung",
    past_participle: "swung",
    french: "se balancer",
  },
  {
    base_form: "to dig",
    past_simple: "dug",
    past_participle: "dug",
    french: "creuser",
  },
  {
    base_form: "to bind",
    past_simple: "bound",
    past_participle: "bound",
    french: "lier, attacher",
  },
  {
    base_form: "to quit",
    past_simple: "quit",
    past_participle: "quit",
    french: "quitter, arrêter",
  },
  {
    base_form: "to arise",
    past_simple: "arose",
    past_participle: "arisen",
    french: "survenir",
  },
  {
    base_form: "to sweep",
    past_simple: "swept, sweeped",
    past_participle: "swept, sweeped",
    french: "balayer",
  },
  {
    base_form: "to spin",
    past_simple: "span, spun",
    past_participle: "spun",
    french: "tourner, faire tourner",
  },
  {
    base_form: "to bet",
    past_simple: "bet",
    past_participle: "bet",
    french: "parier",
  },
  {
    base_form: "to strip",
    past_simple: "stript, stripped",
    past_participle: "stript, stripped",
    french: "dépouiller",
  },
  {
    base_form: "to withdraw",
    past_simple: "withdrew",
    past_participle: "withdrawn",
    french: "se retirer",
  },
  {
    base_form: "to freeze",
    past_simple: "froze",
    past_participle: "frozen",
    french: "geler",
  },
  {
    base_form: "to sink",
    past_simple: "sank",
    past_participle: "sunk",
    french: "couler",
  },
  {
    base_form: "to swim",
    past_simple: "swam",
    past_participle: "swum",
    french: "nager",
  },
  {
    base_form: "to split",
    past_simple: "split",
    past_participle: "split",
    french: "fendre, séparer",
  },
  {
    base_form: "to flee",
    past_simple: "fled",
    past_participle: "fled",
    french: "s'enfuir",
  },
  {
    base_form: "to rid",
    past_simple: "rid, ridded",
    past_participle: "rid, ridded",
    french: "débarrasser",
  },
  {
    base_form: "to undergo",
    past_simple: "underwent",
    past_participle: "undergone",
    french: "subir",
  },
  {
    base_form: "to bite",
    past_simple: "bit",
    past_participle: "bitten",
    french: "mordre",
  },
  {
    base_form: "to swear",
    past_simple: "swore",
    past_participle: "sworn",
    french: "jurer",
  },
  {
    base_form: "to dare",
    past_simple: "dared, durst",
    past_participle: "dared",
    french: "oser",
  },
  {
    base_form: "to shine",
    past_simple: "shone",
    past_participle: "shone",
    french: "briller",
  },
  {
    base_form: "to upset",
    past_simple: "upset",
    past_participle: "upset",
    french: "bouleverser, déranger",
  },
  {
    base_form: "to melt",
    past_simple: "melted",
    past_participle: "molten, melted",
    french: "fondre, se fondre",
  },
  {
    base_form: "to lend",
    past_simple: "lent",
    past_participle: "lent",
    french: "prêter",
  },
  {
    base_form: "to burst",
    past_simple: "burst",
    past_participle: "burst",
    french: "éclater",
  },
  {
    base_form: "to forgive",
    past_simple: "forgave",
    past_participle: "forgiven",
    french: "pardonner",
  },
  {
    base_form: "to broadcast",
    past_simple: "broadcast, broadcasted",
    past_participle: "broadcast, broadcasted",
    french: "diffuser, émettre",
  },
  {
    base_form: "to leap",
    past_simple: "leapt, leaped",
    past_participle: "leapt, leaped",
    french: "sauter, bondir",
  },
  {
    base_form: "to spill",
    past_simple: "spilt, spilled",
    past_participle: "spilt, spilled",
    french: "renverser",
  },
  {
    base_form: "to undertake",
    past_simple: "undertook",
    past_participle: "undertaken",
    french: "entreprendre",
  },
  {
    base_form: "to spell",
    past_simple: "spelt, spelled",
    past_participle: "spelt, spelled",
    french: "épeler, orthographier",
  },
  {
    base_form: "to shed",
    past_simple: "shed",
    past_participle: "shed",
    french: "répandre, laisser tomber",
  },
  {
    base_form: "to shrink",
    past_simple: "shrank",
    past_participle: "shrunk",
    french: "rétrécir",
  },
  {
    base_form: "to sneak",
    past_simple: "sneaked, snuck",
    past_participle: "sneaked, snuck",
    french: "se faufiler",
  },
  {
    base_form: "to cling",
    past_simple: "clung",
    past_participle: "clung",
    french: "s'accrocher",
  },
  {
    base_form: "to thrive",
    past_simple: "throve, thrived",
    past_participle: "thriven, thrived",
    french: "prospérer",
  },
  {
    base_form: "to forbid",
    past_simple: "forbade, forbad",
    past_participle: "forbidden",
    french: "interdire",
  },
  {
    base_form: "to swell",
    past_simple: "swelled",
    past_participle: "swollen",
    french: "gonfler, enfler",
  },
  {
    base_form: "to weave",
    past_simple: "wove",
    past_participle: "woven",
    french: "tisser",
  },
  {
    base_form: "to spit",
    past_simple: "spat, spit",
    past_participle: "spat, spit",
    french: "cracher",
  },
  {
    base_form: "to kneel",
    past_simple: "knelt, kneeled",
    past_participle: "knelt, kneeled",
    french: "s'agenouiller",
  },
  {
    base_form: "to abide",
    past_simple: "abode",
    past_participle: "abode",
    french: "respecter, se conformer à",
  },
  {
    base_form: "to awake",
    past_simple: "awoke",
    past_participle: "awoken",
    french: "se réveiller",
  },
  {
    base_form: "to beget",
    past_simple: "begat, begot",
    past_participle: "begotten",
    french: "engendrer",
  },
  {
    base_form: "to bid",
    past_simple: "bid, bade",
    past_participle: "bid, bidden",
    french: "offrir, miser",
  },
  {
    base_form: "to bleed",
    past_simple: "bled",
    past_participle: "bled",
    french: "saigner",
  },
  {
    base_form: "to breed",
    past_simple: "bred",
    past_participle: "bred",
    french: "élever (des animaux)",
  },
  {
    base_form: "to can",
    past_simple: "could",
    past_participle: "could",
    french: "pouvoir",
  },
  {
    base_form: "to chide",
    past_simple: "chid, chode",
    past_participle: "chid, chidden",
    french: "gronder",
  },
  {
    base_form: "to clothe",
    past_simple: "clad, clothed",
    past_participle: "clad, clothed",
    french: "habiller, recouvrir",
  },
  {
    base_form: "to creep",
    past_simple: "crept",
    past_participle: "crept",
    french: "ramper",
  },
  {
    base_form: "to dive",
    past_simple: "dived",
    past_participle: "dived, dove",
    french: "plonger",
  },
  {
    base_form: "to dwell",
    past_simple: "dwelt",
    past_participle: "dwelt, dwelled",
    french: "habiter",
  },
  {
    base_form: "to forecast",
    past_simple: "forecast",
    past_participle: "forecast",
    french: "prévoir",
  },
  {
    base_form: "to foresee",
    past_simple: "foresaw",
    past_participle: "foreseen",
    french: "prévoir, presentir",
  },
  {
    base_form: "to forsake",
    past_simple: "forsook",
    past_participle: "forsaken",
    french: "abandonner",
  },
  {
    base_form: "to grind",
    past_simple: "ground",
    past_participle: "ground",
    french: "moudre, opprimer",
  },
  {
    base_form: "to mow",
    past_simple: "mowed",
    past_participle: "mowed, mown",
    french: "tondre",
  },
  {
    base_form: "to offset",
    past_simple: "offset",
    past_participle: "offset",
    french: "compenser",
  },
  {
    base_form: "to overcome",
    past_simple: "overcame",
    past_participle: "overcome",
    french: "surmonter",
  },
  {
    base_form: "to partake",
    past_simple: "partook",
    past_participle: "partaken",
    french: "prendre part à",
  },
  {
    base_form: "to plead",
    past_simple: "pled, pleaded",
    past_participle: "pled, pleaded",
    french: "supplier, plaider",
  },
  {
    base_form: "to preset",
    past_simple: "preset",
    past_participle: "preset",
    french: "programmer",
  },
  {
    base_form: "to relay",
    past_simple: "relaid",
    past_participle: "relaid",
    french: "relayer",
  },
  {
    base_form: "to rend",
    past_simple: "rent",
    past_participle: "rent",
    french: "déchirer",
  },
  {
    base_form: "to saw",
    past_simple: "saw, sawed",
    past_participle: "sawn, sawed",
    french: "scier",
  },
  {
    base_form: "to shoe",
    past_simple: "shod",
    past_participle: "shod",
    french: "chausser",
  },
  {
    base_form: "to slay",
    past_simple: "slew",
    past_participle: "slain",
    french: "tuer",
  },
  {
    base_form: "to slink",
    past_simple: "slunk, slinked",
    past_participle: "slunk, slinked",
    french: "s'en aller furtivement",
  },
  {
    base_form: "to slit",
    past_simple: "slit",
    past_participle: "slit",
    french: "fendre",
  },
  {
    base_form: "to sow",
    past_simple: "sowed",
    past_participle: "sown, sowed",
    french: "semer",
  },
  {
    base_form: "to spoil",
    past_simple: "spoilt",
    past_participle: "spoilt",
    french: "gâcher, gâter",
  },
  {
    base_form: "to sting",
    past_simple: "stung",
    past_participle: "stung",
    french: "piquer",
  },
  {
    base_form: "to stink",
    past_simple: "stank",
    past_participle: "stunk",
    french: "puer",
  },
  {
    base_form: "to strew",
    past_simple: "strewed",
    past_participle: "strewn, strewed",
    french: "éparpiller",
  },
  {
    base_form: "to strive",
    past_simple: "strove",
    past_participle: "striven",
    french: "s'efforcer",
  },
  {
    base_form: "to sweat",
    past_simple: "sweat, sweated",
    past_participle: "sweat, sweated",
    french: "suer",
  },
  {
    base_form: "to thrust",
    past_simple: "thrust",
    past_participle: "thrust",
    french: "enfoncer",
  },
  {
    base_form: "to tread",
    past_simple: "trod",
    past_participle: "trodden",
    french: "piétiner quelque chose",
  },
  {
    base_form: "to typeset",
    past_simple: "typeset",
    past_participle: "typeset",
    french: "composer",
  },
  {
    base_form: "to weep",
    past_simple: "wept",
    past_participle: "wept",
    french: "pleurer",
  },
  {
    base_form: "to wet",
    past_simple: "wet, wetted",
    past_participle: "wet, wetted",
    french: "mouiller",
  },
  {
    base_form: "to wring",
    past_simple: "wrung",
    past_participle: "wrung",
    french: "tordre",
  },
];

export default verbsByCommon;
