//import {Fragment} from 'react';

// 'rafc' shortcut for create component

const newMessage = {
    message: 'Hello World',
    title: 'Charly'
};

const greeting = (message) => `Hi ${message.title}, I have a  message for you "${message.message}"`;


export const FirstApp = ({title = 'Hola, soy Charly', subTitle}) => {
    
    //console.log(props);

    // <></> = <Fragment></Fragment>
    return(
        <> 
            <h1>{title}</h1>
            {/*<h1>{greeting(newMessage)}</h1>*/}
            {/*<code>{JSON.stringify(newMessage)}</code>*/}
            <p>{subTitle}</p>
        </>
        
    );
};


