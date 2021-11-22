import { makeSchema } from "nexus";
import path from "path";
import { nexusPrisma } from "@kenchi/nexus-plugin-prisma";
import * as types from "schema/types";

const schema = makeSchema({
  types,
  contextType: {
    module: path.join(process.cwd(), "schema", "context.ts"),
    export: "Context",
  },
  plugins: [
    nexusPrisma({
      experimentalCRUD: true,
      paginationStrategy: "prisma",
    }),
  ],
  outputs: {
    schema: path.join(process.cwd(), "schema", "schema.graphql"),
    typegen: path.join(
      process.cwd(),
      "node_modules",
      "@types",
      "nexus-typegen",
      "index.d.ts"
    ),
  },
});

export default schema;
