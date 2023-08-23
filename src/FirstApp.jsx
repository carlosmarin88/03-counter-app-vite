//import {Fragment} from 'react';
// dependendy that i have install if you proyect is with vite
// yarn add prop-types
import PropTypes from 'prop-types';

// 'rafc' shortcut for create component

const newMessage = {
    message: 'Hello World',
    title: 'Charly'
};

const greeting = (message) => `Hi ${message.title}, I have a  message for you "${message.message}"`;


export const FirstApp = ({
     title,
     subTitle= 'La tierra explota!',
     name}) => {
    
    //console.log(props);

    // <></> = <Fragment></Fragment>
    return(
        <> 
            <h1>{title}</h1>
            {/*<h1>{greeting(newMessage)}</h1>*/}
            {/*<code>{JSON.stringify(newMessage)}</code>*/}
            <p>{subTitle}</p>
            <p>{name}</p>
        </>
        
    );
};

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string
}

FirstApp.defaultProps = {
    title : 'No hay titulo',
    subTitle: 'No hay subitulo',
    name: 'Carlos Marin'
}
