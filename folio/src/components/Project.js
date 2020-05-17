class Project extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "Project",
        description: "Project Description",
        img: "", 
      }
    }
    render() {
        return <h2>I am a {this.props.color} Car!</h2>;
    }
  }
  export default Project;