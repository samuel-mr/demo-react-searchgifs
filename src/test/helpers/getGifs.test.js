import React from 'react'
import { shallow } from 'enzyme'
import { getGifs} from '../../helpers/getGifs'

describe('Pruebas de getGifs', () => {
    test('Debe retornar un objeto cuando envio una categoria', async () => {
        const result = await getGifs('simple')
        expect(result.length).toBe(2)
    })
    test('Debe retornar un array vacio cuando no envio una categoria', async () => {
        const result = await getGifs()
        expect(result.length).toBe(0)
    })
    test('Debe retornar un array vacio cuando envio una categoria vacia', async () => {
        const result = await getGifs('')
        expect(result.length).toBe(0)
    })
})