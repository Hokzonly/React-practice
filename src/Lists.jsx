import React from "react";

const withLogging =(WrappedComponent)=> {
    class WithLogging extends React.Component{
        componentDidMount(){
            console.log(`Component ${WrappedComponent.name} mounted`);
        }

        componentWillUnmount() {
            console.log(`component ${WrappedComponent.name} unmounted`);
        }

        render(){
            console.log(`Rendering component ${WrappedComponent.name}`);
            return (
                <WrappedComponent {...this.props}/>
            )
        }
    }

    return WithLogging;
}

const MyComponent =(props)=>{
    return <div>{props.message}</div>
}
const EnhancedComponent = withLogging(MyComponent)

export default EnhancedComponent ;