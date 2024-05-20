const handleToggle = ({
  isOpen,
  setState,
  setAnimation,
}: {
  isOpen: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
  setAnimation: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  if (isOpen) {
    setAnimation(false);
    setTimeout(() => {
      setState(false);
    }, 300);
  } else {
    setState(true);
    setTimeout(() => {
      setAnimation(true);
    }, 300);
  }
};

export default handleToggle;
