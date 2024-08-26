function App() {
    let d = new Date
    let year = d.getFullYear()
    let month = d.getMonth()+1
    let date = d.getDate()


    let st1 = {
        color: `Red`
    }
    const person = {
        fname: `Natee`,
        lname: `Bunyalug`,
    }
    return (
        <div>
            <h1 style = {st1} > Name: {person.fname}</h1>
            <h1 style = {{color: `pink`}}> LastName: {person.lname}</h1>
            <p>Age: day: {date-3} month:{month-4} year:{year-1994}</p>
        </div>
    )
}

const root = ReactDOM.createRoot(document.querySelector('#root'))
.render(<App />)
