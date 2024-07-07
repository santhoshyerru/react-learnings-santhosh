const Contact = () =>{
    return (
        <div>
            <h1>Contact Us</h1>
            <h3>Submit us your contact! We will get back to you soon!</h3>
            <form>
                <input type="text" className="border border-black m-2 p-2" placeholder="name"/>
                <input type="email" className="border border-black m-2 p-2" placeholder="email"/>
                <button className="bg-gray-50 rounded-lg border border-black p-2">Submit</button>
            </form>
        </div>
    )
}
export default Contact;