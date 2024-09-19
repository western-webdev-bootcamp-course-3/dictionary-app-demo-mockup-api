import Phonetics from "./Phonetics";
import Meaning from "./Meaning";
import Sources from "./Sources";

// task 1: link all the sub-components to the main component; done
// task 2: style the part of speech component - design; done

const DefinitionArea = ({ definition }) => {
  if (!definition)
    return <div style={{ marginTop: "2rem" }}>Word not found</div>;

  return (
    <div style={{ marginTop: "2rem" }}>
      <Phonetics definition={definition} />
      {definition.meanings.map((meaning, index) => (
        <Meaning
          key={index}
          meaning={meaning}
          phonetics={definition.phonetics}
        />
      ))}
      <Sources sourceUrls={definition.sourceUrls} />
    </div>
  );
};

export default DefinitionArea;
