import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { registerCondition } from "./quartz/plugins/loader/conditions"

registerCondition("graph-page", ({ fileData }) => fileData.slug === "graph")
const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()
