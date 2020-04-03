module.exports = {
  name: 'portal-open',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/apps/portal/open',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
