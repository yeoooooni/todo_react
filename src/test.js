// 함수형 컴포넌트
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>
  }
  
// 클래스형 컴포넌트
class Welcome extends React.Component{
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
}


const element = <div />;

const element = <Welcome name="Sara" />; // ReactDOM.render() 호출
ReactDOM.render(
  element,
  document.getElementById('root')
);