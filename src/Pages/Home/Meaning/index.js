import PartOfSpeech from './PartOfSpeech';
import Color from '../../../constant/Color';
import Definition from './Definition';
import Synonyms from './Synonyms';
import { IoPlayCircleOutline } from 'react-icons/io5';

// task 1: render static word "Meaning" - design; done
// task 2: render all the definitions of a given meaning using bullet points     - design; done
//         render the usage examples whenever available for every given definition - design; done
// task 3: add the play button for the audio pronunciation - design and functionality; done

const Meaning = ({ meaning, phonetics }) => {

  const playAudio = () => {
    // step 1: create an audio object
    const audio = new Audio(phonetics[0].audio);
    // step 2: play the audio
    audio.play();    
  };


  return (
    <>
      <PartOfSpeech partOfSpeech={meaning.partOfSpeech} />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginTop: '2rem', // 32px
        }}
      >
        <div>
          <div
            style={{
              fontSize: '1.5rem', // 24px
              lineHeight: '1.5rem',
              color: Color.secondaryText,
            }}
          >
            Meaning
          </div>
          <div
            style={{
              marginTop: '2rem', // 32px
              marginBottom: '2rem', // 32px
            }}
          >
            {meaning.definitions.map((definition, index) => (
              <Definition key={index} definitionObject={definition} />
            ))}
          </div>
        </div>
        <div>
          <IoPlayCircleOutline
            size={80}
            color={Color.accent}
            style={{ cursor: 'pointer' }}
            onClick={playAudio}
          />
        </div>
      </div>
      <Synonyms synonyms={meaning.synonyms} />
    </>
  );
};

export default Meaning;
