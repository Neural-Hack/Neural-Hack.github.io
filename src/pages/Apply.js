import React, { useState } from 'react'
import Navbar from './Navbar'
import styled from 'styled-components'
import { Palette } from '../assets/Colors';
import { ValidationError, useForm } from '@formspree/react';
import { PiHandWavingFill } from "react-icons/pi";
import { TextField } from '@mui/material';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${Palette.fg};
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
`;

const ApplyContainer = styled.div`
    margin-top: 10%;
    width: 40%;
    display: flex;
    justify-content: left;
    flex-direction: column;
`;

const ApplyDone = styled.div`
    color: ${Palette.mt};
    margin-top: 20px;
    margin-bottom: 20px;
    font-family: 'Dancing Script', cursive;
    font-weight: 800;
    font-size: 60px;
    align-self: center;
    text-align: center;
`;

const ApplyDoneBody = styled.div`
    color: ${Palette.mt};
    margin-top: 24px;
    margin-bottom: 0px;
    font-family: 'Roboto', sans-serif;
    font-weight: 800;
    font-size: 32px;
    align-self: center;
    text-align: center;
`;

const ApplyTitle = styled.div`
    text-align: left;
    color: ${Palette.mt};
    word-wrap: break-word;
    margin-top: 60px;
    margin-bottom: 30px;
    font-family: 'Roboto', sans-serif;
    font-weight: 800;
    font-size: 42px;
    letter-spacing: -.8px;
`;

const ApplySubTitle = styled.div`
    text-align: left;
    color: ${Palette.st};
    word-wrap: break-word;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 30px;
`;

const ApplyBody = styled.p`
    text-align: left;
    color: ${Palette.mt};
    width: 50%;
    word-wrap: break-word;
    font-family: 'Playfair Display', serif;
    font-weight: 500;
    font-size: 24px;
`;

const SAppTitle = styled.div`

`;

const SAppBody = styled.div`

`;


const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${Palette.fg};
    padding: 30px;
`;

const FormTitle = styled.div`
  color: ${Palette.mt};
  font-size: 36px;
  font-family: 'Playfair Display', serif;
  margin-bottom: 20px;
  font-weight: bold;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 30%;
    @media screen and (max-width: 960px){
        width: 50%;
    }
`;

const FormLabel = styled.label`
  color: ${Palette.mt};
  font-family: 'Playfair Display', serif;
  font-size: 18px;
  margin-bottom: 8px;
`;

const FormInput = styled.input`
  padding: 8px;
  margin-bottom: 16px;
  font-size: 16px;
`;

const FormTextarea = styled.textarea`
  padding: 8px;
  margin-bottom: 16px;
  font-size: 16px;
`;

const FormSubmitBtn = styled.button`
  font-family: 'Montserrat', sans-serif;
  letter-spacing: -0.6px;
  transition-duration: 0.35s;
  background-color: ${Palette.fg};
  color: ${Palette.mt};
  margin-top: 20px;
  padding: 8px 64px;
  border-style: solid;
  border-radius: 1px;
  border-color: ${Palette.st};
  cursor: pointer;

  &:hover {
    background-color: ${Palette.st};
    color: ${Palette.bg};
    transition-duration: 0.35s;
  }
`;

const Apply = () => {
    const [state, handleSubmit, reset] = useForm('{your-form-id}');

    if (state.succeeded) {
        return (
            <div>
                <Navbar />
                <Container>
                    <ApplyContainer>
                        <ApplyDone>
                            See You Soon!
                        </ApplyDone>
                        <ApplyDone>
                            <PiHandWavingFill />
                        </ApplyDone>
                        <ApplyDoneBody>
                            Your form has been successfully submitted. In the meanwhile why don't you join our discord?
                        </ApplyDoneBody>
                    </ApplyContainer>
                </Container>
            </div>
        );
    }
    return (
        <div>
            <Navbar />
            <FormContainer>
                <FormTitle>Join</FormTitle>
                <Form onSubmit={handleSubmit}>
                    <TextField id="firstName" label="First Name" variant="outlined"/>
                    <ValidationError field="firstName" prefix="firstName" errors={state.errors} />

                    <TextField id="lastName" label="Last Name" variant="outlined"/>
                    <ValidationError field="firstName" prefix="firstName" errors={state.errors} />

                    <FormLabel htmlFor="studentId">Fullerton ID</FormLabel>
                    <FormInput
                        type="text"
                        id="studentId"
                        name="studentId"
                        required
                    />
                    <ValidationError field="firstName" prefix="firstName" errors={state.errors} />

                    <FormLabel htmlFor="message">Additional Message</FormLabel>
                    <FormTextarea
                        id="message"
                        name="message"
                        rows="4"
                    ></FormTextarea>
                    <ValidationError field="firstName" prefix="firstName" errors={state.errors} />

                    <FormSubmitBtn type="submit" disabled={state.submitting}>Join</FormSubmitBtn>
                </Form>
            </FormContainer>
        </div>
    )
}

export default Apply