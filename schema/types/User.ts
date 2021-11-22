import { objectType, queryType } from "nexus";

export const User = objectType({
  name: "User",
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.email();
    t.model.image();
  },
});

export const UserQuery = queryType({
  definition(t) {
    t.crud.user();
    t.crud.users();
  },
});
