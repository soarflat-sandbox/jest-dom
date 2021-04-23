import React from 'react'
import {render} from '@testing-library/react'
import {ToBeDisabled} from '../ToBeDisabled'

describe('ToBeDisabled', () => {
  test('toBeDisabled の利用例', () => {
    const {getByTestId, getByText} = render(<ToBeDisabled />)

    // toBeDisabled で要素が無効になっているかチェックできる。
    // チェックできる要素は、disabled 属性と付けることで無効になる以下の要素。
    // button、input、select、textarea、optgroup、option、fieldset
    expect(getByTestId('button')).toBeDisabled()
    expect(getByTestId('input')).toBeDisabled()
    // ToBeDisabled コンポーネントの a タグに disabled 属性をつけているが、
    // a タグに disabled 属性をつけても無効にはならないので、
    // .not.toBeDisabled() がパスする。
    expect(getByText('link')).not.toBeDisabled()
  })
})
