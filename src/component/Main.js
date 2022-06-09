import React from 'react';

function Main(props,color) {
    return (
        <div>
            <main>
                <h1 style={{color}}>안녕하세요. {props.name} 입니다.</h1>
            </main>
        </div>
    );
}

export default Main;