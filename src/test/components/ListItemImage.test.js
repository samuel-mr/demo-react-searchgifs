import React from 'react'
import { shallow } from 'enzyme'
import { ListItemImage } from "../../components/ListItemImage"

describe('Testing Components', () => {
    const wrapper = shallow(<ListItemImage title='hola' url='http://direccion' />)

    test('debe igualar el snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })
    test('debe mostrar un titulo si le agrego uno', () => {
        const parrafo = wrapper.find('p').text()
        expect(parrafo).toBe('hola')
    })
    test('debe tener una imagen con url y alt', () => {
        const img = wrapper.find('img')
        expect(img.prop('src')).toBe('http://direccion')
        expect(img.prop('alt')).toBe('hola')
    })

    test('debe mostrar la clase de animacion dentro del contendor div', () => {
        const div = wrapper.find('div')
        const className = div.prop('className')

        expect(className.includes('animate__animated')).toBeTruthy()
    })
})