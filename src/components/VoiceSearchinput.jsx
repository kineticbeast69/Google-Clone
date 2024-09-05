import { FaMicrophone } from "react-icons/fa";

function VoiceSearchInput() {
  const animation = "bg-slate-300 p-24 rounded-full";
  const [voiceText, setVoiceText] = useState("Speak Now");
  return (
    <>
      <div className="flex  items-center justify-center h-screen">
        <div className="w-1/2">
          <p className="text-7xl text-slate-500 text-center text-wrap">
            {voiceText}
          </p>
        </div>
        <div className="">
          <div className="flex items-center justify-center bg-red-600 p-14 rounded-full">
            <FaMicrophone size={120} color="white" />
          </div>
        </div>
      </div>
    </>
  );
}
export default VoiceSearchInput;
