'use strict';

exports.up = function(knex, Promise) {
return knex.schema.createTable('filters', function(table){
 table.increments();
 table.integer('user_id');
 table.text('phrase', 255);
 });
};

exports.down = function(knex, Promise) {
 return knex.schema.dropTable('filters');
};
