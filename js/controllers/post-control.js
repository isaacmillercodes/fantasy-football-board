(function() {
  'use strict';

  const app = angular.module('ffReddit');

  app.controller('postController', function($rootScope) {

    $rootScope.posts = [
      {
        id: 1,
        date: '10/16/2016 21:45 MDT',
        image: 'http://ww1.hdnux.com/photos/53/55/21/11457648/3/727x0.jpg',
        author: 'LittleJerry',
        title: 'Lamar Miller: Beast Mode',
        text: 'Finally the high draft pick pays off...just won my match up after getting a fat zero from Sammie Coates.',
        votes: 3,
        comments: [
          {
            author: '1.21 JJ Watts',
            text: 'Hell yeah, that\'s my boy!'
          }
        ]
      },
      {
        id: 2,
        date: '10/16/2016 08:45 MDT',
        image: 'http://www.rotoprofessor.com/football/pictures/CJAnderson.jpg',
        author: 'Demaryius_Targaryen',
        title: 'What to do about C.J. Anderson?',
        text: 'Worried Booker might start stealing carries from him. Last year he came up big in the last half of the season, but I don\'t feel like that can happen again. Should I hang on to him or try to get a trade out of him?',
        votes: -1,
        comments: [
          {
            author: 'BroncosFan86',
            text: 'I\'d hold off on a trade. He\'s been frustrating as an owner but Kubiak will get him going.'
          },
          {
            author: 'RaiderDan',
            text: 'The Broncos are DONE this year. Welcome back to the Raiders as the Kings of the AFC West!'
          },
          {
            author: 'AB_AllDay',
            text: 'lol how\'d you guys do against the Chiefs again?'
          }
        ]
      },
      {
        id: 3,
        date: '10/16/2016 15:45 MDT',
        image: 'http://images0.minutemediacdn.com/production/912x516/580409c862c4cf92d2000001.jpg',
        author: 'FunkyFL',
        title: 'Roethlisberger Has a Torn Meniscus',
        text: 'He\'s getting surgery tomorrow, no timetable for his return according to the article. Everyone get ready to jump on the Jarvis Landry train!',
        votes: 2,
        comments: [
          {
            author: '4RiversJohnson',
            text: 'Nooooooooooooooo'
          },
          {
            author: 'FlaccoForPresident',
            text: 'Hand us the division now!'
          }
        ]
      },
      {
        id: 4,
        date: '10/17/2016 07:45 MDT',
        image: 'http://a.espncdn.com/photo/2016/1013/r139488_576x324_16-9.jpg',
        author: 'FunkyFL',
        title: 'Waiver Wire Pickups: Week 7',
        text: 'I\'m trying to decide between Hunter Henry and Cameron Meredith. Who are you guys going after?',
        votes: 6,
        comments: [
          {
            author: 'SupahChargah',
            text: 'Gotta get Henry if he\'s available! I was surprised to see Jay Ajayi still available in my league. Fingers crossed I can get him!'
          },
          {
            author: 'StaffordTakeTheWheel',
            text: 'Henry for sure. Meredith had a good game but who\'s throwing to him. Hoyer? Cutler? Until the Bears get a QB, all their receivers should make you think twice.'
          },
          {
            author: 'LetThemOffTheHook',
            text: 'I\'ll be the weirdo here and say Meredith is your guy. Henry is alright, but McCoy\'s conservative playcalling kills his value.'
          }
        ]
      }

    ];

  });

}());
