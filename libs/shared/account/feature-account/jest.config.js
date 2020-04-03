module.exports = {
  name: 'shared-account-feature-account',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/shared/account/feature-account',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
