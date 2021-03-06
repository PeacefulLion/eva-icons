/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

const gm = require('gm').subClass({imageMagick: true});

const graphicsMagickHelper = {
  convertAndResize(seze, format, srcPath) {
    return gm(srcPath)
      .resize(seze, seze)
      .setFormat(format);
  },

  convert(format, srcPath) {
    return gm(srcPath)
      .setFormat(format);
  },

  resize(seze, srcPath) {
    return gm(srcPath)
      .resize(seze, seze);
  },
};

module.exports = graphicsMagickHelper;
