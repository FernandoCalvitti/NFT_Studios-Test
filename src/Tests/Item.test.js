import React from 'react'
import Item from "../Components/Item/Item";
import { render } from '@testing-library/react';

describe('Item tests', () => {

    //Creates a render before each test

    let item;

    beforeEach(() => {

        const props = {
            image: 'https://lh3.googleusercontent.com/wTb-RjIladuxVUtOixNrTjW1XdA5cUSOFkA7F0r3xc3wX_JdkzBaHJ6PqO_BH9KNn85_h6t4tOkEoBXFYGQ4BNf8gF52M7Pky27DpA=s250',
            name: 'Baby Yoda',
            id: 71482076
        }

        item = render(<Item name={props.name} image={props.image} id={props.id}/>)
    })

    test('Item is rendered', () => {
    
        expect(item.getByTestId("item-alone")).toBeInTheDocument()

    })
    
    
    test('Text rendered is "Baby Yoda"', () => {
    
        item.getByText("Baby Yoda")
    })    

})