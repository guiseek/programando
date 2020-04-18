import { registerPlugin } from '@scullyio/scully';
import { green, log, logWarn, yellow } from '@scullyio/scully/utils/log';
import { JSDOM } from 'jsdom';
import { getLang, hostCdn } from './prism-scripts.validator';


const scullyPluginAddScripts = async (html: string, routeData) => {
  const route = routeData.route;

  try {
    const dom = new JSDOM(html);
    const { window } = dom;

    const codeElements = window.document.querySelectorAll('pre > code');

    if (!codeElements) {
      logWarn(`Nenhum bloco de código encontrado na página.`);
      return html;
    }

    const codes = Array.from(codeElements)
      .map(({ classList }) =>
        classList.value.replace('language-', ''));

    const langs = new Set(codes);

    const addScript = (file: string, host = '') => {
      const script = window.document.createElement('script');
      script.defer = true;
      script.src = `${host}/${file}`;
      return window.document.body.appendChild(script);
    }

    // <script async src="web.js"></script>
    for (const lang of langs) {
      const file = getLang(lang);
      if (!!file && addScript(file, hostCdn)) {
        log(`PrismJS p/ linguagem ${green(lang)} no post ${yellow(route)}`);
      }
    }
    addScript('web.js');
    return dom.serialize();
  } catch (err) {
    logWarn(`Shit. Não rolou adicionar os scripts nessa páagina aí ${yellow(route)}`);
  }
  return html;
}

export const AddScripts = 'addScripts';
registerPlugin('render', AddScripts, scullyPluginAddScripts);