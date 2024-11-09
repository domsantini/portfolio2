"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "./Blob.module.css";
import useMousePosition from "@/app/hooks/use-mouse-position";

export default function Blob() {
  const blobSize = 500;

    
  
  return (
    <motion.div
      className={`h-[${blobSize}px] aspect-square bg-gradient-to-tr from-yellow-400 to-green-400 rounded-full ${styles.blobStyles}`}
    />
  );
}
