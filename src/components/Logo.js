function Logo() {
  return (
    <div className="flex items-center">
      <svg
        width="24"
        height="42"
        viewBox="0 0 24 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <g id="Group">
          <g id="Leaf 2">
            <path
              id="Fill 1"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.2075 23.6364C13.2075 23.6364 8.23939 14.9572 12.9794 7.0746C16.3509 1.46779 20.2465 0.789978 21.0213 0.306831C25.6635 -2.58795 22.6338 15.7538 13.2075 23.6364Z"
              fill="#FCE989"
            />
            <path
              id="Fill 4"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.8181 33.3615C12.7623 33.3615 12.7078 33.331 12.6746 33.2745C12.5516 33.0653 12.5057 29.5681 12.9839 25.0974C13.4331 20.8974 14.4695 14.6877 16.8554 8.95601C16.8961 8.85848 16.9987 8.81704 17.0848 8.86278C17.1707 8.9089 17.2076 9.02539 17.1669 9.12302C14.8302 14.7366 13.8008 20.8196 13.3488 24.9341C12.8383 29.58 12.9265 32.8132 12.9773 33.0917C13.008 33.1761 12.983 33.2761 12.9134 33.3286C12.8841 33.3509 12.8509 33.3615 12.8181 33.3615Z"
              fill="#0B385F"
            />
          </g>
          <path
            id="Leaf 2_2"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.22323 11.4076C3.22016 11.2625 5.39115 12.0938 7.535 15.659C10.5491 20.6714 9.83227 26.8275 7.47831 27.4211L7.53375 27.406C8.0234 30.9952 7.81124 33.1147 7.71747 33.2745C7.6843 33.331 7.62969 33.3615 7.57395 33.3615C7.54113 33.3615 7.50796 33.3509 7.47859 33.3286C7.40778 33.2753 7.38314 33.1725 7.41648 33.0872C7.45731 32.9096 7.6296 31.1847 7.29028 28.2301C7.26307 27.9933 7.23194 27.7435 7.19632 27.4812L7.19582 27.4825C0.505787 28.7003 -0.0845261 11.7433 2.22323 11.4076Z"
            fill="#0B385F"
          />
          <g id="Leaf 1">
            <g id="Path" filter="url(#filter0_d_2684_38)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.63062 33.3238C7.5978 33.3238 7.56464 33.3133 7.53526 33.291C7.46445 33.2376 7.43981 33.1348 7.47315 33.0495C7.51398 32.872 7.68627 31.147 7.34695 28.1925C7.04063 25.5259 6.23622 21.2199 4.14285 15.8483C4.10443 15.7496 4.14371 15.6342 4.23072 15.5906C4.31746 15.5468 4.41946 15.5915 4.45796 15.6903C8.51325 26.096 7.94565 32.9447 7.77414 33.2369C7.74097 33.2934 7.68636 33.3238 7.63062 33.3238Z"
                fill="#DFE5EA"
              />
            </g>
          </g>
        </g>
        <defs>
          <filter
            id="filter0_d_2684_38"
            x="0.128113"
            y="15.5738"
            width="11.7731"
            height="25.7501"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_2684_38"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_2684_38"
              result="shape"
            />
          </filter>
        </defs>
      </svg>{' '}
      <span className="text-xl font-medium text-[#0B385F]">Wellspring</span>
    </div>
  );
}

export default Logo;
