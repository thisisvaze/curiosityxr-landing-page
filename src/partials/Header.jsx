import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../utils/Dropdown';

function Header() {

  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const trigger = useRef(null);
  const mobileNav = useRef(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target) || trigger.current.contains(target)) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">

          {/* Site branding */}
         
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link to="/" className="block" aria-label="Cruip">
            <svg width="140" height="34" viewBox="0 0 140 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M50.4393 22.1905C49.3172 22.1905 48.3539 21.9524 47.5494 21.476C46.7449 20.9891 46.1256 20.3169 45.6916 19.4594C45.2575 18.5914 45.0405 17.591 45.0405 16.4583C45.0405 15.3256 45.2575 14.3253 45.6916 13.4572C46.1256 12.5892 46.7449 11.9117 47.5494 11.4248C48.3539 10.9378 49.3172 10.6943 50.4393 10.6943C51.7731 10.6943 52.8635 11.0278 53.7103 11.6947C54.5678 12.351 55.1024 13.2773 55.3141 14.4735H53.0752C52.9376 13.8701 52.6412 13.399 52.186 13.0603C51.7414 12.7109 51.1486 12.5363 50.4075 12.5363C49.3807 12.5363 48.5762 12.8856 47.994 13.5843C47.4118 14.2829 47.1206 15.2409 47.1206 16.4583C47.1206 17.6757 47.4118 18.6337 47.994 19.3324C48.5762 20.0204 49.3807 20.3645 50.4075 20.3645C51.1486 20.3645 51.7414 20.2057 52.186 19.8881C52.6412 19.56 52.9376 19.1101 53.0752 18.5384H55.3141C55.1024 19.6817 54.5678 20.5762 53.7103 21.2219C52.8635 21.8677 51.7731 22.1905 50.4393 22.1905ZM60.019 22.1905C59.0345 22.1905 58.2724 21.8836 57.7325 21.2696C57.2032 20.6556 56.9385 19.7558 56.9385 18.5702V14.1241H58.9551V18.3796C58.9551 19.0571 59.0928 19.5758 59.368 19.9358C59.6432 20.2957 60.0772 20.4756 60.6701 20.4756C61.2311 20.4756 61.6916 20.2745 62.0515 19.8722C62.422 19.47 62.6073 18.9089 62.6073 18.1891V14.1241H64.6397V22H62.8454L62.6867 20.6662C62.4432 21.132 62.0886 21.5025 61.6228 21.7777C61.1676 22.0529 60.633 22.1905 60.019 22.1905ZM66.7262 22V14.1241H68.5364L68.7269 15.6009C69.0127 15.0927 69.3991 14.6905 69.8861 14.3941C70.3836 14.0871 70.9658 13.9336 71.6327 13.9336V16.0772H71.0611C70.6165 16.0772 70.2195 16.146 69.8702 16.2837C69.5208 16.4213 69.2456 16.6594 69.0445 16.9982C68.8539 17.3369 68.7587 17.808 68.7587 18.4114V22H66.7262ZM74.1175 12.9015C73.747 12.9015 73.44 12.7903 73.1965 12.568C72.9636 12.3457 72.8472 12.0652 72.8472 11.7265C72.8472 11.3877 72.9636 11.1125 73.1965 10.9008C73.44 10.6785 73.747 10.5673 74.1175 10.5673C74.488 10.5673 74.7897 10.6785 75.0226 10.9008C75.2661 11.1125 75.3878 11.3877 75.3878 11.7265C75.3878 12.0652 75.2661 12.3457 75.0226 12.568C74.7897 12.7903 74.488 12.9015 74.1175 12.9015ZM73.1012 22V14.1241H75.1337V22H73.1012ZM81.0343 22.1905C80.2721 22.1905 79.584 22.0159 78.9701 21.6665C78.3667 21.3172 77.885 20.8356 77.5251 20.2216C77.1758 19.597 77.0011 18.8772 77.0011 18.0621C77.0011 17.247 77.1811 16.5324 77.541 15.9184C77.9009 15.2939 78.3825 14.8069 78.9859 14.4576C79.5999 14.1083 80.288 13.9336 81.0502 13.9336C81.8018 13.9336 82.4793 14.1083 83.0827 14.4576C83.6966 14.8069 84.1783 15.2939 84.5276 15.9184C84.8875 16.5324 85.0675 17.247 85.0675 18.0621C85.0675 18.8772 84.8875 19.597 84.5276 20.2216C84.1783 20.8356 83.6966 21.3172 83.0827 21.6665C82.4687 22.0159 81.7859 22.1905 81.0343 22.1905ZM81.0343 20.428C81.5636 20.428 82.0241 20.2322 82.4157 19.8405C82.8074 19.4382 83.0033 18.8454 83.0033 18.0621C83.0033 17.2787 82.8074 16.6912 82.4157 16.2995C82.0241 15.8973 81.5689 15.6961 81.0502 15.6961C80.5103 15.6961 80.0445 15.8973 79.6528 16.2995C79.2718 16.6912 79.0812 17.2787 79.0812 18.0621C79.0812 18.8454 79.2718 19.4382 79.6528 19.8405C80.0445 20.2322 80.505 20.428 81.0343 20.428ZM90.1399 22.1905C89.4412 22.1905 88.8272 22.0794 88.2979 21.8571C87.7687 21.6242 87.3452 21.3066 87.0276 20.9044C86.7101 20.5021 86.5195 20.0363 86.456 19.507H88.5044C88.5679 19.814 88.7373 20.0787 89.0125 20.301C89.2983 20.5127 89.6635 20.6185 90.1081 20.6185C90.5527 20.6185 90.8756 20.5286 91.0767 20.3486C91.2884 20.1687 91.3943 19.9622 91.3943 19.7293C91.3943 19.3906 91.2461 19.163 90.9497 19.0466C90.6533 18.9195 90.2404 18.7978 89.7112 18.6813C89.3724 18.6072 89.0284 18.5173 88.679 18.4114C88.3297 18.3055 88.0068 18.1732 87.7104 18.0144C87.4246 17.8451 87.1917 17.6333 87.0118 17.3793C86.8318 17.1146 86.7418 16.7918 86.7418 16.4107C86.7418 15.712 87.0171 15.1245 87.5675 14.6481C88.1286 14.1718 88.9119 13.9336 89.9176 13.9336C90.8491 13.9336 91.5901 14.1506 92.1406 14.5846C92.7017 15.0186 93.0351 15.6167 93.141 16.3789H91.2196C91.1032 15.7967 90.6639 15.5056 89.9017 15.5056C89.5206 15.5056 89.2242 15.5797 89.0125 15.7279C88.8114 15.8761 88.7108 16.0613 88.7108 16.2837C88.7108 16.5165 88.8643 16.7018 89.1713 16.8394C89.4783 16.977 89.8858 17.1041 90.3939 17.2205C90.9444 17.3475 91.4472 17.4904 91.9024 17.6492C92.3682 17.7974 92.7387 18.025 93.0139 18.332C93.2892 18.6284 93.4268 19.0571 93.4268 19.6182C93.4374 20.1051 93.3103 20.5444 93.0457 20.9361C92.781 21.3278 92.4 21.6348 91.9024 21.8571C91.4049 22.0794 90.8174 22.1905 90.1399 22.1905ZM96.3229 12.9015C95.9524 12.9015 95.6454 12.7903 95.402 12.568C95.1691 12.3457 95.0526 12.0652 95.0526 11.7265C95.0526 11.3877 95.1691 11.1125 95.402 10.9008C95.6454 10.6785 95.9524 10.5673 96.3229 10.5673C96.6934 10.5673 96.9951 10.6785 97.228 10.9008C97.4715 11.1125 97.5932 11.3877 97.5932 11.7265C97.5932 12.0652 97.4715 12.3457 97.228 12.568C96.9951 12.7903 96.6934 12.9015 96.3229 12.9015ZM95.3067 22V14.1241H97.3392V22H95.3067ZM102.97 22C102.144 22 101.482 21.7989 100.985 21.3966C100.487 20.9943 100.239 20.2798 100.239 19.253V15.8232H98.8889V14.1241H100.239L100.477 12.0123H102.271V14.1241H104.399V15.8232H102.271V19.2689C102.271 19.6499 102.351 19.9146 102.509 20.0628C102.679 20.2004 102.964 20.2692 103.367 20.2692H104.351V22H102.97ZM107.128 25.4933L108.954 21.476H108.478L105.413 14.1241H107.621L109.828 19.6658L112.13 14.1241H114.29L109.288 25.4933H107.128ZM118.91 22L122.387 16.3789L118.862 10.8849H121.196L123.689 14.7593L125.976 10.8849H128.262L124.785 16.4742L128.342 22H126.008L123.483 18.078L121.196 22H118.91ZM129.917 22V10.8849H133.997C134.887 10.8849 135.617 11.0384 136.189 11.3454C136.771 11.6418 137.205 12.0493 137.491 12.568C137.777 13.0761 137.92 13.6425 137.92 14.2671C137.92 14.9445 137.74 15.5638 137.38 16.1249C137.03 16.6859 136.48 17.0935 135.728 17.3475L138.031 22H135.696L133.632 17.6175H131.949V22H129.917ZM131.949 16.1249H133.87C134.548 16.1249 135.045 15.9608 135.363 15.6326C135.681 15.3045 135.839 14.8704 135.839 14.3306C135.839 13.8013 135.681 13.3778 135.363 13.0603C135.056 12.7427 134.553 12.5839 133.855 12.5839H131.949V16.1249Z" fill="#262626"/>
