"use client";

import { motion } from "framer-motion";
import { Project } from "@/types";
import Card from "../ui/Card";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      data-cursor="view"
      className="block group"
    >
      <Card className="p-0 overflow-hidden flex flex-col h-full" glowOnHover>
        {/* Project Thumbnail Image Container */}
        <div className="relative aspect-video w-full overflow-hidden bg-charcoal/5 border-b border-accent/10">
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
          
          {/* Overlay gradient mask */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            <span className="text-cream text-xs font-semibold uppercase tracking-widest flex items-center gap-1.5 translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
              View Live Project 
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </span>
          </div>
        </div>

        {/* Project Meta Info */}
        <div className="p-6 flex flex-col flex-grow justify-between">
          <div>
            <h3 className="text-lg md:text-xl font-bold tracking-tight text-charcoal mb-2 group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            <p className="text-muted text-sm leading-relaxed mb-6 font-normal">
              {project.description}
            </p>
          </div>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-accent/5">
            {project.tech.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-[10px] font-bold tracking-wider text-muted bg-charcoal/5 rounded border border-charcoal/5"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Card>
    </a>
  );
}
