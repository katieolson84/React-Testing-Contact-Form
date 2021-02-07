import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ContactForm from './ContactForm';


//Arrange
test("renders without errors", () => {
    render(<ContactForm />);
})

//Act
test("user can fill out and submit form", async () => {
    render(<ContactForm />);

    const firstNameInput = screen.getByLabelText(/First Name*/i);
    const lastNameInput = screen.getByLabelText(/Last Name*/i);
    const emailInput = screen.getByLabelText(/Email*/i);

    userEvent.type(firstNameInput, "kat");
    userEvent.type(lastNameInput, "Olson");
    userEvent.type(emailInput, "katie@email.com");

    const button = screen.getByRole("button");
    userEvent.click(button);


//Assert
    const first = await screen.findByText(/kat/i);
    expect(first).toBeInTheDocument();

    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();


})