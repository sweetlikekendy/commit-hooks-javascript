# JavaScript - Commit Linting with Unit Testing

Basic example repository to set-up `huksy` with `commitlint` and `jest` for unit testing.

## Set-up guide

```bash
# install node modules
npm install
```

After you staged your changes and commit, unit tests will run, then `commitlint`. If either fail, then the commit will not go through until the errors have been resolved.
