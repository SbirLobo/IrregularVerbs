export default function VerbCorrection({
  selectedVerbIndex,
  correctionDisplay,
  currentVerb,
}) {
  return (
    <>
      {selectedVerbIndex !== -1 && correctionDisplay === 2 && (
        <div className="flex flex-col MY-8">
          <p className="text-xl">{currentVerb.base_form}</p>
          <p className="text-xl">{currentVerb.past_tense}</p>
          <p className="text-xl">{currentVerb.past_participle}</p>
        </div>
      )}
    </>
  );
}
