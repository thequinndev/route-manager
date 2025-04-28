import { type EndpointBase, type InferResponses } from "./index";

export type Responses<Operation extends EndpointBase> =
  InferResponses<Operation>;
