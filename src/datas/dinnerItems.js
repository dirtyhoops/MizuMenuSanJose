export const dinnerSalad = [
  {
    name: 'side salad',
    price: 5
  },
  {
    name: 'cucumber salad',
    price: 7
  },
  {
    name: 'seaweed salad (wakame)',
    price: 10
  },
  {
    name: 'mizu house salad',
    description:
      'spring greens, cucumber, tomatoes, carrots, avocado & strawberries served with sesame vinaigrette',
    additionalDescription: 'add chicken for $4 or salmon for $7',
    price: 13.5,
    isGlutenFree: true
  },
  {
    name: 'sashimi salad',
    description:
      'spring greens with assorted sashimi & sliced avocado served with yuzu dressing',
    price: 18.5
  },
  {
    name: 'spicy tuna salad',
    description:
      'chopped tuna, avocado, cucumber, tobiko, green onions, sesame seeds & kaiware on a bed of spring greens tossed in a spicy dressing',
    price: 17
  }
];

// DINNER HOT APPETIZERS
export const dinnerHotAppetizers = [
  {
    name: 'shrimp tempura (5pcs)',
    description:
      'battered & lightly-fried shrimps served with house tempura sauce',
    price: 13
  },
  {
    name: 'veggie tempura (6pcs)',
    description:
      'battered & lightly-fried veggies served with house tempura sauce',
    price: 10
  },
  {
    name: 'assorted tempura (9pcs)',
    description:
      'battered & lightly-friend mixed veggies and shrimps served with house tempura sauce',
    price: 15.5
  },
  {
    name: 'baked green mussels',
    description:
      'lightly-baked green mussels topped with tobiko, green onions, spicy aoili, unagi sauce, and sriracha',
    price: 10
  },
  {
    name: 'gyoza',
    description: 'pan-fried pork dumplings with sauce',
    price: 9
  },
  {
    name: 'agedashi tofu',
    description:
      'deep-fried tofu topped with bonito flakes, seaweed, minced daikon & green onions and served with house tempura sauce',
    price: 10
  },
  {
    name: 'almond chicken',
    description:
      'seasoned chicken with green onions, chili powder & almonds drizzled with teriyaki sauce',
    price: 15
  },
  {
    name: 'crispy rice with spicy tuna',
    description:
      'spicy tuna over a layer of crispy rice & spicy aioli topped with jalapenos & sriracha',
    price: 17,
    isSpicy: true
  },
  {
    name: 'honeymoon special',
    description:
      'chopped spicy scallop, dungeness crab & tobiko seasoned with spicy aoili placed over rice & wrapped with salmon slices. *served flambe',
    price: 16.5
  },
  {
    name: 'hamachi kama',
    description: 'grilled yellowtail collar served with ponzu sauce',
    price: 14.5
  },
  {
    name: 'spicy popcorn scallops',
    description:
      'deep-fried scallops served in a sweet & spicy mayo sauce topped with green onions',
    price: 15,
    isSpicy: true
  },
  {
    name: 'croquettes',
    description:
      'breaded croquettes lightly-fried served with house mayo. (2pc Veggie or Potato)',
    price: 9.5
  },
  {
    name: 'takoyaki',
    description:
      'diced octopus breaded & deep-fried to a golden crisp topped with takoyaki sauce, green onion & bonito flakes',
    price: 12
  },

  {
    name: 'calamari',
    description: 'deep-fried seasoned calamari served with cocktail sauce',
    price: 14.5
  },
  {
    name: 'sweet potato fries',
    description: 'deep-fried sweet potatoes served with wasabi mayo',
    price: 9
  },
  {
    name: 'spicy tuna poppers',
    description:
      'deep-fried jalapenos stuffed with spicy tuna & cream cheese topped with unagi sauce',
    price: 14,
    isSpicy: true
  }
];

// ROBATA  add a description grilled over charcoal
export const robata = [
  {
    name: 'shishito pepper',
    price: 7
  },
  {
    name: 'chicken thigh (momo)',
    price: 7
  },
  {
    name: 'bacon asparagus',
    price: 7
  },
  {
    name: 'black pork belly (kurobata)',
    price: 8
  },
  {
    name: 'shrimp',
    price: 8
  },
  {
    name: 'bacon scallops',
    price: 9
  },
  {
    name: 'wagyu',
    price: 12
  }
];

// DINNER SIDES
export const dinnerSides = [
  {
    name: 'fresh wasabi',
    price: 2.5
  },
  {
    name: 'sushi rice',
    price: 4.5
  },
  {
    name: 'steamed rice',
    price: 3.5
  },
  {
    name: 'edamame',
    price: 7
  },
  {
    name: 'garlic edamame',
    price: 9
  }
];

