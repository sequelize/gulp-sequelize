'use strict';

var Umzug = require('umzug');
var _ = require('lodash');

module.exports = function gulpSequelize(sequelize, options) {
  options = _.merge({
    storage: 'sequelize',
    storageOptions: {
      sequelize: sequelize
    },
    logging: function(msg) {
      console.log(msg);
    },
    migrations: {
      wrap: function(migrationFn) {
        return function() {
          return migrationFn(sequelize.queryInterface, sequelize.Sequelize);
        };
      }
    },
  }, options);

  var umzug = new Umzug(options);

  return {
    up: function() {
      return umzug.up()
        .then( function() {
          sequelize.close();
        });
    },

    down: function() {
      return umzug.down()
        .then( function() {
          sequelize.close();
        });
    },

    pending: function() {
      return umzug.pending()
        .each( function(migration) {
          console.log(migration.file);
        })
        .then( function() {
          sequelize.close();
        });
    },

    executed: function() {
      return umzug.executed()
        .each( function(migration) {
          console.log(migration.file);
        })
        .then( function() {
          sequelize.close();
        });
    },
  };
};
