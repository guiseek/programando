import { registerPlugin } from '@scullyio/scully';
import { scullyConfig } from '@scullyio/scully/utils/config';
import { existsSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { removeAngularPluginValidator } from './validator';

const escapeRegExp = (string): string => {
  // $& means the whole matched string
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};
export function scullyPluginRemoveAngular(html: string): Promise<string> {
  const tsConfigPath = 'tsconfig.json';
  const tsConfig = JSON.parse(readFileSync(tsConfigPath, { encoding: 'utf8' }).toString());

  let isEs5Config = false;
  let statsJsonPath = join(scullyConfig.distFolder, 'stats-es2015.json');
  if (tsConfig.compilerOptions.target === 'es5') {
    isEs5Config = true;
    statsJsonPath = join(scullyConfig.distFolder, 'stats.json');
  }

  if (!existsSync(statsJsonPath)) {
    const noStatsJsonError = `A ${isEs5Config ? 'stats' : 'stats-es2015'}.json is required for the 'removeAngular' plugin.
Please run 'ng build' with the '--stats-json' flag`;
    console.error(noStatsJsonError);
    throw new Error(noStatsJsonError);
  }

  const scullyRemoveAngularStatsJsonPath = join(scullyConfig.distFolder, 'scully-plugin-remove-angular-stats.json');
  let scullyRemoveAngularStatsJson = [];
  if (!existsSync(scullyRemoveAngularStatsJsonPath)) {
    const errorCreatingScullyRemoveAngularStatsJsonError = 'The scully-plugin-remove-angular-stats.json could not be created';
    try {
      scullyRemoveAngularStatsJson = JSON.parse(readFileSync(statsJsonPath, { encoding: 'utf8' }).toString()).assets;
      writeFileSync(scullyRemoveAngularStatsJsonPath, JSON.stringify(scullyRemoveAngularStatsJson));
    } catch (e) {
      console.error(e);
      console.error(errorCreatingScullyRemoveAngularStatsJsonError);
      throw new Error(errorCreatingScullyRemoveAngularStatsJsonError);
    }
  } else {
    scullyRemoveAngularStatsJson = JSON.parse(readFileSync(scullyRemoveAngularStatsJsonPath, { encoding: 'utf8' }).toString());
  }

  let assetsList = scullyRemoveAngularStatsJson.filter(entry => {
    return entry['name'].includes('.js') && (
      entry['name'].includes('-es5') || entry['name'].includes('-es2015')
    );
  }).map(entry => entry['name']);
  assetsList = [...assetsList, ...assetsList.map(asset => {
    return asset.includes('-es5') ?
      asset.replace('-es5', '-es2015') :
      asset.replace('-es2015', '-es5');
  })];

  assetsList.forEach(entry => {
    const regex = new RegExp(`<script( charset="?utf-8"?)? src="?${escapeRegExp(entry)}"?( type="?module"?)?( nomodule(="")?)?( defer(="")?)?><\/script>`, 'gmi');
    html = html.replace(regex, '');
  });
  return Promise.resolve(html);
}


export const RemoveAngular = 'removeAngular';
registerPlugin('render', RemoveAngular, scullyPluginRemoveAngular, removeAngularPluginValidator);
