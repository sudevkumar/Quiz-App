import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

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
