# oxytocin-website-x

## Project setup
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install yarn
brew install node@16
brew link node@16
yarn install
```

### Compiles and hot-reloads for development
```
NODE_OPTIONS=--openssl-legacy-provider yarn serve
```

### Compiles and minifies for production
```
NODE_OPTIONS=--openssl-legacy-provider yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
