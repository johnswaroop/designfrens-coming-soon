import { useEffect } from "react";

const Twitter = () => {
  useEffect(() => {
    function adjustBackground() {
      var path = document.getElementById("twitter") as any;
      console.log(path);
      if (path) {
        var bbox = path.getBBox();
        var rect = document?.getElementById("twitterblock");

        if (rect) {
          rect.setAttribute("x", bbox.x);
          rect.setAttribute("y", bbox.y);
          rect.setAttribute("width", bbox.width);
          rect.setAttribute("height", bbox.height);
        }
      }
    }

    // Call adjustBackground() function when SVG is loaded
    adjustBackground();
  }, []);

  return (
    <>
      <path
        id="twitter"
        stroke="#8491F7"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5.259"
        d="M351.049 708.185c0-4.821 4.054-8.831 8.875-8.765a8.76 8.76 0 017.933 5.259h7.735l-7.078 7.078a28.03 28.03 0 01-27.984 26.231c-7.012 0-8.765-2.63-8.765-2.63s7.012-2.63 10.518-7.889c0 0-14.024-7.012-10.518-26.296 0 0 8.765 8.765 19.284 10.518v-3.506z"
      ></path>
      <rect
        className="cursor-pointer "
        id="twitterblock"
        fill="lightblue"
        opacity="0"
      />
    </>
  );
};

export default Twitter;
