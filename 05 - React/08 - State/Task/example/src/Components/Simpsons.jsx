import { Component } from "react";

export default class Simpsons extends Component {
state = {
    name: 'Lisa',
    bff: 'Janey Powell',
    lovesSchool: true,
    imgUrl: 'https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png',
   }

changeCharacter = () => {
    console.log('Application state changed!');
    this.setState({ name: 'Bart', bff: 'Milhouse Van Houten', lovesSchool: false });
}    


render () {
    return (
        <div>
           
            <img src={this.state.imgUrl}/>
            <p>Hi, my name is {this.state.name}. My best friend is {this.state.bff} and my mother is Marge Simpson. I really, really {this.state.lovesSchool} love school.</p>
          

            <button onClick={this.changeCharacter}>Change Character</button>
        </div>
    )
}

}