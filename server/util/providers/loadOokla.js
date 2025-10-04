const fs = require('fs');
const { get } = require('https');
const decompress = require('decompress');
const { file } = require('tmp');
const decompressTarGz = require('decompress-targz');
const decompressUnzip = require('decompress-unzip');
const binaries = require('../../config/binaries');

const binaryRegex = /speedtest(.exe)?$/;
const binaryDirectory = __dirname + '/../../../bin/';
const binaryPath = `${binaryDirectory}/ookla` + (process.platform === 'win32' ? '.exe' : '');

const downloadPath = `https://install.speedtest.net/app/cli/ookla-speedtest-${binaries.ooklaVersion}-`;

module.exports.fileExists = async () => fs.existsSync(binaryPath);

module.exports.downloadFile = async () => {
  const binary = binaries.ooklaList.find(
    (b) => b.os === process.platform && b.arch === process.arch,
  );

  if (!binary)
    throw new Error(
      `Your platform (${process.platform}-${process.arch}) is not supported by the Speedtest CLI`,
    );

  await new Promise((resolve) => {
    file({ postfix: binary.suffix }, async (err, path) => {
      get(downloadPath + binary.suffix, async (resp) => {
        resp.pipe(fs.createWriteStream(path)).on('finish', async () => {
          await decompress(path, binaryDirectory, {
            plugins: [decompressTarGz(), decompressUnzip()],
            filter: (file) => binaryRegex.test(file.path),
            map: (file) => {
              file.path = 'speedtest' + (process.platform === 'win32' ? '.exe' : '');
              return file;
            },
          });
          resolve();
        });
      });
    });
  });
};

module.exports.load = async () => {
  if (!(await this.fileExists())) await this.downloadFile();
};
