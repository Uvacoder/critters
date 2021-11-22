import { makeSchema } from "nexus";
import path from "path";
import { nexusPrisma } from "@kenchi/nexus-plugin-prisma";
import { User } from "schema/types";

const schema = makeSchema({
  types: [User],
  contextType: {
    module: path.join(process.cwd(), "schema", "context.ts"),
    alias: "ContextModule",
    export: "Context",
  },
  plugins: [
    nexusPrisma({ experimentalCRUD: true, paginationStrategy: "prisma" }),
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
