export const PayPal = ({ width = 63, height = 16, color, ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 63 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M48.398 4.17383H45.0191C44.8204 4.17383 44.6216 4.37259 44.5222 4.57135L43.1309 13.3168C43.1309 13.5155 43.2303 13.6149 43.4291 13.6149H45.2179C45.4167 13.6149 45.516 13.5155 45.516 13.3168L45.9136 10.8323C45.9136 10.6335 46.1123 10.4348 46.4105 10.4348H47.5036C49.7894 10.4348 51.0813 9.34158 51.3794 7.15522C51.5782 6.2608 51.3794 5.46577 50.9819 4.96887C50.3856 4.47197 49.4912 4.17383 48.398 4.17383ZM48.7956 7.45336C48.5968 8.64592 47.7024 8.64592 46.808 8.64592H46.2117L46.6092 6.36018C46.6092 6.26081 46.7086 6.16142 46.9074 6.16142H47.1061C47.7024 6.16142 48.2987 6.16142 48.5968 6.55894C48.7956 6.65832 48.7956 6.95646 48.7956 7.45336Z"
        fill={color || "#139AD6"}
      />
      <path
        d="M24.05 4.17383H20.6711C20.4723 4.17383 20.2736 4.37259 20.1742 4.57135L18.7829 13.3168C18.7829 13.5155 18.8822 13.6149 19.081 13.6149H20.6711C20.8698 13.6149 21.0686 13.4162 21.168 13.2174L21.5655 10.8323C21.5655 10.6335 21.7643 10.4348 22.0624 10.4348H23.1556C25.4413 10.4348 26.7332 9.34158 27.0314 7.15522C27.2301 6.2608 27.0314 5.46577 26.6338 4.96887C26.0376 4.47197 25.2425 4.17383 24.05 4.17383ZM24.4475 7.45336C24.2487 8.64592 23.3543 8.64592 22.4599 8.64592H21.963L22.3605 6.36018C22.3605 6.26081 22.4599 6.16142 22.6587 6.16142H22.8574C23.4537 6.16142 24.05 6.16142 24.3481 6.55894C24.4475 6.65832 24.5469 6.95646 24.4475 7.45336Z"
        fill={color || "#263B80"}
      />
      <path
        d="M34.2859 7.35403H32.6958C32.5965 7.35403 32.3977 7.45341 32.3977 7.55279L32.2983 8.04969L32.1989 7.85093C31.8014 7.35403 31.1058 7.15527 30.3107 7.15527C28.5219 7.15527 26.9319 8.54659 26.6337 10.4348C26.435 11.4286 26.7331 12.323 27.23 12.9193C27.7269 13.5156 28.4225 13.7144 29.317 13.7144C30.8076 13.7144 31.6027 12.8199 31.6027 12.8199L31.5033 13.3168C31.5033 13.5156 31.6027 13.615 31.8014 13.615H33.2921C33.4909 13.615 33.6896 13.4162 33.789 13.2175L34.6834 7.65217C34.584 7.55279 34.3853 7.35403 34.2859 7.35403ZM32.0002 10.5342C31.8014 11.4286 31.1058 12.1243 30.112 12.1243C29.6151 12.1243 29.2176 11.9255 29.0188 11.7268C28.8201 11.4286 28.7207 11.0311 28.7207 10.5342C28.8201 9.63977 29.6151 8.94411 30.5095 8.94411C31.0064 8.94411 31.3045 9.14287 31.6027 9.34163C31.9008 9.63977 32.0002 10.1367 32.0002 10.5342Z"
        fill={color || "#263B80"}
      />
      <path
        d="M58.5343 7.35391H56.9442C56.8448 7.35391 56.6461 7.45329 56.6461 7.55267L56.5467 8.04957L56.4473 7.85081C56.0498 7.35391 55.3541 7.15515 54.5591 7.15515C52.7703 7.15515 51.1802 8.54647 50.8821 10.4347C50.6833 11.4285 50.9815 12.3229 51.4784 12.9192C51.9752 13.5155 52.6709 13.7142 53.5653 13.7142C55.056 13.7142 55.851 12.8198 55.851 12.8198L55.7516 13.3167C55.7516 13.5155 55.851 13.6149 56.0498 13.6149H57.5405C57.7392 13.6149 57.938 13.4161 58.0374 13.2173L58.9318 7.65205C58.8324 7.55267 58.733 7.35391 58.5343 7.35391ZM56.2485 10.5341C56.0498 11.4285 55.3541 12.1242 54.3603 12.1242C53.8635 12.1242 53.4659 11.9254 53.2672 11.7266C53.0684 11.4285 52.969 11.031 52.969 10.5341C53.0684 9.63965 53.8634 8.94399 54.7579 8.94399C55.2548 8.94399 55.5529 9.14275 55.851 9.34151C56.2485 9.63965 56.3479 10.1366 56.2485 10.5341Z"
        fill={color || "#139AD6"}
      />
      <path
        d="M42.9319 7.354H41.2425C41.0437 7.354 40.9443 7.45338 40.845 7.55276L38.6586 10.9316L37.6648 7.75152C37.5654 7.55276 37.4661 7.45338 37.1679 7.45338H35.5778C35.3791 7.45338 35.2797 7.65214 35.2797 7.8509L37.0685 13.118L35.3791 15.5031C35.2797 15.7018 35.3791 16 35.5778 16H37.1679C37.3667 16 37.4661 15.9006 37.5654 15.8012L43.0313 7.95028C43.3295 7.65214 43.1307 7.354 42.9319 7.354Z"
        fill={color || "#263B80"}
      />
      <path
        d="M60.4229 4.472L59.0316 13.4161C59.0316 13.6149 59.1309 13.7143 59.3297 13.7143H60.721C60.9198 13.7143 61.1185 13.5155 61.2179 13.3168L62.6092 4.57138C62.6092 4.37262 62.5098 4.27324 62.3111 4.27324H60.721C60.6216 4.17386 60.5223 4.27324 60.4229 4.472Z"
        fill={color || "#139AD6"}
      />
      <path
        d="M11.4286 1.19255C10.733 0.397516 9.44104 0 7.65221 0H2.68324C2.38511 0 2.08697 0.298137 1.98759 0.596275L0 13.615C0 13.9131 0.198759 14.1119 0.397518 14.1119H3.47828L4.27331 9.24228V9.44104C4.37269 9.1429 4.67083 8.84476 4.96897 8.84476H6.45966C9.34167 8.84476 11.528 7.65221 12.2237 4.37269C12.2237 4.27331 12.2237 4.17393 12.2237 4.07455C12.1243 4.07455 12.1243 4.07455 12.2237 4.07455C12.323 2.78262 12.1243 1.98759 11.4286 1.19255Z"
        fill={color || "#263B80"}
      />
      <path
        d="M12.1245 4.07446C12.1245 4.17384 12.1245 4.27322 12.1245 4.3726C11.4288 7.7515 9.24247 8.84467 6.36047 8.84467H4.86978C4.57164 8.84467 4.2735 9.14281 4.17412 9.44095L3.18033 15.5031C3.18033 15.7019 3.27971 15.9006 3.57785 15.9006H6.16171C6.45985 15.9006 6.75799 15.7019 6.75799 15.4037V15.3043L7.25488 12.2236V12.0248C7.25488 11.7267 7.55302 11.5279 7.85116 11.5279H8.24868C10.7332 11.5279 12.7208 10.5341 13.2176 7.55274C13.4164 6.36019 13.317 5.26702 12.7208 4.57136C12.6214 4.3726 12.4226 4.17384 12.1245 4.07446Z"
        fill={color || "#139AD6"}
      />
      <path
        d="M11.4285 3.77641C11.3291 3.77641 11.2298 3.67703 11.1304 3.67703C11.031 3.67703 10.9316 3.67703 10.8322 3.57765C10.4347 3.47827 10.0372 3.47827 9.5403 3.47827H5.6645C5.56513 3.47827 5.46575 3.47827 5.36637 3.57765C5.16761 3.67703 5.06823 3.87579 5.06823 4.07455L4.27319 9.24227V9.44103C4.37257 9.14289 4.67071 8.84475 4.96885 8.84475H6.45954C9.34154 8.84475 11.5279 7.6522 12.2235 4.37269C12.2235 4.27331 12.2235 4.17393 12.3229 4.07455C12.1242 3.97517 12.0248 3.87579 11.826 3.87579C11.5279 3.77641 11.5279 3.77641 11.4285 3.77641Z"
        fill={color || "#232C65"}
      />
    </svg>
  );
};