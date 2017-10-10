var HumanPlayer = require('./../js/pig.js').humanPlayerModule;
var ComputerPlayer = require('./../js/pig.js').computerPlayerModule;
var PigGameTurn = require('./../js/pig.js').pigGameTurnModule;

// Remove jQuery in back-end logic for tests first.

describe('HumanPlayer', function() {
  it('update the score', function () {
    var human = new HumanPlayer() // Init a score at 0
    human.updateScore(5)
    expect(human.score).toEqual(5)
  });
});

// describe('ComputerPlayer', function() {
//   it('', function () {
//     expect().toEqual()
//   });
// });
//
// describe('PigGameTurn', function() {
//   it('', function () {
//     expect().toEqual()
//   });
// });
