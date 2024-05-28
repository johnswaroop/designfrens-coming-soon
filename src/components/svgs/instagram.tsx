import { useEffect } from "react";

const Instagram = () => {
  useEffect(() => {
    function adjustBackground() {
      var path = document.getElementById("insta") as any;
      console.log(path);
      if (path) {
        var bbox = path.getBBox();
        var rect = document?.getElementById("instablock");

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
      <g id="insta">
        <path
          stroke="#8491F7"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="5.259"
          d="M351.049 638.5a7.451 7.451 0 100-14.902 7.451 7.451 0 000 14.902z"
        ></path>
        <path
          stroke="#8491F7"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="5.259"
          d="M361.568 610.012h-21.037c-5.809 0-10.519 4.71-10.519 10.519v21.037c0 5.809 4.71 10.518 10.519 10.518h21.037c5.809 0 10.519-4.709 10.519-10.518v-21.037c0-5.809-4.71-10.519-10.519-10.519z"
        ></path>
        <path
          fill="#8491F7"
          d="M362.445 623.16a3.506 3.506 0 100-7.012 3.506 3.506 0 000 7.012z"
        ></path>
      </g>
      <rect
        className="cursor-pointer "
        id="instablock"
        fill="lightblue"
        opacity="0"
      />
    </>
  );
};

export default Instagram;
