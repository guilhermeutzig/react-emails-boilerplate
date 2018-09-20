const fs = require('fs-extra');
const glob = require('glob');

glob(`dist/**/*.html`, {}, (er, files) => {
  let processedSource;

  files.forEach(async (item, i) => {
    let fileHTML = require('fs').readFileSync(item, 'utf8');
    processedSource = fileHTML.replace(
      '<link rel="stylesheet" href="/styles.css"/>',
      '<link rel="stylesheet" href="../styles.css" />'
    );
    processedSource = processedSource.replace(
      '<script id="PhenomicHydration" type="text/json">{}</script><script src="/phenomic.main.js" async=""></script>',
      ''
    );
    processedSource = processedSource.replace('<div id="PhenomicRoot">', '');
    processedSource = processedSource.replace('</div>', '');
    processedSource = processedSource.replace(/(&quot;)/g, '');

    fs.writeFile(item, processedSource, err => {
      if (err) throw err;
    });
  });
});

fs.remove('dist/phenomic.main.js', err => {
  if (err) console.log(err);
});
