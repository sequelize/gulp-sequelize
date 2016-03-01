gulp-sequelize
==============

Gulp tasks for sequelize.

[![NPM](https://nodei.co/npm/gulp-sequelize.png)](https://npmjs.org/package/gulp-sequelize)

### Install
```
npm install --save-dev gulp-sequelize
```

### Usage

```js
var gulpSequelize = require('gulp-sequelize')(sequelize);

gulp.task('up', gulpSequelize.up);

gulp.task('down', gulpSequelize.down);

gulp.task('pending', gulpSequelize.pending);

gulp.task('executed', gulpSequelize.executed);
```


