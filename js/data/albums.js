function Album(title, release, art, tracklist) {
  this.title = title
  this.release = release
  this.art = art
  this.tracklist = tracklist
}

export const albums = [
  new Album(
    'READY TO BE',
    'March 10, 2023',
    'readytobe',
    [
      'SET ME FREE',
      'MOONLIGHT SUNRISE',
      'GOT THE THRILLS',
      'BLAME IT ON ME written by Dahyun',
      'WALLFLOWER',
      'CRAZY STUPID LOVE written by Dahyun',
      'SET ME FREE (ENG)'
    ]
  ),
  new Album(
    'BETWEEN 1&2',
    'August 26, 2022',
    'between1&2',
    [
      'Talk That Talk',
      'Queen of Hearts',
      'Basics written by Chaeyoung',
      'Trouble written by Jihyo',
      'Brave',
      'Gone written by Dahyun',
      'When We Were Kids written by Dahyun'
    ]
  ),
  new Album(
    'Celebrate',
    'July 27, 2022',
    'celebrate',
    [
      'Celebrate written by TWICE',
      'Voices of Delight',
      'Tick Tock written by Dahyun',
      'Flow Like Waves',
      'That\'s All I\'m Saying written by Dahyun',
      'Bitter Sweet',
      'Sandcastle',
      'Just Be Yourself',
      'Doughnut'
    ]
  ),
  new Album(
    'IM NAYEON',
    'June 24, 2022',
    'imnayeon',
    [
      'POP!',
      'NO PROBLEM',
      'LOVE COUNTDOWN written by Nayeon',
      'CANDYFLOSS',
      'ALL OR NOTHING written by Nayeon',
      'HAPPY BIRTHDAY TO YOU',
      'SUNSET'
    ]
  ),
  new Album(
    'Formula of Love',
    'November 12, 2021',
    'formulaoflove',
    [
      'SCIENTIST',
      'MOONLIGHT',
      'ICON',
      'CRUEL written by Dahyun',
      'REAL YOU written by Jihyo',
      'F.I.L.A (Fall In Love Again) written by Nayeon',
      'LAST WALTZ',
      'ESPRESSO',
      'REWIND',
      'CACTUS written by Jihyo',
      'PUSH & PULL',
      'HELLO',
      '1,3,2',
      'CANDY',
      'The Feels',
      'SCIENTIST (R3HAB Remix)'
    ]
  ),
  new Album(
    'Perfect World',
    'July 28, 2021',
    'perfectworld',
    [
      'Perfect World',
      'BETTER',
      'Good at Love',
      'Fanfare',
      'Kura Kura',
      'Four-leaf Clover',
      'In the Summer',
      'PIECES OF LOVE',
      'Thank You, Family',
      'PROMISE'
    ]
  ),
  new Album(
    'Taste of Love',
    'June 11, 2021',
    'tasteoflove',
    [
      'Alcohol-Free',
      'First Time written by Jihyo',
      'Scandal written by Dahyun',
      'Conversation written by Sana',
      'Baby Blue Love written by Nayeon',
      'SOS written by Dahyun'
    ]
  ),
  new Album(
    'Eyes wide open',
    'October 26, 2020',
    'eyeswideopen',
    [
      'I CAN\'T STOP ME',
      'HELL IN HEAVEN',
      'UP NO MORE written by Jihyo',
      'DO WHAT WE LIKE written by Sana',
      'BRING IT BACK written by Dahyun',
      'BELIEVER',
      'QUEEN written by Dahyun',
      'GO HARD',
      'SHOT CLOCK',
      'HANDLE IT written by Chaeyoung',
      'DEPEND ON YOU written by Nayeon',
      'SAY SOMETHING',
      'BEHIND THE MASK'
    ]
  ),
  new Album(
    'MORE & MORE',
    'June 1, 2020',
    'more&more',
    [
      'MORE & MORE',
      'OXYGEN',
      'FIREWORK',
      'MAKE ME GO written by Nayeon',
      'SHADOW',
      'DON\'T CALL ME AGAIN',
      'SWEET SUMMER DAY written by Jeongyeon and Chaeyoung'
    ]
  ),
  new Album(
    '&TWICE -Repackage-',
    'Febuary 5, 2020',
    '&twicerepackage',
    [
      'SWING',
      'Fake & True',
      'Stronger',
      'Breakthrough',
      'Changing!',
      'HAPPY HAPPY',
      'What You Waiting For',
      'Be OK',
      'POLISH',
      'How u doin\' written by Chaeyoung',
      'The Reason Why'
    ]
  ),
  new Album(
    '&TWICE',
    'November 19, 2019',
    '&twice',
    [
      'Fake & True',
      'Stronger',
      'Breakthrough',
      'Changing!',
      'HAPPY HAPPY',
      'What You Waiting For',
      'Be OK',
      'POLISH',
      'How u doin\' written by Chaeyoung',
      'The Reason Why'
    ]
  ),
  new Album(
    'Feel Special',
    'September 23, 2019',
    'feelspecial',
    [
      'Feel Special',
      'RAINBOW written by Nayeon',
      'GET LOUD written by Jihyo',
      'TRICK IT written by Dahyun',
      'LOVE FOOLISH written by Momo',
      '21:29 written by TWICE',
      'BREAKTHROUGH (Korean Ver.)'
    ]
  ),
  new Album(
    'FANCY YOU',
    'April 22, 2019',
    'fancyyou',
    [
      'FANCY',
      'STUCK IN MY HEAD',
      'GIRLS LIKE US written by Jihyo',
      'HOT written by Momo',
      'TURN IT UP written by Sana',
      'STRAWBERRY written by Chaeyoung'
    ]
  ),
  new Album(
    'BDZ -Repackage-',
    'December 26, 2018',
    'bdzrepackage',
    [
      'STAY BY MY SIDE',
      'BDZ',
      'One More Time',
      'Candy Pop',
      'L.O.V.E',
      'Wishing',
      'Say it again',
      'Wake Me Up',
      'BRAND NEW GIRL',
      'Be As ONE',
      'I WANT YOU BACK'
    ]
  ),
  new Album(
    'The year of "YES"',
    'December 12, 2018',
    'yearofyes',
    [
      'The Best Thing I Ever Did',
      'Be as ONE (Korean Ver.)',
      'YES or YES',
      'SAY YOU LOVE ME',
      'LALALA written by Jeongyeon',
      'YOUNG & WILD written by Chaeyoung',
      'SUNSET written by Jihyo',
      'AFTER MOON',
      'BDZ (Korean Ver.)'
    ]
  ),
  new Album(
    'YES or YES',
    'November 5, 2018',
    'yesoryes',
    [
      'YES or YES',
      'SAY YOU LOVE ME',
      'LALALA written by Jeongyeon',
      'YOUNG & WILD written by Chaeyoung',
      'SUNSET written by Jihyo',
      'AFTER MOON',
      'BDZ (Korean Ver.)'
    ]
  ),
  new Album(
    'BDZ',
    'September 12, 2018',
    'bdz',
    [
      'BDZ',
      'One More Time',
      'Candy Pop',
      'L.O.V.E',
      'Wishing',
      'Say it again',
      'Wake Me Up',
      'BRAND NEW GIRL',
      'Be As ONE',
      'I WANT YOU BACK'
    ]
  ),
  new Album(
    'Summer Nights',
    'July 9, 2018',
    'summernights',
    [
      'Dance The Night Away',
      'CHILLAX',
      'Shot thru the heart written by Momo, Sana, and Mina',
      'What is Love?',
      'SWEET TALKER written by Jeongyeon and Chaeyoung',
      'HO! written by Jihyo',
      'DEJAVU',
      'SAY YES',
      'STUCK'
    ]
  ),
  new Album(
    'What is Love?',
    'April 10, 2018',
    'whatislove',
    [
      'What is Love?',
      'SWEET TALKER written by Jeongyeon and Chaeyoung',
      'HO! written by Jihyo',
      'DEJAVU',
      'SAY YES',
      'STUCK'
    ]
  ),
  new Album(
    'Merry & Happy',
    'December 11, 2017',
    'merryhappy',
    [
      'Heart Shaker',
      'Merry & Happy',
      'LIKEY',
      'TURTLE',
      'MISSING U written by Dahyun and Chaeyoung',
      'WOW',
      'FFW',
      'DING DONG',
      '24/7 written by Nayeon and Jihyo',
      'LOOK AT ME',
      'ROLLIN\'',
      'LOVE LINE written by Jeongyeon',
      'DON\'T GIVE UP written by Chaeyoung',
      'YOU IN MY HEART',
      'JALJAYO GOOD NIGHT'
    ]
  ),
  new Album(
    'twicetagram',
    'October 30, 2017',
    'twicetagram',
    [
      'LIKEY',
      'TURTLE',
      'MISSING U written by Dahyun and Chaeyoung',
      'WOW',
      'FFW',
      'DING DONG',
      '24/7 written by Nayeon and Jihyo',
      'LOOK AT ME',
      'ROLLIN\'',
      'LOVE LINE written by Jeongyeon',
      'DON\'T GIVE UP written by Chaeyoung',
      'YOU IN MY HEART',
      'JALJAYO GOOD NIGHT'
    ]
  ),
  new Album(
    'SIGNAL',
    'May 15, 2017',
    'signal',
    [
      'SIGNAL',
      'THREE TIMES A DAY',
      'Only YOU',
      'HOLD ME TIGHT',
      'EYE EYE EYES written by Jihyo and Chaeyoung',
      'SOMEONE LIKE ME'
    ]
  ),
  new Album(
    'TWICEcoaster: LANE 2',
    'Febuary 20, 2017',
    'twicecoaster2',
    [
      'KNOCK KNOCK',
      'Ice Cream',
      'TT',
      '1 TO 10',
      'PONYTAIL',
      'JELLY JELLY',
      'PIT-A-PAT',
      'NEXT PAGE',
      'ONE IN A MILLION'
    ]
  ),
  new Album(
    'TWICEcoaster: LANE 1',
    'October 24, 2016',
    'twicecoaster1',
    [
      'TT',
      '1 TO 10',
      'PONYTAIL',
      'JELLY JELLY',
      'PIT-A-PAT',
      'NEXT PAGE',
      'ONE IN A MILLION'
    ]
  ),
  new Album(
    'PAGE TWO',
    'April 25, 2016',
    'pagetwo',
    [
      'Cheer Up',
      'Precious Love written by Chaeyoung',
      'Touchdown',
      'Tuk Tok',
      'Woohoo',
      'My Headphones on'
    ]
  ),
  new Album(
    'THE STORY BEGINS',
    'October 20, 2015',
    'thestorybegins',
    [
      'Like OOH-AHH',
      'Do it again',
      'Going Crazy',
      'Truth',
      'Candy Boy',
      'Like a Fool'
    ]
  )
]