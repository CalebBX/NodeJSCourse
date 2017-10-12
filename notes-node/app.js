
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
};
const bodyOptions = {
  describe: 'Body of note',
  demand: true,
  alias: 'b'
};

const argv = yargs
.command('add','Add a new note',{
  title: titleOptions,
  body: bodyOptions
})
.command('list', 'List all notes')
.command('read', 'Read a note',{
  title: titleOptions
})
.command('remove', 'Remove a node', {
  title: titleOptions
})
.help()
.argv;

var command = process.argv[2];

if(command === 'add'){
  var note = notes.addNote(argv.title, argv.body);
  if(note === undefined){
    console.log("Cannot add note title already exists")
  }else{
    console.log("Sucessfully added note");
    notes.logNote(note);
  }
}else if(command === 'list'){
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).`)
  allNotes.forEach(function(note){
    notes.logNote(note);
  });
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
