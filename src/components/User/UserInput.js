import {useState, useRef, Fragment} from 'react';
import PrimaryButton from '../UI/PrimaryButton';
import Card from '../UI/Card';
import classes from './UserInput.module.css';
import Modal from '../UI/Modal';

const UserInput = props => {
    const nameInput = useRef('');
    const emailInput = useRef('');
    const pwdInput = useRef('');
    const pwdRepeatInput = useRef('');

    const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    var lowerCase = /[a-z]/g;
    var upperCase = /[A-Z]/g;
    var numbers = /[0-9]/g;

    const [error, setError] = useState();

    const modalDismissHandler = () => {
        setError(null);
    }

    const submitHandler = e => {
        e.preventDefault();

        const name = nameInput.current.value;
        const email = emailInput.current.value;
        const password = pwdInput.current.value;
        const passwordRepeat = pwdRepeatInput.current.value;


        if (name.trim().length === 0 || email.trim().length === 0 || password.trim().length === 0 || passwordRepeat.trim().length === 0) {
            setError({
                title: 'Empty Inputs',
                content: 'All the inputs needs to be filled, (You cannot leave any blank spaces)',
            });
            return;
        }
        if (!email.match(isValidEmail)) {
            setError({
                title: 'Invalid Email',
                content: 'The email you provided is incorrect(Please enter a correct email)',
            });
            return;
        }

        if (!password.match(lowerCase)) {
            setError({
                title: 'Lowercase required',
                content: 'Password should contain lowercase letters!',
            });
            return;
        }
        if (!password.match(upperCase)) {
            setError({
                title: 'Uppercase required',
                content: 'Password should contain uppercase letters!',
            });
            return;
        }

        if (!password.match(numbers)) {
            setError({
                title: 'Number is required',
                content: 'Password should contain numbers!',
            });
            return;
        }

        if (password.length < 8) {
            setError({
                title: 'Password is week',
                content: 'Password length should be at least 8 charecters.',
            });
            return;
        }

        if (password !== passwordRepeat) {
            setError({
                title: 'Passwords Unmatched',
                content: 'Passwords are not the same.',
            });
            return;
        }
        
        const userInput = {
            name: nameInput.current.value,
            email: emailInput.current.value,
            password: pwdInput.current.value,
            passwordRepeat: pwdRepeatInput.current.value,
        }

        props.onGetData(userInput);

        nameInput.current.value = '';
        emailInput.current.value = '';
        pwdInput.current.value = '';
        pwdRepeatInput.current.value = '';
    }

    return (
        <Fragment>
            {error && <Modal title={error.title} content={error.content} dismiss={modalDismissHandler}/>}
            <Card>
                <form onSubmit={submitHandler} className={classes['form-wrapper']}>
                    <label htmlFor="name">Name <span className={classes.asterisk}>*</span> </label>
                    <input type="text" id="name" ref={nameInput}/>

                    <label htmlFor="email">Email <span className={classes.asterisk}>*</span> </label>
                    <input type="input" id="email" ref={emailInput}/>

                    <label htmlFor="password">Password <span className={classes.asterisk}>*</span> </label>
                    <input type="password" id="password" ref={pwdInput}/>

                    <label htmlFor="passwordRepeat">Repeat password <span className={classes.asterisk}>*</span> </label>
                    <input type="password" id="passwordRepeat" ref={pwdRepeatInput}/>

                    <PrimaryButton type="submit">Register</PrimaryButton>
                </form>
            </Card>
        </Fragment>
     );
}
 
export default UserInput;