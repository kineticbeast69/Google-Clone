import { useState } from "react";
import VoiceSearchInput from "../components/VoiceSearchinput";
import VoiceNotSupport from "../components/voiceNotSupport";
function VoiceSearch() {
  const [support, setSupport] = useState(true);
  return <>{support ? <VoiceSearchInput /> : <VoiceNotSupport />}</>;
}
export default VoiceSearch;
