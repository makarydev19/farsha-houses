import { defineField } from "sanity";

const account = {
  name: "account",
  title: "Account",
  type: "document",
  fields: [
    defineField({
      name: "providerType",
      type: "string",
    }),
    defineField({
      name: "providerId",
      type: "string",
    }),
    defineField({
      name: "providerAccountId",
      type: "string",
    }),
    defineField({
      name: "refreshTocken",
      type: "string",
    }),
    defineField({
      name: "refreshTockenExpires",
      type: "number",
    }),
    defineField({
      name: "user",
      title: "user",
      type: "reference",
      to: { type: "user" },
    }),
  ],
};

export default account;
