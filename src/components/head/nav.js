import './nav.css'

export const Navigation = (props) => {
    return ( <div className='App-header-nav'>
        <nav>
            <ul>
                <NavigationLi navigate = {props.li}/>
                <NavigationLi navigate = {props.li}/>
                <NavigationLi navigate = {props.li}/>
            </ul>
        </nav>
    </div>)
    
};

const NavigationLi = (props) =>{
    return (
        <li>
            <a className='App-header-li' href ={props.link}>
{props.text}
            </a>
        </li>
    )
};