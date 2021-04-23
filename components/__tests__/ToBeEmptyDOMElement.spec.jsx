import React from 'react'
import {render} from '@testing-library/react'
import {ToBeEmptyDOMElement} from '../ToBeEmptyDOMElement'

describe('ToBeEmptyDOMElement', () => {
  test('toBeEmptyDOMElement の利用例', () => {
    const {getByTestId} = render(<ToBeEmptyDOMElement />)

    // toBeEmptyDOMElement 要素の中身が存在するかどうかチェックできる
    expect(getByTestId('empty')).toBeEmptyDOMElement()
    expect(getByTestId('not-empty')).not.toBeEmptyDOMElement()
    // チェックする要素の中にスペースが存在すると、要素の中身が存在すると見なされる
    expect(getByTestId('with-whitespace')).not.toBeEmptyDOMElement()
  })
})
