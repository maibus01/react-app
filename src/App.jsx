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
    <div className="flex justify-center items-center">

      <h1 className="text-3xl text-red-600 font-bold underline ">    Hello tailwind!  </h1>
    </div>
    // <div className="container">
    //   {contacts.map(createCard)}
    // </div>
  )
}

export default App
