import React from 'react'
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import ItemList from '../Components/ItemList/ItemList'


describe('ItemList tests', () => {

    test('ItemList renders <Spinner /> on first load', () => {

        const item = render(
            <ItemList />
        )
        
        expect(item.getByTestId('spinner')).toBeInTheDocument()
        
    })

})