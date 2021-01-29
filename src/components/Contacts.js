import NameProp from "./NameProp"

const Contacts = (props) => {
    return  (
        <div>
        <h3>Hello, my name is {props.name}</h3>
        <p>I am {props.age} years old and I graduated from {props.school} in {props.graduationYear}</p>
        </div>
    )
}

export default Contacts;