gulp-sequelize
==============

Gulp tasks for sequelize.

## Usage

```js
var gulpSequelize = require('gulp-sequelize')(sequelize);

gulp.task('up', gulpSequelize.up);

gulp.task('down', gulpSequelize.down);

gulp.task('pending', gulpSequelize.pending);

gulp.task('executed', gulpSequelize.executed);
```


