module.exports = {
  name: 'common-ui-cdk-popover',
  preset: '../../../../../jest.config.js',
  coverageDirectory: '../../../../../coverage/libs/common/ui/cdk/popover',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
