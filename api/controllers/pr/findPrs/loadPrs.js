'use strict';

const getNextPage = require('./getNextPage');

const buildQuery = (username, searchYear) =>
  `-label:invalid+created:${searchYear}-06-25..${searchYear}-06-27+type:pr+is:public+author:${username}`;
const loadPrs = (github, username) =>
  new Promise((resolve, reject) => {
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    // const searchYear = currentMonth < 9 ? currentYear - 1 : currentYear;
    const searchYear = currentYear;

    github.search.issues(
      {
        q: buildQuery(username, searchYear),
        // 30 is the default but this makes it clearer/allows it to be tweaked
        per_page: 100
      },
      (err, res) => {
        if (err) {
          return reject();
        }

        // Filtering PRs from the Sauce GitHub org
        const pullRequestData = res.data.items.filter(pr => !pr.url.includes('repos/saucelabs/'));
        if (github.hasNextPage(res)) {
          getNextPage(res, github, pullRequestData).then(pullRequestData =>
            resolve(pullRequestData)
          );
          return;
        }

        if (process.env.NODE_ENV !== 'production') {
          console.log(`Found ${pullRequestData.length} pull requests.`);
        }
        resolve(pullRequestData);
      }
    );
  });

module.exports = loadPrs;
