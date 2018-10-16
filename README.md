# universal-systemjs

A Universal wrapper around
[SystemJS 0.21.x](https://github.com/systemjs/systemjs/tree/0.21)

Uses the
[production-only loader](https://github.com/systemjs/systemjs/tree/0.21#browser-production)
in browser environments, and the
[NodeJS loader](https://github.com/systemjs/systemjs/tree/0.21#nodejs)
otherwise. In NodeJS, a global `fetch` is defined (via `node-fetch`) so that
importing modules using absolute URLs is supported out of the box.
