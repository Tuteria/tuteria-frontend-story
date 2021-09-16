clone the repo

```
git clone git@gitlab.com:tuteria/v2/tuteria-mobile-codebase.git
```

cd into the repo tuteria-mobile-app

```
cd tuteria-mobile-codebase
```

clone the shared-lib repo

```
cd packages
rm -rf mobile-lib
git clone  git@gitlab.com:tuteria/v2/shared-lib.git
yarn install
git checkout subject-page
yarn install

```

clone the mobile-lib

```
cd packages
rm -rf mobile-lib
git clone git@gitlab.com:tuteria/mobile-lib.git
git checkout develop
git pull
yarn install
```

install packages in the root

```
cd ../..
yarn install

```
