module.exports = {
  name: 'shared-util-browser',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/shared/util/browser',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
