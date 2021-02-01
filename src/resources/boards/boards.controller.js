const persimon = require('../../utils/persimon');
const db = persimon('/assets/boards.json'); 
const boardsModel = require('./boards.model');

const getAll = async (req, res) => {
  const boards = await boardsModel.all();
  return res.status(200).json(boards);
};

const getAllOfUser = (req, res) => {
  const boards = db.all();
  
  const userId = parseInt(req.params.userId);
  const filteredBoards = boards.filter((board) => board.author === userId);
  return res.status(200).json(filteredBoards);
};

const getOne = (req, res) => {
  const board = db.get(req.params.id);
  if (board) {
    return res.status(200).json(board);
  }
  return res.status(404).end();
};

const create = (req, res) => {
  const newBoard = req.body;
  const boardsUpdated = boardsModel.create(newBoard);
  return res.status(201).json(boardsUpdated);
};

const update = (req, res) => {
  const updatedBoard = req.body;
  const boardsUpdated = db.update(req.params.id, updatedBoard);
  return res.status(200).json(boardsUpdated);
};

const remove = (req, res) => {
  const boardsWithoutTheDeleted = db.delete(req.params.id);
  return res.status(200).json(boardsWithoutTheDeleted);
};

module.exports = {
  create,
  update,
  getAll,
  getAllOfUser,
  getOne,
  remove,
};
