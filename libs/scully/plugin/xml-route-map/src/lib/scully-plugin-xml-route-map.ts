import { registerPlugin } from '@scullyio/scully';
import { writeFileSync } from 'fs';
import { XMLWriter } from 'xml-writer';
import { RouteMap } from './interfaces';
import { createWriteStream, readFileSync } from 'fs';
import { validator } from './validator';

const xmlRouteMapPlugin = async (html, data: Partial<RouteMap>) => {
	const { route, config } = data;

	console.log(route, config);

	var ws = createWriteStream('/tmp/foo.xml');
	ws.on('close', function () {
		console.log(readFileSync('/tmp/foo.xml', 'UTF-8'));
	});
	const xw = new XMLWriter(false, function (string, encoding) {
		ws.write(string, encoding);
	});
	xw.startDocument('1.0', 'UTF-8').startElement(function () {
		return 'root';
	}).text(function () {
		return 'Some content';
	});
	ws.end();

	// const xw = new XMLWriter();

	// xw.startDocument();
	// xw.startElement('root');
	// xw.writeAttribute('foo', 'value');
	// xw.text('Some content');
	// xw.endDocument();

	// console.log(xw.toString());

	return 'scully-plugin-xml-route-map';

}

// xmlRouteMapPlugin('', {
// 	route: '/',
// 	config: {
// 		directory: '',
// 		routemap: {
// 			ignore: []
// 		}
// 	}
// })

export const XmlRouteMapPlugin = 'XmlRouteMapPlugin';

registerPlugin('render', XmlRouteMapPlugin, xmlRouteMapPlugin, validator);