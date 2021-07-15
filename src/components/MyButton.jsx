// import { Component } from 'react'
import { Button } from 'react-bootstrap'

const MyButton = ({ changeSelected }) => (
    <Button onClick={() => changeSelected('MICKEY')}>CHANGE TO MICKEY</Button>
)

// AS A CLASS
// class MyButton extends Component {
//     render() {
//         return (
//             <Button onClick={() => this.props.changeSelected('MICKEY')}>CHANGE TO MICKEY</Button>
//         )
//     }
// }

export default MyButton