import React from 'react';
import User from './User'


export default class FetchUsers extends React.Component {
    state = {
        loading: true,
        arrayOfUsers: [
            null
        ]
    };
    
    async componentDidMount() {
        const url = "https://randomuser.me/api/?results=10"
        const response = await fetch(url)
        const data = await response.json()
        this.setState({ arrayOfUsers: data.results, loading: false })
    };

    render() {
        if (this.state.arrayOfUsers[0] !=null && !this.state.loading){
            const mappedUsers = this.state.arrayOfUsers.map(item => <User title = {item.name.title} 
                first = {item.name.first} 
                last = {item.name.last}
                state = {item.location.state}
                country = {item.location.country}
                age = {item.dob.age}
                pic = {item.picture.large}/>)
            return mappedUsers
        }
        return <div>user is loading...</div>
    }
}