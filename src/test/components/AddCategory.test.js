import React from 'react'
import { shallow } from 'enzyme'
import { AddCategory } from '../../components/AddCategory'

//import '@testing-library/jest-dom'

describe('AddCategory Test', () => {

    // jest.fn es un wrapper para analizar un función
    const setCategories = jest.fn()
    let wrapper = shallow(<AddCategory setCategory={setCategories} />)

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategory={setCategories} />)
    })

    test('El componente debe hacer match con su snapshot', () => {

        expect(wrapper).toMatchSnapshot()
    })

    test('El componente debe actualizar el valor cuando se cambia el texto del input', () => {
        const INPUT_INGRESADO = 'hola'
        const input = wrapper.find('input')

        // 1. simula la inserción de texto en el input
        input.simulate('change', { target: { value: INPUT_INGRESADO } })
        const parrafo = wrapper.find('p')
        // 2. verifica si el parrafo tiene ese valor ingreado
        expect(parrafo.text()).toBe(INPUT_INGRESADO)
    })

    test('No debe llamar a la funcion "setCategories" ya que no se ingresó ningun texto', () => {

        wrapper.find('form').simulate('submit', { preventDefault() { } })
        // 1. verifica que la función no halla sido llamada
        expect(setCategories).not.toHaveBeenCalled()
    })

    test('Debe llamar a la función "setCategories" y limpiar la caja de texto', () => {
        const INPUT_INGRESADO = 'nuevo texto'
        // 1. ingresa valores en el input
        wrapper.find('input').simulate('change', { target: { value: INPUT_INGRESADO } })
        // 2. envía los datos del formulario
        wrapper.find('form').simulate('submit', { preventDefault() { } })

        // 3. verifica que la función halla sido llamada 1 ves
        expect(setCategories).toHaveBeenCalledTimes(1)
        // 4. verifica que la función hayya recibido como argumento otra función
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function))

        const input_value = wrapper.find('input').prop('value')
        // 5. verifica que el input esté el blanco 
        expect(input_value).toBe('')
    })

})