import FemaleIcon from "@mui/icons-material/Female";
import MaleIcon from "@mui/icons-material/Male";
import { Gender } from "constants/enums";
import { FC } from "react";
type Props = {
  gender: Gender;
};
const GenderIcon: FC<Props> = ({ gender }) => {
  return gender === Gender.Male ? (
    <MaleIcon sx={{ color: "#029EF6" }} />
  ) : (
    <FemaleIcon sx={{ color: "#E547A1" }} />
  );
};
export default GenderIcon;
