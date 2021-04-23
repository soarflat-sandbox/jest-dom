import React from 'react'
import {render} from '@testing-library/react'
import {ToContainElement} from '../ToContainElement'

describe('ToContainElement', () => {
  test('toContainElement の利用例', () => {
    const {getByTestId, queryByTestId} = render(<ToContainElement />)
    const ancestor = getByTestId('ancestor')
    const descendant = getByTestId('descendant')
    const nonExistantElement = queryByTestId('does-not-exist')

    // toContainElement で、要素の中に指定した要素が存在するかチェックできる。
    // 以下の場合 ancestor 要素の中に descendant 要素が存在するかチェックしている。
    expect(ancestor).toContainElement(descendant)
    expect(descendant).not.toContainElement(ancestor)
    expect(ancestor).not.toContainElement(nonExistantElement)
  })
})
