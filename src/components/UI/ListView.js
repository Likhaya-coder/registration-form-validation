import classes from './ListView.module.css';
import Card from './Card';

const ListView = props => {
    return ( 
        <Card>
            <ul className={classes['list-view']}>
                {props.userData.map(usersData => (
                    <li>
                        <h2>Name: {usersData.name}</h2>
                        <p>Email: {usersData.email}</p>
                        <p>Password: {usersData.password}</p>
                        <p>Password Repeat: {usersData.passwordRepeat}</p>
                    </li>
                ))}
            </ul>
        </Card>
     );
}
 
export default ListView;