import { objectType } from "nexus";

export const Critter = objectType({
  name: "Critter",
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.images();
  },
});
