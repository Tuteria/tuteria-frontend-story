clone the repo
```
git clone git@gitlab.com:tuteria/v2/tuteria-mobile-codebase.git
```

cd into the repo tuteria-mobile-app
```
cd tuteria-mobile-codebase
```

checkout into web-develop branch
clone the shared-lib repo
```
cd packages
mkdir shared-lib
cd shared-lib
git clone  git@gitlab.com:tuteria/v2/shared-lib.git
```

clone the mobile-lib
```
cd packages
rm -rf mobile-lib
git clone git@gitlab.com:tuteria/mobile-lib.git
git checkout develop
git pull
yarn install
git checkout web-develop
git pull origin develop
```

install packages in the root
```
cd ../..
yarn install

```

