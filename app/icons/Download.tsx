interface Props {
  download: boolean;
}

export default function Download({ download }: Props) {
  return !download ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="25"
      viewBox="0 0 32 36"
    >
      <path
        id="Icon_awesome-file-download"
        data-name="Icon awesome-file-download"
        d="M15.75,9.563V0H1.688A1.683,1.683,0,0,0,0,1.688V34.313A1.683,1.683,0,0,0,1.688,36H25.313A1.683,1.683,0,0,0,27,34.313V11.25H17.438A1.692,1.692,0,0,1,15.75,9.563Zm5.375,14.861-6.78,6.729a1.2,1.2,0,0,1-1.69,0l-6.78-6.729A1.125,1.125,0,0,1,6.667,22.5H11.25V16.875a1.125,1.125,0,0,1,1.125-1.125h2.25a1.125,1.125,0,0,1,1.125,1.125V22.5h4.583A1.125,1.125,0,0,1,21.125,24.424ZM26.508,7.383,19.624.492A1.686,1.686,0,0,0,18.429,0H18V9h9V8.571A1.682,1.682,0,0,0,26.508,7.383Z"
      />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="25"
      viewBox="0 0 32 36"
    >
      <path
        id="Icon_awesome-file-download"
        data-name="Icon awesome-file-download"
        d="M15.75,9.563V0H1.688A1.683,1.683,0,0,0,0,1.688V34.313A1.683,1.683,0,0,0,1.688,36H25.313A1.683,1.683,0,0,0,27,34.313V11.25H17.438A1.692,1.692,0,0,1,15.75,9.563Zm5.375,14.861-6.78,6.729a1.2,1.2,0,0,1-1.69,0l-6.78-6.729A1.125,1.125,0,0,1,6.667,22.5H11.25V16.875a1.125,1.125,0,0,1,1.125-1.125h2.25a1.125,1.125,0,0,1,1.125,1.125V22.5h4.583A1.125,1.125,0,0,1,21.125,24.424ZM26.508,7.383,19.624.492A1.686,1.686,0,0,0,18.429,0H18V9h9V8.571A1.682,1.682,0,0,0,26.508,7.383Z"
        fill="#22A094"
      />
    </svg>
  );
}