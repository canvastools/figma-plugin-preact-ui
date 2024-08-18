/** @jsx h */

import { h } from 'preact'
import { forwardRef } from 'preact/compat'

/* Types */

type TestProps = {
  title: string
}

/* Component */

const Test = (props: TestProps) => {
  return (
    <div className="Test" {...props}>
      {props.title}
    </div>
  )
}

export { Test, TestProps }
