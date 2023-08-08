import classes from './PrimaryButton.module.css';

const PrimaryButton = props => {
    return ( 
        <button className={classes['primary-button']} type={props.type || 'button'} onClick={props.onClick}>{props.children}</button>
     );
}
 
export default PrimaryButton;