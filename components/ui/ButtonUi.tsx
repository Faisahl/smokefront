import Link from "next/link";
import React from "react";

type Props = {
  link?: string
  styles: string
  display: string
};

const ButtonUi: React.FC<Props> = ({ link, styles, display }) => {
  return (
    <button 
      className={styles}
    >
      <Link 
        href={link?link:'#'}
      >
        {display}
      </Link>
    </button>
  );
};

export default ButtonUi;