// DINNER COLD APPETIZERS
export const dinnerColdAppetizers = [
  {
    name: 'yellowtail tartar',
    description:
      'diced yellowtail, green onions, cilantro & jalapeno mixed in ponzu sauce topped with wasabi tobiko, quail egg & kaiware served in grape seed oil sauce',
    price: 17.5
  },
  {
    name: 'mizu bomb',
    description:
      'spicy tuna & crab mixed with mizu special sauce wrapped avocado & served with taro chips',
    addtionalDescription: 'additional taro chips for $3',
    price: 17.5,
    isSpicy: true
  },
  {
    name: 'tuna tartar',
    description:
      'diced tuna, green onions, jalapeno, oshinko & avocados mixed in ponzu sauce topped with black tobiko, quail egg & kaiware served in grape seed oil sauce',
    price: 17.5
  },
  {
    name: 'salmon carpaccio',
    description:
      'salmon sashimi with red onion,, orange zest, bonito flakes, ponzu sauce & olive oil',
    price: 15.5
  },
  {
    name: 'tako carpacio',
    description:
      'octopus sashimi with wasabi garlic aioli black tobiko, serrano peppers, olive oil, rose salt, lemon juice & house nikiri soy',
    price: 16.5
  },
  {
    name: 'yellowtail crudo (6ps)',
    description:
      'yellowtail sashimi with yuzu soy, garlic puree, serrano peppers, micro cilantro & white truffle oil',
    price: 16.5,
    isSpicy: true
  },
  {
    name: 'cajun tuna sashimi (8pcs)',
    description:
      'thinly sliced seared tuna in cajun seasoning & grap seed oil dressing topped with green onion, baked garlic chips, carrots, jalapenos & kaiware',
    price: 16.5,
    isSpicy: true
  },
  {
    name: 'citrus-seared salmon (6pcs)',
    description:
      'seared salmon sashimi with yuzu soy, dill weed, garlic salt & micro cilantro',
    price: 15.5
  }
];