<rect width="34" height="34" rx="3.57895" fill="url(#paint0_linear_205_117)"/>
<path d="M16.592 29.5301C16.592 29.397 16.592 29.315 16.592 29.2329C16.592 28.2979 16.5895 27.3636 16.5936 26.4285C16.5953 25.9974 16.993 25.7346 17.3529 25.9221C17.5664 26.0343 17.6459 26.2218 17.6451 26.4595C17.6417 27.3871 17.6434 28.3146 17.6434 29.243C17.6434 29.3192 17.6434 29.3953 17.6434 29.5134C17.7363 29.4707 17.8025 29.4456 17.8644 29.4121C18.5986 29.0119 19.3319 28.6101 20.0652 28.2091C20.1021 28.189 20.1381 28.1681 20.1757 28.1497C20.4604 28.0124 20.7634 28.1003 20.8957 28.3581C21.0304 28.621 20.9375 28.914 20.6571 29.0697C19.8827 29.4983 19.1059 29.9219 18.3299 30.3472C17.9749 30.5414 17.6183 30.7306 17.2675 30.9315C17.1587 30.9943 17.0758 30.9993 16.9628 30.9365C15.8469 30.3187 14.7277 29.7076 13.6093 29.094C13.2912 28.919 13.1798 28.621 13.3288 28.3472C13.4795 28.0702 13.7867 28.0032 14.1082 28.179C14.8482 28.5825 15.5882 28.9868 16.3283 29.3912C16.4003 29.4305 16.4739 29.4682 16.5928 29.5301H16.592Z" fill="white" fill-opacity="0.47"/>
<path d="M27.8094 11.844C27.5482 11.983 27.3289 12.0977 27.1121 12.2165C26.5863 12.5045 26.0615 12.795 25.5366 13.0838C25.2335 13.2504 24.9255 13.1784 24.7765 12.9063C24.63 12.6385 24.7354 12.3371 25.0368 12.1705C25.6471 11.834 26.2582 11.4991 26.8685 11.1634C26.9647 11.1099 27.0593 11.0521 27.1849 10.9784C26.9354 10.837 26.7136 10.7105 26.4909 10.5866C25.925 10.2702 25.3541 9.96466 24.7966 9.63316C24.6651 9.5553 24.5429 9.41048 24.4876 9.269C24.409 9.06642 24.4877 8.86885 24.6718 8.73575C24.8685 8.59427 25.0736 8.60265 25.2804 8.71817C25.853 9.03712 26.4264 9.35272 26.9982 9.6725C27.5641 9.9881 28.1267 10.3104 28.6951 10.6218C28.8098 10.6846 28.8474 10.7583 28.8466 10.8847C28.8416 12.3003 28.8432 13.7158 28.8407 15.1306C28.8407 15.4964 28.6407 15.7225 28.3351 15.7174C28.0019 15.7116 27.8102 15.4973 27.8094 15.1239C27.8077 14.126 27.8094 13.129 27.8094 12.1312C27.8094 12.05 27.8094 11.9696 27.8094 11.8432V11.844Z" fill="white" fill-opacity="0.47"/>
<path d="M7.0275 10.9817C7.1899 11.0738 7.31966 11.1492 7.45109 11.2212C8.04378 11.5468 8.63814 11.8683 9.22916 12.1964C9.47444 12.3329 9.56317 12.584 9.4736 12.8402C9.39491 13.0637 9.14545 13.2144 8.90603 13.1675C8.8131 13.1491 8.72353 13.1022 8.63898 13.0561C7.96007 12.6861 7.28199 12.3128 6.60391 11.9411C6.5562 11.9151 6.50429 11.8959 6.42058 11.8582C6.41556 11.9654 6.40886 12.0524 6.40886 12.1387C6.40886 13.1357 6.41305 14.1335 6.41137 15.1306C6.41137 15.4654 6.23809 15.6789 5.95765 15.7107C5.62196 15.7492 5.37668 15.5265 5.375 15.1607C5.36998 14.2608 5.37417 13.3609 5.37417 12.4618C5.37417 11.9394 5.37751 11.4162 5.36998 10.8938C5.36831 10.7574 5.41267 10.682 5.53238 10.6159C6.6667 9.98973 7.79766 9.35602 8.92947 8.72566C9.22832 8.55991 9.53639 8.6319 9.69377 8.89811C9.84529 9.15427 9.74065 9.46066 9.43258 9.63395C8.716 10.0374 7.9969 10.4351 7.27864 10.8361C7.20748 10.8763 7.13717 10.9181 7.02918 10.9809L7.0275 10.9817Z" fill="white" fill-opacity="0.47"/>
<path d="M5.37101 21.6561C5.37101 20.9378 5.36766 20.2196 5.37268 19.5021C5.37519 19.1706 5.5761 18.9547 5.87161 18.9454C6.16712 18.9362 6.39817 19.1522 6.40738 19.467C6.41742 19.8219 6.41072 20.1777 6.41072 20.5335C6.41072 21.3907 6.41826 22.2488 6.40486 23.106C6.40152 23.3128 6.47686 23.4157 6.65014 23.5087C7.57685 24.0059 8.49853 24.5124 9.42105 25.0172C9.6747 25.1561 9.7852 25.3729 9.73163 25.6191C9.68642 25.8267 9.49807 26 9.26953 26.0083C9.15735 26.0125 9.03011 25.9849 8.93133 25.9313C7.78613 25.311 6.64596 24.6815 5.50076 24.0603C5.38691 23.9984 5.36766 23.9214 5.36849 23.8092C5.37101 23.0909 5.37017 22.3727 5.37017 21.6552L5.37101 21.6561Z" fill="white" fill-opacity="0.47"/>
<path d="M28.845 21.6761C28.845 22.3877 28.8425 23.0984 28.8475 23.81C28.8483 23.9355 28.8132 24.0084 28.6968 24.072C27.57 24.6831 26.4466 25.3009 25.324 25.9187C25.1189 26.0317 24.9146 26.061 24.7112 25.9296C24.5388 25.8174 24.4634 25.6508 24.4835 25.4457C24.5053 25.2289 24.6426 25.1025 24.8242 25.0037C25.7543 24.4973 26.6802 23.9833 27.6127 23.481C27.7642 23.3998 27.8136 23.306 27.8128 23.1377C27.8061 21.9381 27.8078 20.7394 27.8094 19.5398C27.8094 19.1346 28.0932 18.8801 28.4448 18.9621C28.696 19.0207 28.8441 19.2141 28.845 19.5004C28.8475 20.2254 28.845 20.9512 28.8458 21.6761H28.845Z" fill="white" fill-opacity="0.47"/>
<path d="M20.271 6.45287C20.1572 6.40683 20.0375 6.37083 19.9303 6.31223C19.053 5.8267 18.1757 5.33949 17.3034 4.84474C17.1686 4.76856 17.0682 4.756 16.9242 4.83804C16.0284 5.34869 15.1277 5.8493 14.2253 6.34739C13.8619 6.5483 13.4601 6.3499 13.4283 5.95896C13.4091 5.72791 13.512 5.55798 13.7163 5.44496C14.5317 4.9904 15.3453 4.53416 16.1607 4.07876C16.4286 3.92892 16.699 3.78409 16.9627 3.62755C17.064 3.56728 17.1385 3.56058 17.2473 3.62169C18.2971 4.21354 19.351 4.79786 20.4033 5.38553C20.4878 5.43324 20.5783 5.48012 20.6452 5.54793C20.8018 5.70615 20.8336 5.9012 20.7566 6.10881C20.6854 6.30219 20.4996 6.42357 20.2727 6.45371L20.271 6.45287Z" fill="white" fill-opacity="0.47"/>
<circle cx="17" cy="17" r="3.93957" stroke="white" stroke-width="0.990435"/>
<defs>
<linearGradient id="paint0_linear_205_117" x1="17" y1="0" x2="17" y2="34" gradientUnits="userSpaceOnUse">
<stop stop-color="#3B7ECD"/>
<stop offset="1" stop-color="#18D2DE"/>
</linearGradient>
</defs>
</svg>






            </Link>
  
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">

            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link to="/" className="font-medium underline text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">Join the Waitlist</Link>
              </li>
              {/* <li>
                <Link to="/signup" className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3">Sign up</Link>
              </li> */}
            </ul>

          </nav>

          {/* Mobile menu */}
          <div className="md:hidden">

            {/* Hamburger button */}
            <button ref={trigger} className={`hamburger ${mobileNavOpen && 'active'}`} aria-controls="mobile-nav" aria-expanded={mobileNavOpen} onClick={() => setMobileNavOpen(!mobileNavOpen)}>
              <span className="sr-only">Menu</span>
              <svg className="w-6 h-6 fill-current text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect y="4" width="24" height="2" rx="1" />
                <rect y="11" width="24" height="2" rx="1" />
                <rect y="18" width="24" height="2" rx="1" />
              </svg>
            </button>

            {/*Mobile navigation */}
            <nav id="mobile-nav" ref={mobileNav} className="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out" style={mobileNavOpen ? { maxHeight: mobileNav.current.scrollHeight, opacity: 1 } : { maxHeight: 0, opacity: .8 } }>
              <ul className="bg-gray-800 px-4 py-2">
                <li>
                  <Link to="/signin" className="flex font-medium w-full text-purple-600 hover:text-gray-200 py-2 justify-center">Sign in</Link>
                </li>
                <li>
                  <Link to="/signup" className="font-medium w-full inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded-sm text-white bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out">Sign up</Link>
                </li>
              </ul>
            </nav>

          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;
