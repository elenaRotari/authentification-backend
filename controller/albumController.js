import Album from "../models/Album.js";

export const getAll = async (req, res) => {
  try {
    res.status(200).send(await Album.find().populate("photos"));
  } catch (error) {
    res.status(404).send({ message: error });
  }
};
export const getOne = async (req, res) => {
  try {
    res.status(200).send(await Album.findById(req.params.id));
  } catch (error) {
    res.status(404).send({ message: error });
  }
};
export const postOne = async (req, res) => {
  try {
    res.status(201).send(await Album.create(req.body));
  } catch (error) {
    res.status(404).send({ message: error });
  }
};
export const updateOne = async (req, res) => {
  try {
    res
      .status(201)
      .send(await Album.findByIdAndUpdate(req.params.id, req.body));
  } catch (error) {
    res.status(404).send({ message: error });
  }
};
export const deleteOne = async (req, res) => {
  try {
    res.status(200).send(await Album.findByIdAndDelete(req.params.id));
  } catch (error) {
    res.status(404).send({ message: error });
  }
};
export const postOnePhoto = async (req, res) => {
  try {
    const album = await Album.findByIdAndUpdate(req.params.id, {
      $push: {
        albums: req.body,
      },
    });
    res.status(201).send(album);
  } catch (error) {
    res.status(404).send({ message: error });
  }
};
