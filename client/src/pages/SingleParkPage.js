import Container from "../components/Container";

export default function ParkPage(props) {
  return (
    <Container style={{ minHeight: "80%" }}>
      <h1 className="text-center">{props.name}</h1>
      <div className="row">
        <h1>{props.data}</h1>
        <img alt="biteme" src={props.imgSrc} />
      </div>
      <div>
          <h4>{props.vicinity}</h4>
      </div>
      <div>
          <h4>Community Rating: {props.rating}</h4>
      </div>
    </Container>
  );
}