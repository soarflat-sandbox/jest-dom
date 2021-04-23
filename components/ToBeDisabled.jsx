import React from 'react'

export function ToBeDisabled() {
  return (
    <>
      <button data-testid="button" type="submit" disabled>
        submit
      </button>
      <fieldset disabled>
        <input type="text" data-testid="input" />
      </fieldset>
      <a href="..." disabled>
        link
      </a>
    </>
  )
}
