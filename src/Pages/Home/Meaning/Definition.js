import Color from '../../../constant/Color';
// definition object has at least three fields, definition, synonyms, and antonyms
// definition object may have an extra field named example

const Definition = ({ definitionObject }) => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 20,
        }}
      >
        <div
          style={{
            width: 6,
            height: 6,
            backgroundColor: Color.accent,
            borderRadius: '50%',
            marginRight: 20,
          }}
        />
        <div
          style={{
            fontSize: '1.2rem', // 24px
            lineHeight: '1.2rem',
          }}
        >
          {definitionObject.definition}
        </div>
      </div>
      {definitionObject.example && (
        <div
          style={{
            fontSize: '1.2rem', // 24px
            lineHeight: '1.2rem',
            color: Color.secondaryText,
            marginBottom: 20,
            marginLeft: 26,
          }}
        >
          "{definitionObject.example}"
        </div>
      )}
    </>
  );
};

export default Definition;
