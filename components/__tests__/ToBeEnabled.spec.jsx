import React from 'react'
import {render} from '@testing-library/react'
import {ToBeEnabled} from '../ToBeEnabled'

describe('ToBeEnabled', () => {
  test('toBeEnabled の利用例', () => {
    const {getByTestId, getByText} = render(<ToBeEnabled />)

    // toBeEnabled で要素が有効になっているかチェックできる。
    expect(getByTestId('button')).toBeEnabled()
    expect(getByTestId('input')).toBeEnabled()
    // ToBeEnabled コンポーネントの a タグに disabled 属性をつけているが、
    // a タグに disabled 属性をつけても無効にはならないので、以下のテストはパスする。
    expect(getByText('link')).toBeEnabled()
  })
})