export const sushiRolls = [
  {
    name: 'sakura',
    description:
      'yellowtail, salmon, tuna, crab, wrapped in cucumber served with ponzu sauce',
    price: 17.5
  },
  {
    name: 'popcorn lobster',
    description:
      'kani & avocado roll topped with deep-fried langoustines with tobiko & unagi sauce',
    price: 16
  },
  {
    name: 'scallop king',
    description:
      'california roll topped with hokkaido scallop and spicy mayo baked, with unagi sauce',
    price: 16,
    isSpicy: true
  },
  {
    name: 'super godzilla',
    description:
      'yellowtail, cream cheese deep-fried topped with avocado, dungeness crab, green onions, tobiko, spicy aioli & unagi sauce',
    price: 18,
    isSpicy: true
  },
  {
    name: 'ninja',
    description:
      'yellowtail, jalapeno, cilantro, avocado, asparagus and cucumber, wrapped in seaweed with spicy aioli & sriracha',
    price: 14.5,
    isSpicy: true
  },
  {
    name: 'hot mango',
    description:
      'spicy tuna roll, cucumber, topped with yellowtail, mango, unagi sauce & mango sauce',
    price: 17,
    isSpicy: true
  },
  {
    name: 'cherry blossom',
    description:
      'salmon & avocado wrapped with tuna topped with tobiko, daikon & cherry',
    price: 16.5,
    isGlutenFree: true
  },
  {
    name: 'winchester',
    description: 'salmon, tuna, halibut, avocado, tobiko & green onion',
    price: 13,
    isGlutenFree: true
  },
  {
    name: 'rainbow blossom',
    description:
      'dungeness crab, avocado, cucumber, wrapped with tuna, salmon topped with deep-fried bay scallops, green onion, tobiko with spicy aoili & unagi sauce',
    price: 19.5,
    isSpicy: true
  },
  {
    name: 'santana',
    description: 'crab, salmon, & avocado with tobiko',
    price: 11,
    isGlutenFree: true
  },
  {
    name: 'san jose',
    description: 'salmon, yellowtail, avocado & tobiko',
    price: 11,
    isGlutenFree: true
  },
  {
    name: 'santa clara',
    description: 'tuna, cucumber, avocado & tobiko',
    price: 11,
    isGlutenFree: true
  },

  {
    name: 'albacore delight',
    description:
      'dungeness crab, avocado, cucumber topped with albacore, sliced red onion, green onion, drizzled with japanese dressing',
    price: 15
  },
  {
    name: 'titanic fire',
    description:
      'shrimp tempura, spicy tuna, cucumber, topped with albacore, tuna, avocado, spicy aioli & unagi sauce',
    price: 16.5,
    isSpicy: true
  },
  {
    name: 'hurricanne',
    description:
      'spicy tuna roll wrapped in soy paper deep-fried & topped with crispy potato noodles, unagi sauce & sriracha',
    price: 15,
    isSpicy: true
  },
  {
    name: 'butterfly',
    description:
      'spicy yellowtail, cucumber & topped with unagi, soft shell crab, dungeness crab, tobiko, green onion served with spicy aioli & unagi sauce',
    price: 16.5,
    isSpicy: true
  },
  {
    name: 'yellowtail special',
    description: 'yellowtail, cucumber topped with yellowtail & sliced lemon',
    price: 16,
    isGlutenFree: true
  },
  {
    name: 'rainbow',
    description:
      'crab & avocado topped with tuna, salmon, ebi, halibut, avocado & yellowtail',
    price: 15.5
  },
  {
    name: 'dragon',
    description:
      'shrimp tempura, cucumber, gobo topped wtih avocado, eel, tobiko & unagi sauce',
    price: 17
  },
  {
    name: 'green dragon',
    description:
      'shrimp tempura, cucumber, gobo topped with avocado, unagi sauce & sesame seeds',
    price: 17.5
  },
  {
    name: 'red dragon',
    description:
      'shrimp tempura, cucumber, topped with spicy tuna, tobiko, green onion, unagi sauce, spicy aioli & red onions',
    price: 17,
    isSpicy: true
  },
  {
    name: 'crazy dragon',
    description:
      'spicy crab, cucumber & avocado topped with eel, avocado, tempura flakes, tobiko, green obion, drizzled with spicy aioli & unagi sauce',
    price: 18,
    isSpicy: true
  },
  {
    name: 'mizu jumbo',
    description:
      'shrimp tempura, eel, asparagus, cucumber topped with tuna, avocado, tempura flakes, tobioko, green onion drizzled with spicy aioli, unagi sauce & sriracha',
    price: 19,
    isSpicy: true
  },
  {
    name: 'unagi lover',
    description:
      'eel, crab, cream cheese, green onion wrapped in seaweed & deep-fried topped with unagi sauce, spicy aioli & red tobiko',
    price: 16,
    isSpicy: true
  },
  {
    name: 'sunkissed',
    description:
      'spicy tuna & cucumber topped with salmon, avocado, sesame seeds & sunkissed sauce',
    price: 16,
    isSpicy: true
  },
  {
    name: 'alaska',
    description:
      'spicy crab & avocado topped with salmon & spicy aioli baked to perfection drizzled with unagi sauce',
    price: 16.5,
    isSpicy: true
  },
  {
    name: 'super spider',
    description:
      'soft shell crab, eel, asparagus, cucumber, topped with spicy tuna, tempura flakes, red tobiko drizzled with spicy aoili & unagi sauce',
    price: 17.5,
    isSpicy: true
  },
  {
    name: 'crunchy',
    description:
      'crab, avocado, shrimp tempura, sprinkled with crispy tempura flakes topped with unagi sauce',
    price: 16.5
  },
  {
    name: 'yami yami',
    description:
      'deep-fried white fish, topped with chopped tuna & salmon mixed in spicy sauce, topped with tobiko, green onion, spicy aioli, wasabi aioli & unagi sauce',
    price: 19,
    isSpicy: true
  },
  {
    name: 'spicy crunch',
    description:
      'avocado, spicy crab, eel, cucumber topped with unagi sauce, spicy mayo, wasabi mayo, green onion, tobiko & tempura flakes',
    price: 17,
    isSpicy: true
  }
];

