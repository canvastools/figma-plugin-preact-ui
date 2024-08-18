/** @jsx h */

import { h } from 'preact'
import { forwardRef } from 'preact/compat'

import './Button.scss'

/* Types */

type ButtonProps = {
  title: string
  onClick: () => void
}

/* Component */

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  return (
    <button ref={ref} className="Button" {...props}>
      {props.title}
    </button>
  )
})

export { Button, ButtonProps }
