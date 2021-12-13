import { objectType, extendType } from "nexus";

export const Post = objectType({
  name: "Post",
  definition(t) {
    t.model.id();
    t.model.title();
    t.model.reward();
    t.model.description();
    t.model.location();
    t.model.rewardAmount();
    t.model.dateMissing();
    t.model.dateFound();
    // @ts-ignore
    t.model.critter();
  },
});

export const PostQuery = extendType({
  type: "Query",
  definition(t) {
    t.crud.post();
    t.crud.posts();
  },
});

export const PostMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.crud.createOnePost();
    t.crud.updateOnePost();
    t.crud.deleteOnePost();
  },
});
