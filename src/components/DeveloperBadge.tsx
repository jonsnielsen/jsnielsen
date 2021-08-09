import Image from 'next/image';
import badgeSvg from '../assets/images/badge.svg';
import styles from './developerBadge.module.css';
import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring,
} from 'framer-motion';

export function DeveloperBadge() {
  const { scrollY } = useViewportScroll();
  const slowedRotateAnim = useTransform(scrollY, (latest) => latest / 8);
  const rotateAnim = useSpring(slowedRotateAnim, {
    stiffness: 400,
    damping: 90,
  });

  return (
    <motion.span
      style={{ rotateZ: rotateAnim, transformOrigin: '50% 50%' }}
      className={styles.badgeWrapper}
    >
      {/* <Image src={badgeSvg} alt="developer badge" width={120} height={120} /> */}
      <svg
        className="w-20 h-20 lg:w-32 lg:h-32"
        width="145"
        height="145"
        viewBox="0 0 145 145"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M60.8729 129.834L59.0352 129.336L57.9582 133.381L53.6883 132.224L53.256 133.847L57.5259 135.005L56.7839 137.792L51.9059 136.469L51.4737 138.093L58.1893 139.913L60.8729 129.834Z"
          fill="white"
        />
        <path
          d="M50.1728 126.518L48.4762 125.654L46.7536 129.097L45.1568 128.283L44.9584 123.862L43.0372 122.883L43.2974 127.713C42.6732 127.668 42.0987 127.794 41.5738 128.092C41.0406 128.386 40.6132 128.854 40.2916 129.497C39.9742 130.131 39.8442 130.736 39.9015 131.309C39.9588 131.883 40.1764 132.408 40.5543 132.883C40.9197 133.363 41.4184 133.763 42.0505 134.085L45.506 135.845L50.1728 126.518ZM46.0019 130.599L44.5611 133.479L42.7772 132.57C42.3198 132.337 42.0186 132.021 41.8737 131.623C41.7287 131.224 41.7668 130.804 41.9882 130.361C42.2053 129.927 42.518 129.647 42.926 129.519C43.3299 129.4 43.7606 129.457 44.218 129.69L46.0019 130.599Z"
          fill="white"
        />
        <path
          d="M39.5311 120.544L34.1478 116.179L33.1014 117.494L37.0056 120.659L35.3138 122.784L31.6271 119.795L30.5806 121.109L34.2673 124.098L32.6017 126.19L28.6975 123.025L27.651 124.339L33.0343 128.703L39.5311 120.544Z"
          fill="white"
        />
        <path
          d="M30.7186 112.809L26.3368 107.441L25.0447 108.514L28.2226 112.408L26.1337 114.144L23.1328 110.467L21.8407 111.541L24.8416 115.218L22.785 116.927L19.6071 113.033L18.3149 114.107L22.6968 119.475L30.7186 112.809Z"
          fill="white"
        />
        <path
          d="M23.6719 103.406L20.6814 97.7819L19.204 98.5818L21.3006 102.525L13.6059 106.691L14.4997 108.372L23.6719 103.406Z"
          fill="white"
        />
        <path
          d="M19.1709 94.5721L18.5923 92.5971L16.2332 92.5118L15.0998 88.6424L17.0378 87.2901L16.4553 85.3016L7.4718 91.7355L8.16447 94.1001L19.1709 94.5721ZM14.4698 92.4679L9.84396 92.3136L13.6434 89.6465L14.4698 92.4679Z"
          fill="white"
        />
        <path
          d="M15.7626 81.4068L15.6556 79.5058L8.84875 79.8958L15.3771 74.5577L15.293 73.062L4.88005 73.6586L4.98702 75.5596L11.6681 75.1768L5.26626 80.5218L5.34963 82.0034L15.7626 81.4068Z"
          fill="white"
        />
        <path
          d="M16.5242 62.8809C16.6616 62.147 16.6607 61.4674 16.5214 60.8423C16.3838 60.208 16.1511 59.6505 15.8233 59.1699C15.4863 58.6876 15.0912 58.313 14.638 58.046L13.5397 59.5754C14.0153 59.8751 14.3798 60.2866 14.6331 60.81C14.879 61.3225 14.9409 61.9044 14.8189 62.5557C14.6987 63.1979 14.4417 63.7332 14.0481 64.1618C13.6545 64.5903 13.1661 64.8915 12.5828 65.0653C11.9903 65.2373 11.3365 65.2552 10.6214 65.1189C9.90628 64.9825 9.30862 64.726 8.82841 64.3494C8.33902 63.9711 7.99317 63.5108 7.79085 62.9686C7.57935 62.4247 7.53374 61.8317 7.654 61.1895C7.77598 60.5382 8.04868 60.0201 8.47208 59.6353C8.88804 59.2395 9.37162 58.9897 9.92284 58.8857L9.45336 57.0575C8.93481 57.1391 8.43603 57.3433 7.95704 57.67C7.46888 57.995 7.04605 58.4275 6.68856 58.9674C6.33278 59.4981 6.08617 60.1305 5.94873 60.8644C5.81128 61.5983 5.81709 62.3025 5.96613 62.977C6.10602 63.6498 6.37138 64.261 6.76222 64.8106C7.14389 65.3584 7.63615 65.8228 8.23898 66.2038C8.83265 66.5831 9.50996 66.8452 10.2709 66.9903C11.0319 67.1354 11.7619 67.1416 12.4609 67.0088C13.1508 66.8743 13.7771 66.6232 14.3397 66.2554C14.9023 65.8876 15.375 65.4172 15.7577 64.844C16.1313 64.2692 16.3868 63.6148 16.5242 62.8809Z"
          fill="white"
        />
        <path
          d="M18.6624 53.7747L21.4239 47.4187L19.8875 46.739L17.8847 51.3487L15.4009 50.25L17.2921 45.8971L15.7557 45.2175L13.8645 49.5704L11.4191 48.4886L13.4219 43.8789L11.8855 43.1992L9.12399 49.5553L18.6624 53.7747Z"
          fill="white"
        />
        <path
          d="M30.1684 34.5144L31.5308 33.1843L28.6336 30.1629L31.7991 27.0724L30.6364 25.8598L27.4708 28.9503L25.4748 26.8687L29.0911 23.3381L27.9284 22.1255L22.9496 26.9861L30.1684 34.5144Z"
          fill="white"
        />
        <path
          d="M38.4548 26.9207L40.0599 25.8966L38.0154 22.6342L39.5261 21.6703L43.3881 23.773L45.2056 22.6133L40.9646 20.354C41.3235 19.8371 41.5108 19.2747 41.5264 18.6669C41.5499 18.0541 41.3709 17.4432 40.9892 16.8342C40.6126 16.2332 40.1655 15.8099 39.6482 15.5643C39.1308 15.3187 38.5731 15.2373 37.975 15.3199C37.3799 15.3897 36.7834 15.6153 36.1854 15.9968L32.9162 18.0828L38.4548 26.9207ZM37.1233 21.2107L35.4134 18.4822L37.1011 17.4053C37.5339 17.1292 37.9569 17.0309 38.3702 17.1104C38.7835 17.1899 39.1214 17.4392 39.3841 17.8584C39.6419 18.2696 39.7202 18.6846 39.6191 19.1034C39.5131 19.5142 39.2438 19.8577 38.811 20.1338L37.1233 21.2107Z"
          fill="white"
        />
        <path
          d="M53.8045 19.1206C54.5391 18.8747 55.1783 18.518 55.7221 18.0505C56.266 17.583 56.6966 17.0402 57.0141 16.4221C57.3315 15.804 57.5166 15.1416 57.5691 14.4351C57.6276 13.7167 57.5374 12.9939 57.2983 12.2669C57.0563 11.531 56.7005 10.8972 56.2309 10.3655C55.7701 9.83074 55.2309 9.41583 54.6131 9.1207C53.9924 8.8167 53.3256 8.64133 52.6127 8.5946C51.8998 8.54786 51.176 8.64747 50.4414 8.89341C49.7068 9.13936 49.0676 9.49608 48.5238 9.96359C47.9799 10.4311 47.5493 10.9739 47.2318 11.592C46.9203 12.1983 46.7338 12.8562 46.6724 13.5657C46.6198 14.2723 46.7145 14.9935 46.9565 15.7294C47.1956 16.4564 47.547 17.0917 48.0106 17.6353C48.4802 18.1671 49.0254 18.5849 49.6461 18.8889C50.2668 19.1929 50.9336 19.3683 51.6465 19.415C52.3594 19.4618 53.0788 19.3636 53.8045 19.1206ZM53.2622 17.4715C52.625 17.6849 52.0001 17.7268 51.3877 17.5972C50.7841 17.4646 50.2502 17.1857 49.7861 16.7604C49.3221 16.335 48.9807 15.7899 48.762 15.1249C48.5434 14.4599 48.4955 13.8214 48.6185 13.2094C48.7385 12.5885 49.0012 12.0429 49.4066 11.5725C49.8208 11.0992 50.3465 10.7559 50.9837 10.5425C51.6298 10.3262 52.2546 10.2843 52.8582 10.4169C53.4618 10.5494 53.9957 10.8284 54.4598 11.2537C54.9209 11.6702 55.2609 12.2109 55.4795 12.8759C55.6982 13.5408 55.7475 14.1838 55.6274 14.8046C55.5074 15.4255 55.2447 15.9712 54.8394 16.4415C54.434 16.9119 53.9083 17.2552 53.2622 17.4715Z"
          fill="white"
        />
        <path
          d="M63.8992 16.2507L65.7992 16.1277L65.3666 9.32344L70.7449 15.8075L72.2397 15.7107L71.5779 5.30174L69.6778 5.42475L70.1025 12.1033L64.7182 5.74585L63.2373 5.84173L63.8992 16.2507Z"
          fill="white"
        />
        <path
          d="M79.405 16.2664L81.3024 16.5464L82.5577 7.88691L85.1892 8.27529L85.4302 6.61267L78.2282 5.54973L77.9872 7.21235L80.6602 7.60687L79.405 16.2664Z"
          fill="white"
        />
        <path
          d="M87.6279 17.8325L94.1606 20.1454L94.7124 18.5586L89.9745 16.8812L90.8666 14.3158L95.3405 15.8998L95.8923 14.313L91.4184 12.729L92.2967 10.2034L97.0345 11.8809L97.5863 10.2941L91.0537 7.98113L87.6279 17.8325Z"
          fill="white"
        />
        <path
          d="M98.5131 22.0892L100.123 23.1064L103.719 17.3138L104.312 25.7543L105.578 26.5546L111.079 17.6932L109.47 16.676L105.94 22.3616L105.269 14.0206L104.014 13.2278L98.5131 22.0892Z"
          fill="white"
        />
        <path
          d="M109.782 29.8394L112.144 32.2876C112.909 33.0802 113.733 33.6117 114.617 33.8821C115.507 34.1592 116.387 34.1843 117.257 33.9573C118.127 33.7303 118.925 33.2603 119.651 32.5474C120.384 31.8279 120.871 31.0356 121.112 30.1703C121.36 29.2985 121.359 28.4167 121.108 27.5249C120.864 26.6266 120.356 25.7778 119.585 24.9785L117.223 22.5303L109.782 29.8394ZM112.303 30.0323L117.346 25.0778L118.416 26.186C118.908 26.6965 119.23 27.2378 119.38 27.81C119.536 28.3889 119.525 28.9689 119.346 29.5499C119.174 30.1244 118.832 30.6635 118.319 31.1671C117.807 31.6707 117.26 32.0048 116.68 32.1694C116.106 32.3407 115.534 32.3397 114.965 32.1663C114.396 31.9929 113.865 31.651 113.372 31.1405L112.303 30.0323Z"
          fill="white"
        />
        <path
          d="M121.789 44.6214L123.224 47.7061C123.688 48.7047 124.294 49.4762 125.042 50.0208C125.793 50.5738 126.617 50.8856 127.515 50.9562C128.412 51.0269 129.321 50.8445 130.24 50.4091C131.168 49.9697 131.888 49.3812 132.399 48.6434C132.918 47.9016 133.205 47.0688 133.259 46.1448C133.322 45.2168 133.119 44.2492 132.65 43.2422L131.216 40.1575L121.789 44.6214ZM124.111 45.6288L130.5 42.6029L131.15 43.9993C131.449 44.6424 131.576 45.2587 131.531 45.8479C131.49 46.4457 131.29 46.9896 130.931 47.4796C130.581 47.9657 130.081 48.3625 129.431 48.67C128.782 48.9776 128.156 49.1141 127.553 49.0794C126.954 49.0532 126.414 48.8651 125.932 48.515C125.45 48.1649 125.059 47.6683 124.76 47.0251L124.111 45.6288Z"
          fill="white"
        />
        <path
          d="M127.045 57.32L128.522 64.0908L130.162 63.7265L129.091 58.816L131.743 58.2271L132.754 62.864L134.394 62.4998L133.383 57.8628L135.993 57.283L137.064 62.1935L138.704 61.8293L137.227 55.0585L127.045 57.32Z"
          fill="white"
        />
        <path
          d="M129.171 71.6765L129.178 73.8605L139.619 77.454L139.612 75.382L131.582 72.761L139.596 70.076L139.59 68.004L129.171 71.6765Z"
          fill="white"
        />
        <path
          d="M128.71 81.652L127.275 88.4316L128.917 88.7857L129.958 83.8687L132.613 84.4411L131.63 89.0842L133.272 89.4382L134.255 84.7952L136.869 85.3588L135.828 90.2757L137.47 90.6298L138.906 83.8501L128.71 81.652Z"
          fill="white"
        />
        <path
          d="M125.836 93.0781L123.334 98.936L124.874 99.6061L126.629 95.4991L134.653 98.9892L135.401 97.2383L125.836 93.0781Z"
          fill="white"
        />
        <path
          d="M118.285 106.939C117.827 107.563 117.51 108.223 117.335 108.919C117.159 109.616 117.119 110.308 117.215 110.998C117.311 111.687 117.541 112.336 117.904 112.946C118.269 113.568 118.758 114.109 119.371 114.567C119.991 115.031 120.646 115.346 121.335 115.511C122.018 115.684 122.697 115.714 123.371 115.6C124.053 115.492 124.698 115.252 125.307 114.88C125.916 114.508 126.45 114.009 126.908 113.385C127.367 112.761 127.684 112.1 127.859 111.404C128.034 110.708 128.074 110.015 127.978 109.326C127.884 108.65 127.658 108.003 127.301 107.386C126.938 106.777 126.446 106.24 125.826 105.776C125.213 105.318 124.561 105 123.87 104.821C123.181 104.655 122.496 104.627 121.814 104.735C121.133 104.843 120.487 105.083 119.878 105.455C119.269 105.827 118.738 106.322 118.285 106.939ZM119.676 107.978C120.074 107.436 120.56 107.042 121.134 106.796C121.703 106.557 122.299 106.479 122.923 106.56C123.546 106.642 124.138 106.892 124.699 107.311C125.259 107.73 125.665 108.226 125.917 108.798C126.175 109.376 126.274 109.975 126.214 110.594C126.147 111.22 125.915 111.804 125.518 112.346C125.114 112.895 124.628 113.289 124.059 113.528C123.49 113.766 122.894 113.845 122.271 113.764C121.655 113.688 121.067 113.44 120.506 113.021C119.945 112.602 119.536 112.103 119.277 111.525C119.018 110.947 118.919 110.349 118.98 109.73C119.041 109.111 119.273 108.527 119.676 107.978Z"
          fill="white"
        />
        <path
          d="M111.621 115.14L110.158 116.358L112.594 119.339L111.066 120.61C110.521 121.064 110.12 121.561 109.863 122.103C109.612 122.651 109.525 123.216 109.602 123.796C109.671 124.382 109.924 124.942 110.361 125.477C110.81 126.026 111.306 126.39 111.85 126.569C112.394 126.748 112.957 126.759 113.54 126.601C114.122 126.457 114.685 126.159 115.23 125.705L118.222 123.215L111.621 115.14ZM113.657 120.639L115.695 123.132L114.145 124.422C113.751 124.75 113.344 124.901 112.924 124.874C112.504 124.847 112.137 124.642 111.824 124.259C111.517 123.883 111.388 123.481 111.435 123.053C111.489 122.632 111.713 122.257 112.108 121.929L113.657 120.639Z"
          fill="white"
        />
        <path
          d="M101.947 122.615L95.8135 125.839L96.5842 127.332L101.033 124.993L102.279 127.407L98.0782 129.615L98.849 131.108L103.05 128.899L104.277 131.275L99.828 133.614L100.599 135.107L106.733 131.882L101.947 122.615Z"
          fill="white"
        />
        <path
          d="M91.4027 127.709L89.5694 128.223L90.5915 131.935L88.866 132.419L85.768 129.289L83.692 129.871L87.1084 133.26C86.6157 133.651 86.2744 134.134 86.0847 134.711C85.886 135.29 85.882 135.926 86.0728 136.619C86.2611 137.303 86.568 137.837 86.9934 138.222C87.4188 138.606 87.9301 138.846 88.5272 138.94C89.1178 139.046 89.7546 139.003 90.4376 138.812L94.1717 137.765L91.4027 127.709ZM91.0375 133.555L91.8923 136.659L89.9647 137.2C89.4704 137.338 89.0366 137.31 88.6632 137.114C88.2898 136.918 88.0375 136.582 87.9061 136.105C87.7773 135.637 87.8215 135.217 88.0388 134.846C88.2585 134.484 88.6155 134.234 89.1098 134.095L91.0375 133.555Z"
          fill="white"
        />
      </svg>
    </motion.span>
  );
}
