import React, { useState } from 'react';
import {easeIn, easeInOut, easeOut, motion} from 'framer-motion'

const box={
  active:{scale:1.1},
  inactive:{scale:1}
}

const herosvg = () => {
  const [boxHover,setBoxHover]=useState(false)
  const [boxTap,setBoxTap]=useState(false)
  return (
      <motion.svg width="620" height="620" viewBox="0 0 696 696" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M463 443H533.636L547.091 430H574" stroke="url(#paint0_linear_64_7)" stroke-opacity="0.6" stroke-width="1.6"/>
        <path d="M463 429H491" stroke="url(#paint1_linear_64_7)" stroke-opacity="0.6" stroke-width="1.6"/>
        <path d="M464 414H495.901L510.173 428H532" stroke="url(#paint2_linear_64_7)" stroke-opacity="0.6" stroke-width="1.6"/>
        <path d="M464 398H520" stroke="url(#paint3_linear_64_7)" stroke-opacity="0.6" stroke-width="1.6"/>
        <path d="M464 384H519.706L534.899 368H556" stroke="url(#paint4_linear_64_7)" stroke-opacity="0.6" stroke-width="1.6"/>
        <path d="M464 355H532" stroke="url(#paint5_linear_64_7)" stroke-opacity="0.6" stroke-width="1.6"/>
        <path d="M464 340H509.344L523.618 325H574" stroke="url(#paint6_linear_64_7)" stroke-opacity="0.6" stroke-width="1.6"/>
        <path d="M464 325H503.274L525 303.333V270" stroke="url(#paint7_linear_64_7)" stroke-opacity="0.6" stroke-width="1.6"/>
        <path d="M464 370H500" stroke="url(#paint8_linear_64_7)" stroke-opacity="0.6" stroke-width="1.6"/>
        <path d="M323.293 304.274V246.261L309 232.809V219.357" stroke="url(#paint9_linear_64_7)" stroke-opacity="0.6" stroke-width="1.6"/>
        <path d="M337.586 304.274V240.376L322.452 225.242V205.064" stroke="url(#paint10_linear_64_7)" stroke-opacity="0.6" stroke-width="1.6"/>
        <path d="M351.879 304.274V195.815" stroke="url(#paint11_linear_64_7)" stroke-opacity="0.6" stroke-width="1.6"/>
        <path d="M367.013 301.752V268.962" stroke="url(#paint12_linear_64_7)" stroke-opacity="0.6" stroke-width="1.6"/>
        <path d="M382.146 302.592V273.166L366.172 258.032V240.376" stroke="url(#paint13_linear_64_7)" stroke-opacity="0.6" stroke-width="1.6"/>
        <path d="M396.439 301.752V240.376L366.172 211.79V179" stroke="url(#paint14_linear_64_7)" stroke-opacity="0.6" stroke-width="1.6"/>
        <path d="M410.732 302.592V231.127L396.439 216.834V201.701" stroke="url(#paint15_linear_64_7)" stroke-opacity="0.6" stroke-width="1.6"/>
        <path d="M425.866 303.433V225.242L411.573 210.949V180.682" stroke="url(#paint16_linear_64_7)" stroke-opacity="0.6" stroke-width="1.6"/>
        <path d="M441 303.433V218.516L425.866 204.223V193.293" stroke="url(#paint17_linear_64_7)" stroke-opacity="0.6" stroke-width="1.6"/>
        <path d="M314.274 326.293H256.261L242.809 312H229.356" stroke="url(#paint18_linear_64_7)" stroke-opacity="0.6" stroke-width="1.6"/>
        <path d="M314.274 340.586H250.376L235.242 325.452H215.063" stroke="url(#paint19_linear_64_7)" stroke-opacity="0.6" stroke-width="1.6"/>
        <path d="M314.274 354.879H205.815" stroke="url(#paint20_linear_64_7)" stroke-opacity="0.6" stroke-width="1.6"/>
        <path d="M311.752 370.013H278.962" stroke="url(#paint21_linear_64_7)" stroke-opacity="0.6" stroke-width="1.6"/>
        <path d="M312.593 385.146H283.166L268.032 369.172H250.376" stroke="url(#paint22_linear_64_7)" stroke-opacity="0.6" stroke-width="1.6"/>
        <path d="M311.752 399.439H250.376L221.79 369.172H189" stroke="url(#paint23_linear_64_7)" stroke-opacity="0.6" stroke-width="1.6"/>
        <path d="M312.592 413.732H241.127L226.834 399.439H211.701" stroke="url(#paint24_linear_64_7)" stroke-opacity="0.6" stroke-width="1.6"/>
        <path d="M313.433 428.866H235.242L220.949 414.573H190.682" stroke="url(#paint25_linear_64_7)" stroke-opacity="0.6" stroke-width="1.6"/>
        <path d="M313.433 444H228.516L214.223 428.866H203.293" stroke="url(#paint26_linear_64_7)" stroke-opacity="0.6" stroke-width="1.6"/>
     
     
     
     
     {/*dollar coin box  */}
      <motion.g
      animate={boxHover?'active':'inactive'}
        variants={{
          active:{scale:0.95},
          inactive:{scale:1}
        }}

        whileHover={{scale:1.05}}
      >
        <rect x="100.587" y="323.982" width="116.982" height="116.982" rx="11.0659" fill="#131A1F" stroke="url(#paint27_linear_64_7)" stroke-width="1.05389"/>
        <motion.g
             variants={{
              active:{rotate:180,transition:{duration:0.5,ease:easeOut,}},
              inactive:{rotate:0,transition:{duration:0.5}}
            }}

        clip-path="url(#clip0_64_7)">
        <path d="M184.371 382.473C184.371 396.442 173.047 407.766 159.078 407.766C145.109 407.766 133.784 396.442 133.784 382.473C133.784 368.504 145.109 357.18 159.078 357.18C173.047 357.18 184.371 368.504 184.371 382.473Z" stroke="#A1EB90" stroke-opacity="0.8" stroke-width="2.10778"/>
        <path d="M165.701 385.971C165.701 382.473 163.593 381.274 159.378 380.774C156.368 380.374 155.766 379.575 155.766 378.175C155.766 376.775 156.771 375.876 158.777 375.876C160.583 375.876 161.588 376.476 162.088 377.976C162.14 378.121 162.236 378.247 162.361 378.336C162.487 378.425 162.637 378.474 162.791 378.475H164.397C164.49 378.477 164.582 378.461 164.668 378.427C164.754 378.392 164.833 378.341 164.898 378.276C164.964 378.21 165.016 378.132 165.051 378.046C165.085 377.96 165.102 377.868 165.1 377.775V377.676C164.904 376.591 164.355 375.601 163.538 374.86C162.721 374.118 161.682 373.668 160.583 373.578V371.18C160.583 370.78 160.282 370.48 159.781 370.38H158.274C157.874 370.38 157.573 370.679 157.472 371.18V373.479C154.461 373.877 152.555 375.876 152.555 378.376C152.555 381.673 154.561 382.972 158.777 383.473C161.588 383.972 162.49 384.573 162.49 386.172C162.49 387.769 161.085 388.869 159.178 388.869C156.568 388.869 155.666 387.771 155.365 386.27C155.266 385.872 154.963 385.671 154.662 385.671H152.956C152.863 385.669 152.771 385.685 152.685 385.72C152.599 385.754 152.521 385.805 152.455 385.871C152.39 385.936 152.338 386.014 152.303 386.1C152.269 386.186 152.252 386.278 152.254 386.371V386.47C152.654 388.969 154.261 390.768 157.573 391.268V393.667C157.573 394.066 157.874 394.367 158.375 394.466H159.882C160.282 394.466 160.583 394.166 160.684 393.667V391.266C163.695 390.768 165.701 388.668 165.701 385.969V385.971Z" fill="#A1EB90" fill-opacity="0.8"/>
        <path d="M153.96 396.465C146.132 393.666 142.117 384.971 145.028 377.276C146.533 373.077 149.845 369.881 153.96 368.381C154.362 368.181 154.561 367.882 154.561 367.381V365.981C154.561 365.583 154.362 365.283 153.96 365.183C153.86 365.183 153.659 365.183 153.558 365.281C151.3 365.987 149.203 367.132 147.389 368.651C145.575 370.17 144.079 372.033 142.987 374.132C141.896 376.232 141.231 378.526 141.03 380.884C140.829 383.241 141.097 385.616 141.817 387.869C143.622 393.468 147.938 397.766 153.558 399.564C153.96 399.763 154.362 399.564 154.461 399.164C154.561 399.065 154.561 398.963 154.561 398.764V397.364C154.561 397.065 154.261 396.666 153.96 396.465V396.465ZM164.598 365.283C164.196 365.082 163.794 365.283 163.695 365.682C163.595 365.782 163.595 365.882 163.595 366.082V367.481C163.595 367.882 163.895 368.28 164.196 368.481C172.024 371.28 176.039 379.975 173.128 387.67C171.623 391.869 168.311 395.065 164.196 396.566C163.794 396.765 163.595 397.065 163.595 397.565V398.965C163.595 399.363 163.794 399.663 164.196 399.763C164.296 399.763 164.497 399.763 164.598 399.665C166.856 398.959 168.953 397.814 170.767 396.295C172.581 394.776 174.077 392.913 175.169 390.814C176.26 388.714 176.925 386.42 177.126 384.062C177.327 381.705 177.059 379.331 176.339 377.077C174.534 371.379 170.117 367.081 164.598 365.283V365.283Z" fill="#A1EB90" fill-opacity="0.8"/>
        </motion.g>
        </motion.g>
             {/* ////////////////////*/}



        {/* second box */}
        <motion.g
           animate={boxHover?'active':'inactive'}
           variants={{
             active:{scale:0.95},
             inactive:{scale:1}
           }}
           whileHover={{scale:1.05}}
        >
        <rect
        
        x="549.545" y="323.982" width="116.982" height="116.982" rx="11.0659" fill="#131A1F" stroke="url(#paint28_linear_64_7)" stroke-width="1.05389"/>

        <motion.path
            variants={{
              active:{rotate:180,transition:{duration:0.5,ease:easeOut}},
              inactive:{rotate:0,transition:{duration:0.5}}
            }}
        d="M608.658 360.19C605.679 360.107 602.714 360.622 599.937 361.705C597.161 362.787 594.629 364.416 592.493 366.494C590.356 368.571 588.658 371.056 587.499 373.802C586.34 376.547 585.742 379.497 585.743 382.477C585.743 383.046 585.765 383.61 585.808 384.175C585.869 384.973 585.691 385.77 585.299 386.468C584.907 387.165 584.317 387.731 583.604 388.094L581.689 389.071V393.625L587.328 390.75L589.155 389.82L590.955 388.904L623.252 372.446L626.882 370.597L634.384 366.774V362.221L626.948 366.015L620.602 369.249L589.963 384.855C589.86 384.065 589.808 383.268 589.809 382.471C589.813 379.291 590.648 376.168 592.231 373.41C593.813 370.652 596.089 368.356 598.832 366.748C601.576 365.14 604.691 364.277 607.871 364.244C611.051 364.211 614.184 365.009 616.96 366.559L620.591 364.708L621.134 364.432C617.497 361.793 613.149 360.314 608.658 360.19V360.19ZM634.384 371.33L592.788 392.509L589.159 394.362L581.689 398.172V402.721L589.106 398.94L595.452 395.706L626.124 380.08C626.227 380.875 626.278 381.676 626.278 382.477C626.276 385.661 625.441 388.788 623.857 391.549C622.273 394.31 619.994 396.609 617.247 398.217C614.499 399.826 611.379 400.687 608.196 400.717C605.013 400.747 601.877 399.943 599.101 398.387L598.879 398.505L594.942 400.512C598.268 402.927 602.197 404.375 606.295 404.696C610.392 405.018 614.499 404.2 618.161 402.334C621.823 400.468 624.898 397.626 627.046 394.122C629.194 390.617 630.332 386.588 630.333 382.477C630.333 381.907 630.311 381.331 630.267 380.765C630.207 379.967 630.384 379.17 630.776 378.472C631.168 377.775 631.757 377.209 632.469 376.846L634.384 375.869V371.33Z" fill="#A1EB90" fill-opacity="0.8"/>

     
        </motion.g>
            {/* ////////////////////*/}


        <g filter="url(#filter0_f_64_7)">
        <circle cx="383.03" cy="383" r="88" fill="#2196F3"/>
        </g>
        <path d="M323 463V533.636L336 547.091V574" stroke="url(#paint29_linear_64_7)" stroke-opacity="0.6" stroke-width="1.6"/>
        <path d="M337 463V491" stroke="url(#paint30_linear_64_7)" stroke-opacity="0.6" stroke-width="1.6"/>
        <path d="M352 464V495.901L338 510.173V532" stroke="url(#paint31_linear_64_7)" stroke-opacity="0.6" stroke-width="1.6"/>
        <path d="M368 464V520" stroke="url(#paint32_linear_64_7)" stroke-opacity="0.6" stroke-width="1.6"/>
        <path d="M382 464V519.706L398 534.899V556" stroke="url(#paint33_linear_64_7)" stroke-opacity="0.6" stroke-width="1.6"/>
        <path d="M411 464V532" stroke="url(#paint34_linear_64_7)" stroke-opacity="0.6" stroke-width="1.6"/>
        <path d="M426 464V509.344L441 523.618V574" stroke="url(#paint35_linear_64_7)" stroke-opacity="0.6" stroke-width="1.6"/>
        <path d="M441 464V503.274L462.667 525H496" stroke="url(#paint36_linear_64_7)" stroke-opacity="0.6" stroke-width="1.6"/>
        <path d="M396 464V500" stroke="url(#paint37_linear_64_7)" stroke-opacity="0.6" stroke-width="1.6"/>
        <g filter="url(#filter1_d_64_7)">
        <rect x="296.084" y="296.054" width="172.838" height="172.838" rx="10.5389" fill="#112C49"/>
        <rect x="295.557" y="295.527" width="173.892" height="173.892" rx="11.0659" stroke="#1D93F3" stroke-width="1.05389"/>
        </g>
        <path d="M315.054 362.449C314.472 362.449 314 362.921 314 363.503V367.719C314 368.301 314.472 368.772 315.054 368.772H324.539V362.449H315.054Z" fill="#1D93F3"/>
        <path d="M315.054 379.311C314.472 379.311 314 379.783 314 380.365V384.581C314 385.163 314.472 385.635 315.054 385.635H324.539V379.311H315.054Z" fill="#1D93F3"/>
        <path d="M451.006 362.449C451.588 362.449 452.06 362.921 452.06 363.503V367.719C452.06 368.301 451.588 368.772 451.006 368.772H441.521V362.449H451.006Z" fill="#1D93F3"/>
        <path d="M451.107 379.311C451.689 379.311 452.161 379.783 452.161 380.365V384.581C452.161 385.163 451.689 385.634 451.107 385.634H441.622V379.311H451.107Z" fill="#1D93F3"/>
        <path d="M451.206 396.173C451.788 396.173 452.26 396.645 452.26 397.227V401.443C452.26 402.025 451.788 402.496 451.206 402.496H441.721V396.173H451.206Z" fill="#1D93F3"/>
        <path d="M315.054 396.174C314.472 396.174 314 396.645 314 397.228V401.443C314 402.025 314.472 402.497 315.054 402.497H324.539V396.174H315.054Z" fill="#1D93F3"/>
        <g filter="url(#filter2_d_64_7)">
        <rect x="324.539" y="323.455" width="116.982" height="116.982" rx="10.5389" fill="#1D93F3" fill-opacity="0.05" shape-rendering="crispEdges"/>
        <rect x="324.012" y="322.928" width="118.036" height="118.036" rx="11.0659" stroke="#1D93F3" stroke-width="1.05389" shape-rendering="crispEdges"/>
        </g>
        <motion.g
        onMouseOver={()=>setBoxHover(true)}
        onMouseLeave={()=>setBoxHover(false)}
        animate={boxHover?'active':'inactive'}
        variants={box}
        >
        <g
       
        filter="url(#filter3_d_64_7)">
          
        <path d="M348 383.359C348 363.279 364.279 347 384.359 347V347C404.44 347 420.719 363.279 420.719 383.359V383.359C420.719 403.44 404.44 419.719 384.359 419.719V419.719C364.279 419.719 348 403.44 348 383.359V383.359Z" fill="#1D93F3" fill-opacity="0.05" shape-rendering="crispEdges"/>
        <path d="M347.473 383.359C347.473 403.731 363.988 420.246 384.359 420.246C404.731 420.246 421.246 403.731 421.246 383.359C421.246 362.988 404.731 346.473 384.359 346.473C363.988 346.473 347.473 362.988 347.473 383.359Z" stroke="#1D93F3" stroke-width="1.05389" shape-rendering="crispEdges"/>
        </g>

      
       <g>
       <path d="M400.131 370.88H392.772C392.753 370.88 392.733 370.885 392.717 370.897C392.701 370.908 392.69 370.925 392.684 370.944L390.068 380.2L390 380.439L389.482 382.268L388.993 384.023L388.357 386.238L386.108 394.061L394.567 390.736C394.592 390.722 394.611 390.7 394.62 390.673L400.219 370.998C400.222 370.984 400.223 370.97 400.22 370.956C400.218 370.942 400.212 370.929 400.203 370.917C400.195 370.906 400.184 370.897 400.171 370.89C400.159 370.884 400.145 370.881 400.131 370.88V370.88Z" fill="white"/>
        <path d="M388.636 381.329L388.308 382.478L385.712 391.519L385.487 392.306L385.213 393.24L381.405 382.903L380.006 379.095V379.07L379.674 378.214L379.439 377.589L379.341 377.315L378.803 375.848C378.798 375.84 378.794 375.831 378.794 375.822C378.793 375.812 378.795 375.803 378.8 375.794C378.804 375.786 378.811 375.779 378.82 375.775C378.828 375.771 378.838 375.769 378.847 375.77H386.328C386.347 375.77 386.365 375.776 386.381 375.786C386.396 375.797 386.409 375.811 386.416 375.828L388.636 381.329Z" fill="white"/>
        <path d="M382.516 388.971L378.879 379.085L378.59 378.302L378.052 380.17L377.441 382.297L376.952 384.062L374.595 392.276L374.106 394.066L382.56 390.746C382.574 390.74 382.587 390.731 382.596 390.719C382.606 390.707 382.612 390.693 382.614 390.678L382.839 389.7L382.516 388.971Z" fill="white"/>
        <path d="M376.349 382.243L376.603 381.353L375.919 379.637C375.912 379.62 375.901 379.605 375.886 379.595C375.871 379.584 375.854 379.579 375.835 379.579H367.836C367.822 379.58 367.808 379.585 367.795 379.592C367.783 379.6 367.772 379.61 367.764 379.622C367.757 379.634 367.751 379.648 367.749 379.663C367.747 379.677 367.749 379.692 367.753 379.706L373.171 393.298L373.454 392.32L376.104 383.104L376.344 382.273L376.349 382.243Z" fill="white"/>
        </g> 
        </motion.g>
        <circle cx="454.695" cy="454.665" r="5.79641" fill="#0D1421"/>
        <circle cx="454.695" cy="454.665" r="5.48024" stroke="#1D93F3" stroke-opacity="0.5" stroke-width="0.632335"/>
        <circle cx="310.312" cy="310.281" r="5.79641" fill="#0D1421"/>
        <circle cx="310.312" cy="310.281" r="5.48024" stroke="#1D93F3" stroke-opacity="0.5" stroke-width="0.632335"/>
        <circle cx="454.695" cy="310.281" r="5.79641" fill="#0D1421"/>
        <circle cx="454.695" cy="310.281" r="5.48024" stroke="#1D93F3" stroke-opacity="0.5" stroke-width="0.632335"/>
        <circle cx="310.312" cy="454.665" r="5.79641" fill="#0D1421"/>
        <circle cx="310.312" cy="454.665" r="5.48024" stroke="#1D93F3" stroke-opacity="0.5" stroke-width="0.632335"/>
            <rect x="217.042" y="378.257" width="79.0419" height="8.43114" fill="#112D49"/>
        <rect x="471.03" y="378.257" width="79.0419" height="8.43114" fill="#112D49"/>
       <g>
       <circle

       
       cx="217.042" cy="382.473" r="8.95808" fill="#0D1421" stroke="#497857" stroke-width="1.05389"/>
       <circle
            
       cx="295.03" cy="382.473" r="8.95808" fill="#0D1421" stroke="#064578" stroke-width="1.05389"/>
       </g>
         <circle
       
         cx="550.072" cy="382.473" r="8.95808" fill="#0D1421" stroke="#497857" stroke-width="1.05389"/>
        <circle cx="471.03" cy="382.473" r="8.95808" fill="#0D1421" stroke="#064578" stroke-width="1.05389"/>
        <defs>
        
     
        <linearGradient id="paint0_linear_64_7" x1="463" y1="436.5" x2="574" y2="436.5" gradientUnits="userSpaceOnUse">
        <stop stop-color="#2196F3"/>
        <stop offset="1" stop-color="#2196F3" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="paint1_linear_64_7" x1="463" y1="428.5" x2="491" y2="428.5" gradientUnits="userSpaceOnUse">
        <stop stop-color="#2196F3"/>
        <stop offset="1" stop-color="#2196F3" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="paint2_linear_64_7" x1="464" y1="421" x2="532" y2="421" gradientUnits="userSpaceOnUse">
        <stop stop-color="#2196F3"/>
        <stop offset="1" stop-color="#2196F3" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="paint3_linear_64_7" x1="464" y1="397.5" x2="520" y2="397.5" gradientUnits="userSpaceOnUse">
        <stop stop-color="#2196F3"/>
        <stop offset="1" stop-color="#2196F3" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="paint4_linear_64_7" x1="464" y1="376" x2="556" y2="376" gradientUnits="userSpaceOnUse">
        <stop stop-color="#2196F3"/>
        <stop offset="1" stop-color="#2196F3" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="paint5_linear_64_7" x1="464" y1="354.5" x2="532" y2="354.5" gradientUnits="userSpaceOnUse">
        <stop stop-color="#2196F3"/>
        <stop offset="1" stop-color="#2196F3" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="paint6_linear_64_7" x1="464" y1="332.5" x2="574" y2="332.5" gradientUnits="userSpaceOnUse">
        <stop stop-color="#2196F3"/>
        <stop offset="1" stop-color="#2196F3" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="paint7_linear_64_7" x1="464" y1="297.5" x2="525" y2="297.5" gradientUnits="userSpaceOnUse">
        <stop stop-color="#2196F3"/>
        <stop offset="1" stop-color="#2196F3" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="paint8_linear_64_7" x1="464" y1="369.5" x2="500" y2="369.5" gradientUnits="userSpaceOnUse">
        <stop stop-color="#2196F3"/>
        <stop offset="1" stop-color="#2196F3" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="paint9_linear_64_7" x1="316.146" y1="219.357" x2="316.146" y2="304.274" gradientUnits="userSpaceOnUse">
        <stop stop-color="#1D93F3" stop-opacity="0"/>
        <stop offset="1" stop-color="#1D93F3"/>
        </linearGradient>
        <linearGradient id="paint10_linear_64_7" x1="330.019" y1="205.064" x2="330.019" y2="304.274" gradientUnits="userSpaceOnUse">
        <stop stop-color="#1D93F3" stop-opacity="0"/>
        <stop offset="1" stop-color="#1D93F3"/>
        </linearGradient>
        <linearGradient id="paint11_linear_64_7" x1="352.379" y1="195.815" x2="352.379" y2="304.274" gradientUnits="userSpaceOnUse">
        <stop stop-color="#1D93F3" stop-opacity="0"/>
        <stop offset="1" stop-color="#1D93F3"/>
        </linearGradient>
        <linearGradient id="paint12_linear_64_7" x1="367.513" y1="268.962" x2="367.513" y2="301.752" gradientUnits="userSpaceOnUse">
        <stop stop-color="#1D93F3" stop-opacity="0"/>
        <stop offset="1" stop-color="#1D93F3"/>
        </linearGradient>
        <linearGradient id="paint13_linear_64_7" x1="374.159" y1="240.376" x2="374.159" y2="302.592" gradientUnits="userSpaceOnUse">
        <stop stop-color="#1D93F3" stop-opacity="0"/>
        <stop offset="1" stop-color="#1D93F3"/>
        </linearGradient>
        <linearGradient id="paint14_linear_64_7" x1="381.306" y1="179" x2="381.306" y2="301.752" gradientUnits="userSpaceOnUse">
        <stop stop-color="#1D93F3" stop-opacity="0"/>
        <stop offset="1" stop-color="#1D93F3"/>
        </linearGradient>
        <linearGradient id="paint15_linear_64_7" x1="403.586" y1="201.701" x2="403.586" y2="302.592" gradientUnits="userSpaceOnUse">
        <stop stop-color="#1D93F3" stop-opacity="0"/>
        <stop offset="1" stop-color="#1D93F3"/>
        </linearGradient>
        <linearGradient id="paint16_linear_64_7" x1="418.72" y1="180.682" x2="418.72" y2="303.433" gradientUnits="userSpaceOnUse">
        <stop stop-color="#1D93F3" stop-opacity="0"/>
        <stop offset="1" stop-color="#1D93F3"/>
        </linearGradient>
        <linearGradient id="paint17_linear_64_7" x1="433.433" y1="193.293" x2="433.433" y2="303.433" gradientUnits="userSpaceOnUse">
        <stop stop-color="#1D93F3" stop-opacity="0"/>
        <stop offset="1" stop-color="#1D93F3"/>
        </linearGradient>
        <linearGradient id="paint18_linear_64_7" x1="229.356" y1="319.146" x2="314.274" y2="319.146" gradientUnits="userSpaceOnUse">
        <stop stop-color="#1D93F3" stop-opacity="0"/>
        <stop offset="1" stop-color="#1D93F3"/>
        </linearGradient>
        <linearGradient id="paint19_linear_64_7" x1="215.063" y1="333.019" x2="314.274" y2="333.019" gradientUnits="userSpaceOnUse">
        <stop stop-color="#1D93F3" stop-opacity="0"/>
        <stop offset="1" stop-color="#1D93F3"/>
        </linearGradient>
        <linearGradient id="paint20_linear_64_7" x1="205.815" y1="355.379" x2="314.274" y2="355.379" gradientUnits="userSpaceOnUse">
        <stop stop-color="#1D93F3" stop-opacity="0"/>
        <stop offset="1" stop-color="#1D93F3"/>
        </linearGradient>
        <linearGradient id="paint21_linear_64_7" x1="278.962" y1="370.513" x2="311.752" y2="370.513" gradientUnits="userSpaceOnUse">
        <stop stop-color="#1D93F3" stop-opacity="0"/>
        <stop offset="1" stop-color="#1D93F3"/>
        </linearGradient>
        <linearGradient id="paint22_linear_64_7" x1="250.376" y1="377.159" x2="312.593" y2="377.159" gradientUnits="userSpaceOnUse">
        <stop stop-color="#1D93F3" stop-opacity="0"/>
        <stop offset="1" stop-color="#1D93F3"/>
        </linearGradient>
        <linearGradient id="paint23_linear_64_7" x1="189" y1="384.306" x2="311.752" y2="384.306" gradientUnits="userSpaceOnUse">
        <stop stop-color="#1D93F3" stop-opacity="0"/>
        <stop offset="1" stop-color="#1D93F3"/>
        </linearGradient>
        <linearGradient id="paint24_linear_64_7" x1="211.701" y1="406.586" x2="312.592" y2="406.586" gradientUnits="userSpaceOnUse">
        <stop stop-color="#1D93F3" stop-opacity="0"/>
        <stop offset="1" stop-color="#1D93F3"/>
        </linearGradient>
        <linearGradient id="paint25_linear_64_7" x1="190.682" y1="421.72" x2="313.433" y2="421.72" gradientUnits="userSpaceOnUse">
        <stop stop-color="#1D93F3" stop-opacity="0"/>
        <stop offset="1" stop-color="#1D93F3"/>
        </linearGradient>
        <linearGradient id="paint26_linear_64_7" x1="203.293" y1="436.433" x2="313.433" y2="436.433" gradientUnits="userSpaceOnUse">
        <stop stop-color="#1D93F3" stop-opacity="0"/>
        <stop offset="1" stop-color="#1D93F3"/>
        </linearGradient>
        <linearGradient id="paint27_linear_64_7" x1="104.275" y1="327.671" x2="240.754" y2="461.515" gradientUnits="userSpaceOnUse">
        <stop stop-color="#A1EB90"/>
        <stop offset="1" stop-color="#0F1D0C"/>
        </linearGradient>
        <linearGradient id="paint28_linear_64_7" x1="553.234" y1="327.671" x2="689.713" y2="461.515" gradientUnits="userSpaceOnUse">
        <stop stop-color="#A1EB90"/>
        <stop offset="1" stop-color="#0F1D0C"/>
        </linearGradient>
        <linearGradient id="paint29_linear_64_7" x1="329.5" y1="463" x2="329.5" y2="574" gradientUnits="userSpaceOnUse">
        <stop stop-color="#2196F3"/>
        <stop offset="1" stop-color="#2196F3" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="paint30_linear_64_7" x1="337.5" y1="463" x2="337.5" y2="491" gradientUnits="userSpaceOnUse">
        <stop stop-color="#2196F3"/>
        <stop offset="1" stop-color="#2196F3" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="paint31_linear_64_7" x1="345" y1="464" x2="345" y2="532" gradientUnits="userSpaceOnUse">
        <stop stop-color="#2196F3"/>
        <stop offset="1" stop-color="#2196F3" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="paint32_linear_64_7" x1="368.5" y1="464" x2="368.5" y2="520" gradientUnits="userSpaceOnUse">
        <stop stop-color="#2196F3"/>
        <stop offset="1" stop-color="#2196F3" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="paint33_linear_64_7" x1="390" y1="464" x2="390" y2="556" gradientUnits="userSpaceOnUse">
        <stop stop-color="#2196F3"/>
        <stop offset="1" stop-color="#2196F3" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="paint34_linear_64_7" x1="411.5" y1="464" x2="411.5" y2="532" gradientUnits="userSpaceOnUse">
        <stop stop-color="#2196F3"/>
        <stop offset="1" stop-color="#2196F3" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="paint35_linear_64_7" x1="433.5" y1="464" x2="433.5" y2="574" gradientUnits="userSpaceOnUse">
        <stop stop-color="#2196F3"/>
        <stop offset="1" stop-color="#2196F3" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="paint36_linear_64_7" x1="468.5" y1="464" x2="468.5" y2="525" gradientUnits="userSpaceOnUse">
        <stop stop-color="#2196F3"/>
        <stop offset="1" stop-color="#2196F3" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="paint37_linear_64_7" x1="396.5" y1="464" x2="396.5" y2="500" gradientUnits="userSpaceOnUse">
        <stop stop-color="#2196F3"/>
        <stop offset="1" stop-color="#2196F3" stop-opacity="0"/>
        </linearGradient>
        <clipPath id="clip0_64_7">
        <rect

        width="52.6946" height="52.6946" fill="white" transform="translate(132.73 356.126)"/>
        </clipPath>
        <clipPath id="clip1_64_7">
        <rect width="52.6946" height="52.6946" fill="white" transform="translate(581.689 356.126)"/>
        </clipPath>
        </defs>
        </motion.svg>
  
  )
}

export default herosvg