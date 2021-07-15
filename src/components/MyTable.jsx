
import { ListGroup } from 'react-bootstrap'
import MyButton from './MyButton'

const MyTable = ({ changeSelected, selected }) => {
    // const [selected, setSelected] = useState(null)
    // if I want to share the selected piggy also with MyAlert
    // I need to store it in an upper level, I will store it
    // in App Component and so I can receive the value as well as MyAlert

    // the prop changeSelected changes the piggy into App
    // the prop selected receives the value back

    return (
        <>
            <ListGroup>
                <ListGroup.Item className="pointer" onClick={(e) => changeSelected(e.target.textContent)}>
                    Browny
                </ListGroup.Item>
                <ListGroup.Item className="pointer" onClick={(e) => changeSelected(e.target.textContent)}>
                    Whitey
                </ListGroup.Item>
                <ListGroup.Item className="pointer" onClick={(e) => changeSelected(e.target.textContent)}>
                    Blacky
                </ListGroup.Item>
                <ListGroup.Item className="pointer" onClick={(e) => changeSelected(e.target.textContent)}>
                    Wolf
                </ListGroup.Item>
            </ListGroup>
            <p className="mt-3">Local state is {selected || 'still null'}</p>
            <MyButton changeSelected={changeSelected} />
        </>
    )
}

export default MyTable