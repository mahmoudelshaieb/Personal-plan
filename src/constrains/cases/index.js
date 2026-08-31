import manageCRM from "./manageCRM";
import salesTool from "./salesTool";
import geoTool from "./geoTool";
import drivingApp from "./drivingApp";

export { STATUS } from "./status";

// Single source of truth for the work index. Array order is display order.
// Adding a case study = add its module here; the index card comes for free.
export const cases = [manageCRM, salesTool, geoTool, drivingApp];

// The shape components/WorkCard expects, derived so a card can never drift
// from the study it links to.
export const caseLinks = cases.map(({ meta }) => ({
  title: meta.title,
  workFlow: meta.status,
  desc: meta.desc,
  url: meta.url,
  coverImg: meta.cover,
}));

export { manageCRM, salesTool, geoTool, drivingApp };
