console.log('Starting notes.js');

const fs = require('fs');

var fetchNotes = function(){
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
}

var saveNotes = function(notes){
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}


var addNote = function(title, body){
  var notes = fetchNotes();
  var note = {
    title,
    body
  };
  var duplicateNotes = notes.filter(function(note){
    return note.title === title;
  });

  if (duplicateNotes.length === 0){
    notes.push(note);
    saveNotes(notes);
    return note;
  }
  
};

var getAll = function(){
  console.log('Getting all notes');
};

var getNote = function(title){
  var notes = fetchNotes();
  var filteredNotes = notes.filter(function(note){
    if(note.title === title){
      return note;
    }
  });
  return filteredNotes[0];
};

var removeNote = function(title){
  var notes = fetchNotes();
  var filteredNotes = notes.filter(function(note){
    if(note.title !== title){
      return note;
    }
  });
  saveNotes(filteredNotes);
  return notes.length !== filteredNotes.length;
};

var logNote = function(note){
  console.log('---');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);  
};
module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
};
