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
    <div className="fixed left-0 bottom-0 bg-slate-800 w-full z-10 opacity-90">
      <div className="flex flex-col items-center text-center p-3 mx-2 gap-3">
        {cookiesAccepted ? (
          <>
            <p className="font-bold">No ads!</p>
            <p>Enjoy browsing <span>{emojis.grinningFaceWithBigEyes}</span> Visit me on <Github /></p>
          </>
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

/**
 *     <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      position="fixed"
      bottom={0}
      width={1}
    >
      <Box sx={{
        bgcolor: 'background.paper',
        zIndex: 'tooltip',
        display: 'flex',
        flexDirection: 'column',
        p: 2,
        opacity: 0.9
      }}>
        {cookiesAccepted ? (
          <p
            textAlign="center"
            variant="caption"
            // sx={{ mb: 1 }}
          >No ads! Enjoy <span>{emojis.grinningFaceWithBigEyes}</span> and visit me on <Github /></p>
        ) : (
          <>
            <p
              textAlign="center"
              variant="caption"
            >This site makes use of <Cookie /> and <Storage /> to give you the best online experience. Do you accept?</p>
            <button color="warning" onClick={handleAcceptCookies}>Yes I do</button>
            <p
              textAlign="center"
              variant="caption"
            >this message will be removed for 30 days once accepted</p>
          </>
        )}
      </Box>
    </Box>
 */
