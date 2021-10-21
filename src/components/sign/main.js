import {useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {ActionsContainer} from "./styled";
import {WrapperSignInAndLogIn} from "./styled"

export const Sign = ({isSignUp}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [shouldRedirect, setShouldRedirect] = useState(false);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const auth = getAuth();

        if (isSignUp) {
            createUserWithEmailAndPassword(auth, email, password)
                .then(() => {
                    setShouldRedirect(true);
                })
                .catch((err) => alert(err.message))
        } else {
            signInWithEmailAndPassword(auth, email, password)
                .then(() => {
                    setShouldRedirect(true);
                })
                .catch((err) => alert(err.message))
        }
    }

    if (shouldRedirect) {
        return <Redirect to="/"/>
    }

    return <WrapperSignInAndLogIn>
        <Avatar>
            <LockOutlinedIcon/>
        </Avatar>
        <form onSubmit={handleSubmit}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoFocus
                value={email}
                onChange={handleEmailChange}
            />
            <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
            />
            <ActionsContainer>
                <Button
                    type="submit"
                    variant="contained"
                 
                >
                    {isSignUp ? 'Sign up' : 'Sign in'}
                </Button>
                {
                    isSignUp
                        ? <Button variant="text" component={Link} to='/sign-in'>
                            Have you already an account? Sign in
                        </Button>
                        : <Button variant="text" component={Link} to='/sign-up'>
                            Don't have an account? Sign up
                        </Button>
                }
            </ActionsContainer>
        </form>
    </WrapperSignInAndLogIn>
}