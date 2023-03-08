/*Using jsx */
/*ReactDOM.render(<h1>Hello World</h1>,document.getElementById("root"))//DOM in capital bro 
ReactDOM.render(<ul>A list of items
    <li>The Junk </li>
    <li>Am a guy dude</li>
    <li>She's the Lady dude</li>
</ul>,document.getElementById("root"))
function MainContent(){
    return (<h1>This task is not sheety easy</h1>)
}
ReactDOM.render(
    <div>
        <MainContent />
    </div>,document.getElementById("child")
)
const page = (
    <div>
        <h1>Learning React is fun</h1>
        <p>And all that it takes is upgrade from your js coding World</p>
    </div>
)
ReactDOM.render(page,document.getElementById("jsx2"))
*/
/*import React from "react"
import ReactDOM from "react-dom"*/
const Navbar = (
    <nav>
        <h1>Cocaantro</h1>
        <ul>
            <li>Pricing </li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)
ReactDOM.render(
    Navbar,
    document.getElementById("jsx3")
)
const home = (
    <div>
    <h1>The Manhood</h1>
    <h2>Being The Migto</h2>
    <p>Just hold your frame my guy</p>
    <a href="https://www.youtube.com/watch?v=bjzeGJDoj3E&list=UULPnfhYMd3iRe5pzuJyopVuRQ">Visit the Channel</a>
    </div>
)
ReactDOM.render(home, document.getElementById("root"))
const image1 = (
    <div>
        <img src="./wine.jpg" width="350px"></img>
        <h1>The Red Wine</h1>
    </div>
)
ReactDOM.render(image1,document.getElementById("jsx2"))
function TemporaryStart(){
    return(
        <div>
        <h1>Achieving Success</h1>
        <ol>
            <li>Stay Focused</li>
            <li>Dream Big and have goals</li>
            <li>Fall forward and hold on to your goals no matter what</li>
        </ol>
    </div>

    )
}
ReactDOM.render(<TemporaryStart />,document.getElementById("child"))
function Header(){
    return(
        <header className="nav-items">
            <nav>
                <img src="./water.jpg" width="120px"/>{/* the  image link must incude even the image type */}
                <ul >
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>

    )
}
function Footer(){
    return(
        <footer> © 2023 Anthony Marcus, Development. All rights reserved.</footer>
    )
}
function MainContent2(){
    return(
        <div>
            <ol>
            <li>I want to learn react to enable my sychronization of the front-end website development path</li>
            <li>To be able to create dynamic websites of great animation</li>
            <li>To be able to come-up with ways of utilising to come up with my projects</li>
            </ol>
        </div>
    )
}

function Page(){
    return( 
        <div>
            <Header />   
            <MainContent2 />
            <Footer />
        </div>
    )     
}
ReactDOM.render(<Page />,document.getElementById("jsx4"))

/*</li>
//document.getElementById("root").append(JSON.stringify(home))//JSON is always all uppercase
/* Using vanilla js
let h1 = document.createElement("h1")
h1.textContent = "This is a imperative way to program !!"
h1.className = "header"
</ol>document.getElementById("root").append(h1)*/