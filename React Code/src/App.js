import React from 'react';

class App extends React.Component {
  state = {
    input_value: '',
    student_name: 'Storage is Empty'
  }

  saveStudent = () => {
    localStorage.setItem('student', this.state.input_value)
    this.setState({
      student_name: this.state.input_value
    })
  }

  saveStudentInitial = (e) => {
    this.setState({
      input_value: e.target.value
    })
  }

  clearStorage = () => {
    localStorage.clear()
    this.setState({
      student_name: 'Storage is empty'
    })
  }

  componentDidMount = () => {
    let student = localStorage.getItem('student')
    if (student !== null){
      if (this.state.student_name !== student){
        this.setState({
          student_name: student
        })
      }
    }
  }

  render(){
    return (
      <section className="section">
                <div className="container">
                    <h3 className="title">Student:</h3>
                    <ul id="li" className="subtitle">
                      <li>{this.state.student_name}</li>
                    </ul>
                </div>
                <section className="section">
                    <div className="container">
                        <div className="columns">
                            <div className="columns">
                                <div className="column">
                                    <input  className="input is-success" id="submit" type="text" placeholder="Student Name" onChange={(e) => this.saveStudentInitial(e)}/>
                                </div>
                                <div className="column">
                                    <input className="button is-success" type="button" value="Submit Student" onClick={() => this.saveStudent()}/>
                                </div>
                            </div>
                        </div>
                        <input className="button is-warning" type="button" value="Clear Storage" onClick={() => this.clearStorage()}/>
                    </div>
                </section>
            </section>
    )
  }
}

export default App;
