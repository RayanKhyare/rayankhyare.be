import React from "react";
import "./projectdetail.scss";
import Image from 'next/image'

import {Metadata} from "next";

export const metadata : Metadata = {
    title: {
        absolute: "Project name | Rayan Khyare",
    }
}

export default function ProjectDetail() {
  return (
<div className="projectspage">
   <h1>Project detail page</h1>
</div>
  );
}
