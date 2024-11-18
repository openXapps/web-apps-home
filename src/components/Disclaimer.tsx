const Cookie = () => {
  return (
    <a
      className="text-orange-400"
      href="https://en.wikipedia.org/wiki/HTTP_cookie"
      target="_blank"
      rel="noopener noreferrer"
    >cookies</a>
  )
};
const Storage = () => {
  return (
    <a
      className="text-orange-400"
      href="https://en.wikipedia.org/wiki/Web_storage"
      target="_blank"
      rel="noopener noreferrer"
    >local storage</a>
  )
};
const Github = () => {
  return (
    <a
      className="text-orange-400"
      href="https://github.com/openXapps/web-apps-home"
      target="_blank"
      rel="noopener noreferrer"
    >GitHub</a>
  )
};

const emojis = { grinningFaceWithBigEyes: '😃' };

type DisclaimerProps = {
  cookiesAccepted: boolean;
  handleAcceptCookies: () => void;
}

export default function Disclaimer({ cookiesAccepted, handleAcceptCookies }: DisclaimerProps) {
  // export default function Disclaimer() {
  return (
    <div className="fixed left-0 bottom-0 bg-slate-900 w-full z-10 opacity-90">
      <div className="flex flex-col items-center text-center p-3 mx-2 gap-3">
        {cookiesAccepted ? (
          <p><span className="font-bold">No ads!</span> <span>{emojis.grinningFaceWithBigEyes}</span> Visit me on <Github /></p>
        ) : (
          <>
            <p>This site makes use of <Cookie /> and <Storage /> to give you the best online experience. Do you accept?</p>
            <button className="outline outline-2 outline-orange-400 rounded-md p-1 w-20" onClick={handleAcceptCookies}>Yes I do</button>
            <p>This message will be removed for 30 days once accepted</p>
          </>
        )}
      </div>
    </div>
  )
}
