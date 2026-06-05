module.exports = {
  types: [
    { value: "article",   name: "article:   New article added" },
    { value: "edit",      name: "edit:      Corrections, rewrites, or expansions to an existing article" },
    { value: "fix",       name: "fix:       Typos, broken links, factual corrections" },
    { value: "structure", name: "structure: Changes to structure or organization" },
    { value: "meta",      name: "meta:      Changes to the contributing guide, README, or repo configuration" },
  ],

  scopes: [],
  allowCustomScopes: true,
  allowBreakingChanges: [],

  messages: {
    type:    "Select the type of change you're committing:",
    scope:   "Scope (optional, article filename or section name):",
    subject: "Short description:\n",
    body:    "Longer description (optional, press enter to skip):\n",
    confirmCommit: "Confirm commit?",
  },

  subjectLimit: 100,
  skipQuestions: ["breaking", "footer"],
};
