import { Link } from 'react-router-dom';

const SingleEvent = () => {
  return (
    <>
      <div className="dash_content_main oflow-hd">
        <div className="dash_content_main_event_head oflow-hd">
          <div className="dash_content_main_event_head_box oflow-hd">
            <h2>Dameer & Fuad Presents SANJOY</h2>
          </div>
          <div className="dash_content_main_event_head_attr oflow-hd">
            <ul>
              <li>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.19046 13.8252C7.39635 14.0316 7.64092 14.1953 7.91017 14.307C8.17942 14.4187 8.46806 14.4762 8.75956 14.4762C9.05106 14.4762 9.3397 14.4187 9.60895 14.307C9.87819 14.1953 10.1228 14.0316 10.3287 13.8252L13.8248 10.329C14.0312 10.1231 14.1949 9.87856 14.3066 9.60932C14.4183 9.34007 14.4758 9.05143 14.4758 8.75993C14.4758 8.46843 14.4183 8.17979 14.3066 7.91054C14.1949 7.64129 14.0312 7.39672 13.8248 7.19083L9.16326 2.52925C8.846 2.20989 8.46859 1.9566 8.05283 1.78402C7.63707 1.61144 7.19122 1.523 6.74106 1.52381H3.20679C2.27752 1.52381 1.52344 2.27789 1.52344 3.20716V6.74143C1.52344 7.65547 1.88144 8.51619 2.52888 9.16363L7.19046 13.8252ZM3.80853 3.0472C4.22746 3.0472 4.57023 3.38997 4.57023 3.8089C4.57023 4.22783 4.22746 4.5706 3.80853 4.5706C3.3896 4.5706 3.04683 4.22783 3.04683 3.8089C3.04683 3.38997 3.3896 3.0472 3.80853 3.0472Z"
                    fill="#999999"
                  />
                </svg>

                <span>Concert</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.79823 0.800049C4.82114 0.800049 2.39844 3.23955 2.39844 6.23884C2.39844 10.5005 7.29065 14.9007 7.49884 15.0855C7.58113 15.1592 7.68767 15.1999 7.79811 15.2001C7.90856 15.2002 8.01518 15.1596 8.09762 15.0861C8.30581 14.9007 13.198 10.5005 13.198 6.23884C13.198 3.23955 10.7753 0.800049 7.79823 0.800049ZM7.79823 9.19972C6.14409 9.19972 4.79834 7.85398 4.79834 6.19984C4.79834 4.5457 6.14409 3.19996 7.79823 3.19996C9.45236 3.19996 10.7981 4.5457 10.7981 6.19984C10.7981 7.85398 9.45236 9.19972 7.79823 9.19972Z"
                    fill="#999999"
                  />
                </svg>

                <span>Dhaka</span>
              </li>
              <li>
                <span>City Park Int, Dhanmondi</span>
              </li>
              <li>
                <span>Wednesday, 25 Aug, 2023</span>
              </li>
            </ul>
          </div>
          <div className="dash_content_main_event_head_action oflow-hd">
            <ul>
              <li>
                <Link to="/create-event">Edit Event Details</Link>
              </li>
              <li>
                <Link to="#">Event Settings</Link>
              </li>
              <li>
                <Link to="#">Public Preview</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="dash_content_main_event_status oflow-hd">
          <ul>
            <li className="text_status-Live">
              Event Status: <span>Live</span>
            </li>
            <li>
              Interested Audience: <span>4</span>
            </li>
            <li>
              Number of Pre-Reg: <span>30</span>
            </li>
            <li className="text_status-Live">
              Ticketing Status: <span>Live</span>
            </li>
            <li>
              Total Collection: <span>5,000 BDT</span>
            </li>
          </ul>
        </div>
        <div className="dash_content_main_center">
          <div className="dash_content_main_center_with_padding">
            <div className="single_event_options oflow-hd">
              <div className="row">
                <div className="col-6 col-md-4">
                  <div className="single_event_options_single oflow-hd">
                    <Link to="/event-pre-registration">
                      <div className="single_event_options_single_icon oflow-hd">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M23.8209 15.536C24.0298 15.1743 24.3737 14.9104 24.7771 14.8023C25.1805 14.6943 25.6103 14.7508 25.972 14.9596L28.6994 16.5343C29.061 16.7432 29.3249 17.0871 29.433 17.4905C29.5411 17.8939 29.4845 18.3237 29.2757 18.6854L23.1627 29.2737C23.041 29.4855 22.8711 29.6657 22.6667 29.7996L19.7283 31.7396C19.4843 31.9006 19.2003 31.9906 18.9081 31.9993C18.6159 32.008 18.3271 31.9353 18.0739 31.7891C17.8207 31.643 17.6132 31.4293 17.4746 31.1719C17.336 30.9146 17.2717 30.6237 17.2891 30.3319L17.5001 26.8171C17.514 26.5731 17.5852 26.3357 17.708 26.1243L23.8209 15.536ZM14.2594 31.494C14.1561 31.0515 14.1174 30.5964 14.1444 30.1429L14.3554 26.6282C14.3995 25.8959 14.6137 25.1842 14.9806 24.5496L21.0936 13.9613C21.72 12.8763 22.7519 12.0846 23.962 11.7603C25.1722 11.4361 26.4617 11.6058 27.5467 12.2323L27.7577 12.3535V4.7241C27.7577 3.47119 27.26 2.2696 26.374 1.38366C25.4881 0.497716 24.2865 0 23.0336 0H7.2866C6.03314 0 4.83164 0.497605 3.94666 1.38416C3.50768 1.82253 3.15946 2.34317 2.92195 2.91628C2.68444 3.48939 2.56229 4.10372 2.5625 4.7241V26.7699C2.5625 28.0233 3.06011 29.2248 3.94666 30.1098C4.38503 30.5488 4.90567 30.897 5.47878 31.1345C6.05189 31.3721 6.66622 31.4942 7.2866 31.494H14.2594ZM8.8613 22.0458H12.2863C12.7039 22.0458 13.1044 21.8799 13.3997 21.5846C13.6951 21.2893 13.861 20.8887 13.861 20.4711C13.861 20.0535 13.6951 19.6529 13.3997 19.3576C13.1044 19.0623 12.7039 18.8964 12.2863 18.8964H8.8613C8.44366 18.8964 8.04313 19.0623 7.74782 19.3576C7.4525 19.6529 7.2866 20.0535 7.2866 20.4711C7.2866 20.8887 7.4525 21.2893 7.74782 21.5846C8.04313 21.8799 8.44366 22.0458 8.8613 22.0458ZM8.8613 15.747H15.7112C16.1289 15.747 16.5294 15.5811 16.8247 15.2858C17.12 14.9905 17.2859 14.5899 17.2859 14.1723C17.2859 13.7547 17.12 13.3541 16.8247 13.0588C16.5294 12.7635 16.1289 12.5976 15.7112 12.5976H8.8613C8.44366 12.5976 8.04313 12.7635 7.74782 13.0588C7.4525 13.3541 7.2866 13.7547 7.2866 14.1723C7.2866 14.5899 7.4525 14.9905 7.74782 15.2858C8.04313 15.5811 8.44366 15.747 8.8613 15.747ZM8.8613 9.4482H18.3095C18.7271 9.4482 19.1277 9.28229 19.423 8.98698C19.7183 8.69166 19.8842 8.29113 19.8842 7.8735C19.8842 7.45586 19.7183 7.05533 19.423 6.76002C19.1277 6.4647 18.7271 6.2988 18.3095 6.2988H8.8613C8.44366 6.2988 8.04313 6.4647 7.74782 6.76002C7.4525 7.05533 7.2866 7.45586 7.2866 7.8735C7.2866 8.29113 7.4525 8.69166 7.74782 8.98698C8.04313 9.28229 8.44366 9.4482 8.8613 9.4482Z"
                            fill="black"
                          />
                        </svg>
                      </div>
                      <div className="single_event_options_single_title oflow-hd">
                        <h2>Pre-Registration</h2>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <div className="single_event_options_single oflow-hd">
                    <Link to="/event-ticketing-registration">
                      <div className="single_event_options_single_icon oflow-hd">
                        <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_937_298)">
                            <path
                              d="M31.6082 20.7782C31.866 20.7202 32.0958 20.5746 32.2583 20.3662C32.4208 20.1578 32.5061 19.8996 32.4997 19.6354V18.6754C32.4997 17.7661 32.1384 16.894 31.4955 16.2511C30.8525 15.6081 29.9804 15.2469 29.0711 15.2469H24.6598V17.3783C24.6699 17.4533 24.6651 17.5296 24.6458 17.6028C24.6264 17.676 24.5928 17.7447 24.5469 17.8049C24.501 17.8652 24.4437 17.9158 24.3783 17.9538C24.3128 17.9919 24.2405 18.0167 24.1655 18.0268C24.0139 18.0473 23.8605 18.0067 23.7388 17.914C23.6172 17.8213 23.5374 17.6841 23.5169 17.5326C23.4769 17.424 23.5169 15.2469 23.5169 15.2469H4.13432C3.66708 15.2188 3.19903 15.2867 2.75902 15.4464C2.31901 15.606 1.91636 15.8541 1.57588 16.1753C1.2354 16.4966 0.964293 16.8841 0.779274 17.3141C0.594255 17.744 0.49924 18.2073 0.500083 18.6754V19.624C0.496766 19.8987 0.59256 20.1655 0.769916 20.3754C0.947272 20.5853 1.19431 20.7242 1.46578 20.7668C2.03634 20.8594 2.55534 21.152 2.9299 21.5922C3.30446 22.0325 3.51014 22.5916 3.51014 23.1696C3.51014 23.7477 3.30446 24.3068 2.9299 24.7471C2.55534 25.1873 2.03634 25.4799 1.46578 25.5725C1.19431 25.615 0.947272 25.754 0.769916 25.9639C0.59256 26.1738 0.496766 26.4405 0.500083 26.7153V27.6581C0.500083 28.5674 0.861302 29.4395 1.50428 30.0825C2.14725 30.7255 3.01931 31.0867 3.92861 31.0867H23.5169C23.5169 31.0867 23.4826 28.8981 23.5169 28.801C23.5545 28.6867 23.6272 28.5871 23.7247 28.5166C23.8222 28.446 23.9394 28.408 24.0598 28.408C24.1801 28.408 24.2974 28.446 24.3949 28.5166C24.4923 28.5871 24.565 28.6867 24.6026 28.801C24.6769 28.9724 24.6312 31.0867 24.6312 31.0867H29.0711C29.9804 31.0867 30.8525 30.7255 31.4955 30.0825C32.1384 29.4395 32.4997 28.5674 32.4997 27.6581V26.6353C32.4982 26.377 32.4093 26.1267 32.2474 25.9254C32.0856 25.7241 31.8602 25.5836 31.6082 25.5267C31.0737 25.4001 30.5976 25.0968 30.2568 24.6659C29.9161 24.2351 29.7307 23.7018 29.7307 23.1525C29.7307 22.6032 29.9161 22.0699 30.2568 21.639C30.5976 21.2082 31.0737 20.9049 31.6082 20.7782ZM24.6598 26.1153C24.6598 26.2669 24.5996 26.4122 24.4924 26.5194C24.3852 26.6265 24.2399 26.6867 24.0883 26.6867C23.9368 26.6867 23.7914 26.6265 23.6843 26.5194C23.5771 26.4122 23.5169 26.2669 23.5169 26.1153V24.5725C23.5169 24.4209 23.5771 24.2756 23.6843 24.1684C23.7914 24.0613 23.9368 24.0011 24.0883 24.0011C24.2399 24.0011 24.3852 24.0613 24.4924 24.1684C24.5996 24.2756 24.6598 24.4209 24.6598 24.5725V26.1153ZM24.6598 21.7439C24.6598 21.8955 24.5996 22.0408 24.4924 22.148C24.3852 22.2552 24.2399 22.3154 24.0883 22.3154C23.9368 22.3154 23.7914 22.2552 23.6843 22.148C23.5771 22.0408 23.5169 21.8955 23.5169 21.7439V20.1897C23.5169 20.0381 23.5771 19.8928 23.6843 19.7856C23.7914 19.6785 23.9368 19.6183 24.0883 19.6183C24.2399 19.6183 24.3852 19.6785 24.4924 19.7856C24.5996 19.8928 24.6598 20.0381 24.6598 20.1897V21.7439ZM21.7341 14.104C21.4598 13.824 20.9055 13.2755 20.6312 13.0012C20.5236 12.8944 20.4629 12.7491 20.4624 12.5975C20.4618 12.4459 20.5215 12.3002 20.6284 12.1926C20.7352 12.085 20.8804 12.0243 21.0321 12.0238C21.1837 12.0232 21.3293 12.0829 21.4369 12.1898L22.7341 13.4869L25.1912 11.0298C25.731 10.487 26.034 9.75252 26.034 8.98697C26.034 8.22141 25.731 7.48698 25.1912 6.94414L24.6826 6.42986C24.4999 6.25732 24.2654 6.14981 24.0154 6.12399C23.7654 6.09816 23.5139 6.15546 23.2998 6.287C22.9428 6.50115 22.5245 6.58993 22.1112 6.53927C21.698 6.48861 21.3135 6.3014 21.0188 6.00735C20.7241 5.71329 20.5361 5.32925 20.4845 4.91614C20.4329 4.50303 20.5208 4.08453 20.7341 3.72704C20.8765 3.50424 20.9373 3.23895 20.906 2.97637C20.8748 2.7138 20.7534 2.47019 20.5627 2.28706L20.0541 1.77849C19.5096 1.23971 18.7745 0.9375 18.0084 0.9375C17.2424 0.9375 16.5073 1.23971 15.9627 1.77849L13.4999 4.2356L14.7856 5.55558C14.8925 5.66318 14.9522 5.80882 14.9516 5.96046C14.9511 6.11209 14.8904 6.2573 14.7828 6.36414C14.6752 6.47099 14.5295 6.53071 14.3779 6.53017C14.2262 6.52964 14.081 6.46889 13.9742 6.36129L12.6771 5.06416L3.63718 14.1155L21.7341 14.104ZM18.117 9.68124C18.1701 9.62769 18.2333 9.58517 18.3029 9.55616C18.3726 9.52715 18.4473 9.51222 18.5227 9.51222C18.5981 9.51222 18.6728 9.52715 18.7425 9.55616C18.8121 9.58517 18.8753 9.62769 18.9284 9.68124L19.8198 10.5784C19.9263 10.6854 19.986 10.8303 19.986 10.9812C19.986 11.1322 19.9263 11.277 19.8198 11.3841C19.7128 11.4905 19.5679 11.5502 19.417 11.5502C19.266 11.5502 19.1212 11.4905 19.0141 11.3841L18.117 10.4869C18.0106 10.3799 17.9508 10.2351 17.9508 10.0841C17.9508 9.93314 18.0106 9.78831 18.117 9.68124ZM15.6085 7.1727C15.6616 7.11915 15.7248 7.07664 15.7944 7.04763C15.864 7.01862 15.9387 7.00368 16.0142 7.00368C16.0896 7.00368 16.1643 7.01862 16.2339 7.04763C16.3036 7.07664 16.3668 7.11915 16.4199 7.1727L17.3113 8.06412C17.4189 8.17172 17.4793 8.31766 17.4793 8.46983C17.4793 8.622 17.4189 8.76794 17.3113 8.87554C17.2037 8.98314 17.0577 9.04359 16.9056 9.04359C16.7534 9.04359 16.6075 8.98314 16.4999 8.87554L15.6085 8.00127C15.5523 7.94788 15.5075 7.88363 15.4769 7.81241C15.4464 7.74119 15.4306 7.66449 15.4306 7.58699C15.4306 7.50948 15.4464 7.43278 15.4769 7.36156C15.5075 7.29034 15.5523 7.22609 15.6085 7.1727Z"
                              fill="black"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_937_298">
                              <rect width="32" height="32" fill="white" transform="translate(0.5)" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className="single_event_options_single_title oflow-hd">
                        <h2>Ticketing / Registration</h2>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <div className="single_event_options_single oflow-hd">
                    <Link to="/event-promotions-discount">
                      <div className="single_event_options_single_icon oflow-hd">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_937_301)">
                            <path
                              d="M16.0005 22.7514C16.5919 22.7514 17.0713 22.2719 17.0713 21.6806C17.0713 21.0892 16.5919 20.6097 16.0005 20.6097C15.4091 20.6097 14.9297 21.0892 14.9297 21.6806C14.9297 22.2719 15.4091 22.7514 16.0005 22.7514Z"
                              fill="black"
                            />
                            <path
                              d="M16.0005 11.3902C16.5919 11.3902 17.0713 10.9107 17.0713 10.3193C17.0713 9.72795 16.5919 9.24854 16.0005 9.24854C15.4091 9.24854 14.9297 9.72795 14.9297 10.3193C14.9297 10.9107 15.4091 11.3902 16.0005 11.3902Z"
                              fill="black"
                            />
                            <path
                              d="M31.1374 0.863437C30.5813 0.306625 29.8415 0 29.0542 0H17.8362C17.0492 0 16.3094 0.3065 15.7529 0.863063L0.863187 15.7528C0.3065 16.3094 0 17.0492 0 17.8359C0 18.6228 0.306625 19.3626 0.863187 19.9188L12.0809 31.1366C12.6373 31.6934 13.3771 32 14.164 32C14.9508 32 15.6906 31.6935 16.2472 31.1368L31.1369 16.2471C31.6935 15.6906 32 14.9508 32 14.1638V2.94581C32 2.1585 31.6934 1.41862 31.1374 0.863437ZM16.0001 7.37356C17.6244 7.37356 18.9459 8.69506 18.9459 10.3194C18.9459 11.9437 17.6244 13.2652 16.0001 13.2652C14.3758 13.2652 13.0542 11.9437 13.0542 10.3194C13.0542 8.69506 14.3758 7.37356 16.0001 7.37356ZM16.0001 24.6263C14.3758 24.6263 13.0542 23.3048 13.0542 21.6805C13.0542 20.0562 14.3758 18.7347 16.0001 18.7347C17.6244 18.7347 18.9459 20.0562 18.9459 21.6805C18.9459 23.3048 17.6244 24.6263 16.0001 24.6263ZM22.025 16.9374H9.97513C9.45738 16.9374 9.03763 16.5177 9.03763 15.9999C9.03763 15.4822 9.45738 15.0624 9.97513 15.0624H22.025C22.5427 15.0624 22.9625 15.4822 22.9625 15.9999C22.9625 16.5177 22.5428 16.9374 22.025 16.9374ZM26.0417 6.89581C25.5242 6.89581 25.1042 6.47581 25.1042 5.95831C25.1042 5.44081 25.5242 5.02081 26.0417 5.02081C26.5592 5.02081 26.9792 5.44081 26.9792 5.95831C26.9792 6.47581 26.5592 6.89581 26.0417 6.89581Z"
                              fill="black"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_937_301">
                              <rect width="32" height="32" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className="single_event_options_single_title oflow-hd">
                        <h2>Promotion & Discount</h2>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <div className="single_event_options_single oflow-hd">
                    <Link to="/event-priviliege-ticket">
                      <div className="single_event_options_single_icon oflow-hd">
                        <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_941_2845)">
                            <path
                              d="M31.6082 20.7782C31.866 20.7202 32.0958 20.5746 32.2583 20.3662C32.4208 20.1578 32.5061 19.8996 32.4997 19.6354V18.6754C32.4997 17.7661 32.1384 16.894 31.4955 16.2511C30.8525 15.6081 29.9804 15.2469 29.0711 15.2469H24.6598V17.3783C24.6699 17.4533 24.6651 17.5296 24.6458 17.6028C24.6264 17.676 24.5928 17.7447 24.5469 17.8049C24.501 17.8652 24.4437 17.9158 24.3783 17.9538C24.3128 17.9919 24.2405 18.0167 24.1655 18.0268C24.0139 18.0473 23.8605 18.0067 23.7388 17.914C23.6172 17.8213 23.5374 17.6841 23.5169 17.5326C23.4769 17.424 23.5169 15.2469 23.5169 15.2469H4.13432C3.66708 15.2188 3.19903 15.2867 2.75902 15.4464C2.31901 15.606 1.91636 15.8541 1.57588 16.1753C1.2354 16.4966 0.964293 16.8841 0.779274 17.3141C0.594255 17.744 0.49924 18.2073 0.500083 18.6754V19.624C0.496766 19.8987 0.59256 20.1655 0.769916 20.3754C0.947272 20.5853 1.19431 20.7242 1.46578 20.7668C2.03634 20.8594 2.55534 21.152 2.9299 21.5922C3.30446 22.0325 3.51014 22.5916 3.51014 23.1696C3.51014 23.7477 3.30446 24.3068 2.9299 24.7471C2.55534 25.1873 2.03634 25.4799 1.46578 25.5725C1.19431 25.615 0.947272 25.754 0.769916 25.9639C0.59256 26.1738 0.496766 26.4405 0.500083 26.7153V27.6581C0.500083 28.5674 0.861302 29.4395 1.50428 30.0825C2.14725 30.7255 3.01931 31.0867 3.92861 31.0867H23.5169C23.5169 31.0867 23.4826 28.8981 23.5169 28.801C23.5545 28.6867 23.6272 28.5871 23.7247 28.5166C23.8222 28.446 23.9394 28.408 24.0598 28.408C24.1801 28.408 24.2974 28.446 24.3949 28.5166C24.4923 28.5871 24.565 28.6867 24.6026 28.801C24.6769 28.9724 24.6312 31.0867 24.6312 31.0867H29.0711C29.9804 31.0867 30.8525 30.7255 31.4955 30.0825C32.1384 29.4395 32.4997 28.5674 32.4997 27.6581V26.6353C32.4982 26.377 32.4093 26.1267 32.2474 25.9254C32.0856 25.7241 31.8602 25.5836 31.6082 25.5267C31.0737 25.4001 30.5976 25.0968 30.2568 24.6659C29.9161 24.2351 29.7307 23.7018 29.7307 23.1525C29.7307 22.6032 29.9161 22.0699 30.2568 21.639C30.5976 21.2082 31.0737 20.9049 31.6082 20.7782ZM24.6598 26.1153C24.6598 26.2669 24.5996 26.4122 24.4924 26.5194C24.3852 26.6265 24.2399 26.6867 24.0883 26.6867C23.9368 26.6867 23.7914 26.6265 23.6843 26.5194C23.5771 26.4122 23.5169 26.2669 23.5169 26.1153V24.5725C23.5169 24.4209 23.5771 24.2756 23.6843 24.1684C23.7914 24.0613 23.9368 24.0011 24.0883 24.0011C24.2399 24.0011 24.3852 24.0613 24.4924 24.1684C24.5996 24.2756 24.6598 24.4209 24.6598 24.5725V26.1153ZM24.6598 21.7439C24.6598 21.8955 24.5996 22.0408 24.4924 22.148C24.3852 22.2552 24.2399 22.3154 24.0883 22.3154C23.9368 22.3154 23.7914 22.2552 23.6843 22.148C23.5771 22.0408 23.5169 21.8955 23.5169 21.7439V20.1897C23.5169 20.0381 23.5771 19.8928 23.6843 19.7856C23.7914 19.6785 23.9368 19.6183 24.0883 19.6183C24.2399 19.6183 24.3852 19.6785 24.4924 19.7856C24.5996 19.8928 24.6598 20.0381 24.6598 20.1897V21.7439ZM21.7341 14.104C21.4598 13.824 20.9055 13.2755 20.6312 13.0012C20.5236 12.8944 20.4629 12.7491 20.4624 12.5975C20.4618 12.4459 20.5215 12.3002 20.6284 12.1926C20.7352 12.085 20.8804 12.0243 21.0321 12.0238C21.1837 12.0232 21.3293 12.0829 21.4369 12.1898L22.7341 13.4869L25.1912 11.0298C25.731 10.487 26.034 9.75252 26.034 8.98697C26.034 8.22141 25.731 7.48698 25.1912 6.94414L24.6826 6.42986C24.4999 6.25732 24.2654 6.14981 24.0154 6.12399C23.7654 6.09816 23.5139 6.15546 23.2998 6.287C22.9428 6.50115 22.5245 6.58993 22.1112 6.53927C21.698 6.48861 21.3135 6.3014 21.0188 6.00735C20.7241 5.71329 20.5361 5.32925 20.4845 4.91614C20.4329 4.50303 20.5208 4.08453 20.7341 3.72704C20.8765 3.50424 20.9373 3.23895 20.906 2.97637C20.8748 2.7138 20.7534 2.47019 20.5627 2.28706L20.0541 1.77849C19.5096 1.23971 18.7745 0.9375 18.0084 0.9375C17.2424 0.9375 16.5073 1.23971 15.9627 1.77849L13.4999 4.2356L14.7856 5.55558C14.8925 5.66318 14.9522 5.80882 14.9516 5.96046C14.9511 6.11209 14.8904 6.2573 14.7828 6.36414C14.6752 6.47099 14.5295 6.53071 14.3779 6.53017C14.2262 6.52964 14.081 6.46889 13.9742 6.36129L12.6771 5.06416L3.63718 14.1155L21.7341 14.104ZM18.117 9.68124C18.1701 9.62769 18.2333 9.58517 18.3029 9.55616C18.3726 9.52715 18.4473 9.51222 18.5227 9.51222C18.5981 9.51222 18.6728 9.52715 18.7425 9.55616C18.8121 9.58517 18.8753 9.62769 18.9284 9.68124L19.8198 10.5784C19.9263 10.6854 19.986 10.8303 19.986 10.9812C19.986 11.1322 19.9263 11.277 19.8198 11.3841C19.7128 11.4905 19.5679 11.5502 19.417 11.5502C19.266 11.5502 19.1212 11.4905 19.0141 11.3841L18.117 10.4869C18.0106 10.3799 17.9508 10.2351 17.9508 10.0841C17.9508 9.93314 18.0106 9.78831 18.117 9.68124ZM15.6085 7.1727C15.6616 7.11915 15.7248 7.07664 15.7944 7.04763C15.864 7.01862 15.9387 7.00368 16.0142 7.00368C16.0896 7.00368 16.1643 7.01862 16.2339 7.04763C16.3036 7.07664 16.3668 7.11915 16.4199 7.1727L17.3113 8.06412C17.4189 8.17172 17.4793 8.31766 17.4793 8.46983C17.4793 8.622 17.4189 8.76794 17.3113 8.87554C17.2037 8.98314 17.0577 9.04359 16.9056 9.04359C16.7534 9.04359 16.6075 8.98314 16.4999 8.87554L15.6085 8.00127C15.5523 7.94788 15.5075 7.88363 15.4769 7.81241C15.4464 7.74119 15.4306 7.66449 15.4306 7.58699C15.4306 7.50948 15.4464 7.43278 15.4769 7.36156C15.5075 7.29034 15.5523 7.22609 15.6085 7.1727Z"
                              fill="black"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_941_2845">
                              <rect width="32" height="32" fill="white" transform="translate(0.5)" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className="single_event_options_single_title oflow-hd">
                        <h2>Privilege Tickets</h2>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <div className="single_event_options_single oflow-hd">
                    <Link to="/event-early-bird-tickets">
                      <div className="single_event_options_single_icon oflow-hd">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_1282_7)">
                            <path
                              d="M31.1082 20.7782C31.366 20.7202 31.5958 20.5746 31.7583 20.3662C31.9208 20.1578 32.0061 19.8996 31.9997 19.6354V18.6754C31.9997 17.7661 31.6384 16.894 30.9955 16.2511C30.3525 15.6081 29.4804 15.2469 28.5711 15.2469H24.1598V17.3783C24.1699 17.4533 24.1651 17.5296 24.1458 17.6028C24.1264 17.676 24.0928 17.7447 24.0469 17.8049C24.001 17.8652 23.9437 17.9158 23.8783 17.9538C23.8128 17.9919 23.7405 18.0167 23.6655 18.0268C23.5139 18.0473 23.3605 18.0067 23.2388 17.914C23.1172 17.8213 23.0374 17.6841 23.0169 17.5326C22.9769 17.424 23.0169 15.2469 23.0169 15.2469H3.63432C3.16708 15.2188 2.69903 15.2867 2.25902 15.4464C1.81901 15.606 1.41636 15.8541 1.07588 16.1753C0.735396 16.4966 0.464293 16.8841 0.279274 17.3141C0.0942551 17.744 -0.00075998 18.2073 8.33817e-05 18.6754V19.624C-0.00323444 19.8987 0.0925596 20.1655 0.269916 20.3754C0.447272 20.5853 0.694314 20.7242 0.965785 20.7668C1.53634 20.8594 2.05534 21.152 2.4299 21.5922C2.80446 22.0325 3.01014 22.5916 3.01014 23.1696C3.01014 23.7477 2.80446 24.3068 2.4299 24.7471C2.05534 25.1873 1.53634 25.4799 0.965785 25.5725C0.694314 25.615 0.447272 25.754 0.269916 25.9639C0.0925596 26.1738 -0.00323444 26.4405 8.33817e-05 26.7153V27.6581C8.33817e-05 28.5674 0.361302 29.4395 1.00428 30.0825C1.64725 30.7255 2.51931 31.0867 3.42861 31.0867H23.0169C23.0169 31.0867 22.9826 28.8981 23.0169 28.801C23.0545 28.6867 23.1272 28.5871 23.2247 28.5166C23.3222 28.446 23.4394 28.408 23.5598 28.408C23.6801 28.408 23.7974 28.446 23.8949 28.5166C23.9923 28.5871 24.065 28.6867 24.1026 28.801C24.1769 28.9724 24.1312 31.0867 24.1312 31.0867H28.5711C29.4804 31.0867 30.3525 30.7255 30.9955 30.0825C31.6384 29.4395 31.9997 28.5674 31.9997 27.6581V26.6353C31.9982 26.377 31.9093 26.1267 31.7474 25.9254C31.5856 25.7241 31.3602 25.5836 31.1082 25.5267C30.5737 25.4001 30.0976 25.0968 29.7568 24.6659C29.4161 24.2351 29.2307 23.7018 29.2307 23.1525C29.2307 22.6032 29.4161 22.0699 29.7568 21.639C30.0976 21.2082 30.5737 20.9049 31.1082 20.7782ZM24.1598 26.1153C24.1598 26.2669 24.0996 26.4122 23.9924 26.5194C23.8852 26.6265 23.7399 26.6867 23.5883 26.6867C23.4368 26.6867 23.2914 26.6265 23.1843 26.5194C23.0771 26.4122 23.0169 26.2669 23.0169 26.1153V24.5725C23.0169 24.4209 23.0771 24.2756 23.1843 24.1684C23.2914 24.0613 23.4368 24.0011 23.5883 24.0011C23.7399 24.0011 23.8852 24.0613 23.9924 24.1684C24.0996 24.2756 24.1598 24.4209 24.1598 24.5725V26.1153ZM24.1598 21.7439C24.1598 21.8955 24.0996 22.0408 23.9924 22.148C23.8852 22.2552 23.7399 22.3154 23.5883 22.3154C23.4368 22.3154 23.2914 22.2552 23.1843 22.148C23.0771 22.0408 23.0169 21.8955 23.0169 21.7439V20.1897C23.0169 20.0381 23.0771 19.8928 23.1843 19.7856C23.2914 19.6785 23.4368 19.6183 23.5883 19.6183C23.7399 19.6183 23.8852 19.6785 23.9924 19.7856C24.0996 19.8928 24.1598 20.0381 24.1598 20.1897V21.7439ZM21.2341 14.104C20.9598 13.824 20.4055 13.2755 20.1312 13.0012C20.0236 12.8944 19.9629 12.7491 19.9624 12.5975C19.9618 12.4459 20.0215 12.3002 20.1284 12.1926C20.2352 12.085 20.3804 12.0243 20.5321 12.0238C20.6837 12.0232 20.8293 12.0829 20.9369 12.1898L22.2341 13.4869L24.6912 11.0298C25.231 10.487 25.534 9.75252 25.534 8.98697C25.534 8.22141 25.231 7.48698 24.6912 6.94414L24.1826 6.42986C23.9999 6.25732 23.7654 6.14981 23.5154 6.12399C23.2654 6.09816 23.0139 6.15546 22.7998 6.287C22.4428 6.50115 22.0245 6.58993 21.6112 6.53927C21.198 6.48861 20.8135 6.3014 20.5188 6.00735C20.2241 5.71329 20.0361 5.32925 19.9845 4.91614C19.9329 4.50303 20.0208 4.08453 20.2341 3.72704C20.3765 3.50424 20.4373 3.23895 20.406 2.97637C20.3748 2.7138 20.2534 2.47019 20.0627 2.28706L19.5541 1.77849C19.0096 1.23971 18.2745 0.9375 17.5084 0.9375C16.7424 0.9375 16.0073 1.23971 15.4627 1.77849L12.9999 4.2356L14.2856 5.55558C14.3925 5.66318 14.4522 5.80882 14.4516 5.96046C14.4511 6.11209 14.3904 6.2573 14.2828 6.36414C14.1752 6.47099 14.0295 6.53071 13.8779 6.53017C13.7262 6.52964 13.581 6.46889 13.4742 6.36129L12.1771 5.06416L3.13718 14.1155L21.2341 14.104ZM17.617 9.68124C17.6701 9.62769 17.7333 9.58517 17.8029 9.55616C17.8726 9.52715 17.9473 9.51222 18.0227 9.51222C18.0981 9.51222 18.1728 9.52715 18.2425 9.55616C18.3121 9.58517 18.3753 9.62769 18.4284 9.68124L19.3198 10.5784C19.4263 10.6854 19.486 10.8303 19.486 10.9812C19.486 11.1322 19.4263 11.277 19.3198 11.3841C19.2128 11.4905 19.0679 11.5502 18.917 11.5502C18.766 11.5502 18.6212 11.4905 18.5141 11.3841L17.617 10.4869C17.5106 10.3799 17.4508 10.2351 17.4508 10.0841C17.4508 9.93314 17.5106 9.78831 17.617 9.68124ZM15.1085 7.1727C15.1616 7.11915 15.2248 7.07664 15.2944 7.04763C15.364 7.01862 15.4387 7.00368 15.5142 7.00368C15.5896 7.00368 15.6643 7.01862 15.7339 7.04763C15.8036 7.07664 15.8668 7.11915 15.9199 7.1727L16.8113 8.06412C16.9189 8.17172 16.9793 8.31766 16.9793 8.46983C16.9793 8.622 16.9189 8.76794 16.8113 8.87554C16.7037 8.98314 16.5577 9.04359 16.4056 9.04359C16.2534 9.04359 16.1075 8.98314 15.9999 8.87554L15.1085 8.00127C15.0523 7.94788 15.0075 7.88363 14.9769 7.81241C14.9464 7.74119 14.9306 7.66449 14.9306 7.58699C14.9306 7.50948 14.9464 7.43278 14.9769 7.36156C15.0075 7.29034 15.0523 7.22609 15.1085 7.1727Z"
                              fill="black"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1282_7">
                              <rect width="32" height="32" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className="single_event_options_single_title oflow-hd">
                        <h2>Early Bird Tickets</h2>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <div className="single_event_options_single oflow-hd">
                    <Link to="/event-gate-management">
                      <div className="single_event_options_single_icon oflow-hd">
                        <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M2.58684 32V0.950599H30.3876V32H31.1614V0H1.8125V32H2.58684ZM20.5884 8.35696V25.2222L29.7596 31.7073V1.87182L20.5884 8.35696ZM3.2154 1.87182V31.7073L12.3866 25.2222V8.35696L3.2154 1.87182ZM23.2329 19.421V17.8064L23.8359 17.8873V20.1754L21.7025 19.4726V16.3037L23.8359 15.6065V17.098L23.2329 17.2045V16.4534L22.3061 16.72V19.1655L23.2329 19.421ZM9.82747 19.421V17.8064L9.22385 17.8873V20.1754L11.3573 19.4726V16.3037L9.22385 15.6065V17.098L9.82747 17.2045V16.4534L10.7542 16.72V19.1655L9.82747 19.421ZM22.8737 17.5293L24.8586 17.7177L24.8564 17.0759L22.8737 17.4356V17.5293ZM10.1866 17.5293L8.20119 17.7177L8.20396 17.0759L10.1866 17.4356V17.5293Z"
                            fill="black"
                          />
                        </svg>
                      </div>
                      <div className="single_event_options_single_title oflow-hd">
                        <h2>Gate Management</h2>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleEvent;
