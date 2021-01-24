import React, {Component} from 'react';
import './App.css';
import Contact from "./Contact";

export default class App extends Component {
    state = {
        contacts:
            [{
                id: 1,
                name: "Max Muster",
                img: "profilepic1.jpg"
            }, {
                id: 2,
                name: "Thomas Tester",
                img: "profilepic2.jpg"
            }]
    }

    deleteContact(contact: any) {
        let index = this.state.contacts.indexOf(contact)

        console.log('deleting '+index);
        if (index !== -1) {
            let contacts = this.state.contacts;
            contacts.splice(index, 1)
            let contactsArrayNew = contacts;

            this.setState({contacts: contactsArrayNew})
        }
        // ... imagine some logic that removes a contact object from the contacts list
    }
    render() {
        return (
            <div className="App">
                <div>{
                    this.state.contacts.map((contactData) => {
                        return (
                            <Contact
                                name={contactData.name}
                                imgUrl={contactData.img}
                                onDelete={(e: any)=>{this.deleteContact(contactData)}}
                            />
                        )
                    })
                }
                </div>
            </div>
        );
    }
};


