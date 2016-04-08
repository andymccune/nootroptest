/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('iq')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('questions', [
      {query: 'Which word doesn\'t fit?', options: ['Smelling','Seeing','Smiling','Hearing'], answer: 0},
      {query: 'Which word doesn\'t fit?', options: ['Painting','Poem','Flower','Song'], answer: 0},
      {query: 'What day was yesterday, if Monday is in two days?', options: ['Wednesday','Friday','Saturday','Sunday'], answer: 0},
      {query: 'Coffee is to cup, what cake is to...', options: ['Fork','Napkin','Plate'], answer: 0},
      {query: 'Finger is to hand, what leaf is to...', options: ['Twig','Tree','Forest'], answer: 0},
      {query: 'What is half of a quarter of 400?', options: ['50','100','200'], answer: 0},
      {query: '"If you turn your left glove inside out, it will fit your right hand."', options: ['True','False'], answer: 0},
      {query: 'Which shape does not fit the others?', body: '0px 0px', bodySize: ['248px','248px'], optionSize: ['68px','68px'], sprite: true, options: ['0px -270px','-90px -270px'], answer: 0},
      {query: 'Which shape completes the pattern?', body: '-270px 0px', bodySize: ['251px','251px'], optionSize: ['71px','71px'], sprite: true, options: ['-270px -270px','-360px -270px'], answer: 0},
      {query: 'Which shape does not fit the others?', optionSize: ['57px','57px'], sprite: true, options: ['-540px 0px','-540px -90px','-540px -180px','-540px -270px','-540px -360px'], answer: 0},
      {query: 'Which shape does not fit the others?', optionSize: ['57px','57px'], sprite: true, options: ['-630px 0px','-630px -90px','-630px -180px','-630px -270px','-630px -360px'], answer: 0},
      {query: 'Which shape does not fit the others?', optionSize: ['57px','57px'], sprite: true, options: ['-720px 0px','-720px -90px','-720px -180px','-720px -270px'], answer: 0},
      {query: 'Select the picture that best fits the white space', body: '-810px 0px', bodySize: ['206px','176px'], optionSize: ['90px','56px'], sprite: true, options: ['-810px -180px','-810px -270px','-900px -180px','-900px -270px'], answer: 0},
      {query: 'Complete the series: \n 1-2-4-7-11-16-22-?', options: ['30','29'], answer: 0},
      {query: 'Complete the series: \n 3-6-10-20-24-?', options: ['40','48'], answer: 0},
      {query: 'Some bracelets are valuable jewelry. \n All bracelets are made of gold. \n \n Which is true for sure?', options: ['Some bracelets are made of silver.','Some valuable jewelery is made of gold.'], answer: 0},
      {query: 'Some politicians are lazy. \n No lazy person is wealthy. \n \n Which is true for sure?', options: ['Some politicians are not wealthy.','Some politicians are wealthy.'], answer: 0}
    ]);

})();
