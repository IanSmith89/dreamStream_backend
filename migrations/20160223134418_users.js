'use strict';

exports.up = function(knex, Promise) {
 return knex.schema.createTable('users', function(table){
   table.increments();
   table.string('email', 255);
   table.text('password', 255);
   table.text('firstName', 255);
   table.text('lastName', 255);
 });
};

exports.down = function(knex, Promise) {
 return knex.schema.dropTable('users');
};
