import React from 'react'
import Item from "../Components/Item/Item";
import { render, screen } from '@testing-library/react';

describe('Item tests', () => {

    test('Item is rendered', () => {

        const props = {
            image: 'https://lh3.googleusercontent.com/wTb-RjIladuxVUtOixNrTjW1XdA5cUSOFkA7F0r3xc3wX_JdkzBaHJ6PqO_BH9KNn85_h6t4tOkEoBXFYGQ4BNf8gF52M7Pky27DpA=s250',
            name: 'Baby Yoda',
            id: 71482076
        }

        const item = render(<Item name={props.name} image={props.image} id={props.id}/>)
    
        expect(item.getByTestId("item-alone")).toBeInTheDocument()

    })
    
    
    test('Text rendered is "Baby Yoda"', () => {

        const props = {
            image: 'https://lh3.googleusercontent.com/wTb-RjIladuxVUtOixNrTjW1XdA5cUSOFkA7F0r3xc3wX_JdkzBaHJ6PqO_BH9KNn85_h6t4tOkEoBXFYGQ4BNf8gF52M7Pky27DpA=s250',
            name: 'Baby Yoda',
            id: 71482076
        }

        const item = render(<Item name={props.name} image={props.image} id={props.id}/>)
    
        item.getByText(props.name)
    })

    

})