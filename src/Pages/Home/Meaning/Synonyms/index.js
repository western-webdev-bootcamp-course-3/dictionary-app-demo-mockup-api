import Synonym from './Synonym';
import Color from '../../../../constant/Color';

// task 1: link all subcomponents to the main component; done
// task 2: design the synonyms section; done

const Synonyms = ({ synonyms }) => {
  if (!synonyms || synonyms.length === 0) {
    return null;
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: '2rem', // 32px
        marginBottom: '1rem', // 16px
        flexFlow: 'wrap',
      }}
    >
      <div
        style={{
          fontSize: '1.2rem', // 24px
          lineHeight: '1.2rem',
          color: Color.secondaryText,
          marginRight: '2rem', // 16px
        }}
      >
        Synonyms
      </div>
      {synonyms.map((synonym, index) => (
        <Synonym
          key={index}
          index={index}
          length={synonyms.length}
          synonym={synonym}
        />
      ))}
    </div>
  );
};

export default Synonyms;
