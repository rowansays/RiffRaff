import { useState } from 'preact/hooks'
import parse from 'html-react-parser';

/**
 * Load the search index from local json file.
 *
 * @param {string} url Absolute URL to the search index json file.
 * @param {object} Search An instance of the search object.
 *
 * @return {Promise<Array>}
 * @throws {Error}
 */
async function fetchSearchIndex (url) {
  try {
    const indexPromise = await window.fetch(url)
    if (indexPromise.status >= 400) {
      throw new Error(
        'Unable to load index from url "' + url + '". ' +
        'HTTP status code: ' + indexPromise.status
      )
    }

    const index = await indexPromise.json();
    if(!Array.isArray(index)) {
      throw new Error('Data returned by "' + url + '" must be an array.')
    }

    if (index.length < 1) {
      throw new Error('No entries exist in "' + url + '".')
    }

    return index
  } catch(e) {
    throw new Error('Search index not loaded. ' + e.message)
  }
}
async function fetchMenuItems (url, Search) {
  try {
    const fetchPromise = await window.fetch(url)
    if (fetchPromise.status >= 400) {
      throw new Error(
        'Unable to load menu from url "' + url + '". ' +
        'HTTP status code: ' + fetchPromise.status
      )
    }

    const html = await fetchPromise.text();
    const parsed = parse(html, {
      library: require('preact'),
      trim: true
    })

    if (!parsed || !parsed.props || !parsed.props.id || parsed.props.id !== 'MenuItems') {
      throw new Error(
        'Unable to parse menu. The menu at "' + url + '" must contain only a ' +
        'single element with an id of "MenuItems".'
      )
    }

    return parsed
  } catch(e) {
    throw new Error('Menu items not loaded. ' + e.message)
  }
}
function Navigation (props) {
  const { seeker, menuItems } = props
  const [notice, setNotice] = useState('')
  const [results, setResults] = useState([])
  const [searchPhrase, setSearchPhrase] = useState('')

  function q(singular, plural, qty) {
    return (qty === 1) ? qty + ' ' + singular : qty + ' ' + plural
  }

  function handleSearchSubmit (event) {
    event.preventDefault()
    try {
      if (searchPhrase.length > 0) {
        const response = seeker.search(searchPhrase, {limit: 25});
        const message = q('result was', 'results were', response.length) +
          ' found when searching for ' + searchPhrase
        ;
        setNotice(message)
        setResults(response)
      } else {
        setResults([])
        setNotice('')
      }
    } catch (e) {
      throw new Error('CAUGHT IT: ' + e.message)
    }
  }
  function handlePhraseChange (event) {
    const newPhrase = event.target.value
    if (newPhrase === '') {
      if (results.length < 1) {
        setNotice('Phrase deleted from search field.')
      } else {
        setNotice('Search results cleared from screen.')
        setResults([])
      }
    }
    setSearchPhrase(newPhrase)
  }

  return (
    <div id="Navigation">
      <SearchForm
        phrase={searchPhrase}
        onSubmit={handleSearchSubmit}
        onPhraseChange={handlePhraseChange}
      />
      <SearchDialog>{notice}</SearchDialog>
      <div id="Items">
        <SearchResults results={results} />
        {menuItems}
      </div>
    </div>
  )
}
function SearchForm (props) {
  const { onSubmit, onPhraseChange, phrase } = props
  return (
    <>
      <form id="Search" method="get" action="" onSubmit={onSubmit}>
        <label for="SearchPhrase" class="ScreenReaderOnly">Search</label>
        <input
          id="SearchPhrase"
          type="search"
          placeholder="Search"
          value={phrase}
          onInput={onPhraseChange}
        />
        <input type="submit" id="SubmitSearch" className="ScreenReaderOnly" />
        <label for="SubmitSearch">
          <svg title="Submit Search" class="LookingGlassIcon" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="7.5" cy="7.5" r="6.5" stroke="currentColor" stroke-width="2"/>
            <line x1="12.4892" y1="12.2727" x2="19.1559" y2="18.9393" stroke="currentColor" stroke-width="3"/>
          </svg>
        </label>
      </form>
    </>
  )
}
function SearchDialog (props) {
  const { children, isOnScreen } = props
  const atts = {
    id: 'SearchDialog',
    'aria-live': 'polite',
    'aria-atomic': true
  }
  if (isOnScreen === false) {
    atts.className = 'VisuallyHidden'
  }
  return <p {...atts}>{children}</p>
}
function SearchResults (props) {
  const { results } = props
  const atts = {
    id: 'SearchResults'
  }

  if (results.length === 0) {
    atts['aria-hidden'] = true
    atts.hidden = true
  }

  const items = results.map(r => {
    return <SearchResult urlBase={'BANANA'} item={r.item} />
  })

  return (<ul {...atts}>{items}</ul>)
}
function SearchResult (props) {
  const { item, urlBase } = props
  const { path, name, summary, url } = item
  const description = summary === name ? '' : summary
  const absUrl = urlBase + url !== url ? urlBase + url : ''
  return (
    <li class="SearchResult">
      <SearchResultName url={absUrl}>{name}</SearchResultName>
      <SearchResultPath>{path}</SearchResultPath>
      <SearchResultDesc>{description}</SearchResultDesc>
    </li>
  )
}
function SearchResultDesc (props) {
  const { children } = props
  return children !== '' ? <div class="SearchResultDesc">{children}</div> : null
}
function SearchResultName (props) {
  const { children, url } = props

  let content
  if (url === '' && children === '') {
    content = null
  } else if (url === '') {
    content = (<h3 class="SearchResultName">{children}</h3>)
  } else {
    const name = children === '' ? url : children
    content = (<a href={url}>{name}</a>)
  }

  return content === null ? content : (
    <h3 class="SearchResultName">{content}</h3>
  )
}
function SearchResultPath (props) {
  const { children } = props
  return children !== '' ? <span class="SearchResultPath">{children}</span> : null
}

export { fetchSearchIndex, fetchMenuItems, Navigation }
