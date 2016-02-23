'use strict';

exports.up = function(knex, Promise) {
return knex.schema.createTable('dreams', function(table){
 table.increments();
 table.integer('user_id');
 table.timestamp('dateTime');
 table.text('content', 2000);
 table.integer('mood');
 table.integer('rating');
 table.integer('duration');
 });
};

exports.down = function(knex, Promise) {
 return knex.schema.dropTable('dreams');
};
