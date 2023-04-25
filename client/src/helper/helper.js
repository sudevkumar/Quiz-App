import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import axios from "axios";

export function attempt_Number(result) {
  return result.filter((res) => res !== undefined).length;
}

export function earn_points(result, answers) {
  return result
    .map((ele, ind) => answers[ind] === ele)
    .filter((ind) => ind)
    .map((ind) => 10)
    .reduce((prev, cuurent) => prev + cuurent, 0);
}

export function flag_result(totalPoints, earnPoints) {
  return (totalPoints * 50) / 100 < earnPoints;
}

// Check user auth */

export function AuthRour({ children }) {
  const auth = useSelector((state) => state.result.userId);
  return auth ? children : <Navigate to={"/"} replace="true"></Navigate>;
}

// Get server data */

export async function getServerData(url, callback) {
  const data = await (await axios.get(url))?.data;
  return callback ? callback(data) : data;
}

// Post server data */

export async function postServerData(url, result, callback) {
  const data = await (await axios.post(url, result))?.data;
  return callback ? callback(data) : data;
}
