workflow "Publish when master." {
  resolves = ["Publish"]
  on = "push"
}

action "Publish" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  runs = "build:publish"
}
