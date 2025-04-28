import { type EndpointBase, type InferRequestAccepts } from "./index";

export type Query<Operation extends EndpointBase> = InferRequestAccepts<
  Operation["accepts"],
  "query"
>;
export type Path<Operation extends EndpointBase> = InferRequestAccepts<
  Operation["accepts"],
  "path"
>;
export type Body<Operation extends EndpointBase> = InferRequestAccepts<
  Operation["accepts"],
  "body"
>;
