export default function VerbTranslation({ selectedVerbIndex, currentVerb }) {
  return (
    <>
      {selectedVerbIndex !== -1 && (
        <p className="text-xl my-8 text-yellow-300">
          {currentVerb.french_translation}
        </p>
      )}
    </>
  );
}
