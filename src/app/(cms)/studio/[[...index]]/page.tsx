"use client";

import { NextStudio } from "next-sanity/studio";
import Config from "../../../../../sanity.config";

export default function studio() {
  return <NextStudio config={Config} />;
}
