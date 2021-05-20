import React from "react";
import styled from "styled-components"

class App extends React.Component{
  state = {
    query: "" // state 선언, 이름 query 초기값 공백("")
  };

  render() {
    return (
      /* Container에 query라는 이름으로 state 전달 */
      <Container query={this.state.query}> 
        <Input 
          placeholder="테마를 입력하세요"
          onKeyPress={this.handleInputKeyPress}>
        </Input>
      </Container>
      // onKeyPress : 이벤트 핸들러 -> 입력받은 값 state에 저장
    );
  }

  handleInputKeyPress = event => {
    if(event.key === "Enter") {
      this.setState({ // this.setState를 통해 input창의 값을 state에 저장, this.state.query = event.target.value 처럼 직접적으로 state 수정하면 React가 state의 변화 감지 못함
        query: event.target.vlaue
      });
      event.target.value = ""; // input창에 남아있는 값 지워줌
    }
  };
}

// styled-components를 통해 Container 이름의 div 만듬
// template literals
const Container = styled.div` 
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to right,
    rgba(20, 20, 20, 0.1) 10%,
    rgba(20, 20, 20, 0.7) 70%,
    rgba(20, 20, 20, 1)
  ),
  url(https://source.unsplash.com/random/1920x1080?${props => props.query}); // 전달받은 query 이미지 URL에 붙임 
  background-size: cover;
`;

const Input = styled.input`
  position: absolute;
  top: 0;
  right: 0;
  width: 190px;
  height: 33px;
  padding: 3px;
  background: transparent;
  outline: none;
  border: none;
  font-size: 22px;
  color: white;
`;

export default App;

