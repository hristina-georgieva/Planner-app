const Note = require('../models/note.model.js');


const getNotes = async (req, res) => {
  try{
    const notes = await Note.find({});
    res.status(200).json(notes);
  }catch(error){
    res.status(500).json({message: error.message});
  }
}

const getNote = async (req, res) => {
  try{
    const {id} = req.params;
    const note = await Note.findById(id);
    res.status(200).json(note);
  }catch (error) {
    res.status(500).json({message: error.message})
  }
}

const createNote = async (req, res) => {
  try{
    const note = await Note.create(req.body);
    res.status(200).json(note);
  }catch(error){
    res.status(500).json({message: error.message});
  }
}

const updateNote = async (req, res) => {
  try{

    const {id} = req.params;

    const note = await Note.findByIdAndUpdate(id, req.body);

    if(!note){
      return res.status(404).json({message: 'Note not found'});
    }

    const updatedNote = await Note.findById(id);
    res.status(200).json(updatedNote);

  }catch (error){
    res.status(500).json({message: error.message});
  }
}

const deleteNote = async (req, res) => {
  try{
    const {id} = req.params;

    const note = await Note.findByIdAndDelete(id);

    if(!note){
      return res.status(404).json({message: 'Note not found'});
    }

    res.status(200).json({message: 'Note deleted successfully'});
  }catch(error){
    res.status(500).json({message:error.message});
  }
}

module.exports = {
  getNotes,
  getNote,
  createNote,
  updateNote,
  deleteNote
}