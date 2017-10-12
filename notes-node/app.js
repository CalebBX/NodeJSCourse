console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;

var command = process.argv[2];
// console.log('Command: ', command);
// console.log('Process', process.argv);
// console.log('Yargs', argv);

if(command === 'add'){
  var note = notes.addNote(argv.title, argv.body);
  if(note === undefined){
    console.log("Cannot add note title already exists")
  }else{
    console.log("Sucessfully added note");
    notes.logNote(note);
  }
}else if(command === 'list'){
  notes.getAll();
}else if(command === 'read'){
  var note = notes.getNote(argv.title);
  if(note === undefined){
    console.log("Note not found")
  }else{
    notes.logNote(note);
  }
}else if(command === 'remove'){
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note was removed' : 'Note node found';
  console.log(message);
}else{
  console.log('Command not recognized');
}
