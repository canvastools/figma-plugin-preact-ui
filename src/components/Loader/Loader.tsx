/** @jsx h */

import { h } from 'preact'
import './Loader.scss'

/* Types */

type LoaderProps = Record<string, never>

/* Component */

const Loader = () => {
  // props: LoaderProps
  return (
    <div className="Loader">
      <div className="Loader__spinner"></div>
    </div>
  )
}

export { Loader, LoaderProps }
