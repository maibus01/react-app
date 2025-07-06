import Card from "./components/card"
import contacts from "./components/contact"


function createCard(contact) {
  return (
    <Card
      key={contact.name}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}

function App() {

  return (
    <div className="container">
      {contacts.map(createCard)}
    </div>
  )
}

export default App
