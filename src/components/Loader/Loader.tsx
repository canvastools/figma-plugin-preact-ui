import "./Loader.scss"

import type { LoaderProps } from "./Loader.types"
import "./Loader.scss"

/* Component */

const Loader = () => {
  // props: LoaderProps
  return (
    <div className="Loader">
      <div className="Loader__spinner"></div>
    </div>
  )
}

export { Loader }
