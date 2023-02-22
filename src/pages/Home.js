import Welcome from "../components/Welcome";

export default function Home(props) {
  const { name } = props;
  return (
    <>
      <Welcome name={name} />
    </>
  );
}
