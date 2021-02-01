import Fuse from 'fuse.js'
import Prism from 'prismjs';
import { render } from 'preact'
import {
  fetchSearchIndex,
  fetchMenuItems,
  Navigation
} from './Scripts/search.js'
import './Styles/index.scss'

Prism.highlightAll();

(async () => {
  try {
    const menu = document.getElementById('Menu')
    //const index = await fetchSearchIndex(document.baseURI.split('?')[0] + 'js/searchIndexEmpty.json');
    //const index = await fetchSearchIndex(document.baseURI.split('?')[0] + 'js/searchIndex.json123');
    const index = await fetchSearchIndex(document.baseURI.split('?')[0] + 'js/searchIndex.json');
    const menuItems = await fetchMenuItems(document.baseURI.split('?')[0] + 'js/menu.txt');
    const fuse = new Fuse(index, {
      shouldSort: true,
      threshold: 0.6,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: [ 'path', 'name', 'summary', 'url' ]
    });
    render(<Navigation seeker={fuse} menuItems={menuItems} />, menu)
  } catch (e) {
    console.error('Search not loaded. ' + e.message)
  }
})();
