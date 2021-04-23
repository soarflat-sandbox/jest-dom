import React from 'react'

export function ToBeEmptyDOMElement() {
  return (
    <>
      <span data-testid="not-empty">
        <span data-testid="empty"></span>
      </span>
      <span data-testid="with-whitespace"> </span>
    </>
  )
}
