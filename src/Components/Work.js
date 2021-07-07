import React from "react";
import Wrapper from "./Wrapper/index.js";
import Container from "react-bootstrap/Container";

import Header from "./Header";
import Footer from "./Footer";
import WorkCard from "./WorkCard";
import work from "../work.json";
//this.state.work

//  class App extends React.Component {
//    state = {
//      work: 0
//    };

//    // handleIncrement increments this.state.count by 1
//    handleIncrement = () => {
//      this.setState({ work: this.state.work + 1 });
//    };

function WorkPage(props) {
  return (
    <Container fluid={true}>
      <Header />
        <Wrapper>
            {work.map((work) => (
            <WorkCard
                id={work.id}
                key={work.id}
                name={work.name}
                image={work.image}
                link={work.link}
                colclass={work.colclass}
                btnclass={work.btnclass}
                linkclass={work.linkclass}
            />
            ))}
        </Wrapper>
      <Footer />
    </Container>
  );
}

export default WorkPage;
