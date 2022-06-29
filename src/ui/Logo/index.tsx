import React from 'react';
import { useAppSettings } from '../../AppSettingsProvider';

const Logo = () => {
  const { theme } = useAppSettings();

  return theme === 'light' ? (
    <svg
      fill="none"
      height="60"
      viewBox="0 0 155 60"
      width="155"
      xmlns="http://www.w3.org/2000/svg"
    >
      <filter
        id="a"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
        height="60"
        width="60.0253"
        x="0"
        y="0"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx="1" dy="4" />
        <feGaussianBlur stdDeviation="4" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.240625 0 0 0 0 0.262125 0 0 0 0 0.375 0 0 0 0.12 0"
        />
        <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_172_1560" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_172_1560"
          mode="normal"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx="4" dy="4" />
        <feGaussianBlur stdDeviation="7" />
        <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
        <feBlend in2="shape" mode="normal" result="effect2_innerShadow_172_1560" />
      </filter>
      <filter
        id="b"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
        height="25.6853"
        width="33.8063"
        x="11.9669"
        y="15.014"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="2" />
        <feGaussianBlur stdDeviation="1" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
        <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_172_1560" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_172_1560"
          mode="normal"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx=".5" dy="-.5" />
        <feGaussianBlur stdDeviation=".5" />
        <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
        <feBlend in2="shape" mode="normal" result="effect2_innerShadow_172_1560" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx="-1.5" dy="1" />
        <feGaussianBlur stdDeviation=".5" />
        <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0" />
        <feBlend
          in2="effect2_innerShadow_172_1560"
          mode="normal"
          result="effect3_innerShadow_172_1560"
        />
      </filter>
      <linearGradient
        id="c"
        gradientUnits="userSpaceOnUse"
        x1="63.7437"
        x2="-27.6785"
        y1="-10.6667"
        y2="80.8081"
      >
        <stop offset=".166667" stopColor="#3b6ac4" stopOpacity="0" />
        <stop offset="1" stopColor="#2f539b" />
      </linearGradient>
      <linearGradient
        id="d"
        gradientUnits="userSpaceOnUse"
        x1="29.0127"
        x2="29.0127"
        y1="4"
        y2="48"
      >
        <stop offset="0" stopColor="#e2e5ef" />
        <stop offset="1" stopColor="#cfd3de" />
      </linearGradient>
      <linearGradient
        id="e"
        gradientUnits="userSpaceOnUse"
        x1="17.8548"
        x2="21.0532"
        y1="18.6499"
        y2="33.4521"
      >
        <stop offset="0" stopColor="#52c45c" />
        <stop offset="1" stopColor="#37823e" />
      </linearGradient>
      <g fill="currentColor">
        <path d="m74.4811 21.3729c-.09-.8485-.4697-1.5091-1.1388-1.982-.6627-.4728-1.5249-.7092-2.5865-.7092-.7463 0-1.3865.1134-1.9206.3401-.534.2267-.9426.5343-1.2257.9229s-.4278.8323-.4343 1.331c0 .4146.0933.774.2799 1.0784.193.3045.4536.5635.7818.7773.3281.2072.6916.3821 1.0905.5246.399.1425.8011.2623 1.2064.3595l1.853.4663c.7464.1749 1.4638.4113 2.1522.7092.6949.298 1.3158.6736 1.8627 1.127.5533.4534.9908 1.0007 1.3126 1.6419.3217.6412.4825 1.3925.4825 2.254 0 1.1658-.296 2.1924-.8879 3.0797-.5919.8809-1.4477 1.5707-2.5672 2.0694-1.1131.4923-2.461.7384-4.0438.7384-1.5377 0-2.8728-.2397-4.0052-.719-1.126-.4793-2.0074-1.1788-2.6444-2.0985-.6306-.9197-.9716-2.0402-1.023-3.3615h3.5226c.0515.693.2638 1.2695.637 1.7293.3732.4599.8589.8032 1.4573 1.0299.6048.2267 1.2804.34 2.0267.34.7786 0 1.4606-.1166 2.0461-.3497.5919-.2397 1.0552-.57 1.3897-.991.3346-.4275.5051-.9262.5115-1.4962-.0064-.5181-.1576-.9456-.4536-1.2824-.2959-.3433-.7109-.6283-1.2449-.855-.5276-.2331-1.1453-.4404-1.8531-.6217l-2.2487-.583c-1.6278-.421-2.9146-1.0589-3.8604-1.9139-.9394-.8614-1.4091-2.0046-1.4091-3.4295 0-1.1723.3153-2.1989.9458-3.0798.637-.8808 1.5024-1.5642 2.5962-2.0499 1.0938-.4923 2.3323-.7384 3.7157-.7384 1.4026 0 2.6315.2461 3.6867.7384 1.0616.4857 1.8948 1.1626 2.4996 2.0305.6048.8614.9169 1.8524.9362 2.9729z" />
        <path d="m87.5255 36.0917c-1.4863 0-2.7699-.3109-3.8508-.9327-1.0745-.6283-1.9013-1.5156-2.4804-2.662-.579-1.1529-.8686-2.5098-.8686-4.0708 0-1.535.2896-2.8822.8686-4.0416.5855-1.1658 1.4027-2.0726 2.4514-2.7203 1.0488-.6541 2.2809-.9812 3.6964-.9812.9136 0 1.7758.149 2.5865.4469.8171.2915 1.5377.7448 2.1618 1.3602.6306.6153 1.126 1.399 1.4863 2.3511.3603.9456.5405 2.0726.5405 3.3809v1.0784h-12.1508v-2.3705h8.8018c-.0064-.6736-.1512-1.2727-.4343-1.7974-.2831-.5311-.6788-.9488-1.187-1.2533-.5019-.3044-1.0874-.4566-1.7565-.4566-.7142 0-1.3415.1749-1.882.5247-.5405.3432-.9619.7966-1.2643 1.3601-.296.557-.4472 1.1691-.4536 1.8362v2.0694c0 .8679.1576 1.6127.4729 2.2345.3153.6153.756 1.0881 1.3222 1.4185.5662.3238 1.2289.4857 1.9881.4857.5083 0 .9684-.0712 1.3801-.2137.4118-.149.7689-.366 1.0713-.6509.3024-.285.5308-.638.6852-1.059l3.2621.3692c-.2059.8679-.5984 1.6257-1.1774 2.2734-.5727.6412-1.3061 1.1399-2.2005 1.4961-.8943.3498-1.9173.5247-3.069.5247z" />
        <path d="m103.364 36.0917c-1.486 0-2.77-.3109-3.851-.9327-1.0745-.6283-1.9013-1.5156-2.4803-2.662-.5791-1.1529-.8686-2.5098-.8686-4.0708 0-1.535.2895-2.8822.8686-4.0416.5855-1.1658 1.4026-2.0726 2.4514-2.7203 1.0489-.6541 2.2809-.9812 3.6959-.9812.914 0 1.776.149 2.587.4469.817.2915 1.538.7448 2.162 1.3602.63.6153 1.126 1.399 1.486 2.3511.36.9456.541 2.0726.541 3.3809v1.0784h-12.1512v-2.3705h8.8022c-.007-.6736-.152-1.2727-.435-1.7974-.283-.5311-.679-.9488-1.187-1.2533-.502-.3044-1.087-.4566-1.756-.4566-.714 0-1.342.1749-1.882.5247-.541.3432-.962.7966-1.265 1.3601-.2955.557-.4467 1.1691-.4532 1.8362v2.0694c0 .8679.1577 1.6127.4732 2.2345.315.6153.756 1.0881 1.322 1.4185.566.3238 1.229.4857 1.988.4857.508 0 .968-.0712 1.38-.2137.412-.149.769-.366 1.071-.6509.303-.285.531-.638.686-1.059l3.262.3692c-.206.8679-.599 1.6257-1.178 2.2734-.572.6412-1.306 1.1399-2.2 1.4961-.894.3498-1.917.5247-3.069.5247z" />
        <path d="m118.141 36.0625c-1.165 0-2.207-.3012-3.127-.9035-.921-.6024-1.648-1.4768-2.182-2.6232s-.801-2.5389-.801-4.1776c0-1.6581.271-3.0571.811-4.197.547-1.1464 1.284-2.0111 2.21-2.594.927-.5894 1.959-.8841 3.098-.8841.869 0 1.583.149 2.143.4469.559.2915 1.003.6445 1.332 1.059.328.408.582.7934.762 1.1561h.145v-7.442h3.503v19.8971h-3.436v-2.3511h-.212c-.18.3627-.441.7481-.782 1.1561-.341.4016-.791.7449-1.351 1.0298-.56.285-1.264.4275-2.113.4275zm.974-2.8854c.74 0 1.371-.2008 1.892-.6024.521-.408.917-.9748 1.187-1.7002s.405-1.5706.405-2.5357-.135-1.8038-.405-2.5163c-.264-.7124-.656-1.2662-1.177-1.6613-.515-.3951-1.149-.5926-1.902-.5926-.778 0-1.428.204-1.949.612-.521.4081-.914.9716-1.178 1.6905-.263.7189-.395 1.5415-.395 2.4677 0 .9327.132 1.765.395 2.4968.271.7255.666 1.2987 1.187 1.7197.528.4145 1.175.6218 1.94.6218z" />
        <path d="m132.98 15.9031v19.8971h-3.494v-19.8971z" />
        <path d="m142.864 36.0917c-1.487 0-2.77-.3109-3.851-.9327-1.075-.6283-1.901-1.5156-2.481-2.662-.579-1.1529-.868-2.5098-.868-4.0708 0-1.535.289-2.8822.868-4.0416.586-1.1658 1.403-2.0726 2.452-2.7203 1.049-.6541 2.281-.9812 3.696-.9812.914 0 1.776.149 2.587.4469.817.2915 1.537.7448 2.162 1.3602.63.6153 1.126 1.399 1.486 2.3511.36.9456.54 2.0726.54 3.3809v1.0784h-12.15v-2.3705h8.801c-.006-.6736-.151-1.2727-.434-1.7974-.283-.5311-.679-.9488-1.187-1.2533-.502-.3044-1.087-.4566-1.757-.4566-.714 0-1.341.1749-1.882.5247-.54.3432-.961.7966-1.264 1.3601-.296.557-.447 1.1691-.453 1.8362v2.0694c0 .8679.157 1.6127.472 2.2345.316.6153.756 1.0881 1.323 1.4185.566.3238 1.229.4857 1.988.4857.508 0 .968-.0712 1.38-.2137.412-.149.769-.366 1.071-.6509.303-.285.531-.638.685-1.059l3.263.3692c-.206.8679-.599 1.6257-1.178 2.2734-.573.6412-1.306 1.1399-2.2 1.4961-.895.3498-1.918.5247-3.069.5247z" />
      </g>
      <g filter="url(#a)">
        <rect fill="#fff" height="44" rx="11" width="44.0253" x="7" y="4" />
        <rect fill="url(#c)" fillOpacity=".15" height="44" rx="11" width="44.0253" x="7" y="4" />
        <rect height="43" rx="10.5" stroke="url(#d)" width="44" x="7.5" y="4.5" />
      </g>
      <g filter="url(#b)">
        <path
          clipRule="evenodd"
          d="m32.8668 27.7891c-1.5255.4607-4.4697 4.2499-6.444 7.4356-.075-4.3094.0095-10.485 7.0288-13.8854 4.0472-1.9607 7.316-3.9895 9.0128-5.4394.3636-.3107 1.0576-.0551 1.0587.4241.0093 4.1384-.5015 10.7177-3.2641 13.4987-3.5741 3.5979-7.6393 5.7009-12.9883 6.5726.1724-.9158.7278-2.0155 5.5961-8.6062zm-8.1029 4.0233v-.0019c.05-2.6691.1244-6.6476-4.3394-8.81-2.1862-1.0591-4.0048-2.1504-5.1284-3.0068-.3804-.2899-1.0935-.0038-1.079.4751.0766 2.525.5444 6.062 2.0006 7.7742 2.3686 2.785 4.546 3.5258 7.5991 4.0021-.6073-.7163-1.6992-2.1252-3.6738-4.9033 1.2696.4091 3.2324 2.8117 4.5993 4.608.0132-.0435.0207-.0895.0216-.1374z"
          fill="#5ece68"
          fillRule="evenodd"
        />
        <path
          d="m26.4228 35.2247-.2499.0044.0147.8497.4477-.7224zm6.444-7.4356.2011.1485.4473-.6055-.7206.2176zm.5848-6.4498-.109-.225zm9.0128-5.4394.1624.1901zm1.0587.4241-.25.0005zm-3.2641 13.4987.1774.1762zm-12.9883 6.5726-.2457-.0462-.0659.3503.3518-.0573zm-2.5068-4.5848-.2499-.0047zm0 .0019.25.0047zm-4.3394-8.8119.109-.225zm-5.1284-3.0068.1515-.1988zm-1.079.4751.2499-.0075zm2.0006 7.7742.1904-.1619zm7.5991 4.0021-.0385.247.6634.1035-.4342-.5122zm-3.6738-4.9033.0767-.238-.7167-.2309.4362.6137zm4.5993 4.608-.1989.1514.2962.3893.142-.4681zm1.893 3.4066c.9821-1.5848 2.2049-3.3186 3.3696-4.711.5824-.6965 1.1469-1.3033 1.6564-1.7624.5165-.4654.9522-.7563 1.2778-.8546l-.1445-.4787c-.4372.1321-.9416.4876-1.468.9618-.5332.4805-1.1142 1.1065-1.7053 1.8131-1.1824 1.4138-2.4188 3.1675-3.411 4.7684zm6.7073-14.2421c-3.5709 1.7299-5.391 4.1759-6.3014 6.7433-.9059 2.5549-.9058 5.2177-.8683 7.3715l.4999-.0087c-.0375-2.1557-.0327-4.7353.8397-7.1957.868-2.4479 2.5997-4.7899 6.0481-6.4605zm8.9594-5.4044c-1.6733 1.4297-4.9202 3.4476-8.9594 5.4044l.218.4499c4.0553-1.9645 7.3458-4.0042 9.0662-5.4742zm1.4711.6135c-.0009-.3748-.2719-.6318-.553-.7408-.2807-.1088-.6486-.103-.9181.1273l.3248.3801c.0941-.0804.255-.1023.4125-.0412.157.0609.2335.1713.2338.2757zm-3.3367 13.6755c1.4367-1.4463 2.266-3.8501 2.7398-6.3703.4758-2.531.6015-5.2276.5969-7.3052l-.5.0011c.0046 2.0608-.1204 4.7232-.5883 7.2117-.4699 2.4993-1.2773 4.7756-2.6031 6.1103zm-13.1255 6.6432c5.3994-.88 9.5131-3.0068 13.1255-6.6432l-.3547-.3524c-3.5359 3.5594-7.5527 5.6386-12.8512 6.5021zm5.3549-9.0016c-2.434 3.2951-3.7949 5.2242-4.5692 6.4459-.7752 1.2233-.9767 1.7587-1.0716 2.2627l.4914.0925c.0775-.412.2399-.8843 1.0026-2.0875.7635-1.2048 2.1145-3.1208 4.5489-6.4165zm-8.1518 4.1653-.0001.002.5.0093v-.002zm-4.1985-8.5803c2.1683 1.0504 3.2213 2.5313 3.7342 4.0691.5175 1.5518.4893 3.1716.4643 4.5112l.4999.0093c.0249-1.3294.0588-3.0334-.4899-4.6787-.5534-1.6593-1.6951-3.2489-3.9905-4.3609zm-5.1709-3.0329c1.1412.8698 2.9757 1.9694 5.1709 3.0329l.218-.45c-2.1772-1.0547-3.98-2.1377-5.0859-2.9806zm-.6776.2687c-.003-.0996.0708-.2167.2393-.2882.168-.0714.3399-.0555.4383.0195l.303-.3977c-.282-.215-.6568-.201-.9368-.082-.2796.1187-.555.3841-.5435.7635zm1.9411 7.6198c-.6878-.8087-1.158-2.0722-1.4638-3.4737-.3043-1.3944-.4393-2.8938-.4773-4.1461l-.4997.0151c.0385 1.2727.1757 2.8043.4885 4.2376.3112 1.4263.803 2.7875 1.5715 3.691zm7.4472 3.9169c-1.5175-.2367-2.7966-.5363-3.9856-1.1131-1.186-.5754-2.2959-1.4333-3.4616-2.8038l-.3808.3239c1.2029 1.4144 2.3661 2.3194 3.6242 2.9297 1.2551.6089 2.5913.9178 4.1268 1.1574zm.1522.0854c-.6002-.7079-1.6871-2.1097-3.6607-4.8865l-.4076.2897c1.9756 2.7795 3.0725 4.1955 3.6869 4.9201zm-3.9412-4.5037c.2739.0883.6062.2925.9814.5964.3718.301.7702.6869 1.1759 1.1203.8114.8669 1.6377 1.9086 2.3198 2.8048l.3979-.3028c-.685-.9-1.5235-1.9578-2.3526-2.8436-.4146-.4429-.8303-.8467-1.2264-1.1673-.3925-.3179-.7817-.5674-1.1426-.6837zm4.4476 4.228c-.0004.0247-.0043.0479-.0108.0696l.4785.1451c.0198-.0653.0309-.1342.0323-.2053z"
          fill="url(#e)"
        />
      </g>
    </svg>
  ) : (
    <svg
      width="155"
      height="60"
      viewBox="0 0 155 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M74.4812 21.3729C74.3912 20.5244 74.0115 19.8638 73.3424 19.3909C72.6797 18.9181 71.8175 18.6817 70.7559 18.6817C70.0096 18.6817 69.3694 18.7951 68.8353 19.0218C68.3013 19.2485 67.8927 19.5561 67.6096 19.9447C67.3265 20.3333 67.1818 20.777 67.1753 21.2757C67.1753 21.6903 67.2686 22.0497 67.4552 22.3541C67.6482 22.6586 67.9088 22.9176 68.237 23.1314C68.5651 23.3386 68.9286 23.5135 69.3275 23.656C69.7265 23.7985 70.1286 23.9183 70.5339 24.0155L72.3869 24.4818C73.1333 24.6567 73.8507 24.8931 74.5391 25.191C75.234 25.489 75.8549 25.8646 76.4018 26.318C76.9551 26.7714 77.3926 27.3187 77.7144 27.9599C78.0361 28.6011 78.1969 29.3524 78.1969 30.2139C78.1969 31.3797 77.9009 32.4063 77.309 33.2936C76.7171 34.1745 75.8613 34.8643 74.7418 35.363C73.6287 35.8553 72.2808 36.1014 70.698 36.1014C69.1603 36.1014 67.8252 35.8617 66.6928 35.3824C65.5668 34.9031 64.6854 34.2036 64.0484 33.2839C63.4178 32.3642 63.0768 31.2437 63.0254 29.9224H66.548C66.5995 30.6154 66.8118 31.1919 67.185 31.6517C67.5582 32.1116 68.0439 32.4549 68.6423 32.6816C69.2471 32.9083 69.9227 33.0216 70.669 33.0216C71.4476 33.0216 72.1296 32.905 72.7151 32.6719C73.307 32.4322 73.7703 32.1019 74.1048 31.6809C74.4394 31.2534 74.6099 30.7547 74.6163 30.1847C74.6099 29.6666 74.4587 29.2391 74.1627 28.9023C73.8668 28.559 73.4518 28.274 72.9178 28.0473C72.3902 27.8142 71.7725 27.6069 71.0647 27.4256L68.816 26.8426C67.1882 26.4216 65.9014 25.7837 64.9556 24.9287C64.0162 24.0673 63.5465 22.9241 63.5465 21.4992C63.5465 20.3269 63.8618 19.3003 64.4923 18.4194C65.1293 17.5386 65.9947 16.8552 67.0885 16.3695C68.1823 15.8772 69.4208 15.6311 70.8042 15.6311C72.2068 15.6311 73.4357 15.8772 74.4909 16.3695C75.5525 16.8552 76.3857 17.5321 76.9905 18.4C77.5953 19.2614 77.9074 20.2524 77.9267 21.3729H74.4812Z"
        fill="white"
      />
      <path
        d="M87.5255 36.0917C86.0392 36.0917 84.7556 35.7808 83.6747 35.159C82.6002 34.5307 81.7734 33.6434 81.1943 32.497C80.6153 31.3441 80.3257 29.9872 80.3257 28.4262C80.3257 26.8912 80.6153 25.544 81.1943 24.3846C81.7798 23.2188 82.597 22.312 83.6457 21.6643C84.6945 21.0102 85.9266 20.6831 87.3421 20.6831C88.2557 20.6831 89.1179 20.8321 89.9286 21.13C90.7457 21.4215 91.4663 21.8748 92.0904 22.4902C92.721 23.1055 93.2164 23.8892 93.5767 24.8413C93.937 25.7869 94.1172 26.9139 94.1172 28.2222V29.3006H81.9664V26.9301H90.7682C90.7618 26.2565 90.617 25.6574 90.3339 25.1327C90.0508 24.6016 89.6551 24.1839 89.1469 23.8794C88.645 23.575 88.0595 23.4228 87.3904 23.4228C86.6762 23.4228 86.0489 23.5977 85.5084 23.9475C84.9679 24.2907 84.5465 24.7441 84.2441 25.3076C83.9481 25.8646 83.7969 26.4767 83.7905 27.1438V29.2132C83.7905 30.0811 83.9481 30.8259 84.2634 31.4477C84.5787 32.063 85.0194 32.5358 85.5856 32.8662C86.1518 33.19 86.8145 33.3519 87.5737 33.3519C88.082 33.3519 88.5421 33.2807 88.9538 33.1382C89.3656 32.9892 89.7227 32.7722 90.0251 32.4873C90.3275 32.2023 90.5559 31.8493 90.7103 31.4283L93.9724 31.7975C93.7665 32.6654 93.374 33.4232 92.795 34.0709C92.2223 34.7121 91.4889 35.2108 90.5945 35.567C89.7002 35.9168 88.6772 36.0917 87.5255 36.0917V36.0917Z"
        fill="white"
      />
      <path
        d="M103.364 36.0917C101.878 36.0917 100.594 35.7808 99.513 35.159C98.4385 34.5307 97.6117 33.6434 97.0327 32.497C96.4536 31.3441 96.1641 29.9872 96.1641 28.4262C96.1641 26.8912 96.4536 25.544 97.0327 24.3846C97.6182 23.2188 98.4353 22.312 99.4841 21.6643C100.533 21.0102 101.765 20.6831 103.18 20.6831C104.094 20.6831 104.956 20.8321 105.767 21.13C106.584 21.4215 107.305 21.8748 107.929 22.4902C108.559 23.1055 109.055 23.8892 109.415 24.8413C109.775 25.7869 109.956 26.9139 109.956 28.2222V29.3006H97.8048V26.9301H106.607C106.6 26.2565 106.455 25.6574 106.172 25.1327C105.889 24.6016 105.493 24.1839 104.985 23.8794C104.483 23.575 103.898 23.4228 103.229 23.4228C102.515 23.4228 101.887 23.5977 101.347 23.9475C100.806 24.2907 100.385 24.7441 100.082 25.3076C99.7865 25.8646 99.6353 26.4767 99.6288 27.1438V29.2132C99.6288 30.0811 99.7865 30.8259 100.102 31.4477C100.417 32.063 100.858 32.5358 101.424 32.8662C101.99 33.19 102.653 33.3519 103.412 33.3519C103.92 33.3519 104.38 33.2807 104.792 33.1382C105.204 32.9892 105.561 32.7722 105.863 32.4873C106.166 32.2023 106.394 31.8493 106.549 31.4283L109.811 31.7975C109.605 32.6654 109.212 33.4232 108.633 34.0709C108.061 34.7121 107.327 35.2108 106.433 35.567C105.539 35.9168 104.516 36.0917 103.364 36.0917V36.0917Z"
        fill="white"
      />
      <path
        d="M118.141 36.0625C116.976 36.0625 115.934 35.7613 115.014 35.159C114.093 34.5566 113.366 33.6822 112.832 32.5358C112.298 31.3894 112.031 29.9969 112.031 28.3582C112.031 26.7001 112.302 25.3011 112.842 24.1612C113.389 23.0148 114.126 22.1501 115.052 21.5672C115.979 20.9778 117.011 20.6831 118.15 20.6831C119.019 20.6831 119.733 20.8321 120.293 21.13C120.852 21.4215 121.296 21.7745 121.625 22.189C121.953 22.597 122.207 22.9824 122.387 23.3451H122.532V15.9031H126.035V35.8002H122.599V33.4491H122.387C122.207 33.8118 121.946 34.1972 121.605 34.6052C121.264 35.0068 120.814 35.3501 120.254 35.635C119.694 35.92 118.99 36.0625 118.141 36.0625V36.0625ZM119.115 33.1771C119.855 33.1771 120.486 32.9763 121.007 32.5747C121.528 32.1667 121.924 31.5999 122.194 30.8745C122.464 30.1491 122.599 29.3039 122.599 28.3388C122.599 27.3737 122.464 26.535 122.194 25.8225C121.93 25.1101 121.538 24.5563 121.017 24.1612C120.502 23.7661 119.868 23.5686 119.115 23.5686C118.337 23.5686 117.687 23.7726 117.166 24.1806C116.645 24.5887 116.252 25.1522 115.988 25.8711C115.725 26.59 115.593 27.4126 115.593 28.3388C115.593 29.2715 115.725 30.1038 115.988 30.8356C116.259 31.5611 116.654 32.1343 117.175 32.5553C117.703 32.9698 118.35 33.1771 119.115 33.1771V33.1771Z"
        fill="white"
      />
      <path d="M132.98 15.9031V35.8002H129.486V15.9031H132.98Z" fill="white" />
      <path
        d="M142.864 36.0917C141.377 36.0917 140.094 35.7808 139.013 35.159C137.938 34.5307 137.112 33.6434 136.532 32.497C135.953 31.3441 135.664 29.9872 135.664 28.4262C135.664 26.8912 135.953 25.544 136.532 24.3846C137.118 23.2188 137.935 22.312 138.984 21.6643C140.033 21.0102 141.265 20.6831 142.68 20.6831C143.594 20.6831 144.456 20.8321 145.267 21.13C146.084 21.4215 146.804 21.8748 147.429 22.4902C148.059 23.1055 148.555 23.8892 148.915 24.8413C149.275 25.7869 149.455 26.9139 149.455 28.2222V29.3006H137.305V26.9301H146.106C146.1 26.2565 145.955 25.6574 145.672 25.1327C145.389 24.6016 144.993 24.1839 144.485 23.8794C143.983 23.575 143.398 23.4228 142.728 23.4228C142.014 23.4228 141.387 23.5977 140.846 23.9475C140.306 24.2907 139.885 24.7441 139.582 25.3076C139.286 25.8646 139.135 26.4767 139.129 27.1438V29.2132C139.129 30.0811 139.286 30.8259 139.601 31.4477C139.917 32.063 140.357 32.5358 140.924 32.8662C141.49 33.19 142.153 33.3519 142.912 33.3519C143.42 33.3519 143.88 33.2807 144.292 33.1382C144.704 32.9892 145.061 32.7722 145.363 32.4873C145.666 32.2023 145.894 31.8493 146.048 31.4283L149.311 31.7975C149.105 32.6654 148.712 33.4232 148.133 34.0709C147.56 34.7121 146.827 35.2108 145.933 35.567C145.038 35.9168 144.015 36.0917 142.864 36.0917V36.0917Z"
        fill="white"
      />
      <g filter="url(#filter0_d_254_2110)">
        <path
          d="M40.0253 4H18C11.9249 4 7 8.92487 7 15V37C7 43.0751 11.9249 48 18 48H40.0253C46.1004 48 51.0253 43.0751 51.0253 37V15C51.0253 8.92487 46.1004 4 40.0253 4Z"
          fill="url(#paint0_linear_254_2110)"
        />
        <path
          d="M40.0253 4.5H18C12.201 4.5 7.5 9.20101 7.5 15V37C7.5 42.799 12.201 47.5 18 47.5H40.0253C45.8243 47.5 50.5253 42.799 50.5253 37V15C50.5253 9.20101 45.8243 4.5 40.0253 4.5Z"
          stroke="url(#paint1_linear_254_2110)"
        />
      </g>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M32.8667 27.7891C31.3412 28.2498 28.397 32.039 26.4227 35.2247C26.3477 30.9153 26.4322 24.7397 33.4515 21.3393C37.4987 19.3786 40.7675 17.3498 42.4643 15.8999C42.8279 15.5892 43.5219 15.8448 43.523 16.324C43.5323 20.4624 43.0215 27.0417 40.2589 29.8227C36.6848 33.4206 32.6196 35.5236 27.2706 36.3953C27.443 35.4795 27.9984 34.3798 32.8667 27.7891V27.7891ZM24.7638 31.8124V31.8105C24.8138 29.1414 24.8882 25.1629 20.4244 23.0005C18.2382 21.9414 16.4196 20.8501 15.296 19.9937C14.9156 19.7038 14.2025 19.9899 14.217 20.4688C14.2936 22.9938 14.7614 26.5308 16.2176 28.243C18.5862 31.028 20.7636 31.7688 23.8167 32.2451C23.2094 31.5288 22.1175 30.1199 20.1429 27.3418C21.4125 27.7509 23.3753 30.1535 24.7422 31.9498C24.7554 31.9063 24.7629 31.8603 24.7638 31.8124V31.8124Z"
        fill="#43C24F"
      />
      <g opacity="0.8">
        <mask id="path-10-inside-1_254_2110" fill="white">
          <path d="M26.4226 35.2248L26.1727 35.2292L26.1874 36.0789L26.6351 35.3565L26.4226 35.2248ZM32.8666 27.7892L33.0677 27.9377L33.515 27.3322L32.7944 27.5498L32.8666 27.7892ZM33.4514 21.3394L33.3424 21.1144L33.4514 21.3394ZM42.4642 15.9L42.6266 16.0901L42.4642 15.9ZM43.5229 16.3241L43.2729 16.3246L43.5229 16.3241ZM40.2588 29.8228L40.4362 29.999L40.2588 29.8228ZM27.2705 36.3954L27.0248 36.3492L26.9589 36.6995L27.3107 36.6422L27.2705 36.3954ZM24.7637 31.8106L24.5138 31.8059L24.7637 31.8106ZM24.7637 31.8125L25.0137 31.8172L24.7637 31.8125ZM20.4243 23.0006L20.5333 22.7756L20.4243 23.0006ZM15.2959 19.9938L15.4474 19.795L15.2959 19.9938ZM14.2169 20.4689L14.4668 20.4614L14.2169 20.4689ZM16.2175 28.2431L16.4079 28.0812L16.2175 28.2431ZM23.8166 32.2452L23.7781 32.4922L24.4415 32.5957L24.0073 32.0835L23.8166 32.2452ZM20.1428 27.3419L20.2195 27.1039L19.5028 26.873L19.939 27.4867L20.1428 27.3419ZM24.7421 31.9499L24.5432 32.1013L24.8394 32.4906L24.9814 32.0225L24.7421 31.9499ZM26.6351 35.3565C27.6172 33.7717 28.84 32.0379 30.0047 30.6455C30.5871 29.949 31.1516 29.3422 31.6611 28.8831C32.1776 28.4177 32.6133 28.1268 32.9389 28.0285L32.7944 27.5498C32.3572 27.6819 31.8528 28.0374 31.3264 28.5116C30.7932 28.9921 30.2122 29.6181 29.6211 30.3247C28.4387 31.7385 27.2023 33.4922 26.2101 35.0931L26.6351 35.3565ZM33.3424 21.1144C29.7715 22.8443 27.9514 25.2903 27.041 27.8577C26.1351 30.4126 26.1352 33.0754 26.1727 35.2292L26.6726 35.2205C26.6351 33.0648 26.6399 30.4852 27.5123 28.0248C28.3803 25.5769 30.112 23.2349 33.5604 21.5643L33.3424 21.1144ZM42.3018 15.71C40.6285 17.1397 37.3816 19.1576 33.3424 21.1144L33.5604 21.5643C37.6157 19.5998 40.9062 17.5601 42.6266 16.0901L42.3018 15.71ZM43.7729 16.3235C43.772 15.9487 43.501 15.6917 43.2199 15.5827C42.9392 15.4739 42.5713 15.4797 42.3018 15.71L42.6266 16.0901C42.7207 16.0097 42.8816 15.9878 43.0391 16.0489C43.1961 16.1098 43.2726 16.2202 43.2729 16.3246L43.7729 16.3235ZM40.4362 29.999C41.8729 28.5527 42.7022 26.1489 43.176 23.6287C43.6518 21.0977 43.7775 18.4011 43.7729 16.3235L43.2729 16.3246C43.2775 18.3854 43.1525 21.0478 42.6846 23.5363C42.2147 26.0356 41.4073 28.3119 40.0815 29.6466L40.4362 29.999ZM27.3107 36.6422C32.7101 35.7622 36.8238 33.6354 40.4362 29.999L40.0815 29.6466C36.5456 33.206 32.5288 35.2852 27.2303 36.1487L27.3107 36.6422ZM32.6656 27.6406C30.2316 30.9357 28.8707 32.8648 28.0964 34.0865C27.3212 35.3098 27.1197 35.8452 27.0248 36.3492L27.5162 36.4417C27.5937 36.0297 27.7561 35.5574 28.5188 34.3542C29.2823 33.1494 30.6333 31.2334 33.0677 27.9377L32.6656 27.6406ZM24.5138 31.8059L24.5137 31.8079L25.0137 31.8172V31.8152L24.5138 31.8059ZM20.3153 23.2256C22.4836 24.276 23.5366 25.7569 24.0495 27.2947C24.567 28.8465 24.5388 30.4663 24.5138 31.8059L25.0137 31.8152C25.0386 30.4858 25.0725 28.7818 24.5238 27.1365C23.9704 25.4772 22.8287 23.8876 20.5333 22.7756L20.3153 23.2256ZM15.1444 20.1927C16.2856 21.0625 18.1201 22.1621 20.3153 23.2256L20.5333 22.7756C18.3561 21.7209 16.5533 20.6379 15.4474 19.795L15.1444 20.1927ZM14.4668 20.4614C14.4638 20.3618 14.5376 20.2447 14.7061 20.1732C14.8741 20.1018 15.046 20.1177 15.1444 20.1927L15.4474 19.795C15.1654 19.58 14.7906 19.594 14.5106 19.713C14.231 19.8317 13.9556 20.0971 13.9671 20.4765L14.4668 20.4614ZM16.4079 28.0812C15.7201 27.2725 15.2499 26.009 14.9441 24.6075C14.6398 23.2131 14.5048 21.7137 14.4668 20.4614L13.9671 20.4765C14.0056 21.7492 14.1428 23.2808 14.4556 24.7141C14.7668 26.1404 15.2586 27.5016 16.0271 28.4051L16.4079 28.0812ZM23.8551 31.9981C22.3376 31.7614 21.0585 31.4618 19.8695 30.885C18.6835 30.3096 17.5736 29.4517 16.4079 28.0812L16.0271 28.4051C17.23 29.8195 18.3932 30.7245 19.6513 31.3348C20.9064 31.9437 22.2426 32.2526 23.7781 32.4922L23.8551 31.9981ZM24.0073 32.0835C23.4071 31.3756 22.3202 29.9738 20.3466 27.197L19.939 27.4867C21.9146 30.2662 23.0115 31.6822 23.6259 32.4068L24.0073 32.0835ZM20.0661 27.5798C20.34 27.6681 20.6723 27.8723 21.0475 28.1762C21.4193 28.4772 21.8177 28.8631 22.2234 29.2965C23.0348 30.1634 23.8611 31.2051 24.5432 32.1013L24.9411 31.7985C24.2561 30.8985 23.4176 29.8407 22.5885 28.9549C22.1739 28.512 21.7582 28.1082 21.3621 27.7876C20.9696 27.4697 20.5804 27.2202 20.2195 27.1039L20.0661 27.5798ZM24.5137 31.8078C24.5133 31.8325 24.5094 31.8557 24.5029 31.8774L24.9814 32.0225C25.0012 31.9572 25.0123 31.8883 25.0137 31.8172L24.5137 31.8078Z" />
        </mask>
        <path
          d="M26.4226 35.2248L26.1727 35.2292L26.1874 36.0789L26.6351 35.3565L26.4226 35.2248ZM32.8666 27.7892L33.0677 27.9377L33.515 27.3322L32.7944 27.5498L32.8666 27.7892ZM33.4514 21.3394L33.3424 21.1144L33.4514 21.3394ZM42.4642 15.9L42.6266 16.0901L42.4642 15.9ZM43.5229 16.3241L43.2729 16.3246L43.5229 16.3241ZM40.2588 29.8228L40.4362 29.999L40.2588 29.8228ZM27.2705 36.3954L27.0248 36.3492L26.9589 36.6995L27.3107 36.6422L27.2705 36.3954ZM24.7637 31.8106L24.5138 31.8059L24.7637 31.8106ZM24.7637 31.8125L25.0137 31.8172L24.7637 31.8125ZM20.4243 23.0006L20.5333 22.7756L20.4243 23.0006ZM15.2959 19.9938L15.4474 19.795L15.2959 19.9938ZM14.2169 20.4689L14.4668 20.4614L14.2169 20.4689ZM16.2175 28.2431L16.4079 28.0812L16.2175 28.2431ZM23.8166 32.2452L23.7781 32.4922L24.4415 32.5957L24.0073 32.0835L23.8166 32.2452ZM20.1428 27.3419L20.2195 27.1039L19.5028 26.873L19.939 27.4867L20.1428 27.3419ZM24.7421 31.9499L24.5432 32.1013L24.8394 32.4906L24.9814 32.0225L24.7421 31.9499ZM26.6351 35.3565C27.6172 33.7717 28.84 32.0379 30.0047 30.6455C30.5871 29.949 31.1516 29.3422 31.6611 28.8831C32.1776 28.4177 32.6133 28.1268 32.9389 28.0285L32.7944 27.5498C32.3572 27.6819 31.8528 28.0374 31.3264 28.5116C30.7932 28.9921 30.2122 29.6181 29.6211 30.3247C28.4387 31.7385 27.2023 33.4922 26.2101 35.0931L26.6351 35.3565ZM33.3424 21.1144C29.7715 22.8443 27.9514 25.2903 27.041 27.8577C26.1351 30.4126 26.1352 33.0754 26.1727 35.2292L26.6726 35.2205C26.6351 33.0648 26.6399 30.4852 27.5123 28.0248C28.3803 25.5769 30.112 23.2349 33.5604 21.5643L33.3424 21.1144ZM42.3018 15.71C40.6285 17.1397 37.3816 19.1576 33.3424 21.1144L33.5604 21.5643C37.6157 19.5998 40.9062 17.5601 42.6266 16.0901L42.3018 15.71ZM43.7729 16.3235C43.772 15.9487 43.501 15.6917 43.2199 15.5827C42.9392 15.4739 42.5713 15.4797 42.3018 15.71L42.6266 16.0901C42.7207 16.0097 42.8816 15.9878 43.0391 16.0489C43.1961 16.1098 43.2726 16.2202 43.2729 16.3246L43.7729 16.3235ZM40.4362 29.999C41.8729 28.5527 42.7022 26.1489 43.176 23.6287C43.6518 21.0977 43.7775 18.4011 43.7729 16.3235L43.2729 16.3246C43.2775 18.3854 43.1525 21.0478 42.6846 23.5363C42.2147 26.0356 41.4073 28.3119 40.0815 29.6466L40.4362 29.999ZM27.3107 36.6422C32.7101 35.7622 36.8238 33.6354 40.4362 29.999L40.0815 29.6466C36.5456 33.206 32.5288 35.2852 27.2303 36.1487L27.3107 36.6422ZM32.6656 27.6406C30.2316 30.9357 28.8707 32.8648 28.0964 34.0865C27.3212 35.3098 27.1197 35.8452 27.0248 36.3492L27.5162 36.4417C27.5937 36.0297 27.7561 35.5574 28.5188 34.3542C29.2823 33.1494 30.6333 31.2334 33.0677 27.9377L32.6656 27.6406ZM24.5138 31.8059L24.5137 31.8079L25.0137 31.8172V31.8152L24.5138 31.8059ZM20.3153 23.2256C22.4836 24.276 23.5366 25.7569 24.0495 27.2947C24.567 28.8465 24.5388 30.4663 24.5138 31.8059L25.0137 31.8152C25.0386 30.4858 25.0725 28.7818 24.5238 27.1365C23.9704 25.4772 22.8287 23.8876 20.5333 22.7756L20.3153 23.2256ZM15.1444 20.1927C16.2856 21.0625 18.1201 22.1621 20.3153 23.2256L20.5333 22.7756C18.3561 21.7209 16.5533 20.6379 15.4474 19.795L15.1444 20.1927ZM14.4668 20.4614C14.4638 20.3618 14.5376 20.2447 14.7061 20.1732C14.8741 20.1018 15.046 20.1177 15.1444 20.1927L15.4474 19.795C15.1654 19.58 14.7906 19.594 14.5106 19.713C14.231 19.8317 13.9556 20.0971 13.9671 20.4765L14.4668 20.4614ZM16.4079 28.0812C15.7201 27.2725 15.2499 26.009 14.9441 24.6075C14.6398 23.2131 14.5048 21.7137 14.4668 20.4614L13.9671 20.4765C14.0056 21.7492 14.1428 23.2808 14.4556 24.7141C14.7668 26.1404 15.2586 27.5016 16.0271 28.4051L16.4079 28.0812ZM23.8551 31.9981C22.3376 31.7614 21.0585 31.4618 19.8695 30.885C18.6835 30.3096 17.5736 29.4517 16.4079 28.0812L16.0271 28.4051C17.23 29.8195 18.3932 30.7245 19.6513 31.3348C20.9064 31.9437 22.2426 32.2526 23.7781 32.4922L23.8551 31.9981ZM24.0073 32.0835C23.4071 31.3756 22.3202 29.9738 20.3466 27.197L19.939 27.4867C21.9146 30.2662 23.0115 31.6822 23.6259 32.4068L24.0073 32.0835ZM20.0661 27.5798C20.34 27.6681 20.6723 27.8723 21.0475 28.1762C21.4193 28.4772 21.8177 28.8631 22.2234 29.2965C23.0348 30.1634 23.8611 31.2051 24.5432 32.1013L24.9411 31.7985C24.2561 30.8985 23.4176 29.8407 22.5885 28.9549C22.1739 28.512 21.7582 28.1082 21.3621 27.7876C20.9696 27.4697 20.5804 27.2202 20.2195 27.1039L20.0661 27.5798ZM24.5137 31.8078C24.5133 31.8325 24.5094 31.8557 24.5029 31.8774L24.9814 32.0225C25.0012 31.9572 25.0123 31.8883 25.0137 31.8172L24.5137 31.8078Z"
          fill="url(#paint2_linear_254_2110)"
          stroke="#0C4318"
          stroke-width="2"
          mask="url(#path-10-inside-1_254_2110)"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_254_2110"
          x="3"
          y="4"
          width="52.0254"
          height="52"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
            values="0 0 0 0 0.286319 0 0 0 0 0.287533 0 0 0 0 0.316667 0 0 0 0.12 0"
          />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_254_2110" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_254_2110"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_254_2110"
          x1="24.5"
          y1="61.5"
          x2="40.5"
          y2="-12.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#171717" />
          <stop offset="1" stop-color="#5B5C5F" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_254_2110"
          x1="29.0127"
          y1="4"
          x2="15"
          y2="65"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#1A1A1B" />
          <stop offset="1" stop-color="#414141" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_254_2110"
          x1="17.8546"
          y1="18.65"
          x2="21.053"
          y2="33.4522"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#52C45C" />
          <stop offset="1" stop-color="#315234" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Logo;
