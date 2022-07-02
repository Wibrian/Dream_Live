Feature('Bookmark Hotel');

Before(({ I }) => {
  I.amOnPage('/#/bookmark');
});

// Scenario('Show empty bookmarked Hotel', ({ I }) => {
//   I.dontSeeElement('.post-item');
// });

// Scenario('Bookmark one Hotel', async ({ I }) => {
//   I.amOnPage('/#/');
//   I.wait(7);

//   I.seeElement('.post-item__title a');
//   I.wait(1);
//   I.click('.post-item__title a');
//   I.wait(7);

//   I.seeElement('#likeButton');
//   I.click('#likeButton');

//   I.amOnPage('/#/bookmark');
//   I.wait(4);
//   I.seeElement('.bookmark-title');
// });

Scenario('Unbookmark one Hotel', async ({ I }) => {
  I.amOnPage('/#/');
  I.wait(6);

  I.seeElement('.post-item__title a');
  I.click('.post-item__title a');
  I.wait(6);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/bookmark');
  I.wait(4);
  I.seeElement('.bookmark-title');

  I.click('.bookmark-title');

  I.wait(6);
  I.seeElement('#likeButton');
  I.click('#likeButton');
});

Scenario('Search one Hotel', async ({ I }) => {
  I.amOnPage('/#/');
  I.wait(6);

  I.seeElement('.search-bar');
  I.fillField('hotelName', 'cozy');

  I.seeElement('.post-item__title a');
  I.wait(2);
});

Scenario('Search Hotel by Place', async ({ I }) => {
  I.amOnPage('/#/');
  I.wait(6);

  I.seeElement('.search-bar');
  I.fillField('hotelName', 'brooklyn');

  I.seeElement('.post-item__title a');
  I.wait(2);
});
