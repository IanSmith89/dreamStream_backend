'use strict';

exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('users').del(),
    knex('dreams').del(),
    knex('filters').del()
  )
  .then(function() {
    return Promise.join(
      knex('users').insert({
        email: 'bobbymcbobberson@bobmail.com',
        password: 'coolbobby44',
        firstName: 'Bobby',
        lastName: 'McBobberson'
      }).returning('id'),
      knex('users').insert({
        email: 'vanessatudessa@email.com',
        password: 'vannatutu99',
        firstName: 'Vanessa',
        lastName: 'Tudessa'
      }).returning('id')
    );
  }).then(function() {
    return Promise.join(
      knex('dreams').insert({
        user_id: 1,
        dateTime: '2016-1-28 21:40:23 -0600',
        content: "I rode a sparkling bicycle to Bill Murray's house. He gave me a red cape that made me super-human. We fell in love.",
        mood: 2,
        rating: 3,
        duration: 7
      }).returning('id'),
      knex('dreams').insert({
        user_id: 1,
        dateTime: '2016-1-29 23:59:17 -0600',
        content: "I stole the One Ring from Frodo and traded it to Sauron for a red bicycle. It turns out Sauron is Frodo's second counsin, twice removed.",
        mood: 4,
        rating: 1,
        duration: 3
      }).returning('id'),
      knex('dreams').insert({
        user_id: 1,
        dateTime: '2016-2-02 01:23:41 -0600',
        content: "I fell in love with Sauron and we ruled Middle Earth. It was red hot.",
        mood: 3,
        rating: 3,
        duration: 5
      }).returning('id'),
      knex('dreams').insert({
        user_id: 2,
        dateTime: '2016-02-05 22:19:55 -0600',
        content: "My best friend was a piece of bacon wearing an over-sized bacon suit. We played in the park until sunset and then I ate him. Then I turned into a piece of bacon and put on the bacon suit. I didn't have any friends.",
        mood: 5,
        rating: 1,
        duration: 9
      }).returning('id'),
      knex('dreams').insert({
        user_id: 2,
        dateTime: '2016-02-07 4:40:19 -0600',
        content: "I was trapped in a never-ending construct of dreams within dreams. Reality was always one Russian nesting doll up - or down. What is real?",
        mood: 5,
        rating: 5,
        duration: 1
      }).returning('id'),
      knex('dreams').insert({
        user_id: 2,
        dateTime: '2016-02-10 6:22:17 -0600',
        content: "I went to school with clothes on but everybody else was naked and eating huge plates of bacon. It was terrifying.",
        mood: 5,
        rating: 5,
        duration: 12
      }).returning('id')
    );
  }).then(function() {
    return Promise.join(
      knex('filters').insert({
        user_id: -1,
        phrase: "a"
      }),
      knex('filters').insert({
        user_id: -1,
        phrase: "an"
      }),
      knex('filters').insert({
        user_id: -1,
        phrase: "and"
      }),
      knex('filters').insert({
        user_id: -1,
        phrase: "but"
      }),
      knex('filters').insert({
        user_id: -1,
        phrase: "or"
      }),
      knex('filters').insert({
        user_id: -1,
        phrase: "for"
      }),
      knex('filters').insert({
        user_id: -1,
        phrase: "is"
      }),
      knex('filters').insert({
        user_id: -1,
        phrase: "I"
      }),
      knex('filters').insert({
        user_id: -1,
        phrase: "the"
      }),
      knex('filters').insert({
        user_id: -1,
        phrase: "that"
      }),
      knex('filters').insert({
        user_id: -1,
        phrase: "those"
      }),
      knex('filters').insert({
        user_id: -1,
        phrase: "these"
      }),
      knex('filters').insert({
        user_id: -1,
        phrase: "this"
      }),
      knex('filters').insert({
        user_id: -1,
        phrase: "what"
      }),
      knex('filters').insert({
        user_id: -1,
        phrase: "which"
      }),
      knex('filters').insert({
        user_id: -1,
        phrase: "whose"
      }),
      knex('filters').insert({
        user_id: -1,
        phrase: "on"
      }),
      knex('filters').insert({
        user_id: -1,
        phrase: "onto"
      }),
      knex('filters').insert({
        user_id: -1,
        phrase: "off"
      }),
      knex('filters').insert({
        user_id: -1,
        phrase: "of"
      }),
      knex('filters').insert({
        user_id: -1,
        phrase: "if"
      }),
      knex('filters').insert({
        user_id: -1,
        phrase: "and"
      }),
      knex('filters').insert({
        user_id: -1,
        phrase: "in"
      }),
      knex('filters').insert({
        user_id: -1,
        phrase: "into"
      }),
      knex('filters').insert({
        user_id: -1,
        phrase: "when"
      }),
      knex('filters').insert({
        user_id: -1,
        phrase: "one"
      }),
      knex('filters').insert({
        user_id: -1,
        phrase: "some"
      }),
      knex('filters').insert({
        user_id: -1,
        phrase: "these"
      }),
      knex('filters').insert({
        user_id: -1,
        phrase: "few"
      }),
      knex('filters').insert({
        user_id: -1,
        phrase: "my"
      }),
      knex('filters').insert({
        user_id: -1,
        phrase: "your"
      }),
      knex('filters').insert({
        user_id: -1,
        phrase: "at"
      }),
      knex('filters').insert({
        user_id: -1,
        phrase: "he"
      }),
      knex('filters').insert({
        user_id: -1,
        phrase: "she"
      }),
      knex('filters').insert({
        user_id: -1,
        phrase: "not"
      }),
      knex('filters').insert({
        user_id: -1,
        phrase: "his"
      }),
      knex('filters').insert({
        user_id: -1,
        phrase: "her"
      }),
      knex('filters').insert({
        user_id: -1,
        phrase: "its"
      }),
      knex('filters').insert({
        user_id: -1,
        phrase: "our"
      }),
      knex('filters').insert({
        user_id: -1,
        phrase: "their"
      }),
      knex('filters').insert({
        user_id: -1,
        phrase: "little"
      }),
      knex('filters').insert({
        user_id: -1,
        phrase: "much"
      }),
      knex('filters').insert({
        user_id: -1,
        phrase: "many"
      }),
      knex('filters').insert({
        user_id: -1,
        phrase: "lot"
      }),
      knex('filters').insert({
        user_id: -1,
        phrase: "most"
      }),
      knex('filters').insert({
        user_id: -1,
        phrase: "some"
      }),
      knex('filters').insert({
        user_id: -1,
        phrase: "any"
      }),
      knex('filters').insert({
        user_id: -1,
        phrase: "enough"
      }),
      knex('filters').insert({
        user_id: -1,
        phrase: "all"
      }),
      knex('filters').insert({
        user_id: -1,
        phrase: "both"
      }),
      knex('filters').insert({
        user_id: -1,
        phrase: "half"
      }),
      knex('filters').insert({
        user_id: -1,
        phrase: "either"
      }),
      knex('filters').insert({
        user_id: -1,
        phrase: "neither"
      }),
      knex('filters').insert({
        user_id: -1,
        phrase: "each"
      }),
      knex('filters').insert({
        user_id: -1,
        phrase: "every"
      }),
      knex('filters').insert({
        user_id: -1,
        phrase: "other"
      }),
      knex('filters').insert({
        user_id: -1,
        phrase: "another"
      }),
      knex('filters').insert({
        user_id: -1,
        phrase: "such"
      }),
      knex('filters').insert({
        user_id: -1,
        phrase: "what"
      }),
      knex('filters').insert({
        user_id: -1,
        phrase: "rather"
      }),
      knex('filters').insert({
        user_id: -1,
        phrase: "quite"
      }),
      knex('filters').insert({
        user_id: -1,
        phrase: "there"
      }),
      knex('filters').insert({
        user_id: -1,
        phrase: "would"
      }),
      knex('filters').insert({
        user_id: -1,
        phrase: "to"
      }),
      knex('filters').insert({
        user_id: -1,
        phrase: "by"
      }),
      knex('filters').insert({
        user_id: -1,
        phrase: "from"
      }),
      knex('filters').insert({
        user_id: -1,
        phrase: "about"
      }),
      knex('filters').insert({
        user_id: -1,
        phrase: "be"
      }),
      knex('filters').insert({
        user_id: -1,
        phrase: "have"
      }),
      knex('filters').insert({
        user_id: -1,
        phrase: "do"
      }),
      knex('filters').insert({
        user_id: -1,
        phrase: "say"
      }),
      knex('filters').insert({
        user_id: -1,
        phrase: "get"
      }),
      knex('filters').insert({
        user_id: -1,
        phrase: "it"
      }),
      knex('filters').insert({
        user_id: -1,
        phrase: "with"
      }),
      knex('filters').insert({
        user_id: -1,
        phrase: "it's"
      })
    );
  });
};
