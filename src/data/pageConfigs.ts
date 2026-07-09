import { PageConfigs } from "./types";
import { history_config } from "./configs/history_config";
import { environment_traffic_config } from "./configs/environment_traffic_config";
import { culture_config } from "./configs/culture_config";
import { economy_education_config } from "./configs/economy_education_config";
import { economy_wealth_gap_config } from "./configs/economy_wealth_gap_config";
import { environment_water_quality_config } from "./configs/environment_water_quality_config";
import { environment_weather_config } from "./configs/environment_weather_config";
import { job_config } from "./configs/job_config";
import { interview_water_quality_config } from "./configs/interview_water_quality_config";
import { interview_wealth_gap_config } from "./configs/interview_wealth_gap_config";
import { interview_history_config } from "./configs/interview_history_config";
import { interview_traffic_config } from "./configs/interview_traffic_config";
import { interview_education_config } from "./configs/interview_education_config";
import { interview_weather_config } from "./configs/interview_weather_config";

export const PAGE_CONFIGS: PageConfigs = {
  history: history_config,
  "environment/traffic": environment_traffic_config,
  culture: culture_config,
  "economy/education": economy_education_config,
  "economy/wealth_gap": economy_wealth_gap_config,
  "environment/water_quality": environment_water_quality_config,
  "environment/weather": environment_weather_config,
  job: job_config,
  "interview/water_quality": interview_water_quality_config,
  "interview/wealth_gap": interview_wealth_gap_config,
  "interview/history": interview_history_config,
  "interview/traffic": interview_traffic_config,
  "interview/education": interview_education_config,
  "interview/weather": interview_weather_config,
};
