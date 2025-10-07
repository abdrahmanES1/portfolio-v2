import {
  experiences as softwareExp,
  projects as softwarePro,
} from "./software";
import { experiences as dataExp, projects as dataPro } from "./data_science";

const experiences = [...softwareExp, ...dataExp];
const projects = [...softwarePro, ...dataPro];

export { experiences, projects };
