import React from 'react'
import { shallow } from 'enzyme'
import { useFetchGifs } from '../../hooks/useFetchGifs'
import { renderHook, act } from '@testing-library/react-hooks'

describe('useFetchGifs test', () => {
    test('Debe tener un estado vacio', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs())
        const { data, loading } = result.current

        await waitForNextUpdate() // esperar a que termine el código async del hook

        expect(data).toEqual([])
        expect(loading).toBeTruthy()
    })

    test('debe de retornar un arreglo de imagenes y loading en false', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('cat'))

        await waitForNextUpdate()

        const { data, loading } = result.current

        expect(data.length).toBe(2)

    })
})