export const sushiSashimi = [
  {
    name: 'tuna',
    japaneseName: 'maguro',
    priceSushi: 9,
    priceSashimi: 15
  },
  {
    name: 'salmon',
    japaneseName: 'sake',
    priceSushi: 7,
    priceSashimi: 12
  },
  {
    name: 'albacore',
    japaneseName: 'shiro maguro',
    priceSushi: 7,
    priceSashimi: 12
  },
  {
    name: 'yellowtail',
    japaneseName: 'hamachi',
    priceSushi: 7.5,
    priceSashimi: 12
  },
  {
    name: 'halibut',
    japaneseName: 'hirame',
    priceSushi: 7.5,
    priceSashimi: 13
  },
  {
    name: 'amberjack',
    japaneseName: 'kanpachi',
    priceSushi: 7.5,
    priceSashimi: 13
  },
  {
    name: 'octopus',
    japaneseName: 'tako',
    priceSushi: 7,
    priceSashimi: 12
  },
  {
    name: 'squid',
    japaneseName: 'ika',
    priceSushi: 6.5,
    priceSashimi: 10.5
  },
  {
    name: 'surf clam',
    japaneseName: 'hokkigai',
    priceSushi: 6.5,
    priceSashimi: 10.5
  },
  {
    name: 'mackerel',
    japaneseName: 'saba',
    priceSushi: 7,
    priceSashimi: 12
  },
  {
    name: 'fresh water eel',
    japaneseName: 'unagi',
    priceSushi: 7,
    priceSashimi: 12
  },
  {
    name: 'shrimp',
    japaneseName: 'ebi',
    priceSushi: 7,
    priceSashimi: 12
  },
  {
    name: 'sweet shrimp',
    japaneseName: 'ama ebi',
    priceSushi: 10,
    priceSashimi: 17
  },
  {
    name: 'hokkaido scallop',
    japaneseName: 'hotate',
    priceSushi: 9.5,
    priceSashimi: 17
  },
  {
    name: 'crab',
    japaneseName: 'kani',
    priceSushi: 5.5,
    priceSashimi: 9.5
  },
  {
    name: 'snow crab',
    japaneseName: 'real kani',
    priceSushi: 9.5,
    priceSashimi: 16
  },
  {
    name: 'salmon roe',
    japaneseName: 'ikura',
    priceSushi: 6.5,
    priceSashimi: 10.5
  },
  {
    name: 'flying fish roe',
    japaneseName: 'tobiko',
    priceSushi: 6,
    priceSashimi: 9
  },
  {
    name: 'egg',
    japaneseName: 'tamago',
    priceSushi: 5.5,
    priceSashimi: 8.5
  },
  {
    name: 'tofu skin',
    japaneseName: 'inari',
    priceSushi: 5,
    priceSashimi: 'NA'
  },
  {
    name: 'fatty tuna belly',
    japaneseName: 'toro',
    priceSushi: 'MP',
    priceSashimi: 'MP'
  },
  {
    name: 'sea urchin',
    japaneseName: 'uni',
    priceSushi: 'MP',
    priceSashimi: 'MP'
  }
];

export const dinnerSushiSashimi = [
  {
    name: 'chirashi',
    description:
      "chef's selection of 12 pcs assorted sashimi served over sushi rice",
    price: 35
  },
  {
    name: 'mixed chirashi',
    description:
      'assortment of chopped scattered fish topped with vegetables, tobiko & quail egg over rice with Korean chilli sauce',
    price: 29,
    isSpicy: true
  },
  {
    name: 'sashimi (9pcs)',
    description:
      '3 pcs each of tuna, salmon & yellowtail served with rice & miso soup',
    price: 28
  },
  {
    name: 'sashimi dinner',
    description:
      "chef's selection of 20 pcs sashimi served with rice & miso soup",
    price: 50
  },
  {
    name: 'sushi dinner',
    description:
      "chef's selection of 10 pcs sushi with tuna tekka maki roll served with rice & miso soup",
    price: 43
  },
  {
    name: 'sushi & sahimi combination',
    description:
      "chef's selection of 7 pcs of sushi and 12 pcs of sashimi with tuna roll served with rice & miso soup",
    price: 57
  },
  {
    name: 'signature boat',
    description: "chef's selection of sushi, sashimi & signature roll",
    price: '45 per person',
    addtionalDescription: 'minimum 2 person per order'
  }
];

