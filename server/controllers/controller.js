import Questions from "../model/questionModel.js";
import Results from "../model/resultModel.js";
import question, { answers } from "../db/data.js";

export async function getQuestions(req, res) {
  try {
    const qstn = await Questions.find();
    res.json(qstn);
  } catch (e) {
    console.log(e);
  }
}

// Post a question */
export async function postQuestions(req, res) {
  try {
    Questions.insertMany({ questions: question, answers: answers })
      .then(function () {
        res.json({ mag: "Data Save Success" });
      })
      .catch(function (err) {
        console.log(err);
      });
  } catch (e) {
    console.log(e);
  }
}

// Delete all question */
export async function dropQuestions(req, res) {
  try {
    await Questions.deleteMany();
    res.json({ mag: "Data Deleted Success!" });
  } catch (e) {
    console.log(e);
  }
}

// Get all result */
export async function getResult(req, res) {
  try {
    const rest = await Results.find();
    res.json(rest);
  } catch (e) {
    console.log(e);
  }
}

// Post a resulr */
export async function postResult(req, res) {
  try {
    const { username, result, attempts, points, achived } = req.body;
    if (!username && !result) throw new Error("Data not provided");
    Results.create({ username, result, attempts, points, achived })
      .then(function () {
        res.json({ mag: "Result Save Success" });
      })
      .catch(function (err) {
        console.log(err);
      });
  } catch (e) {
    console.log(e);
  }
}

// Delete all result */
export async function dropResult(req, res) {
  try {
    await Results.deleteMany();
    res.json({ mag: "Result Deleted Success!" });
  } catch (e) {
    console.log(e);
  }
}
