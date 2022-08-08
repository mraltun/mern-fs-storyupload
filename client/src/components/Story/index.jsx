import Story from "./Story";
import { memo } from "react";

// Higher order component. Only rerender when prop changes, otherwise just use last render
export default memo(Story);
