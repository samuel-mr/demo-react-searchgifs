import React from 'react'
import { shallow } from 'enzyme'
import { GifExpertApp_versionB } from '../GifExpertApp_versionB'

describe('GifExpertApp test', () => {
    let wrapper = shallow(<GifExpertApp_versionB />)

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<GifExpertApp_versionB />)
    })

    test('Debe hacer match con el snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('Debe tener un elemento AddCategory', () => {
        const element_addCategory = wrapper.find('AddCategory')
        expect(element_addCategory.exists()).toBeTruthy()
    })

    test('Debe tener una lista de Items', () => {
        const element_list = wrapper.find('ListItems_versionB')
        expect(element_list.exists()).toBeTruthy()
        expect(element_list.length).toBe(3)
    })
    test('Debe tener una lista inicializada con 2 elementos', () => {
        const CATEGORIES = ['gato', 'conejo']
        let wrapper = shallow(<GifExpertApp_versionB defaultArray={CATEGORIES} />)
        const element_list = wrapper.find('ListItems_versionB')
        expect(element_list.exists()).toBeTruthy()
        expect(element_list.length).toBe(CATEGORIES.length)
    })
})