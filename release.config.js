module.exports = {
  branches: ["main"], // Change this if your default branch is different
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    ["@semantic-release/changelog", { changelogFile: "CHANGELOG.md" }],
    ["@semantic-release/github", { assets: [] }],
    ["@semantic-release/git", { 
      assets: ["CHANGELOG.md"], 
      message: "chore(release): ${nextRelease.version} [skip ci]" 
    }]
  ]
};
