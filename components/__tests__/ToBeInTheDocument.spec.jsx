import React from 'react'
import {render} from '@testing-library/react'
import {ToBeInTheDocument} from '../ToBeInTheDocument'

describe('ToBeInTheDocument', () => {
  test('toBeInTheDocument の利用例', () => {
    const {getByTestId, queryByText} = render(<ToBeInTheDocument />)
    // toBeInTheDocument で要素がドキュメント上に存在するかチェックできる。
    // つまり、要素がレンダリングされているかチェックできる。
    expect(getByTestId('html-element')).toBeInTheDocument()
    expect(getByTestId('svg-element')).toBeInTheDocument()
    expect(queryByText('does-not-exist')).not.toBeInTheDocument()
  })
})
