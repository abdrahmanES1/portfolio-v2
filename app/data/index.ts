import {
  experiences as softwareExp,
  projects as softwarePro,
} from "./software";
import { experiences as dataExp, projects as dataPro } from "./data_science";

import { education } from "./education";
import { skills } from "./skills";

const experiences = [...softwareExp, ...dataExp];
const projects = [...softwarePro, ...dataPro];

export { experiences, projects, education, skills };
