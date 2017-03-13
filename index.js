const chalk = require('chalk');
const clear = require('clear');
const CLI = require('clui');
const figlet = require('figlet');
const inquirer = require('inquirer');
const Preferences = require('preferences');
const Spinner = CLI.Spinner;
const GitHubApi = require('github');
const _ = require('lodash');
const git = require('simple-git')();
const touch = require('touch');
const fs = require('fs');
const files = require('./lib/files');
const prompt = require('prompt');

(function main() {
  const board = ('| | | |\n-------\n| | | |\n-------\n| | | |');
  const updateBoard = (play, marker) => {
    playLocations = {
      '1,1': 1,
      '1,2': 3,
      '1,3': 5,
      '2,1': 17,
      '2,2': 19,
      '2,3': 21,
      '3,1': 33,
      '3,2': 35,
      '3,3': 37
    };
    let newBoard = board;
    newBoard = newBoard.split('');
    newBoard[playLocations[play]] = marker;
    console.log(newBoard);
    newBoard = newBoard.join('');
    // let left = board.slice(0, playLocations[play]);
    // console.log('left = ', left);
    // let right = board.slice(playLocations[play] + 1);
    // console.log('right = ', right);
    // baord = `${left}${marker}${right}`;
    console.log(newBoard);
  };
  const promptUser1 = () => {
    prompt.start();
    prompt.get(['move'], (err, result) => {
      console.log(result.move);
      updateBoard(JSON.stringify(result.move), 'X');
    });
    // ('Player 1, it\'s your turn! What is your play? Please specify your play as "<row>,<column>". For example, "1,2" would place your marker in row 1, column 2');
    // console.log('play = ', play);
  };
  updateBoard();
  promptUser1();
})();

