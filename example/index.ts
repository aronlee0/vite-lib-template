import { compose } from "../lib/index";
import { devDependencies } from "../package.json";

const appElem = document.getElementById("app");

function findAllTextNodes(el: Element): Text[] {
  const result: any[] = [];
  const treeWalker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
  while (treeWalker.nextNode()) {
    result.push(treeWalker.currentNode as Text);
  }

  return result;
}

const textNodes = findAllTextNodes(appElem!);
const reJS = /{{(.*)}}/gm;

textNodes.forEach((node) => {
  const txt = node.textContent;
  if (txt) {
    const rstJS = txt.replace(reJS, (str, jsStr) => {
      const devDeps = devDependencies;
      const jsRst = eval(jsStr) || "";
      return jsRst;
    });

    if (txt !== rstJS) {
      const nodeNew = document.createTextNode(rstJS);
      // node.parentNode!.replaceChild(nodeNew, node);
      (node.parentNode! as HTMLElement).innerHTML = rstJS;
      return;
    }
  }
});
