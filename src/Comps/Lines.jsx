import React from "react";
import mainImg from "../Assets/main.svg";
export default function Lines({
  color = "#ffc000",
  adjustedDetailHeight = 0,
  adjustedCountryHeight = 0,
}) {
  return (
    <div
      style={{
        backgroundImage: `url(${mainImg})`,
        // "--path": "polygon(100% 0, 100% 43%, 89% 43%, 89% 68%, 100% 68%, 100% 100%, 0 100%, 0 0);",
        "--path": `polygon(50% 0%, 0% 100%, 100% 100%)`,
      }}>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 2000"><defs><style>.cls-1{fill:none;stroke:#ffc000;strokeMiterlimit:10;strokeWidth:8px;}.cls-2{fill:#ffc000;}</style></defs><title>backgroundyellow</title><g id="Layer_2" data-name="Layer 2"><polyline class="cls-1" points="1656.2 1564.62 1656.2 1656.2 343.8 1656.2 343.8 1000"/><polyline class="cls-1" points="343.8 505.07 343.8 343.8 1656.2 343.8 1656.2 1136.53"/><rect class="cls-2" x="1140.8" y="1731.73" width="693.33" height="164.27"/><rect class="cls-2" x="1965.33" y="413.69" width="34.67" height="112.36"/><rect class="cls-2" y="1451.73" width="34.93" height="112.27"/><rect class="cls-2" y="1980.8" width="2000" height="19.2"/></g></svg> */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 2000">
        <defs>
          <defs>
            <clipPath id="myClip">
              <polygon
                points={`0 0,2000 0,2000 1100,1200 1100,1200 ${1135 +
                  adjustedDetailHeight},2000
                                ${adjustedDetailHeight +
                                  1135},2000 2000,00 2000, 0 ${440 +
                  adjustedCountryHeight}, 600 ${440 +
                  adjustedCountryHeight},600 480, 0 480`}
              />
            </clipPath>
          </defs>
        </defs>
        <title>yellow</title>
        <g id="Layer_2" data-name="Layer 2" clipPath="url(#myClip)">
          <rect
            x="1140.8"
            y="1731.73"
            width="693.33"
            height="164.27"
            fill="#ffc000"
          />
          <rect
            x="1965.33"
            y="413.69"
            width="34.67"
            height="112.36"
            fill="#ffc000"
          />
          <rect y="1451.73" width="34.93" height="112.27" fill="#ffc000" />
          <rect y="1980.8" width="2000" height="19.2" fill="#ffc000" />
          <rect
            x="1716.27"
            y="1731.73"
            width="164.27"
            height="164.27"
            fill="#fff"
          />
          <g id="WA_Logo" data-name="WA Logo">
            <path
              d="M1837.64,1774.39a55.16,55.16,0,0,0-86.8,66.54l-7.82,28.58,29.24-7.67a55.08,55.08,0,0,0,26.35,6.72h0a55.18,55.18,0,0,0,39-94.17Zm-39,84.85h0a45.72,45.72,0,0,1-23.33-6.39l-1.67-1-17.35,4.55,4.63-16.91-1.09-1.74a45.84,45.84,0,1,1,38.83,21.48Zm25.14-34.33c-1.37-.69-8.15-4-9.41-4.48s-2.18-.69-3.1.69-3.56,4.48-4.37,5.4-1.6,1-3,.35a37.69,37.69,0,0,1-11.08-6.84,41.78,41.78,0,0,1-7.67-9.55c-.8-1.38-.08-2.12.61-2.81s1.38-1.61,2.06-2.41a9.5,9.5,0,0,0,1.38-2.3,2.56,2.56,0,0,0-.11-2.42c-.35-.69-3.1-7.47-4.25-10.23s-2.26-2.32-3.1-2.36-1.72,0-2.64,0a5.07,5.07,0,0,0-3.68,1.72,15.49,15.49,0,0,0-4.82,11.5c0,6.78,4.94,13.33,5.63,14.25s9.71,14.84,23.54,20.81a77.16,77.16,0,0,0,7.85,2.9,19,19,0,0,0,8.68.55c2.65-.4,8.15-3.34,9.3-6.55s1.15-6,.8-6.56S1825.15,1825.6,1823.77,1824.91Z"
              fill="#455a64"
              fillRule="evenodd"
            />
          </g>
          <polyline
            // clip-path="url(#path)"
            points="343.8 494.93 343.8 343.8 1656.2 343.8 1656.2 1656.2 343.8 1656.2 343.8 494.93"
            fill="none"
            stroke="#ffc000"
            strokeMiterlimit="10"
            strokeWidth="8"
          />
        </g>
      </svg>
    </div>
  );
}
