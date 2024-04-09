export interface ClassNameProps {
  className?: string;
}

export interface ChildrenProps {
  children: React.ReactNode;
}

export interface OnClickProps {
  onClick?: () => void;
}

export interface ImageProps {
  imgUrl: string;
  imgAlt: string;
  imgWidth: string | number;
  imgHeight: string | number;
  className?: string;
}
