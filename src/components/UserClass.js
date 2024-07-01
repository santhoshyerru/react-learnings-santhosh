import React from 'react';

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo:{
                name: "dummy name",
                location: "dummy Location",
            },
            }
        }
    
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/santhoshyerru");
        const json = await data.json();
        this.setState({
            userInfo: json});
        console.log(json);
        this.timer = setInterval(() =>{console.log("Timer started")}, 1000)
    }
    componentDidUpdate(){
        console.log("Component updated")
    }
    componentWillUnmount(){
        console.log("component unmounted");
        clearInterval(this.timer);
    }
    render() {
        const {login, location, url} = this.state.userInfo;
        const {count} = this.state;
        return (
            <div className="user-card">
                <h2>{login}</h2>
                <h3>Git Profile: {url}</h3>
                <h3>{location}</h3>
                <h4>{this.props.contact}</h4>
            </div>
        )
    }
}
export default UserClass;