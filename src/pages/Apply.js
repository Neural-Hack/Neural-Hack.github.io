import React, { useState } from 'react'
import Navbar from './Navbar'
import styled from 'styled-components'
import { ThemeProvider } from '@mui/material/styles'
import { Palette, Theme } from '../assets/Colors';
import { useForm } from '@formspree/react';
import { PiHandWavingFill } from "react-icons/pi";
import { TextField } from '@mui/material';

const Container = styled.div`
    width: 100vw;
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

const FormSubmitBtn = styled.button`
  font-family: 'Montserrat', sans-serif;
  letter-spacing: -0.6px;
  transition-duration: 0.35s;
  background-color: ${Palette.fg};
  color: ${Palette.mt};
  margin-top: 10px;
  padding: 8px;
  border-style: solid;
  border-radius: 1px;
  border-color: ${Palette.st};
  cursor: pointer;
  width: 30%;
  text-align: center;
  align-self: center;

  &:hover {
    background-color: ${Palette.st};
    color: ${Palette.bg};
    transition-duration: 0.35s;
  }
`;

const NameDiv = styled.div`
    display: flex;
    flex-direction: row;
    gap: 16px;
`;

const Apply = () => {
    const [state, handleSubmit] = useForm('xgegodgp');

    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [studentId, setStudentId] = useState('');
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailRegex.test(newEmail);
        setIsValidEmail(isValid);
    };

    const handleFormSubmit = (e) => {
        setIsFormSubmitted(true);
        if (isValidEmail && firstName !== '' && lastName !== '' && studentId !== '') {
            handleSubmit(e);
        } else {
            e.preventDefault();
        }
    };

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
        <>
            <Navbar />
            <FormContainer>
                <FormTitle>Sign Up</FormTitle>
                <Form onSubmit={handleFormSubmit}>
                    <ThemeProvider theme={Theme}>
                        <NameDiv>
                            <TextField
                                id="firstName"
                                name="firstName"
                                label="First Name"
                                variant="outlined"
                                margin="dense"
                                fullWidth
                                error={isFormSubmitted && firstName === ''}
                                helperText={isFormSubmitted && firstName === '' ? 'First Name is required' : ''}
                                InputProps={{
                                    style: { 
                                        color: Palette.mt, 
                                        borderColor: Palette.mt
                                    },
                                  }}
                                InputLabelProps={{
                                    style:{ color : Palette.mt },
                                }}
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)} />
                            <TextField
                                id="lastName"
                                name="lastName"
                                label="Last Name"
                                variant="outlined"
                                margin="dense" fullWidth
                                error={isFormSubmitted && lastName === ''}
                                helperText={isFormSubmitted && lastName === '' ? 'Last Name is required' : ''}
                                InputProps={{
                                    style: { 
                                        color: Palette.mt, 
                                        borderColor: Palette.mt
                                    },
                                  }}
                                InputLabelProps={{
                                    style:{ color : Palette.mt },
                                }}
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)} />
                        </NameDiv>
                        <TextField
                            id="studentId"
                            name="studentId"
                            label="Fullerton ID"
                            variant="outlined"
                            margin="dense"
                            error={isFormSubmitted && studentId === ''}
                            helperText={isFormSubmitted && studentId === '' ? 'Fullerton ID is required' : ''}
                            InputProps={{
                                style: { 
                                    color: Palette.mt, 
                                    borderColor: Palette.mt
                                },
                              }}
                            InputLabelProps={{
                                style:{ color : Palette.mt },
                            }}
                            value={studentId}
                            onChange={(e) => setStudentId(e.target.value)} />
                        <TextField id="email" name="email" label="Email" variant="outlined" margin="dense"
                            value={email}
                            onChange={handleEmailChange}
                            error={(!isValidEmail && email.length > 0) || (isFormSubmitted && email.length === 0)}
                            helperText={!isValidEmail && email.length > 0 ? 'Invalid email format' : isFormSubmitted && email.length === 0 ? 'Email is required' : ''}
                            InputProps={{
                                style: { 
                                    color: Palette.mt, 
                                    borderColor: Palette.mt
                                },
                              }}
                            InputLabelProps={{
                                style:{ color : Palette.mt },
                            }}
                            inputProps={{ pattern: '^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$' }} />
                        <TextField id="additional" name="additional" label="Additional Info" multiline rows={4} margin="dense" helperText="Do you have past experience in this field?" 
                        InputProps={{
                            style: { 
                                color: Palette.mt, 
                                borderColor: Palette.mt
                            },
                          }}
                        InputLabelProps={{
                            style:{ color : Palette.mt },
                        }}
                        />
                    </ThemeProvider>

                    <FormSubmitBtn type="submit" disabled={state.submitting}>Join</FormSubmitBtn>
                </Form>
            </FormContainer></>
    )
}

export default Apply