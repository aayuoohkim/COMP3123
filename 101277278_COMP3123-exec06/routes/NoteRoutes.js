const express = require("express");
const router = express.Router();

const noteModel = require("../models/NotesModel.js");
//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
router.post("/notes", async (req, res) => {
  // Validate request
  if (!req.body.content) {
    return res.status(400).send({
      message: "Note content can not be empty",
    });
  }
  //TODO - Write your code here to save the note
  const newNote = await noteModel.create({
    noteTitle: req.body.content.noteTitle,
    noteDescription: req.body.content.noteDescription,
    priority: req.body.content.priority,
  });

  res.status(201).send({
    status: true,
    message: "Note has been successfully created",
    note: newNote,
  });
});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
router.get("/notes", async (req, res) => {
  // Validate request
  if (!req.body.content) {
    return res.status(400).send({
      message: "Note content can not be empty",
    });
  }
  //TODO - Write your code here to returns all note
  const notes = await noteModel.find();

  res.status(200).send({
    status: true,
    notes,
  });
});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
router.get("/notes/:noteId", async (req, res) => {
  // Validate request
  if (!req.body.content) {
    return res.status(400).send({
      message: "Note content can not be empty",
    });
  }
  //TODO - Write your code here to return only one note using noteid
  const note = await noteModel.findById(req.params.noteId);

  res.status(200).send({
    status: true,
    note,
  });
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
router.put("/notes/:noteId", async (req, res) => {
  // Validate request
  if (!req.body.content) {
    return res.status(400).send({
      message: "Note content can not be empty",
    });
  }

  //TODO - Write your code here to update the note using noteid
  const updatedUser = await noteModel.findByIdAndUpdate(
    req.params.noteId,
    req.body.content,
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).send({
    status: true,
    message: "Note has been successfully updated",
    updatedUser,
  });
});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
router.delete("/notes/:noteId", async (req, res) => {
  // Validate request
  if (!req.body.content) {
    return res.status(400).send({
      message: "Note content can not be empty",
    });
  }
  //TODO - Write your code here to delete the note using noteid
  await noteModel.findByIdAndRemove(req.params.noteId);

  res.status(204).send({
    status: true,
    message: "Note has been successfully deleted",
  });
});

module.exports = router;
