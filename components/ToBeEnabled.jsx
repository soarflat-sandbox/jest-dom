import React from 'react'

export function ToBeEnabled() {
  return (
    <>
      <button data-testid="button" type="submit">
        submit
      </button>
      <fieldset>
        <input type="text" data-testid="input" />
      </fieldset>
      <a href="..." disabled>
        link
      </a>
    </>
  )
}
