"use client";

import { useState } from "react";
import UnlockModal from "./UnlockModal";
import UnlockVideoButton from "./UnlockVideoButton";

interface Props {
  label?: string;
}

export default function ModalController({ label }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <UnlockVideoButton label={label} onClick={() => setOpen(true)} />
      <UnlockModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
