import styled from '@emotion/styled';
import { Button, Link, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import slackIcon from '../../assets/images/Slack.png';

function Auth() {
  const history = useHistory();
  const [isNew, setIsNew] = useState(false);

  const gotoClient = () => {
    history.push('/');
  };

  const handleSignUp = () => {
    gotoClient();
  };
  const handleSignIn = () => {
    gotoClient();
  };

  return (
    <AuthContainer>
      <FormContainer>
        <div>
          <LogoContainer src={slackIcon} alt='logo' />
        </div>
        <Title>We suggest using the email address you use at work.</Title>
        <form action='' style={{ width: '100%' }}>
          <Label> Email </Label>
          <TextInput id='outlined-basic' variant='outlined' size='small' />
          {isNew && (
            <>
              <Label> Username </Label>
              <TextInput id='outlined-basic' variant='outlined' size='small' />
            </>
          )}
          <Label> Password </Label>
          <TextInput id='outlined-basic' variant='outlined' size='small' />
          <ButtonContainer>
            <>
              {' '}
              {isNew ? (
                <>
                  <SubmitButton variant='contained' onClick={handleSignUp}>
                    Sign Up
                  </SubmitButton>
                  <Link
                    href='#'
                    underline='always'
                    onClick={() => setIsNew(false)}
                  >
                    Already have an account ?
                  </Link>
                </>
              ) : (
                <>
                  <SubmitButton variant='contained' onClick={handleSignIn}>
                    Sign In
                  </SubmitButton>
                  <Link
                    href='#'
                    underline='always'
                    onClick={() => setIsNew(true)}
                  >
                    Create new account.
                  </Link>
                </>
              )}
            </>
            {}
          </ButtonContainer>
        </form>
      </FormContainer>
    </AuthContainer>
  );
}

export default Auth;

const AuthContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f9f6f2;
`;

const Title = styled.div`
  font-size: 1em;
  font-weight: 500;
  margin-block: 0.85em;
`;

const Label = styled(Typography)`
  font-size: 0.85em;
`;

const LogoContainer = styled.img`
  width: 10rem;
  object-fit: contain;
`;

const TextInput = styled(TextField)`
  width: 100%;
  margin-block: 12px;
`;

const SubmitButton = styled(Button)`
  background-color: #562262;
  color: #fff;
  font-weight: 500;
  text-transform: none;
`;

const FormContainer = styled.div`
  height: 60%;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5em;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
