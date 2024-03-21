const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema(
  {
    content: {
      type: String,
      required: [true, 'Please enter content'],
    },

    date: {
      type: String,
      required: [true, 'Please enter date'],
    },

    status: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Note = mongoose.model('Note', NoteSchema);

module.exports = Note;