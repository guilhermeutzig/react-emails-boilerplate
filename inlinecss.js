const fs = require('fs-extra');
const glob = require('glob');
const Styliner = require('styliner');

fs.move('dist/styles.css', 'styles.css', err => {
  if (err) return console.error(err);
});

const config = {
  buildDir: '/dist'
};

class InlineCss {
  constructor() {
    this.styliner = new Styliner(__dirname + config.buildDir, {
      noCSS: true,
      keepRules: false
    });
  }

  normalizeHTMLFiles() {
    glob(`${this.getBuildDirLocal()}/**/*.html`, {}, (er, files) => {
      let processedSource;

      files.forEach(async (item, i) => {
        let fileHTML = require('fs').readFileSync(item, 'utf8');

        processedSource = await this.styliner.processHTML(fileHTML);

        fs.writeFile(item, processedSource, err => {
          if (err) throw err;
          fs.remove('styles.css', err => {
            if (err) console.error(err);
          });
        });
      });
    });
  }

  getBuildDirLocal() {
    return config.buildDir.slice(0, 0) + '.' + config.buildDir;
  }
}

const inlineClass = new InlineCss();
inlineClass.normalizeHTMLFiles();
