import React from 'react'
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import Header from '../Components/Header/Header'

describe('Header tests', () => {

    //Wrapper before each test

    let header;

    beforeEach(() => {
        header = render(<Header />)
    })

    test('Header is rendered', () => {
    
        expect(header.getByTestId('header')).toBeInTheDocument();
    })


    test('Must exist a title', () => {
        
        expect(header.getByTestId('title')).toBeInTheDocument();
    })


    test('Must exist a year', () => {
        
        expect(header.getByTestId('title')).toBeInTheDocument();
    })


    test('Title must be "NFT STUDIOS CHALLENGE"', () => {
        
        expect(screen.getByText('NFT STUDIOS CHALLENGE')).toBeInTheDocument();
    })

    

    



    

})