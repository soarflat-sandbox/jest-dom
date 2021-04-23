import React from 'react'

import {Descendant} from './Descendant'

export function ToContainElement() {
  return (
    <span data-testid="ancestor">
      <Descendant />
    </span>
  )
}
