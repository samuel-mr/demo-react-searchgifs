import React from 'react'
import { shallow } from 'enzyme'
import { ListItems_versionB } from '../../components/ListItems_versionB'
import { useFetchGifs } from '../../hooks/useFetchGifs'
jest.mock('../../hooks/useFetchGifs')

describe('testing ListItem_versionB', () => {
    test('Debe ser igual al snapshot', () => {
        const CATEGORIA = 'simple'

        // Sobreescribiendo la llamada a 'useFetchGifs'
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })

        const wrapper = shallow(<ListItems_versionB category={CATEGORIA} />)
        expect(wrapper).toMatchSnapshot()
    })

    test('Debe mostrar items cuando se cargan las imagenes', () => {
        const CATEGORIA = 'simple'

        const DATA = [{
            id: 123,
            url: 'http:direcion.com',
            title: 'demo'
        },{
            id: 1235,
            url: 'http:direcion.com',
            title: 'demo'
        }]

        // 1. Sobreescribiendo el valor de retorno de la función 'useFetchGifs'
        useFetchGifs.mockReturnValue({
            data: DATA,
            loading: false
        })

        const wrapper = shallow(<ListItems_versionB category={CATEGORIA} />)

        // 2. Verificar que el contenido sea igual al snapshot
        expect(wrapper).toMatchSnapshot()

        // 3. Verificar que exista al menos un ListItemImage (ya que tengo resultados)
        expect(wrapper.find('ListItemImage').exists()).toBeTruthy()
        // 4. Verificar que la cantidad de Items sea igual al tamaño del arreglo
        expect(wrapper.find('ListItemImage').length).toBe(DATA.length)

        // 5. Probar que el parrafo no exista (ya que el loading es false)
        expect(wrapper.find('p').exists()).toBeFalsy()

    })
})