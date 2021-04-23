import React from 'react'

export function ToBeInTheDocument() {
  return (
    <>
      <span data-testid="html-element">
        <span>Html Element</span>
      </span>
      <svg data-testid="svg-element"></svg>
    </>
  )
}
