// import md parser
import { marked } from "marked";
// import syntax highlighter
import highlighter from "highlight.js";

// register syntax highlighter middleware
marked.setOptions({
	highlight: function (code, lang) {
		return highlighter.highlight(code, { language: lang }).value;
	},
});

export async function parse(md) {

	try{
		return await marked.parse( //replace zero-width chars whcich can cause marked to crash
			md.replace(/^[\u200B\u200C\u200D\u200E\u200F\uFEFF]/, ""),
			{
				async: true,
			},
		);
	}catch(e){
		return `<h1>Sorry, couldn't display data</h1>`;
	}

}
