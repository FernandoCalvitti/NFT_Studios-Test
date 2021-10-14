import React from 'react'
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import Layout from '../Components/Layout/Layout'


describe('Layout tests', () => {

    test('Layout matchs snapshots and contains <Header /> and <ItemList />', () => {

        const layout = render(
            <Layout />
        )

        expect(layout).toMatchSnapshot();
    })

})