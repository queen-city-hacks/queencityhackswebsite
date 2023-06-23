import icon404 from "../public/404 Icon.svg"
import Image from "next/image";
import { useEffect, useState} from 'react';

const Custom404 = () =>  {
  const [active, setActive] = useState(false);

  useEffect(() =>
  {        
    setActive(true);
  }, []);

  return (
    <>

    <div className="bg-baseDark text-white flex flex-col text-center h-[80vh] justify-center items-center">
      {/* Just put whole svg here because importing using Image blocks animations */}
      <svg width="681" height="100%" viewBox="0 0 681 976" fill="none" xmlns="http://www.w3.org/2000/svg" className={active ? "active" : ""} id="errorsvg">
      <path d="M289 501V407.909H329.182C336.091 407.909 342.136 409.273 347.318 412C352.5 414.727 356.53 418.561 359.409 423.5C362.288 428.439 363.727 434.212 363.727 440.818C363.727 447.485 362.242 453.258 359.273 458.136C356.333 463.015 352.197 466.773 346.864 469.409C341.561 472.045 335.364 473.364 328.273 473.364H304.273V453.727H323.182C326.152 453.727 328.682 453.212 330.773 452.182C332.894 451.121 334.515 449.621 335.636 447.682C336.788 445.742 337.364 443.455 337.364 440.818C337.364 438.152 336.788 435.879 335.636 434C334.515 432.091 332.894 430.636 330.773 429.636C328.682 428.606 326.152 428.091 323.182 428.091H314.273V501H289ZM389.693 502.091C385.239 502.091 381.299 501.364 377.875 499.909C374.481 498.424 371.814 496.182 369.875 493.182C367.936 490.182 366.966 486.364 366.966 481.727C366.966 477.909 367.617 474.652 368.92 471.955C370.223 469.227 372.042 467 374.375 465.273C376.708 463.545 379.42 462.227 382.511 461.318C385.633 460.409 388.996 459.818 392.602 459.545C396.511 459.242 399.648 458.879 402.011 458.455C404.405 458 406.133 457.379 407.193 456.591C408.254 455.773 408.784 454.697 408.784 453.364V453.182C408.784 451.364 408.087 449.97 406.693 449C405.299 448.03 403.511 447.545 401.33 447.545C398.936 447.545 396.981 448.076 395.466 449.136C393.981 450.167 393.087 451.758 392.784 453.909H369.693C369.996 449.667 371.345 445.758 373.739 442.182C376.163 438.576 379.693 435.697 384.33 433.545C388.966 431.364 394.754 430.273 401.693 430.273C406.693 430.273 411.178 430.864 415.148 432.045C419.117 433.197 422.496 434.818 425.284 436.909C428.072 438.97 430.193 441.394 431.648 444.182C433.133 446.939 433.875 449.939 433.875 453.182V501H410.42V491.182H409.875C408.481 493.788 406.784 495.894 404.784 497.5C402.814 499.106 400.557 500.273 398.011 501C395.496 501.727 392.723 502.091 389.693 502.091ZM397.875 486.273C399.784 486.273 401.572 485.879 403.239 485.091C404.936 484.303 406.314 483.167 407.375 481.682C408.436 480.197 408.966 478.394 408.966 476.273V470.455C408.299 470.727 407.587 470.985 406.83 471.227C406.102 471.47 405.314 471.697 404.466 471.909C403.648 472.121 402.769 472.318 401.83 472.5C400.92 472.682 399.966 472.848 398.966 473C397.027 473.303 395.436 473.803 394.193 474.5C392.981 475.167 392.072 476 391.466 477C390.89 477.97 390.602 479.061 390.602 480.273C390.602 482.212 391.284 483.697 392.648 484.727C394.011 485.758 395.754 486.273 397.875 486.273ZM479.5 528.636C472.5 528.636 466.5 527.636 461.5 525.636C456.53 523.667 452.667 520.939 449.909 517.455C447.182 514 445.652 510.03 445.318 505.545H469.5C469.742 507.03 470.348 508.227 471.318 509.136C472.288 510.045 473.53 510.697 475.045 511.091C476.591 511.515 478.318 511.727 480.227 511.727C483.47 511.727 486.152 510.939 488.273 509.364C490.424 507.788 491.5 504.939 491.5 500.818V489H490.773C489.864 491.364 488.47 493.379 486.591 495.045C484.712 496.682 482.455 497.939 479.818 498.818C477.182 499.667 474.288 500.091 471.136 500.091C466.167 500.091 461.591 498.939 457.409 496.636C453.258 494.333 449.924 490.682 447.409 485.682C444.924 480.682 443.682 474.152 443.682 466.091C443.682 457.667 444.985 450.818 447.591 445.545C450.227 440.273 453.621 436.409 457.773 433.955C461.955 431.5 466.348 430.273 470.955 430.273C474.409 430.273 477.439 430.879 480.045 432.091C482.652 433.273 484.833 434.864 486.591 436.864C488.348 438.833 489.682 441 490.591 443.364H491.136V431.182H516.227V500.818C516.227 506.727 514.697 511.742 511.636 515.864C508.606 520.015 504.333 523.182 498.818 525.364C493.303 527.545 486.864 528.636 479.5 528.636ZM480.409 482.273C482.712 482.273 484.682 481.636 486.318 480.364C487.985 479.061 489.258 477.212 490.136 474.818C491.045 472.394 491.5 469.485 491.5 466.091C491.5 462.636 491.045 459.682 490.136 457.227C489.258 454.742 487.985 452.848 486.318 451.545C484.682 450.212 482.712 449.545 480.409 449.545C478.106 449.545 476.136 450.212 474.5 451.545C472.894 452.848 471.652 454.742 470.773 457.227C469.924 459.682 469.5 462.636 469.5 466.091C469.5 469.545 469.924 472.485 470.773 474.909C471.652 477.303 472.894 479.136 474.5 480.409C476.136 481.652 478.106 482.273 480.409 482.273ZM562.443 502.273C554.989 502.273 548.564 500.848 543.17 498C537.807 495.121 533.67 491 530.761 485.636C527.883 480.242 526.443 473.788 526.443 466.273C526.443 459.061 527.898 452.758 530.807 447.364C533.716 441.97 537.822 437.773 543.125 434.773C548.428 431.773 554.686 430.273 561.898 430.273C567.17 430.273 571.943 431.091 576.216 432.727C580.489 434.364 584.14 436.742 587.17 439.864C590.201 442.955 592.534 446.712 594.17 451.136C595.807 455.561 596.625 460.545 596.625 466.091V471.909H534.261V458.091H573.534C573.504 456.091 572.989 454.333 571.989 452.818C571.019 451.273 569.701 450.076 568.034 449.227C566.398 448.348 564.534 447.909 562.443 447.909C560.413 447.909 558.549 448.348 556.852 449.227C555.155 450.076 553.792 451.258 552.761 452.773C551.761 454.288 551.231 456.061 551.17 458.091V473C551.17 475.242 551.64 477.242 552.58 479C553.519 480.758 554.867 482.136 556.625 483.136C558.383 484.136 560.504 484.636 562.989 484.636C564.716 484.636 566.292 484.394 567.716 483.909C569.17 483.424 570.413 482.727 571.443 481.818C572.473 480.879 573.231 479.758 573.716 478.455H596.625C595.837 483.303 593.973 487.515 591.034 491.091C588.095 494.636 584.201 497.394 579.352 499.364C574.534 501.303 568.898 502.273 562.443 502.273ZM369.545 562.909V656H348.455L314.818 607.091H314.273V656H289V562.909H310.455L343.545 611.636H344.273V562.909H369.545ZM415.5 657.273C407.924 657.273 401.439 655.773 396.045 652.773C390.652 649.742 386.515 645.53 383.636 640.136C380.758 634.712 379.318 628.424 379.318 621.273C379.318 614.121 380.758 607.848 383.636 602.455C386.515 597.03 390.652 592.818 396.045 589.818C401.439 586.788 407.924 585.273 415.5 585.273C423.076 585.273 429.561 586.788 434.955 589.818C440.348 592.818 444.485 597.03 447.364 602.455C450.242 607.848 451.682 614.121 451.682 621.273C451.682 628.424 450.242 634.712 447.364 640.136C444.485 645.53 440.348 649.742 434.955 652.773C429.561 655.773 423.076 657.273 415.5 657.273ZM415.682 638.727C417.803 638.727 419.636 638.015 421.182 636.591C422.727 635.167 423.924 633.136 424.773 630.5C425.621 627.864 426.045 624.727 426.045 621.091C426.045 617.424 425.621 614.288 424.773 611.682C423.924 609.045 422.727 607.015 421.182 605.591C419.636 604.167 417.803 603.455 415.682 603.455C413.439 603.455 411.515 604.167 409.909 605.591C408.303 607.015 407.076 609.045 406.227 611.682C405.379 614.288 404.955 617.424 404.955 621.091C404.955 624.727 405.379 627.864 406.227 630.5C407.076 633.136 408.303 635.167 409.909 636.591C411.515 638.015 413.439 638.727 415.682 638.727ZM503.5 586.182V604.364H457.5V586.182H503.5ZM466.409 569.455H491.5V633.545C491.5 634.515 491.667 635.333 492 636C492.333 636.636 492.848 637.121 493.545 637.455C494.242 637.758 495.136 637.909 496.227 637.909C496.985 637.909 497.864 637.818 498.864 637.636C499.894 637.455 500.652 637.303 501.136 637.182L504.773 654.818C503.652 655.152 502.045 655.561 499.955 656.045C497.894 656.53 495.439 656.848 492.591 657C486.833 657.303 482 656.712 478.091 655.227C474.182 653.712 471.242 651.333 469.273 648.091C467.303 644.848 466.348 640.788 466.409 635.909V569.455ZM289 811V717.909H354.455V738.273H314.273V754.273H350.455V774.636H314.273V811H289ZM392.625 812.273C385.049 812.273 378.564 810.773 373.17 807.773C367.777 804.742 363.64 800.53 360.761 795.136C357.883 789.712 356.443 783.424 356.443 776.273C356.443 769.121 357.883 762.848 360.761 757.455C363.64 752.03 367.777 747.818 373.17 744.818C378.564 741.788 385.049 740.273 392.625 740.273C400.201 740.273 406.686 741.788 412.08 744.818C417.473 747.818 421.61 752.03 424.489 757.455C427.367 762.848 428.807 769.121 428.807 776.273C428.807 783.424 427.367 789.712 424.489 795.136C421.61 800.53 417.473 804.742 412.08 807.773C406.686 810.773 400.201 812.273 392.625 812.273ZM392.807 793.727C394.928 793.727 396.761 793.015 398.307 791.591C399.852 790.167 401.049 788.136 401.898 785.5C402.746 782.864 403.17 779.727 403.17 776.091C403.17 772.424 402.746 769.288 401.898 766.682C401.049 764.045 399.852 762.015 398.307 760.591C396.761 759.167 394.928 758.455 392.807 758.455C390.564 758.455 388.64 759.167 387.034 760.591C385.428 762.015 384.201 764.045 383.352 766.682C382.504 769.288 382.08 772.424 382.08 776.091C382.08 779.727 382.504 782.864 383.352 785.5C384.201 788.136 385.428 790.167 387.034 791.591C388.64 793.015 390.564 793.727 392.807 793.727ZM484.261 780.455V741.182H509.352V811H485.534V797.727H484.807C483.292 802.182 480.64 805.667 476.852 808.182C473.064 810.667 468.564 811.909 463.352 811.909C458.473 811.909 454.201 810.788 450.534 808.545C446.898 806.303 444.064 803.212 442.034 799.273C440.034 795.333 439.019 790.818 438.989 785.727V741.182H464.08V780.455C464.11 783.909 464.989 786.621 466.716 788.591C468.473 790.561 470.928 791.545 474.08 791.545C476.17 791.545 477.973 791.106 479.489 790.227C481.034 789.318 482.216 788.045 483.034 786.409C483.883 784.742 484.292 782.758 484.261 780.455ZM547.205 771.727V811H522.114V741.182H545.932V754.455H546.659C548.174 750.03 550.841 746.561 554.659 744.045C558.508 741.53 562.992 740.273 568.114 740.273C573.053 740.273 577.341 741.409 580.977 743.682C584.644 745.924 587.477 749.015 589.477 752.955C591.508 756.894 592.508 761.394 592.477 766.455V811H567.386V771.727C567.417 768.273 566.538 765.561 564.75 763.591C562.992 761.621 560.538 760.636 557.386 760.636C555.326 760.636 553.523 761.091 551.977 762C550.462 762.879 549.295 764.152 548.477 765.818C547.659 767.455 547.235 769.424 547.205 771.727ZM630.136 811.909C625.167 811.909 620.591 810.606 616.409 808C612.258 805.394 608.924 801.439 606.409 796.136C603.924 790.833 602.682 784.152 602.682 776.091C602.682 767.667 603.985 760.818 606.591 755.545C609.227 750.273 612.621 746.409 616.773 743.955C620.955 741.5 625.348 740.273 629.955 740.273C633.409 740.273 636.439 740.879 639.045 742.091C641.652 743.273 643.833 744.864 645.591 746.864C647.348 748.833 648.682 751 649.591 753.364H649.955V717.909H675.045V811H650.136V799.545H649.591C648.621 801.909 647.227 804.03 645.409 805.909C643.621 807.758 641.439 809.227 638.864 810.318C636.318 811.379 633.409 811.909 630.136 811.909ZM639.409 792.636C641.712 792.636 643.682 791.97 645.318 790.636C646.985 789.273 648.258 787.364 649.136 784.909C650.045 782.424 650.5 779.485 650.5 776.091C650.5 772.636 650.045 769.682 649.136 767.227C648.258 764.742 646.985 762.848 645.318 761.545C643.682 760.212 641.712 759.545 639.409 759.545C637.106 759.545 635.136 760.212 633.5 761.545C631.894 762.848 630.652 764.742 629.773 767.227C628.924 769.682 628.5 772.636 628.5 776.091C628.5 779.545 628.924 782.515 629.773 785C630.652 787.455 631.894 789.348 633.5 790.682C635.136 791.985 637.106 792.636 639.409 792.636Z" fill="white" className="svg-elem-1"></path>
      <path d="M10.2983 324.591V286.239L83.4517 171.182H118.253V222.318H98.3665L58.9489 284.818V286.239H166.903V324.591H10.2983ZM98.7216 353V312.872L99.7869 296.182V171.182H145.952V353H98.7216ZM91.2642 660.972C74.7514 660.912 60.4877 657.095 48.473 649.519C36.4583 641.943 27.1958 631.024 20.6854 616.76C14.175 602.496 10.9493 585.392 11.0085 565.446C11.0677 545.441 14.3229 528.455 20.7741 514.487C27.2846 500.519 36.5175 489.896 48.473 482.616C60.4877 475.336 74.7514 471.696 91.2642 471.696C107.777 471.696 122.041 475.366 134.055 482.705C146.07 489.984 155.333 500.608 161.843 514.576C168.353 528.544 171.579 545.5 171.52 565.446C171.52 585.51 168.265 602.674 161.754 616.938C155.244 631.201 145.981 642.121 133.967 649.697C122.011 657.213 107.777 660.972 91.2642 660.972ZM91.2642 620.844C99.7869 620.844 106.771 616.405 112.216 607.527C117.72 598.59 120.443 584.563 120.384 565.446C120.384 552.958 119.141 542.748 116.655 534.817C114.169 526.887 110.736 521.027 106.357 517.239C101.977 513.392 96.946 511.469 91.2642 511.469C82.7415 511.469 75.7872 515.789 70.4013 524.43C65.0154 533.071 62.2633 546.743 62.1449 565.446C62.0857 578.171 63.299 588.647 65.7848 596.874C68.2706 605.041 71.7034 611.078 76.0831 614.984C80.522 618.891 85.5824 620.844 91.2642 620.844ZM10.2983 930.591V892.239L83.4517 777.182H118.253V828.318H98.3665L58.9489 890.818V892.239H166.903V930.591H10.2983ZM98.7216 959V918.872L99.7869 902.182V777.182H145.952V959H98.7216Z" fill="white" className="svg-elem-2"></path>
      <path d="M239.235 83.3428C227.048 84.3904 214.744 86.5372 202.563 88.2026L193.284 89.4555C191.935 89.6338 190.141 90.1233 188.967 89.4183C187.86 88.7542 187.546 86.9729 187.127 85.8302L183.8 76.7586C179.51 65.0585 175.307 53.3155 170.927 41.6549C172.61 40.8507 174.215 39.6027 175.375 38.1065C182.894 28.4095 169.039 18.0981 160.662 26.917C159.584 28.0521 158.699 29.3103 158.187 30.756C157.605 32.3994 157.415 34.1949 157.726 35.8239C158.151 38.0468 159.526 39.7417 160.922 41.3828C156.538 45.4281 153.142 50.9351 149.466 55.5901C141.908 65.1597 134.425 74.7852 126.824 84.3237C121.956 90.4331 115.96 96.4902 115.624 104.356C115.327 111.287 118.941 115.535 123.007 120.304L132.464 131.397L182.053 189.562L191.255 200.356C195.62 205.476 199.551 210.111 207.11 210.566C214.784 211.027 221.738 205.836 228.419 202.143C238.312 196.675 248.172 191.138 258.065 185.67C263.727 182.541 270.328 179.722 275.435 175.702C276.835 177.341 278.291 178.966 280.419 179.737C281.978 180.302 283.781 180.399 285.496 180.084C287.004 179.807 288.387 179.133 289.678 178.248C299.715 171.368 291.723 156.058 280.957 161.949C279.296 162.858 277.81 164.246 276.749 165.78C265.685 159.472 254.51 153.33 243.391 147.105L235.326 142.591C234.233 141.978 232.597 141.388 232.327 140.019C232.06 138.666 232.835 136.981 233.236 135.644L235.944 126.683L242.855 103.772C243.997 99.9876 245.779 95.8832 246.059 92.0215C248.441 92.0579 250.735 91.9944 252.936 90.6479C254.473 89.7076 256.116 88.2944 257.146 86.8205C261.171 81.0643 257.507 73.5164 251.17 72.6573C248.054 72.2349 245.378 73.4197 242.928 75.5373C241.773 76.5345 240.764 77.5906 240.088 78.9496C239.356 80.4221 239.188 81.8069 239.235 83.3428ZM99.6709 123.631C92.714 118.728 81.3103 126.574 83.8837 135.02C84.9718 138.591 87.9983 141.275 90.3354 144.016L103.627 159.607L149.892 213.874L164.206 230.664C166.607 233.48 168.929 236.949 172.951 237.684C181.043 239.163 188.375 229.115 184.136 222.474C182.467 219.858 180.072 217.582 178.063 215.226L166.305 201.434L130.52 159.459L109.816 135.174C106.679 131.495 103.65 126.436 99.6709 123.631Z" fill="#FFD700" className="svg-elem-3"></path>
      <line x1="236" y1="872.072" x2="236" y2="310" stroke="#FFD700" strokeWidth="10" className="svg-elem-4"></line>
      </svg>
    
    </div>
    </>
  )
  
  
}


export default Custom404;