export const dinnerEntrees = [
  {
    name: 'saba shioyaki',
    description: 'grilled seasoned mackerel served with ponzu & radish',
    price: 20
  },
  {
    name: 'miso black cod',
    description:
      'flaky & buttery miso marinated cod baked & topped with fried potato slivers',
    price: 28.5
  },
  {
    name: 'chicken katsu',
    description:
      'panko breaded & deep-fried chicken served with rice, salad & miso soup',
    price: 19
  },
  {
    name: 'pork katsu',
    description:
      'panko breaded & deep-frien pork served with rice, salad, & miso soup',
    price: 22
  },
  {
    name: 'chicken teriyaki',
    description:
      'charbroiled chicken & drizzled with teriyaki sauce served with rice, salad & miso soup',
    price: 20
  },
  {
    name: 'beef teriyaki',
    description:
      'charbroiled beef & drizzled with teriyaki sauce served with rice, salad & miso soup',
    price: 26
  },
  {
    name: 'salmon teriyaki',
    description:
      'charbroiled salmon & drizzled with teriyaki sauce served with rice, salad & miso soup',
    price: 26
  },
  {
    name: 'galbi(9pcs)',
    description:
      'grilled marinated beef short ribs over sauteed mushrooms, bell peppers & onions & servced on a sizzling plate topped with green onions & sesame seeds',
    price: 32
  },
  {
    name: 'beef bulgogi',
    description:
      'grilled marinated beef over sauteed mushrooms, bell peppers & onion & served on a sizzling plate topped with green onions & sesame seeds',
    price: 28
  },
  {
    name: 'chicken bulgogi',
    description:
      'grilled marinated chicken over sauteed mushrooms, bell peppers & onions & served on a sizzling plate topped with green onions & seasme seeds',
    price: 25
  },
  {
    name: 'spicy pork bulgogi',
    description:
      'mnarinated spicy pork over sauteed mushrooms, bell peppers & onions & served on a sizzling plate topped with green onions & sesame seeds',
    price: 28,
    isSpicy: true
  },
  {
    name: 'house boat',
    description:
      'chicken teriyaki, beef teriyaki, gyoza, assorted tempura & california roll',
    price: '35 per person',
    addtionalDescription: 'minimum 2 person per order'
  }
  // {
  //   name: 'tempura udon',
  //   description:
  //     'udon noodle soup served with fish cake, nori, green onions & assorted tempura',
  //   price: 17
  // },
  // {
  //   name: 'nabeyaki udon',
  //   description:
  //     'udon noodle soup served with chicken, napa cabbage, egg, carrots, green onions, fish cake & shrimp tempura',
  //   price: 20
  // },
  // {
  //   name: 'kake udon',
  //   description: 'udon noodle soup served with fish cake, nori & green onions',
  //   price: 14
  // },
  // {
  //   name: 'pork donburi',
  //   description: 'pork cutlet & egg',
  //   price: 19
  // },
  // {
  //   name: 'chicken donburi',
  //   description: 'broiled chicken & egg',
  //   price: 19
  // },
  // {
  //   name: 'eel donburi',
  //   description: 'grilled fresh water eel',
  //   price: 26
  // }
];

export const dinnerUdon = [
  {
    name: 'kake udon',
    description: 'udon noodle soup served with fish cake, nori & green onions',
    price: 14
  },
  {
    name: 'tempura udon',
    description:
      'udon noodle soup served with fish cake, nori, green onions & assorted tempura',
    price: 17
  },
  {
    name: 'nabeyaki udon',
    description:
      'udon noodle soup served with chicken, napa cabbage, egg, carrots, green onions, fish cake & shrimp tempura',
    price: 20
  }
];

export const dinnerDonburi = [
  {
    name: 'pork donburi',
    description: 'pork cutlet & egg',
    price: 19
  },
  {
    name: 'chicken donburi',
    description: 'broiled chicken & egg',
    price: 19
  },
  {
    name: 'eel donburi',
    description: 'grilled fresh water eel',
    price: 26
  }
];

export const lunchDonburi = [
  {
    name: 'pork donburi',
    description: 'pork cutlet & egg',
    price: 15
  },
  {
    name: 'chicken donburi',
    description: 'broiled chicken & egg',
    price: 15
  },
  {
    name: 'eel donburi',
    description: 'grilled fresh water eel',
    price: 18
  }
];

export const makiRolls = [
  {
    name: 'tuna tekka',
    price: 10
  },
  {
    name: 'salmon',
    price: 8
  },
  {
    name: 'yellowtail',
    price: 8
  },
  {
    name: 'california',
    price: 8
  },
  {
    name: 'california deluxe',
    price: 10
  },
  {
    name: 'deef-fried califonia',
    price: 11
  },
  {
    name: 'philadelphia',
    price: 10
  },
  {
    name: 'spicy tuna',
    price: 10,
    isSpicy: true
  },
  {
    name: 'spicy scallop',
    price: 12,
    isSpicy: true
  },
  {
    name: 'unagi',
    price: 12
  },
  {
    name: 'shrimp tempura',
    price: 12
  },
  {
    name: 'veggie tempura',
    price: 11
  },
  {
    name: 'spider',
    price: 13
  }
];

export const vegetarianRolls = [
  {
    name: 'cucumber',
    price: 7
  },
  {
    name: 'oshinko',
    price: 7
  },
  {
    name: 'asparagus',
    price: 7
  },
  {
    name: 'avocado',
    price: 8
  },
  {
    name: 'garden',
    price: 13,
    description:
      'avocado, asparagus, cucumber, green leaf, kaiware, oshinko & yamagobo wrapped in seaweed'
  }
];
