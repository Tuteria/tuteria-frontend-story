## Tuteria Frontend Repository

### Getting started.
The frontend codebase consist of 3 different packages.
1. The components package (shared_lib)
2. The design system display package (design_system)
3. The application glue package (web-application)

```
git submodule update --init --recursive
cd packages/design_system
git checkout -f master
git pull
yarn install

cd packages/shared_lib
git checkout -f production
git pull
yarn install
```


**shared lib version**
git+https://now:ystNbANXmXNEpbjkabZG@gitlab.com/tuteria/v2/component-lib.git#0.0.6