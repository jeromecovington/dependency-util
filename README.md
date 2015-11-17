# dependency-util
A simple command line util for listing top-level dependency versions. Useful when dealing with a lot of semvers and wanting to know or pin to specific versions, yet not needing/wanting to shrinkwrap.

Should work with any node version, despite deprecated `fs` method. If not, please file an issue.

Not published to npm yet, so in the meantime:

1) Clone the repo.

2) `cd dependency-util`

3) `npm link`

4) `cd <your project name>`

5) `dependency-util`

6) You should see a list of the versions of all installed top-level dependencies of your project.
