import Plantes from "../components/Plantes";

export default function List(props) {
  const { plants } = props;

  return (
    <>
      <Plantes plants={plants} />
    </>
  );
}
